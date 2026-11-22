# Decisions

One line per decision, and why.

## Learn tab lessons (2026-11-21)

- Lessons are sourced only from official FAA/federal material (handbooks, AIM, 14 CFR, ACs, ACS): every fact must trace back to the FAA.
- Source PDFs live in a git-ignored `sources/` folder, downloaded from faa.gov: they are hundreds of MB and must never ship to users' phones.
- Keep the existing four-step lesson (Principle, Picture it, Memory aid, Check) and add a source card per step: the format is already built and short enough for the cockpit.
- A source card quotes the passage word for word, highlights the key phrase, and names book, edition, chapter and page: works offline and can't drift from the source.
- Tapping a source opens the cited book page as an image with the exact lines highlighted (pinch to zoom): phone PDF viewers ignore page/line links and need a signal.
- Page images download the first time a lesson is opened and are kept for offline use, like narration: no big up-front download.
- A secondary "Open full handbook on faa.gov" link stays under the page image, for wider context.
- Claude drafts lessons strictly from the source text; the owner (CFI) reviews each one on a Vercel preview link and only approved lessons go live: training content must be accurate.
- Every lesson records the edition it was checked against; FAA revisions trigger a re-check: the AIM changes several times a year.
- Pilot batch of five, one per book (Hypoxia, Steep Turns, Thunderstorms, Partial Panel, Holding), before rolling out section by section: prove the format before writing 117 lessons.
- One lesson per topic, shared across certificates.
- The Check step stays one question; a longer quiz/review mode can come later.
- Text only for now; a hired voice actor will narrate finished lessons later (the audio player is already built).
- The Learn tab is free for everyone, signed in or not: it gives non-paying users a reason to keep the app.
- Page images and quote matching are made with a local prep tool (PyMuPDF) that never ships in the app.
