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
  },
  "AFH": {
   "name": "Airplane Flying Handbook",
   "ed": "FAA-H-8083-3C",
   "file": "AFH_FAA-H-8083-3C.pdf",
   "url": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/00_afh_full.pdf"
  },
  "IFH": {
   "name": "Instrument Flying Handbook",
   "ed": "FAA-H-8083-15B",
   "file": "IFH_FAA-H-8083-15B.pdf",
   "url": "https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-15B.pdf"
  },
  "AWH": {
   "name": "Aviation Weather Handbook",
   "ed": "FAA-H-8083-28B",
   "file": "AWH_FAA-H-8083-28B.pdf",
   "url": "https://www.faa.gov/sites/faa.gov/files/FAA-H-8083-28B.pdf"
  },
  "IACS": {
   "name": "Instrument Rating ACS (Airplane)",
   "ed": "FAA-S-ACS-8C",
   "file": "ACS_instrument_rating_airplane_acs_8.pdf",
   "acs": true,
   "url": "https://www.faa.gov/training_testing/testing/acs/instrument_rating_airplane_acs_8.pdf"
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
  },
  "STEEP": {
   "checked": "AFH FAA-H-8083-3C · ACS 6C, 7B, 25",
   "quick": [
    {
     "t": "360° or 720° turns in either direction at 45° to 60° of bank. The ACS asks for about 45° (Private) or 50° (Commercial, CFI), holding altitude ±100 ft, airspeed ±10 kt, bank ±5°, and rolling out on the entry heading ±10°.",
     "s": [
      "afh-def",
      "acs-p",
      "acs-c"
     ]
    },
    {
     "t": "Load factor is set by bank, not by airplane or speed: 1.41 G at 45°, 2.0 G at 60°. A standard category airplane is designed for 3.8 G, which a level 75° turn exceeds.",
     "s": [
      "afh-load"
     ]
    },
    {
     "t": "Stall speed rises with the square root of load factor: an airplane that stalls at 50 kt level stalls at 60 kt at 45° and 70 kt at 60°. Enter at the manufacturer's speed, or no faster than VA or VO.",
     "s": [
      "afh-stall",
      "afh-va",
      "acs-p"
     ]
    },
    {
     "t": "Add back pressure and power as the bank comes in, generally before 30°. Hold opposite aileron against the overbanking tendency, and watch both the nose and the wings against the horizon.",
     "s": [
      "afh-entry",
      "afh-overbank",
      "afh-view"
     ]
    },
    {
     "t": "Roll out half the bank angle before the entry heading (60° bank from 270° means start at 240°). If the nose drops, shallow the bank first, then raise the nose.",
     "s": [
      "afh-rollout",
      "afh-recover"
     ]
    }
   ],
   "mistakes": [
    {
     "m": "I'm losing altitude, so I'll just pull harder.",
     "fix": "Pulling alone in a nose-low steep bank tightens the bank and stresses the airplane. Reduce the bank with coordinated aileron and rudder first, then add back pressure.",
     "s": [
      "afh-recover"
     ]
    },
    {
     "m": "I'll hold it on the attitude indicator.",
     "fix": "Flying the instruments instead of visual references is a listed common error. The pilot who watches only the nose struggles with altitude; watch the nose and the wings against the horizon.",
     "s": [
      "afh-errors",
      "afh-view"
     ]
    },
    {
     "m": "Once I'm in the bank I can relax.",
     "fix": "At steep banks the airplane keeps rolling in unless you hold deliberate opposite aileron, and it takes considerable elevator force to stay level.",
     "s": [
      "afh-overbank"
     ]
    },
    {
     "m": "The trim worked, so I'll leave it.",
     "fix": "If trim is used, both the trim and the extra power have to come out as the maneuver is completed.",
     "s": [
      "afh-trim"
     ]
    },
    {
     "m": "I cleared the area on the last maneuver.",
     "fix": "Not clearing the area and not scanning for traffic during the turn are both on the AFH's common error list.",
     "s": [
      "afh-errors"
     ]
    }
   ],
   "analogies": [
    "Holding a heavy book at arm's length: tilt your arm and you have to work harder to keep the book at the same height. Bank tilts the lift; back pressure and power make up the difference.",
    "At 60° of bank, a bathroom scale under the seat would read double. Everything that depends on weight, including the stall speed, goes up with it.",
    "Overbanking is a door in the wind: past a certain point it keeps swinging open by itself, so you hold it with steady opposite pressure rather than letting go."
   ],
   "aids": [
    {
     "h": "The load factor ladder",
     "t": "On the whiteboard, write 45°, 60° and 75° of bank. Have the student fill in the G load (1.41, 2.0, over 3.8) and the stall speed for an airplane that stalls at 50 kt level (60 kt, 70 kt). Then ask why the ACS stops at 45° to 50°."
    },
    {
     "h": "Rollout math drill",
     "t": "Call out entry headings and bank angles and have the student answer with the rollout heading, using half the bank angle as the lead. Do it on the ground until it's instant."
    },
    {
     "h": "Sight picture, both ways",
     "t": "On the first demonstration, have the student call out where the horizon sits on the cowling and windscreen in the left turn, then the right. From the left seat the two pictures look different."
    },
    {
     "h": "Planned nose-low recovery",
     "t": "At a safe altitude, let the nose drop deliberately and have the student recover bank first, then pitch. Then let them try pitch only and feel the bank steepen."
    }
   ],
   "scenarios": [
    {
     "q": "Halfway around at 50° of bank, the nose has dropped and the student is 150 ft low and sinking. They haul back on the yoke. What happens, and what should they do?",
     "a": "Elevator alone tightens the bank and loads up the airplane. Shallow the bank with coordinated aileron and rudder first, then raise the nose with back pressure, then re-establish the bank.",
     "s": [
      "afh-recover"
     ]
    },
    {
     "q": "The stall horn chirps in the steep turn even though the airspeed looks normal. Why?",
     "a": "Stall speed rises with load factor. An airplane that stalls at 50 kt level stalls at 60 kt in a level 45° turn and 70 kt at 60°. Check the bank and the back pressure.",
     "s": [
      "afh-stall"
     ]
    },
    {
     "q": "Right steep turn started on a heading of 270° at 60° of bank. When does the rollout start?",
     "a": "At 240°: begin rolling out half the bank angle before the terminating heading, easing off back pressure, trim and power as the wings level.",
     "s": [
      "afh-rollout"
     ]
    },
    {
     "q": "A commercial applicant wants to use 60° of bank to impress the examiner. Good idea?",
     "a": "The Commercial ACS asks for about 50°, ±5°. At 60° the load factor is 2.0 G and the stall margin shrinks; precision at the standard beats extra bank.",
     "s": [
      "acs-c",
      "afh-load",
      "afh-stall"
     ]
    }
   ],
   "acs": [
    "acs-p",
    "acs-c",
    "acs-f"
   ],
   "src": {
    "afh-def": {
     "b": "AFH",
     "ch": "10",
     "sec": "Steep Turns",
     "p": "10-1",
     "pdf": 210,
     "q": [
      "Steep turns consist of single to multiple 360° and 720° turns, in either or both directions, using a bank angle between 45° and 60°."
     ],
     "img": "pages/AFH-210-b6e7086ca6.jpg",
     "y": 0.398,
     "x": 0.06,
     "w": 0.859
    },
    "afh-load": {
     "b": "AFH",
     "ch": "10",
     "sec": "Steep Turns",
     "p": "10-2",
     "pdf": 211,
     "q": [
      "When the bank becomes steep as in a level altitude 45° banked turn, the resulting load factor is 1.41. In a level altitude 60° banked turn, the resulting load factor is 2.0.",
      "Note that the design of a standard category general aviation airplane accommodates a load factor up to 3.8. A level turn using 75° of bank exceeds that limit."
     ],
     "img": "pages/AFH-211-367ae97ee7.jpg",
     "y": 0.24,
     "x": 0.06,
     "w": 0.879
    },
    "afh-stall": {
     "b": "AFH",
     "ch": "10",
     "sec": "Steep Turns",
     "p": "10-2",
     "pdf": 211,
     "q": [
      "For example, if an airplane stalls in level flight at 50 knots, it will stall at 60 knots in a 45° steep turn while maintaining altitude. It will stall at 70 knots if the bank is increased to 60°. Stalling speed increases at the square root of the load factor."
     ],
     "img": "pages/AFH-211-367ae97ee7.jpg",
     "y": 0.396,
     "x": 0.06,
     "w": 0.878
    },
    "afh-va": {
     "b": "AFH",
     "ch": "10",
     "sec": "Steep Turns",
     "p": "10-2",
     "pdf": 211,
     "q": [
      "Because of higher load factors, steep turns should be performed at an airspeed that does not exceed the airplane’s design maneuvering speed (VA) or operating maneuvering speed (VO)."
     ],
     "img": "pages/AFH-211-367ae97ee7.jpg",
     "y": 0.339,
     "x": 0.06,
     "w": 0.882
    },
    "afh-overbank": {
     "b": "AFH",
     "ch": "10",
     "sec": "Steep Turns",
     "p": "10-2",
     "pdf": 211,
     "q": [
      "However, as bank angles steepen, the airplane will continue rolling in the direction of the bank unless deliberate and opposite aileron pressure is held.",
      "After the selected bank angle has been reached, the pilot will find that considerable force is required on the elevator control to hold the airplane in level flight."
     ],
     "img": "pages/AFH-211-367ae97ee7.jpg",
     "y": 0.508,
     "x": 0.06,
     "w": 0.878
    },
    "afh-entry": {
     "b": "AFH",
     "ch": "10",
     "sec": "Steep Turns",
     "p": "10-2",
     "pdf": 211,
     "q": [
      "As the bank angle is being established, generally prior to 30° of bank, elevator back pressure should be smoothly applied to increase the AOA and power should be added."
     ],
     "img": "pages/AFH-211-367ae97ee7.jpg",
     "y": 0.621,
     "x": 0.06,
     "w": 0.878
    },
    "afh-view": {
     "b": "AFH",
     "ch": "10",
     "sec": "Steep Turns",
     "p": "10-2",
     "pdf": 211,
     "q": [
      "The pilot who references the aircraft’s attitude by observing only the nose will have difficulty maintaining altitude. A pilot who observes both the nose and the wings relative to the horizon is likely able to maintain altitude within performance standards."
     ],
     "img": "pages/AFH-211-367ae97ee7.jpg",
     "y": 0.787,
     "x": 0.06,
     "w": 0.878
    },
    "afh-trim": {
     "b": "AFH",
     "ch": "10",
     "sec": "Steep Turns",
     "p": "10-2",
     "pdf": 211,
     "q": [
      "However, if trim is used, pilots should not forget to remove both the trim and power inputs as the maneuver is completed."
     ],
     "img": "pages/AFH-211-367ae97ee7.jpg",
     "y": 0.733,
     "x": 0.06,
     "w": 0.879
    },
    "afh-recover": {
     "b": "AFH",
     "ch": "10",
     "sec": "Steep Turns",
     "p": "10-2",
     "pdf": 211,
     "q": [
      "The pilot can recover from such an altitude loss by first reducing the angle of bank with coordinated use of opposite aileron and rudder and then increasing the pitch attitude by increasing elevator back pressure.",
      "Attempting to recover from an excessively nose-low, steep bank condition by using only the elevator causes a steepening of the bank and puts unnecessary stress on the airplane."
     ],
     "img": "pages/AFH-211-367ae97ee7.jpg",
     "y": 0.86,
     "x": 0.06,
     "w": 0.877
    },
    "afh-rollout": {
     "b": "AFH",
     "ch": "10",
     "sec": "Steep Turns",
     "p": "10-3",
     "pdf": 212,
     "q": [
      "A good rule of thumb is to begin the rollout at ½ the number of degrees of bank prior to reaching the terminating heading."
     ],
     "img": "pages/AFH-212-7781f1076d.jpg",
     "y": 0.058,
     "x": 0.06,
     "w": 0.878
    },
    "afh-errors": {
     "b": "AFH",
     "ch": "10",
     "sec": "Steep Turns, common errors",
     "p": "10-3",
     "pdf": 212,
     "q": [
      "Common errors when performing steep turns are:"
     ],
     "hl": [
      "Not clearing the area",
      "Gaining or losing altitude",
      "Performing by reference to the flight instruments rather than visual references",
      "Failure to scan for other traffic during the maneuver"
     ],
     "img": "pages/AFH-212-7781f1076d.jpg",
     "y": 0.128,
     "x": 0.06,
     "w": 0.56
    },
    "acs-p": {
     "b": "PACS",
     "ch": "V",
     "sec": "Area V, Task A. Steep Turns",
     "p": "36",
     "pdf": 44,
     "code": "PA.V.A",
     "label": "Steep Turns: about 45° bank; ±100 ft, ±10 kt, ±5° bank, ±10° rollout",
     "q": [
      "Roll into a coordinated 360° steep turn with approximately a 45° bank."
     ],
     "hl": [
      "PA.V.A.S2",
      "PA.V.A.S3",
      "PA.V.A.S5"
     ],
     "img": "pages/PACS-44-7c1ba9688c.jpg",
     "y": 0.637,
     "x": 0.081,
     "w": 0.624
    },
    "acs-c": {
     "b": "CACS",
     "ch": "V",
     "sec": "Area V, Task A. Steep Turns",
     "p": "36",
     "pdf": 43,
     "code": "CA.V.A",
     "label": "Steep Turns: about 50° bank; ±100 ft, ±10 kt, ±5° bank, ±10° rollout",
     "q": [
      "Roll into a coordinated 360° steep turn with approximately a 50° bank."
     ],
     "hl": [
      "CA.V.A.S2",
      "CA.V.A.S3",
      "CA.V.A.S5"
     ],
     "img": "pages/CACS-43-9ff8d537a9.jpg",
     "y": 0.685,
     "x": 0.081,
     "w": 0.624
    },
    "acs-f": {
     "b": "FACS",
     "ch": "IX",
     "sec": "Area IX, Task A. Steep Turns",
     "p": "58",
     "pdf": 65,
     "code": "AI.IX.A",
     "label": "Steep Turns: teach it, including common errors; about 50° bank",
     "q": [
      "Pilot sensations and control forces."
     ],
     "hl": [
      "AI.IX.A.K2",
      "AI.IX.A.K4",
      "AI.IX.A.S3",
      "AI.IX.A.S6"
     ],
     "img": "pages/FACS-65-b772db94e4.jpg",
     "y": 0.308,
     "x": 0.081,
     "w": 0.372
    }
   }
  },
  "TS": {
   "checked": "PHAK FAA-H-8083-25C · AWH FAA-H-8083-28B · AIM Change 3 (7/9/26) · ACS 6C, 7B, 8C, 25",
   "quick": [
    {
     "t": "A thunderstorm needs water vapor, an unstable lapse rate and an initial lift. It goes through cumulus, mature and dissipating stages; the mature stage, reached in about 15 minutes, is the most violent.",
     "s": [
      "phak-form",
      "phak-stages"
     ]
    },
    {
     "t": "Every thunderstorm is a hazard, and you can't tell which hazards one holds by looking at it. The list includes low ceilings, lightning, downbursts, turbulence, icing, hail, rapid altimeter changes and tornadoes.",
     "s": [
      "awh-haz",
      "aim-turb"
     ]
    },
    {
     "t": "Distance is the defense: severe turbulence can extend 20 miles from a severe storm (about 10 from less severe ones). Avoid severe or intense echoes by at least 20 miles, and go around the whole area at 6/10 coverage.",
     "s": [
      "aim-turb",
      "aim-do"
     ]
    },
    {
     "t": "Datalink NEXRAD is for choosing a route that avoids storms entirely, not for threading through them; the picture can be 15 to 20 minutes older than shown.",
     "s": [
      "aim-do"
     ]
    },
    {
     "t": "Microbursts: under 2.5 mi across, about 1,000 ft deep, lasting 5 to 15 minutes, with downdrafts up to 6,000 fpm and headwind changes of 30 to 90 kt.",
     "s": [
      "awh-mb"
     ]
    },
    {
     "t": "Light airplanes can't top them. If you can't go around, land and wait it out.",
     "s": [
      "phak-over",
      "aim-do"
     ]
    }
   ],
   "mistakes": [
    {
     "m": "That one looks small; it can't be that rough.",
     "fix": "The AIM says there's no useful correlation between how a thunderstorm looks and the turbulence or hail inside it. Never regard any thunderstorm lightly.",
     "s": [
      "aim-turb",
      "aim-dont"
     ]
    },
    {
     "m": "I can see daylight underneath, so I'll go under.",
     "fix": "Don't fly under a thunderstorm even if you can see through to the other side: turbulence and wind shear under it can be hazardous.",
     "s": [
      "aim-do"
     ]
    },
    {
     "m": "My tablet shows a gap between the cells.",
     "fix": "Datalink NEXRAD isn't for picking a path through a storm area, and it can be 15 to 20 minutes old.",
     "s": [
      "aim-do"
     ]
    },
    {
     "m": "ATC will steer me around it.",
     "fix": "The AIM says don't assume ATC will offer radar guidance or deviations. Ask for them.",
     "s": [
      "aim-do"
     ]
    },
    {
     "m": "If it gets bad inside, I'll turn around.",
     "fix": "Once in it, don't turn back: a straight course is likely the fastest way out, and turns add stress. Hold attitude and let altitude and airspeed vary.",
     "s": [
      "aim-pen"
     ]
    }
   ],
   "analogies": [
    "The visible cloud is the chimney; the drafts it moves reach well outside it. For a severe storm, think of a 20-mile fence around the chimney.",
    "Datalink NEXRAD is a photo, not a live camera: it shows where the storm was, maybe 15 to 20 minutes ago. At 120 knots that's 30 to 40 miles of travel.",
    "A microburst is a bucket of water dumped on the floor: it hits and spreads out in every direction, so on approach you meet the headwind first, then the downdraft, then the loss."
   ],
   "aids": [
    {
     "h": "Draw the 20-mile rings",
     "t": "Take a radar screenshot and have the student draw 20-mile circles around the intense cells. Watch the 'gaps' disappear, then pick a route that avoids the area entirely."
    },
    {
     "h": "Life-cycle sketch",
     "t": "Draw three clouds: cumulus (updrafts only), mature (updrafts and downdrafts, rain reaching the ground, anvil forming), dissipating (downdrafts). Ask where along a departure path the student least wants to meet each one. PHAK Figure 12-28 is the reference."
    },
    {
     "h": "How old is that picture?",
     "t": "Show a datalink weather screen with its timestamp. Ask how old the image really is and how far the airplane moves in that time. Then talk about what the picture can and can't be used for."
    },
    {
     "h": "Spot the severe storm in a METAR",
     "t": "METARs don't label a thunderstorm as severe. Hand the student a few real METARs and have them find the ones that meet the severe criteria: 50-knot winds or 3/4-inch hail."
    }
   ],
   "scenarios": [
    {
     "q": "Afternoon cross-country. A line of storms lies 30 miles ahead, and the tablet shows a 10-mile gap between two strong cells. Go through?",
     "a": "No. Severe turbulence can reach 20 miles from a severe storm, the image may be 15 to 20 minutes old, and datalink weather isn't for threading through storms. Go around the whole area or land and wait.",
     "s": [
      "aim-turb",
      "aim-do"
     ]
    },
    {
     "q": "A thunderstorm is approaching the destination and you're 10 minutes out. Your student wants to hurry and land before it hits. Your call?",
     "a": "Don't land or take off in the face of an approaching thunderstorm: a sudden gust front can cause loss of control. Hold well clear or divert.",
     "s": [
      "aim-dont"
     ]
    },
    {
     "q": "On the departure path there's virga under a cell and a ring of blowing dust on the ground. What might that be, and why does it matter?",
     "a": "Possible microburst: virga and a ring of blowing dust are sometimes the only visible clues. A microburst can produce 6,000 fpm downdrafts and 30 to 90 kt headwind changes. Wait.",
     "s": [
      "awh-mb"
     ]
    },
    {
     "q": "IFR in cloud, your student flies into an embedded cell. What do they do now?",
     "a": "Keep eyes on the instruments, hold a constant attitude and let altitude and airspeed fluctuate, keep power set for turbulence penetration speed, and don't turn back. Turn the cockpit lights up against lightning blindness.",
     "s": [
      "aim-pen"
     ]
    }
   ],
   "acs": [
    "acs-p",
    "acs-c",
    "acs-i",
    "acs-f"
   ],
   "src": {
    "phak-stages": {
     "b": "PHAK",
     "ch": "12",
     "sec": "Thunderstorms",
     "p": "12-22",
     "pdf": 306,
     "q": [
      "A thunderstorm makes its way through three distinct stages before dissipating.",
      "Within approximately 15 minutes, the thunderstorm reaches the mature stage, which is the most violent time period of the thunderstorm’s life cycle."
     ],
     "hl": [
      "It begins with the cumulus stage",
      "the storm enters the dissipating stage"
     ],
     "img": "pages/PHAK-306-441c4b90c4.jpg",
     "y": 0.088,
     "x": 0.061,
     "w": 0.822
    },
    "phak-over": {
     "b": "PHAK",
     "ch": "12",
     "sec": "Thunderstorms",
     "p": "12-22",
     "pdf": 306,
     "q": [
      "It is impossible to fly over thunderstorms in light aircraft."
     ],
     "img": "pages/PHAK-306-441c4b90c4.jpg",
     "y": 0.346,
     "x": 0.48,
     "w": 0.399
    },
    "phak-form": {
     "b": "PHAK",
     "ch": "12",
     "sec": "Thunderstorms",
     "p": "12-23",
     "pdf": 307,
     "q": [
      "For a thunderstorm to form, the air must have sufficient water vapor, an unstable lapse rate, and an initial lifting action to start the storm process.",
      "If flying around a thunderstorm is not an option, stay on the ground until it passes."
     ],
     "hl": [
      "Figure 12-28. Life cycle of a thunderstorm."
     ],
     "img": "pages/PHAK-307-dbbcb68ee7.jpg",
     "y": 0.439,
     "x": 0.121,
     "w": 0.404
    },
    "awh-haz": {
     "b": "AWH",
     "ch": "22",
     "sec": "22.7 Hazards",
     "p": "22-7",
     "pdf": 262,
     "q": [
      "While not every thunderstorm contains all hazards, it is not possible to visually determine which hazards a thunderstorm contains.",
      "Hazards include low ceiling and visibility, lightning, adverse winds, downbursts, turbulence, icing, hail, rapid altimeter changes, static electricity, tornadoes, and engine water ingestion."
     ],
     "img": "pages/AWH-262-cc4969fbe6.jpg",
     "y": 0.134,
     "x": 0.118,
     "w": 0.769
    },
    "awh-mb": {
     "b": "AWH",
     "ch": "22",
     "sec": "22.7.3 Downburst and Microburst",
     "p": "22-8",
     "pdf": 263,
     "q": [
      "A typical microburst has a horizontal diameter of less than 2.5 mi and a nominal depth of 1,000 ft.",
      "The lifespan of a microburst is about 5–15 minutes, during which time it can produce downdrafts of up to 6,000 fpm; increasing headwind and headwind losses of 30–90 kt, seriously degrading performance.",
      "a ring of blowing dust is sometimes the only visible clue"
     ],
     "img": "pages/AWH-263-9324de9b73.jpg",
     "y": 0.544,
     "x": 0.118,
     "w": 0.769
    },
    "aim-turb": {
     "b": "AIM",
     "ch": "7",
     "sec": "7-1-26 Thunderstorms",
     "p": "7-1-62",
     "pdf": 578,
     "q": [
      "There is no useful correlation between the external visual appearance of thunderstorms and the severity or amount of turbulence or hail within them.",
      "Severe turbulence can be expected up to 20 miles from severe thunderstorms. This distance decreases to about 10 miles in less severe storms.",
      "METAR reports do not include a descriptor for severe thunderstorms."
     ],
     "img": "pages/AIM-578-5fe4167c1d.jpg",
     "y": 0.27,
     "x": 0.106,
     "w": 0.789
    },
    "aim-dont": {
     "b": "AIM",
     "ch": "7",
     "sec": "7-1-27 Thunderstorm Flying",
     "p": "7-1-62",
     "pdf": 578,
     "q": [
      "Never regard any thunderstorm lightly, even when radar echoes are of light intensity.",
      "A sudden gust front of low level turbulence could cause loss of control."
     ],
     "hl": [
      "Don’t land or takeoff in the face of an approaching thunderstorm."
     ],
     "img": "pages/AIM-578-5fe4167c1d.jpg",
     "y": 0.822,
     "x": 0.106,
     "w": 0.788
    },
    "aim-do": {
     "b": "AIM",
     "ch": "7",
     "sec": "7-1-27 Thunderstorm Flying",
     "p": "7-1-63",
     "pdf": 579,
     "q": [
      "Don’t attempt to fly under a thunderstorm even if you can see through to the other side. Turbulence and wind shear under the storm could be hazardous.",
      "Don’t assume that ATC will offer radar navigation guidance or deviations around thunderstorms.",
      "The weather conditions depicted may be 15 to 20 minutes older than indicated on the display.",
      "Do avoid by at least 20 miles any thunderstorm identified as severe or giving an intense radar echo.",
      "Do circumnavigate the entire area if the area has 6/10 thunderstorm coverage.",
      "Do divert and wait out the thunderstorms on the ground if unable to navigate around an area of thunderstorms."
     ],
     "hl": [
      "as the sole means for negotiating a path through a thunderstorm area (tactical maneuvering)."
     ],
     "img": "pages/AIM-579-7fb4e50039.jpg",
     "y": 0.088,
     "x": 0.106,
     "w": 0.788
    },
    "aim-pen": {
     "b": "AIM",
     "ch": "7",
     "sec": "7-1-27 Thunderstorm Flying",
     "p": "7-1-64",
     "pdf": 580,
     "q": [
      "Turn up cockpit lights to highest intensity to lessen temporary blindness from lightning.",
      "Do keep your eyes on your instruments.",
      "Do maintain constant attitude. Allow the altitude and airspeed to fluctuate.",
      "Don’t turn back once you are in the thunderstorm. A straight course through the storm most likely will get the aircraft out of the hazards most quickly. In addition, turning maneuvers increase stress on the aircraft."
     ],
     "img": "pages/AIM-580-b5e1b32496.jpg",
     "y": 0.088,
     "x": 0.106,
     "w": 0.789
    },
    "acs-p": {
     "b": "PACS",
     "ch": "I",
     "sec": "Area I, Task C. Weather Information",
     "p": "4",
     "pdf": 12,
     "code": "PA.I.C.K3h",
     "label": "Thunderstorms and microbursts",
     "q": [
      "Thunderstorms and microbursts"
     ],
     "hl": [
      "PA.I.C.K3h"
     ],
     "img": "pages/PACS-12-378506137c.jpg",
     "y": 0.195,
     "x": 0.081,
     "w": 0.392
    },
    "acs-c": {
     "b": "CACS",
     "ch": "I",
     "sec": "Area I, Task C. Weather Information",
     "p": "4",
     "pdf": 11,
     "code": "CA.I.C.K3h",
     "label": "Thunderstorms and microbursts",
     "q": [
      "Thunderstorms and microbursts"
     ],
     "hl": [
      "CA.I.C.K3h"
     ],
     "img": "pages/CACS-11-04d76d2029.jpg",
     "y": 0.17,
     "x": 0.081,
     "w": 0.392
    },
    "acs-i": {
     "b": "IACS",
     "ch": "I",
     "sec": "Area I, Task B. Weather Information",
     "p": "3",
     "pdf": 9,
     "code": "IR.I.B.K3h",
     "label": "Thunderstorms and microbursts",
     "q": [
      "Thunderstorms and microbursts"
     ],
     "hl": [
      "IR.I.B.K3h"
     ],
     "img": "pages/IACS-9-d7a3352d3a.jpg",
     "y": 0.374,
     "x": 0.081,
     "w": 0.392
    },
    "acs-f": {
     "b": "FACS",
     "ch": "III",
     "sec": "Area III, Task C. Weather Information",
     "p": "25",
     "pdf": 32,
     "code": "AI.III.C.K3h",
     "label": "Thunderstorms and microbursts",
     "q": [
      "Thunderstorms and microbursts"
     ],
     "hl": [
      "AI.III.C.K3h"
     ],
     "img": "pages/FACS-32-59115fd450.jpg",
     "y": 0.3,
     "x": 0.081,
     "w": 0.392
    }
   }
  },
  "PP": {
   "checked": "IFH FAA-H-8083-15B · ACS 8C",
   "quick": [
    {
     "t": "A failure usually shows up as a warning flag or as the attitude indicator disagreeing with the performance instruments. Compare it with the turn coordinator and the VSI: that checks the vacuum, static and electrical systems against each other.",
     "s": [
      "ifh-ident"
     ]
    },
    {
     "t": "Then: keep flying, cover the failed instrument, use what still works, tell ATC, and declare an emergency if needed before it gets away from you.",
     "s": [
      "ifh-ident"
     ]
    },
    {
     "t": "Without the gyros, the turn coordinator is primary for bank, the altimeter for pitch, and the airspeed indicator for power. Turn by the clock: standard rate is 3° per second, so 45° takes 15 seconds.",
     "s": [
      "ifh-timed"
     ]
    },
    {
     "t": "Make small, smooth pitch inputs: first stop the altimeter's movement, then correct back to altitude. Big corrections become oscillations.",
     "s": [
      "ifh-pitch"
     ]
    },
    {
     "t": "Nose-low unusual attitude: reduce power, level the wings on the turn coordinator, then raise the nose. The instinct to pull first is the trap.",
     "s": [
      "ifh-low",
      "ifh-ua"
     ]
    }
   ],
   "mistakes": [
    {
     "m": "Pull up first; we're diving.",
     "fix": "In a nose-low attitude, reduce power and level the wings first, then raise the nose. The IFH calls the instinctive pull-back out directly.",
     "s": [
      "ifh-low"
     ]
    },
    {
     "m": "I keep glancing at the attitude indicator to see if it's back.",
     "fix": "Cover the failed instrument. It improves aircraft control and navigation.",
     "s": [
      "ifh-ident"
     ]
    },
    {
     "m": "I'll fix that altitude error with a good pitch change.",
     "fix": "Larger than necessary corrections cause overcontrolling, nose-high to nose-low and back. Stop the needle first, then make a small correction.",
     "s": [
      "ifh-pitch"
     ]
    },
    {
     "m": "Partial panel is just a checkride item.",
     "fix": "A vacuum failure can lead an unsuspecting pilot into a dangerous unusual attitude. Except for the instrument takeoff, every maneuver can be practiced partial panel.",
     "s": [
      "ifh-vac",
      "ifh-why"
     ]
    }
   ],
   "analogies": [
    "Two witnesses against one: when the attitude indicator disagrees with both the turn coordinator and the VSI, believe the two that agree.",
    "Driving with a fogged windshield: you can't see the road, but the speedometer and the feel of the car still tell you plenty. The altimeter and airspeed tell you pitch indirectly.",
    "Stop the needle, then steer it home, like easing a shower to the right temperature: crank the handle and you overshoot both ways."
   ],
   "aids": [
    {
     "h": "Covers in the flight bag",
     "t": "Carry instrument covers (suction cups or sticky notes) and use them on the attitude and heading indicators. Covering a failed instrument is IFH technique, not just a training trick."
    },
    {
     "h": "Which system feeds what",
     "t": "On the ground, point at each instrument and have the student say whether it runs on vacuum, static, pitot or electric. Then fail one system and ask which instruments should still agree."
    },
    {
     "h": "Calibrate the turn coordinator",
     "t": "In flight, hold a standard-rate indication and check the heading change every 10 seconds against the 30° it should be. Note any correction for each direction before practicing timed turns."
    },
    {
     "h": "Unusual attitudes by the numbers",
     "t": "Brief the order out loud before flight. Nose-high: power, pitch, bank. Nose-low: power, bank, pitch. Then fly recoveries with the attitude indicator covered."
    }
   ],
   "scenarios": [
    {
     "q": "In cloud, the attitude indicator shows a slow climbing turn, but the turn coordinator shows wings level and the VSI is steady at zero. What's going on, and what now?",
     "a": "Two instruments agree against one: the attitude indicator has likely failed (check the vacuum gauge). Cover it, fly the turn coordinator, altimeter and airspeed, tell ATC, and declare an emergency if needed.",
     "s": [
      "ifh-ident"
     ]
    },
    {
     "q": "ATC says turn left 45°. The heading indicator has failed too. How does the student do it?",
     "a": "A timed turn: standard rate on the turn coordinator for 15 seconds, starting as the second hand passes a cardinal point. Half standard rate would take 30 seconds.",
     "s": [
      "ifh-timed"
     ]
    },
    {
     "q": "Partial panel, the airspeed is climbing, the altimeter is unwinding and the turn coordinator shows a left turn. Sequence?",
     "a": "Nose-low: reduce power, level the wings with coordinated aileron and rudder on the turn coordinator, then raise the nose with smooth back pressure. When the airspeed and altimeter needles stop and reverse, you're passing level.",
     "s": [
      "ifh-low"
     ]
    },
    {
     "q": "An instrument applicant asks whether they'll fly an approach partial panel on the checkride.",
     "a": "Yes: the Instrument ACS includes an approach with loss of primary flight instrument indicators, flown as a non-precision approach without the primary flight instruments.",
     "s": [
      "acs-ir7"
     ]
    }
   ],
   "acs": [
    "acs-ir7",
    "acs-ir4"
   ],
   "src": {
    "ifh-why": {
     "b": "IFH",
     "ch": "7",
     "sec": "Airplane Basic Flight Maneuvers",
     "p": "7-1",
     "pdf": 162,
     "q": [
      "all of the maneuvers can be performed on “partial panel,” with the attitude gyro and heading indicator covered or inoperative."
     ],
     "img": "pages/IFH-162-0e57380647.jpg",
     "y": 0.661,
     "x": 0.54,
     "w": 0.403
    },
    "ifh-timed": {
     "b": "IFH",
     "ch": "7",
     "sec": "Timed Turns",
     "p": "7-21",
     "pdf": 182,
     "q": [
      "For example, in a standard rate turn (3 degrees per second), an airplane turns 45° in 15 seconds; in a half standard rate turn, the airplane turns 45° in 30 seconds.",
      "The miniature aircraft of the turn coordinator is primary for bank control, the altimeter is primary for pitch control, and the ASI is primary for power control."
     ],
     "img": "pages/IFH-182-70cd984399.jpg",
     "y": 0.105,
     "x": 0.121,
     "w": 0.822
    },
    "ifh-ua": {
     "b": "IFH",
     "ch": "7",
     "sec": "Recovery from Unusual Attitudes",
     "p": "7-27",
     "pdf": 188,
     "q": [
      "If there are no recommended procedures stated in the POH/AFM, the recovery should be initiated by reference to the ASI, altimeter, VSI, and turn coordinator."
     ],
     "img": "pages/IFH-188-c37f62f7a2.jpg",
     "y": 0.251,
     "x": 0.54,
     "w": 0.403
    },
    "ifh-low": {
     "b": "IFH",
     "ch": "7",
     "sec": "Nose-Low Attitudes",
     "p": "7-28",
     "pdf": 189,
     "q": [
      "If the airspeed is increasing, or is above the desired airspeed, reduce power to prevent excessive airspeed and loss of altitude.",
      "A very important point to remember is that the instinctive reaction to a nose-down attitude is to pull back on the elevator control.",
      "When the needles stop and reverse direction, the aircraft is passing through level flight."
     ],
     "img": "pages/IFH-189-cd6183d1ad.jpg",
     "y": 0.567,
     "x": 0.061,
     "w": 0.403
    },
    "ifh-pitch": {
     "b": "IFH",
     "ch": "7",
     "sec": "Partial Panel Flight",
     "p": "7-36",
     "pdf": 197,
     "q": [
      "When operating in IMC and in a partial panel configuration, the pilot should avoid abrupt changes to the control yoke.",
      "Overcontrolling causes the pilot to move from a nose-high attitude to a nose-low attitude and vice versa.",
      "When an altitude deviation occurs, two actions need to be accomplished. First, make a smooth control input to stop the needle movement."
     ],
     "img": "pages/IFH-197-150fb0798a.jpg",
     "y": 0.563,
     "x": 0.061,
     "w": 0.403
    },
    "ifh-ident": {
     "b": "IFH",
     "ch": "11",
     "sec": "Analog Instrument Failure",
     "p": "11-7",
     "pdf": 332,
     "q": [
      "A warning indicator, or an inconsistency between indications on the attitude indicator and the supporting performance instruments, usually identifies system or instrument failure.",
      "this technique compares the static system with the suction or pressure system and the electrical system.",
      "Covering the failed instrument(s) may enhance a pilot’s ability to maintain aircraft control and navigate the aircraft.",
      "Usually, the next step is to advise ATC of the problem and, if necessary, declare an emergency before the situation deteriorates beyond the pilot’s ability to recover."
     ],
     "img": "pages/IFH-332-9e9fe7a426.jpg",
     "y": 0.465,
     "x": 0.121,
     "w": 0.823
    },
    "ifh-vac": {
     "b": "IFH",
     "ch": "11",
     "sec": "Pneumatic System Failure",
     "p": "11-8",
     "pdf": 333,
     "q": [
      "This can be a hazardous situation with the potential to lead the unsuspecting pilot into a dangerous unusual attitude that would require a partial panel recovery.",
      "It is important that pilots practice instrument flight without reference to the attitude and heading indicators in preparation for such a failure."
     ],
     "img": "pages/IFH-333-35e8015bcc.jpg",
     "y": 0.408,
     "x": 0.061,
     "w": 0.403
    },
    "acs-ir7": {
     "b": "IACS",
     "ch": "VII",
     "sec": "Area VII, Task D. Approach with Loss of Primary Flight Instrument Indicators",
     "p": "22",
     "pdf": 28,
     "code": "IR.VII.D",
     "label": "Approach with loss of primary flight instrument indicators",
     "q": [
      "Recognizing if primary flight instruments are inaccurate or inoperative, and advising ATC or the evaluator."
     ],
     "hl": [
      "IR.VII.D.K1"
     ],
     "img": "pages/IACS-28-9e63cc043c.jpg",
     "y": 0.819,
     "x": 0.081,
     "w": 0.807
    },
    "acs-ir4": {
     "b": "IACS",
     "ch": "IV",
     "sec": "Area IV, Task B. Recovery from Unusual Flight Attitudes",
     "p": "10",
     "pdf": 16,
     "code": "IR.IV.B.K2",
     "label": "Preventing unusual attitudes, including system and equipment failures",
     "q": [
      "Prevention of unusual attitudes, including flight causal, physiological, and environmental factors, and system and equipment failures."
     ],
     "hl": [
      "IR.IV.B.K2"
     ],
     "img": "pages/IACS-16-ef96ac7152.jpg",
     "y": 0.726,
     "x": 0.081,
     "w": 0.848
    }
   }
  },
  "HOLD": {
   "checked": "AIM Change 3 (7/9/26) · IFH FAA-H-8083-15B · ACS 8C",
   "quick": [
    {
     "t": "If delay is expected, ATC issues complete holding instructions (unless charted) and an EFC. Reach the fix without instructions? Hold in a standard pattern on the course you arrived on and ask for further clearance.",
     "s": [
      "aim-instr"
     ]
    },
    {
     "t": "Standard pattern = right turns; nonstandard = left. The inbound leg is 1 minute at or below 14,000 ft MSL and 1½ minutes above. Time the outbound leg from over or abeam the fix, whichever is later.",
     "s": [
      "aim-speed",
      "aim-timing"
     ]
    },
    {
     "t": "Maximum holding speeds: 200 KIAS up to 6,000 ft, 230 KIAS from 6,001 to 14,000 ft, 265 KIAS above. Start slowing when 3 minutes or less from the fix.",
     "s": [
      "aim-speed",
      "aim-instr"
     ]
    },
    {
     "t": "Three FAA-recommended entries: parallel, teardrop (30° on the holding side) and direct. Protected airspace was designed around them.",
     "s": [
      "aim-entry"
     ]
    },
    {
     "t": "Correct for wind on both legs (not in the turns) and adjust the outbound time to get the inbound leg right.",
     "s": [
      "ifh-wind"
     ]
    },
    {
     "t": "Report the time and altitude reaching the fix, and report leaving it.",
     "s": [
      "aim-instr"
     ]
    }
   ],
   "mistakes": [
    {
     "m": "My inbound leg was long, so I'll fly the inbound faster.",
     "fix": "The inbound leg is the target. Adjust the outbound timing to get a 1-minute (or 1½-minute) inbound.",
     "s": [
      "aim-timing",
      "ifh-wind"
     ]
    },
    {
     "m": "I start the timer as soon as I roll out outbound.",
     "fix": "Outbound timing starts over or abeam the fix, whichever is later. Start at the end of the turn only if abeam can't be determined.",
     "s": [
      "aim-timing"
     ]
    },
    {
     "m": "I'll slow down once I'm in the hold.",
     "fix": "Start the speed reduction when 3 minutes or less from the fix and cross it at or below the maximum holding speed.",
     "s": [
      "aim-instr"
     ]
    },
    {
     "m": "Any entry works as long as I end up on the inbound course.",
     "fix": "Protected airspace is designed around the three recommended entries. Improvised entries plus excess speed at the fix can take you outside it.",
     "s": [
      "aim-entry"
     ]
    },
    {
     "m": "At the VOR, I turn outbound when I think I'm over it.",
     "fix": "Turn outbound at the first complete reversal of the to/from indicator.",
     "s": [
      "aim-instr"
     ]
    }
   ],
   "analogies": [
    "A racetrack where you only steer on the straights: wind correction lives on the legs; the turns are just standard rate.",
    "The inbound leg is the ruler and the outbound leg is the knob. Measure with the ruler, adjust with the knob.",
    "Entering a hold is like joining a roundabout: which way you merge depends on the road you arrived on."
   ],
   "aids": [
    {
     "h": "Draw it on the heading indicator",
     "t": "Have the student sketch the hold over the heading indicator with the inbound course at the top and the 70° line on the holding side. Show which arrival headings fall in the parallel, teardrop and direct sectors."
    },
    {
     "h": "Clearance copy drill",
     "t": "Read out holding clearances (direction, fix, radial, leg length, turns, EFC) and have the student draw each one before you finish talking. Include a nonstandard hold and a DME hold."
    },
    {
     "h": "Predict the wind",
     "t": "Give a holding course and a wind. Before flying it, have the student predict which way to correct on each leg and whether the outbound leg will be longer or shorter. Then fly it and compare."
    },
    {
     "h": "EFC fuel math",
     "t": "Give an EFC 30 minutes later than planned. Have the student work out the fuel at the EFC, at the destination and at the alternate, and decide when they'd divert."
    }
   ],
   "scenarios": [
    {
     "q": "Two minutes from the clearance limit, still no holding instructions, and the frequency is jammed. What does the student do?",
     "a": "Should already be slowing (3 minutes out). Enter a standard pattern on the course they approached the fix on, and request further clearance as soon as possible.",
     "s": [
      "aim-instr"
     ]
    },
    {
     "q": "A fast single is approaching a hold at 9,000 ft at 240 KIAS. Any problem?",
     "a": "Maximum holding speed from 6,001 to 14,000 ft is 230 KIAS. Slow down starting 3 minutes from the fix so the airplane crosses it at or below 230.",
     "s": [
      "aim-speed",
      "aim-instr"
     ]
    },
    {
     "q": "At 8,000 ft, the first inbound leg times out at 1:20. What changes on the next circuit?",
     "a": "The goal is a 1-minute inbound leg at or below 14,000 ft. Shorten the outbound leg on the next circuit and keep correcting for wind on both legs.",
     "s": [
      "aim-timing",
      "ifh-wind"
     ]
    },
    {
     "q": "ATC gives an EFC 40 minutes away, and the destination weather is going down. What should the student be thinking about?",
     "a": "Recalculate fuel reserves for the new EFC, consider the alternate, and know when minimum fuel or an emergency becomes the call. The Instrument ACS lists these risks for holding.",
     "s": [
      "acs-ir"
     ]
    }
   ],
   "acs": [
    "acs-ir"
   ],
   "src": {
    "aim-instr": {
     "b": "AIM",
     "ch": "5",
     "sec": "5-3-8 Holding",
     "p": "5-3-24",
     "pdf": 382,
     "q": [
      "Whenever an aircraft is cleared to a fix other than the destination airport and delay is expected, it is the responsibility of ATC to issue complete holding instructions (unless the pattern is charted), an EFC time and best estimate of any additional en route/terminal delay.",
      "then enter a standard pattern on the course on which the aircraft approached the fix and request further clearance as soon as possible.",
      "When an aircraft is 3 minutes or less from a clearance limit and a clearance beyond the fix has not been received, the pilot is expected to start a speed reduction so that the aircraft will cross the fix, initially, at or below the maximum holding airspeed.",
      "Pilots should report to ATC the time and altitude/flight level at which the aircraft reaches the clearance limit and report leaving the clearance limit.",
      "When holding at a VOR station, pilots should begin the turn to the outbound leg at the time of the first complete reversal of the to/from indicator."
     ],
     "img": "pages/AIM-382-ccd1a81f07.jpg",
     "y": 0.112,
     "x": 0.106,
     "w": 0.789
    },
    "aim-speed": {
     "b": "AIM",
     "ch": "5",
     "sec": "5-3-8 j. Holding pattern airspace protection",
     "p": "5-3-27",
     "pdf": 385,
     "q": [
      "Nonstandard Pattern. Left turns",
      "These are the maximum indicated air speeds applicable to all holding."
     ],
     "hl": [
      "Standard Pattern. Right turns",
      "Airspeed (KIAS)",
      "MHA − 6,000’",
      "6,001’ − 14,000’",
      "14,001’ and above"
     ],
     "img": "pages/AIM-385-a5530b75c6.jpg",
     "y": 0.389,
     "x": 0.106,
     "w": 0.545
    },
    "aim-entry": {
     "b": "AIM",
     "ch": "5",
     "sec": "5-3-8 j. Entry Procedures",
     "p": "5-3-28",
     "pdf": 386,
     "q": [
      "Deviations from these recommendations, coupled with excessive airspeed crossing the holding fix, may in some cases result in the aircraft exceeding holding protected airspace.",
      "the teardrop entry procedure would be to fly to the fix, turn outbound to a heading for a 30 degree teardrop entry within the pattern (on the holding side) for a period of one minute",
      "the direct entry procedure would be to fly directly to the fix and turn to follow the holding pattern.",
      "the parallel, teardrop and direct entries are the procedures for entry and holding recommended by the FAA"
     ],
     "hl": [
      "Parallel Procedure."
     ],
     "img": "pages/AIM-386-8acc79aef7.jpg",
     "y": 0.562,
     "x": 0.106,
     "w": 0.789
    },
    "aim-timing": {
     "b": "AIM",
     "ch": "5",
     "sec": "5-3-8 j. Timing",
     "p": "5-3-29",
     "pdf": 387,
     "q": [
      "At or below 14,000 feet MSL: 1 minute.",
      "Timing for subsequent outbound legs should be adjusted, as necessary, to achieve proper inbound leg time.",
      "Outbound leg timing begins over/abeam the fix, whichever occurs later. If the abeam position cannot be determined, start timing when turn to outbound is completed."
     ],
     "img": "pages/AIM-387-5c983b4035.jpg",
     "y": 0.131,
     "x": 0.106,
     "w": 0.789
    },
    "ifh-wind": {
     "b": "IFH",
     "ch": "10",
     "sec": "Standard Holding Pattern (With Wind)",
     "p": "10-10",
     "pdf": 301,
     "q": [
      "A standard symmetrical holding pattern cannot be flown when winds exist.",
      "Compensate for the effect of a known wind except when turning.",
      "The effect of wind is counteracted by applying drift corrections to the inbound and outbound legs and by applying time allowances to the outbound leg."
     ],
     "img": "pages/IFH-301-78178d1bb3.jpg",
     "y": 0.467,
     "x": 0.48,
     "w": 0.403
    },
    "acs-ir": {
     "b": "IACS",
     "ch": "III",
     "sec": "Area III, Task B. Holding Procedures",
     "p": "9",
     "pdf": 15,
     "code": "IR.III.B",
     "label": "Holding Procedures: entries, speeds, reporting; ±10 kt, ±100 ft, ±10°, ¾-scale CDI",
     "q": [
      "Elements related to holding procedures, including reporting criteria, appropriate speeds, and recommended entry procedures for standard, nonstandard, published, and non-published holding patterns.",
      "Recalculating fuel reserves if assigned an unanticipated expect further clearance (EFC) time."
     ],
     "hl": [
      "IR.III.B.K1",
      "IR.III.B.R1",
      "IR.III.B.R2",
      "IR.III.B.S4"
     ],
     "img": "pages/IACS-15-b46ac12807.jpg",
     "y": 0.069,
     "x": 0.081,
     "w": 0.826
    }
   }
  }
 }
};
