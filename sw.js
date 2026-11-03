/* Maneuver Debrief — offline service worker.
   VERSION is injected at build time from a hash of index.html, so every
   rebuild invalidates the old cache automatically. Nothing to bump by hand. */
var VERSION = "0364bbd78f06";
var CACHE   = "debrief-" + VERSION;

var SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-512-maskable.png"
];

/* Third-party scripts and fonts the shell pulls. Cached the same way the
   app is, so a launch with no signal behaves exactly like one with. Only
   GETs reach here, so Sentry's own event POSTs are never intercepted. */
var CDN_HOSTS = ["fonts.googleapis.com", "fonts.gstatic.com", "js.sentry-cdn.com"];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      // individual failures must not abort the install
      return Promise.all(SHELL.map(function (u) {
        return c.add(new Request(u, { cache: "reload" })).catch(function () {});
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (k !== CACHE) return caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

/* Serve from cache immediately, refresh in the background.
   The cockpit case wants an instant, guaranteed load far more than it wants
   the newest build the same second it ships — an update lands on next launch. */
function staleWhileRevalidate(req, fallbackUrl) {
  return caches.open(CACHE).then(function (cache) {
    var key = fallbackUrl ? new Request(fallbackUrl) : req;
    return cache.match(key).then(function (hit) {
      var net = fetch(req).then(function (res) {
        if (res && (res.ok || res.type === "opaque")) {
          cache.put(key, res.clone()).catch(function () {});
        }
        return res;
      }).catch(function () { return hit; });
      return hit || net;
    });
  });
}

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;

  var url;
  try { url = new URL(req.url); } catch (err) { return; }

  // every navigation resolves to the app shell, online or off
  if (req.mode === "navigate") {
    e.respondWith(
      staleWhileRevalidate(req, "./index.html").then(function (r) {
        return r || caches.match("./index.html");
      })
    );
    return;
  }

  if (CDN_HOSTS.indexOf(url.hostname) !== -1) {
    e.respondWith(staleWhileRevalidate(req));
    return;
  }

  if (url.origin === self.location.origin) {
    e.respondWith(staleWhileRevalidate(req));
  }
});
