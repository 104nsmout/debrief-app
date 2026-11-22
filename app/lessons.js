/* Learn tab lessons. Edit the text here, then run:
     python tools/make_source_pages.py
   which checks every quote is word for word on its cited page, draws the
   highlighted page images into app/pages/, and fills in "img"/"y" below. */
window.LEARN = {
 "books": {
  "PHAK": {
   "name": "Pilot's Handbook of Aeronautical Knowledge",
   "ed": "FAA-H-8083-25C",
   "file": "PHAK_FAA-H-8083-25C.pdf",
   "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf"
  }
 },
 "lessons": {
  "HYPX": {
   "checked": "PHAK FAA-H-8083-25C",
   "principle": "Hypoxia is not enough oxygen, and your brain runs short first. The trap: it can make you feel completely fine.",
   "more": "The PHAK names four kinds, by where the oxygen supply breaks down. For pilots, the classic one is altitude.",
   "picture": [
    "Climb, and the air still holds the same share of oxygen. What drops is the pressure pushing it into your lungs, so fewer oxygen molecules make it across into your blood.",
    "Above 10,000 feet the symptoms get worse and the clock gets shorter. At 25,000 feet MSL the PHAK gives you 3 to 5 minutes of useful consciousness. At 35,000 feet, 30 to 60 seconds."
   ],
   "memory": [
    {
     "hook": "Air, blood, flow, cells."
    },
    {
     "p": "Follow the oxygen from the sky to your brain and find where it stopped."
    },
    {
     "list": [
      [
       "Hypoxic:",
       "not enough air gets in. Altitude."
      ],
      [
       "Hypemic:",
       "the blood can't carry it. Carbon monoxide, or a recent blood donation."
      ],
      [
       "Stagnant:",
       "the blood isn't moving. High G loads, or cold."
      ],
      [
       "Histotoxic:",
       "the cells can't use it. Alcohol: one ounce is about 2,000 extra feet."
      ]
     ]
    }
   ],
   "check": {
    "q": "Climbing through 14,000 feet you feel great, sharper than usual even, but the instruments are getting harder to read. What's going on, and what do you do?",
    "a": "Hypoxia. A carefree, euphoric feeling is one of its first symptoms, and a narrowing field of vision makes the instruments harder to read. Don't trust the good feeling: descend, use supplemental oxygen, or both."
   },
   "src": [
    [
     {
      "b": "PHAK",
      "ch": "17",
      "sec": "Hypoxia",
      "p": "17-3",
      "pdf": 425,
      "q": [
       "The greatest concern regarding hypoxia during flight is lack of oxygen to the brain, since it is particularly vulnerable to oxygen deprivation."
      ],
      "img": "pages/PHAK-425-27f1337799.jpg",
      "y": 0.499,
      "x": 0.121,
      "w": 0.403
     },
     {
      "b": "PHAK",
      "ch": "17",
      "sec": "Symptoms of Hypoxia",
      "p": "17-4",
      "pdf": 426,
      "q": [
       "Even with all these symptoms, the effects of hypoxia can cause a pilot to have a false sense of security and be deceived into believing everything is normal."
      ],
      "img": "pages/PHAK-426-887b2af0b6.jpg",
      "y": 0.764,
      "x": 0.061,
      "w": 0.403
     }
    ],
    [
     {
      "b": "PHAK",
      "ch": "17",
      "sec": "Hypoxic Hypoxia",
      "p": "17-3",
      "pdf": 425,
      "q": [
       "Although the percentage of oxygen in the atmosphere is constant, its partial pressure decreases proportionately as atmospheric pressure decreases."
      ],
      "img": "pages/PHAK-425-65fe44dd26.jpg",
      "y": 0.816,
      "x": 0.121,
      "w": 0.403
     },
     {
      "b": "PHAK",
      "ch": "17",
      "sec": "Treatment of Hypoxia, Figure 17-1",
      "p": "17-4",
      "pdf": 426,
      "q": [
       "As altitude increases above 10,000 feet, the symptoms of hypoxia increase in severity, and the time of useful consciousness rapidly decreases."
      ],
      "hl": [
       "Figure 17-1. Time of useful consciousness.",
       "25,000 feet MSL",
       "3 to 5 minutes",
       "35,000 feet MSL",
       "30 to 60 seconds"
      ],
      "img": "pages/PHAK-426-f0e27a0b35.jpg",
      "y": 0.136,
      "x": 0.48,
      "w": 0.403
     }
    ],
    [
     {
      "b": "PHAK",
      "ch": "17",
      "sec": "Hypemic Hypoxia",
      "p": "17-3",
      "pdf": 425,
      "q": [
       "The most common form of hypemic hypoxia is CO poisoning.",
       "Hypemic hypoxia can also be caused by the loss of blood due to blood donation."
      ],
      "img": "pages/PHAK-425-51fbbce9b6.jpg",
      "y": 0.707,
      "x": 0.54,
      "w": 0.403
     },
     {
      "b": "PHAK",
      "ch": "17",
      "sec": "Stagnant and Histotoxic Hypoxia",
      "p": "17-4",
      "pdf": 426,
      "q": [
       "During flight, stagnant hypoxia can occur with excessive acceleration of gravity (Gs).",
       "Cold temperatures can also reduce circulation and decrease the blood supplied to extremities.",
       "Research has shown that drinking one ounce of alcohol can equate to an additional 2,000 feet of physiological altitude."
      ],
      "img": "pages/PHAK-426-9b0a40cd63.jpg",
      "y": 0.12,
      "x": 0.061,
      "w": 0.403
     }
    ],
    [
     {
      "b": "PHAK",
      "ch": "17",
      "sec": "Symptoms and Treatment of Hypoxia",
      "p": "17-4",
      "pdf": 426,
      "q": [
       "The first symptoms of hypoxia can include euphoria and a carefree feeling.",
       "As hypoxia worsens, the field of vision begins to narrow and instrument interpretation can become difficult.",
       "Treatment for hypoxia includes flying at lower altitudes and/or using supplemental oxygen."
      ],
      "img": "pages/PHAK-426-b5c0604ff9.jpg",
      "y": 0.415,
      "x": 0.061,
      "w": 0.403
     }
    ]
   ]
  }
 }
};
