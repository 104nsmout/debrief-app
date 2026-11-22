/* Learn tab: the CFI teaching library. Edit the text here, then run:
     python tools/make_source_pages.py
   which checks every quote is word for word on its cited page, draws the
   highlighted page images into app/pages/, and fills in img/x/y/w below.
   Facts (quick, mistakes, scenarios) cite sources by id ("s"); analogies and
   aids are teaching ideas, approved by the CFI but not FAA text. */
window.LEARN = {
 "books": {
  "PHAK": {
   "name": "Pilot's Handbook of Aeronautical Knowledge",
   "ed": "FAA-H-8083-25C",
   "file": "PHAK_FAA-H-8083-25C.pdf",
   "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/faa-h-8083-25c.pdf"
  },
  "AIM": {
   "name": "Aeronautical Information Manual",
   "ed": "AIM, Change 3, 7/9/26",
   "file": "AIM_2026-07-09.pdf",
   "url": "https://www.faa.gov/air_traffic/publications/media/aim_basic_w_chg1_chg2_and_chg3_dtd_7_9_26_notice_to_airmen.pdf"
  },
  "PACS": {
   "name": "Private Pilot ACS (Airplane)",
   "ed": "FAA-S-ACS-6C",
   "file": "ACS_private_airplane_acs_6.pdf",
   "acs": true,
   "url": "https://www.faa.gov/training_testing/testing/acs/private_airplane_acs_6.pdf"
  },
  "CACS": {
   "name": "Commercial Pilot ACS (Airplane)",
   "ed": "FAA-S-ACS-7B",
   "file": "ACS_commercial_airplane_acs_7.pdf",
   "acs": true,
   "url": "https://www.faa.gov/training_testing/testing/acs/commercial_airplane_acs_7.pdf"
  },
  "FACS": {
   "name": "Flight Instructor ACS (Airplane)",
   "ed": "FAA-S-ACS-25",
   "file": "ACS_cfi_airplane_acs_25.pdf",
   "acs": true,
   "url": "https://www.faa.gov/training_testing/testing/acs/cfi_airplane_acs_25.pdf"
  }
 },
 "lessons": {
  "HYPX": {
   "checked": "PHAK FAA-H-8083-25C · AIM Change 3 (7/9/26) · ACS 6C, 7B, 25",
   "quick": [
    {
     "t": "Hypoxia is oxygen deficiency bad enough to impair the brain, which is particularly vulnerable to it. At altitude the air is still about 21% oxygen; what drops is the pressure driving it into the blood.",
     "s": [
      "aim-def",
      "phak-brain",
      "phak-pp"
     ]
    },
    {
     "t": "Night vision degrades as low as 5,000 ft cabin altitude. Other significant effects usually don't appear in a healthy pilot below 12,000 ft, but performance can seriously deteriorate within 15 minutes at 15,000 ft.",
     "s": [
      "aim-alt"
     ]
    },
    {
     "t": "Four types, by where the supply breaks: hypoxic (altitude), hypemic (blood can't carry it: CO, blood donation), stagnant (blood isn't moving: G loads, cold), histotoxic (cells can't use it: alcohol, drugs).",
     "s": [
      "phak-hypemic",
      "phak-stag"
     ]
    },
    {
     "t": "The hazard is that it feels fine: early symptoms include euphoria, and hypoxia can give a false sense of security.",
     "s": [
      "phak-sym"
     ]
    },
    {
     "t": "Treatment is descending, supplemental oxygen, or both. The AIM encourages oxygen above 10,000 ft by day and 5,000 ft at night; the regulations only set the minimum.",
     "s": [
      "phak-tx",
      "aim-o2"
     ]
    }
   ],
   "mistakes": [
    {
     "m": "There's less oxygen in the air up high.",
     "fix": "The percentage stays about 21%. The partial pressure drops, so fewer molecules cross into the blood.",
     "s": [
      "aim-def",
      "phak-pp"
     ]
    },
    {
     "m": "Hypoxia is a high-altitude problem; it won't touch me in a 172.",
     "fix": "Night vision degrades from 5,000 ft cabin altitude, and CO, anemia, alcohol and some medications lower the altitude where effects show up.",
     "s": [
      "aim-alt",
      "aim-lower"
     ]
    },
    {
     "m": "No oxygen needed below 12,500, so I'm fine.",
     "fix": "That's the regulatory minimum for crew. The AIM encourages oxygen above 10,000 ft by day and above 5,000 ft at night.",
     "s": [
      "aim-o2"
     ]
    },
    {
     "m": "I'll know when it's happening.",
     "fix": "The effects are hard to recognize, especially when they come on gradually, and euphoria makes everything seem normal.",
     "s": [
      "aim-o2",
      "phak-sym"
     ]
    }
   ],
   "analogies": [
    "A garden hose with the pressure turned down: the same water is in the line, but less reaches the end. Altitude turns down the pressure, not the oxygen.",
    "A delivery chain: the supply (air), the truck (blood), the road (circulation), the warehouse (cells). The four types of hypoxia are a break at each link.",
    "It's like the friend who insists they're fine to drive: the impairment and the confidence show up together."
   ],
   "aids": [
    {
     "h": "The TUC ladder",
     "t": "On the whiteboard, write altitudes from 20,000 to 45,000 ft and have the student fill in the time of useful consciousness from memory. Then open PHAK Figure 17-1 together and compare."
    },
    {
     "h": "The delivery chain",
     "t": "Draw four boxes, air, blood, circulation, cells, with an arrow between each. Give the student a cause (a smoky cabin, a blood donation, a hard pull-up, last night's drinks) and have them put an X where the chain breaks."
    },
    {
     "h": "Plan it at two altitudes",
     "t": "During cross-country planning, compare the same leg at 9,500 and 13,500 ft. Ask what changes for oxygen, by day and by night, before talking about winds or fuel."
    },
    {
     "h": "Their own first symptom",
     "t": "Ask the student which symptom they'd notice first. Point out that symptoms differ between pilots, and that the FAA runs altitude chamber training at CAMI in Oklahoma City for exactly this."
    }
   ],
   "scenarios": [
    {
     "q": "Night cross-country planned at 9,500 ft with no oxygen aboard. Legal? Smart?",
     "a": "Legal: the crew oxygen requirement starts at 12,500 ft. But night vision degrades from 5,000 ft cabin altitude, and the AIM encourages oxygen above 5,000 ft at night. Talk through a lower altitude or carrying oxygen.",
     "s": [
      "aim-alt",
      "aim-o2"
     ]
    },
    {
     "q": "Climbing through 14,000 ft, your student feels great, sharper than usual even, but is slow reading the instruments. What's going on, and what now?",
     "a": "Likely hypoxia. Euphoria is one of the first symptoms, and as it worsens the field of vision narrows and instrument interpretation gets harder. Descend, use supplemental oxygen, or both.",
     "s": [
      "phak-sym",
      "phak-tx"
     ]
    },
    {
     "q": "Your student had a couple of drinks last night and took an antihistamine this morning. Today's flight crosses terrain at 10,500 ft. What's the hypoxia angle?",
     "a": "Small amounts of alcohol and antihistamines make the brain more susceptible to hypoxia, and the PHAK equates one ounce of alcohol to about 2,000 extra feet of physiological altitude. Effects can show up lower than usual. (The alcohol and medication rules are a separate check.)",
     "s": [
      "aim-lower",
      "phak-stag"
     ]
    },
    {
     "q": "You've been at 13,000 ft for 40 minutes with a passenger and no oxygen. What do the regulations require, for you and for them?",
     "a": "Crew must use oxygen after 30 minutes between 12,500 and 14,000 ft, so you're past the limit. Passengers must be provided with oxygen only above 15,000 ft.",
     "s": [
      "aim-o2"
     ]
    }
   ],
   "acs": [
    "acs-p",
    "acs-c",
    "acs-c8",
    "acs-f",
    "acs-f2"
   ],
   "src": {
    "phak-brain": {
     "b": "PHAK",
     "ch": "17",
     "sec": "Hypoxia",
     "p": "17-3",
     "pdf": 425,
     "q": [
      "The greatest concern regarding hypoxia during flight is lack of oxygen to the brain, since it is particularly vulnerable to oxygen deprivation."
     ],
     "img": "pages/PHAK-425-06b7561571.jpg",
     "y": 0.499,
     "x": 0.121,
     "w": 0.403
    },
    "phak-pp": {
     "b": "PHAK",
     "ch": "17",
     "sec": "Hypoxic Hypoxia",
     "p": "17-3",
     "pdf": 425,
     "q": [
      "Although the percentage of oxygen in the atmosphere is constant, its partial pressure decreases proportionately as atmospheric pressure decreases."
     ],
     "img": "pages/PHAK-425-06b7561571.jpg",
     "y": 0.816,
     "x": 0.121,
     "w": 0.403
    },
    "phak-hypemic": {
     "b": "PHAK",
     "ch": "17",
     "sec": "Hypemic Hypoxia",
     "p": "17-3",
     "pdf": 425,
     "q": [
      "The most common form of hypemic hypoxia is CO poisoning.",
      "Hypemic hypoxia can also be caused by the loss of blood due to blood donation."
     ],
     "img": "pages/PHAK-425-06b7561571.jpg",
     "y": 0.707,
     "x": 0.54,
     "w": 0.403
    },
    "phak-stag": {
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
     "img": "pages/PHAK-426-1e3d51b355.jpg",
     "y": 0.12,
     "x": 0.061,
     "w": 0.403
    },
    "phak-sym": {
     "b": "PHAK",
     "ch": "17",
     "sec": "Symptoms of Hypoxia",
     "p": "17-4",
     "pdf": 426,
     "q": [
      "The first symptoms of hypoxia can include euphoria and a carefree feeling.",
      "As hypoxia worsens, the field of vision begins to narrow and instrument interpretation can become difficult.",
      "Even with all these symptoms, the effects of hypoxia can cause a pilot to have a false sense of security and be deceived into believing everything is normal."
     ],
     "img": "pages/PHAK-426-1e3d51b355.jpg",
     "y": 0.415,
     "x": 0.061,
     "w": 0.403
    },
    "phak-tx": {
     "b": "PHAK",
     "ch": "17",
     "sec": "Treatment of Hypoxia, Figure 17-1",
     "p": "17-4",
     "pdf": 426,
     "q": [
      "Treatment for hypoxia includes flying at lower altitudes and/or using supplemental oxygen.",
      "As altitude increases above 10,000 feet, the symptoms of hypoxia increase in severity, and the time of useful consciousness rapidly decreases."
     ],
     "hl": [
      "Figure 17-1. Time of useful consciousness."
     ],
     "img": "pages/PHAK-426-1e3d51b355.jpg",
     "y": 0.136,
     "x": 0.061,
     "w": 0.822
    },
    "aim-def": {
     "b": "AIM",
     "ch": "8",
     "sec": "8-1-2 a. Hypoxia",
     "p": "8-1-3",
     "pdf": 641,
     "q": [
      "Hypoxia from exposure to altitude is due only to the reduced barometric pressures encountered at altitude, for the concentration of oxygen in the atmosphere remains about 21 percent from the ground out to space."
     ],
     "img": "pages/AIM-641-4e960893a5.jpg",
     "y": 0.551,
     "x": 0.106,
     "w": 0.789
    },
    "aim-alt": {
     "b": "AIM",
     "ch": "8",
     "sec": "8-1-2 a. Hypoxia",
     "p": "8-1-3",
     "pdf": 641,
     "q": [
      "Although a deterioration in night vision occurs at a cabin pressure altitude as low as 5,000 feet, other significant effects of altitude hypoxia usually do not occur in the normal healthy pilot below 12,000 feet.",
      "In fact, pilot performance can seriously deteriorate within 15 minutes at 15,000 feet."
     ],
     "img": "pages/AIM-641-4e960893a5.jpg",
     "y": 0.606,
     "x": 0.106,
     "w": 0.789
    },
    "aim-lower": {
     "b": "AIM",
     "ch": "8",
     "sec": "8-1-2 a. Hypoxia",
     "p": "8-1-3",
     "pdf": 641,
     "q": [
      "The altitude at which significant effects of hypoxia occur can be lowered by a number of factors.",
      "Carbon monoxide inhaled in smoking or from exhaust fumes, lowered hemoglobin (anemia), and certain medications can reduce the oxygen-carrying capacity of the blood",
      "Small amounts of alcohol and low doses of certain drugs, such as antihistamines, tranquilizers, sedatives and analgesics can, through their depressant action, render the brain much more susceptible to hypoxia."
     ],
     "img": "pages/AIM-641-4e960893a5.jpg",
     "y": 0.78,
     "x": 0.106,
     "w": 0.789
    },
    "aim-o2": {
     "b": "AIM",
     "ch": "8",
     "sec": "8-1-2 a. Hypoxia",
     "p": "8-1-4",
     "pdf": 642,
     "q": [
      "The effects of hypoxia are usually quite difficult to recognize, especially when they occur gradually.",
      "For optimum protection, pilots are encouraged to use supplemental oxygen above 10,000 feet during the day, and above 5,000 feet at night.",
      "The CFRs require that at the minimum, flight crew be provided with and use supplemental oxygen after 30 minutes of exposure to cabin pressure altitudes between 12,500 and 14,000 feet and immediately on exposure to cabin pressure altitudes above 14,000 feet.",
      "Every occupant of the aircraft must be provided with supplemental oxygen at cabin pressure altitudes above 15,000 feet."
     ],
     "img": "pages/AIM-642-a12feae1d2.jpg",
     "y": 0.088,
     "x": 0.106,
     "w": 0.789
    },
    "acs-p": {
     "b": "PACS",
     "ch": "I",
     "sec": "Area I, Task H. Human Factors",
     "p": "8",
     "pdf": 16,
     "code": "PA.I.H.K1a",
     "label": "Hypoxia",
     "q": [
      "Symptoms, recognition, causes, effects, and corrective actions associated with aeromedical and physiological issues, including:"
     ],
     "hl": [
      "PA.I.H.K1a",
      "Hypoxia"
     ],
     "img": "pages/PACS-16-5b48278ba4.jpg",
     "y": 0.18,
     "x": 0.081,
     "w": 0.817
    },
    "acs-c": {
     "b": "CACS",
     "ch": "I",
     "sec": "Area I, Task H. Human Factors",
     "p": "8",
     "pdf": 15,
     "code": "CA.I.H.K1a",
     "label": "Hypoxia",
     "q": [
      "Symptoms, recognition, causes, effects, and corrective actions associated with aeromedical and physiological issues, including:"
     ],
     "hl": [
      "CA.I.H.K1a",
      "Hypoxia"
     ],
     "img": "pages/CACS-15-9fee53e66d.jpg",
     "y": 0.186,
     "x": 0.081,
     "w": 0.817
    },
    "acs-c8": {
     "b": "CACS",
     "ch": "VIII",
     "sec": "Area VIII, Task A. Supplemental Oxygen",
     "p": "50",
     "pdf": 57,
     "code": "CA.VIII.A.K2b–c",
     "label": "Symptoms of hypoxia; time of useful consciousness",
     "q": [
      "Physiological factors, including:"
     ],
     "hl": [
      "CA.VIII.A.K2b",
      "CA.VIII.A.K2c",
      "Symptoms of hypoxia",
      "Time of useful consciousness (TUC)"
     ],
     "img": "pages/CACS-57-c10311e09e.jpg",
     "y": 0.251,
     "x": 0.081,
     "w": 0.424
    },
    "acs-f": {
     "b": "FACS",
     "ch": "II",
     "sec": "Area II, Task A. Human Factors",
     "p": "9",
     "pdf": 16,
     "code": "AI.II.A.K1a",
     "label": "Hypoxia",
     "q": [
      "Symptoms, recognition, causes, effects, and corrective actions associated with aeromedical and physiological issues, including:"
     ],
     "hl": [
      "AI.II.A.K1a",
      "Hypoxia"
     ],
     "img": "pages/FACS-16-6839dd527a.jpg",
     "y": 0.281,
     "x": 0.081,
     "w": 0.817
    },
    "acs-f2": {
     "b": "FACS",
     "ch": "II",
     "sec": "Area II, Task N. High Altitude Operations - Supplemental Oxygen",
     "p": "20",
     "pdf": 27,
     "code": "AI.II.N.K2b–c",
     "label": "Symptoms of hypoxia; time of useful consciousness",
     "q": [
      "Physiological factors, including:"
     ],
     "hl": [
      "AI.II.N.K2b",
      "AI.II.N.K2c",
      "Symptoms of hypoxia",
      "Time of useful consciousness (TUC)"
     ],
     "img": "pages/FACS-27-f0236cdde7.jpg",
     "y": 0.161,
     "x": 0.081,
     "w": 0.424
    }
   }
  }
 }
};
