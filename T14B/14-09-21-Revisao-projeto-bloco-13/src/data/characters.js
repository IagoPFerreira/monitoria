const characters = [
  {
    "id": "1",
    "name": "Carnage",
    "powerstats": {
      "intelligence": "63",
      "strength": "63",
      "speed": "70",
      "durability": "84",
      "power": "88",
      "combat": "90"
    },
    "biography": {
      "full-name": "Cletus Kasady",
      "alter-egos": "No alter egos found.",
      "aliases": [
        "Mass Carnage",
        "999th"
      ],
      "place-of-birth": "-",
      "first-appearance": "Amazing Spider-Man #344 (February, 1991)",
      "publisher": "Marvel Comics",
      "alignment": "bad"
    },
    "appearance": {
      "gender": "Male",
      "race": "Symbiote",
      "height": [
        "6'1",
        "185 cm"
      ],
      "weight": [
        "190 lb",
        "86 kg"
      ],
      "eye-color": "Green",
      "hair-color": "Red"
    },
    "work": {
      "occupation": "-",
      "base": "New York City"
    },
    "connections": {
      "group-affiliation": "Maximum Carnage: (Carrion, Shriek, Demogoblin, Doppelganger)",
      "relatives": "Venom (\"father\"); Shriek (\"wife\"); Hybrid, Lasher, Phage, Riot (\"brothers\"); Agony, Scream (\"sisters\"); Carrion, Demogoblin, Doppelganger, Toxin (\"sons\"); Scorn (\"Daughter\")"
    },
    "image": {
      "url": "https://www.superherodb.com/pictures2/portraits/10/100/187.jpg"
    }
  },
  {
    "id": "2",
    "name": "Sandman",
    "powerstats": {
      "intelligence": "44",
      "strength": "75",
      "speed": "46",
      "durability": "90",
      "power": "100",
      "combat": "60"
    },
    "biography": {
      "full-name": "William Baker",
      "alter-egos": "No alter egos found.",
      "aliases": [
        "Flint Marko",
        "Sylvester Mann",
        "Quarryman"
      ],
      "place-of-birth": "Queens, New York",
      "first-appearance": "Amazing Spider-Man #4 (September, 1963)",
      "publisher": "Marvel Comics",
      "alignment": "neutral"
    },
    "appearance": {
      "gender": "Male",
      "race": "Human",
      "height": [
        "6'1",
        "185 cm"
      ],
      "weight": [
        "450 lb",
        "203 kg"
      ],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    "work": {
      "occupation": "Professional Criminal",
      "base": "-"
    },
    "connections": {
      "group-affiliation": "(Formerly) Sinister Twelve, the Sinister Six, the Frightful Four, the Outlaws and the Wild Pack, reserve member of the Avengers",
      "relatives": "Mrs. Baker (mother), unidentified cousin"
    },
    "image": {
      "url": "https://www.superherodb.com/pictures2/portraits/10/100/621.jpg"
    }
  },
  {
    "id": "3",
    "name": "Vixen",
    "powerstats": {
      "intelligence": "50",
      "strength": "38",
      "speed": "50",
      "durability": "50",
      "power": "62",
      "combat": "25"
    },
    "biography": {
      "full-name": "Mari McCabe",
      "alter-egos": "No alter egos found.",
      "aliases": [
        "-"
      ],
      "place-of-birth": "Zambesi",
      "first-appearance": "Action Comics #521 (July, 1981)",
      "publisher": "DC Comics",
      "alignment": "good"
    },
    "appearance": {
      "gender": "Female",
      "race": "Human",
      "height": [
        "5'9",
        "175 cm"
      ],
      "weight": [
        "140 lb",
        "63 kg"
      ],
      "eye-color": "Amber",
      "hair-color": "Black"
    },
    "work": {
      "occupation": "Former Model",
      "base": "-"
    },
    "connections": {
      "group-affiliation": "Formerly Suicide Squad, Checkmate, Ultramarines, Birds of Prey, Justice League of America",
      "relatives": "Reverend Richard Jiwe (father, deceased), Jeanne-Mari Jiwe (mother, deceased), General Mustapha Maksai (uncle, deceased), Tantu (ancestor)"
    },
    "image": {
      "url": "https://www.superherodb.com/pictures2/portraits/10/100/10109.jpg"
    }
  },
  {
    "id": "4",
    "name": "X-23",
    "powerstats": {
      "intelligence": "75",
      "strength": "24",
      "speed": "42",
      "durability": "100",
      "power": "55",
      "combat": "95"
    },
    "biography": {
      "full-name": "Laura Kinney",
      "alter-egos": "No alter egos found.",
      "aliases": [
        "Laura Logan",
        "Laura Howlett",
        "Laura X",
        "Talon",
        "Wolverine",
        "X23"
      ],
      "place-of-birth": "The Facility, location unrevealed",
      "first-appearance": "NYX #3",
      "publisher": "Marvel Comics",
      "alignment": "good"
    },
    "appearance": {
      "gender": "Female",
      "race": "Mutant / Clone",
      "height": [
        "5'1",
        "155 cm"
      ],
      "weight": [
        "110 lb",
        "50 kg"
      ],
      "eye-color": "Green",
      "hair-color": "Black"
    },
    "work": {
      "occupation": "Adventurer, Student, former; Assassin, Prostitute",
      "base": "Mobile. Formerly Avengers Mansion, New York City and Avengers Compound"
    },
    "connections": {
      "group-affiliation": "New X-Men, formerly Xavier Institute Student Body, The Facility",
      "relatives": "Sarah Kinney (surrogate mother, deceased), James Howlett (Wolverine, genetic progenitor)"
    },
    "image": {
      "url": "https://www.superherodb.com/pictures2/portraits/10/100/565.jpg"
    }
  },
  {
    "id": "5",
    "name": "Moon Knight",
    "powerstats": {
      "intelligence": "50",
      "strength": "36",
      "speed": "23",
      "durability": "42",
      "power": "28",
      "combat": "75"
    },
    "biography": {
      "full-name": "Marc Spector",
      "alter-egos": "No alter egos found.",
      "aliases": [
        "Jake Lockley",
        "Steven Grant",
        "Yitzak Topol",
        "Fist of Khonshu",
        "Crescent Crusader",
        "Lunar Legionnaire"
      ],
      "place-of-birth": "Chicago, Illinois",
      "first-appearance": "Werewolf by Night #32 (August, 1975)",
      "publisher": "Marvel Comics",
      "alignment": "good"
    },
    "appearance": {
      "gender": "Male",
      "race": "Human",
      "height": [
        "6'2",
        "188 cm"
      ],
      "weight": [
        "225 lb",
        "101 kg"
      ],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    "work": {
      "occupation": "Adventurer, entrepreneur; former prize fighter, spy, soldier, mercenary, cab driver",
      "base": "New York City; formerly Spector Mansion, Long Island, Avengers Compound, California"
    },
    "connections": {
      "group-affiliation": "Secret Avengers; formerly: US Marine Corps, Central Intelligence Agency (CIA), partner of Jean-Paul du Champ, partner of Raoul Bushman, partner of Midnight, West Coast Avengers, Marvel Knights, Defenders",
      "relatives": "Shadowknight (Randall Spector) (brother, deceased), Elias (father, deceased), Seth Phalkon (alleged great-great-grandfather)"
    },
    "image": {
      "url": "https://www.superherodb.com/pictures2/portraits/10/100/415.jpg"
    }
  },
  {
    "id": "6",
    "name": "Luke Cage",
    "powerstats": {
      "intelligence": "50",
      "strength": "63",
      "speed": "29",
      "durability": "95",
      "power": "44",
      "combat": "70"
    },
    "biography": {
      "full-name": "Luke Cage",
      "alter-egos": "Power Man",
      "aliases": [
        "Carl Lucas",
        "Power Man",
        "Mark Lucas",
        "Hero for Hire",
        "Ace of Spades"
      ],
      "place-of-birth": "Harlem, New York City",
      "first-appearance": "Hero for Hire #1 (1972)",
      "publisher": "Power Man",
      "alignment": "good"
    },
    "appearance": {
      "gender": "Male",
      "race": "Human",
      "height": [
        "6'6",
        "198 cm"
      ],
      "weight": [
        "425 lb",
        "191 kg"
      ],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    "work": {
      "occupation": "Adventurer, bar owner, bodyguard, mercenary; formerly theater owner, private investigator, various odd jobs",
      "base": "-"
    },
    "connections": {
      "group-affiliation": "Underground Avengers (formerly Daredevil's Unnamed Super-Hero Team), Secret Defenders, Heroes for Hire, Nightwing Restorations, Fantastic Four, Defenders, Bloods",
      "relatives": "Jessica Jones (wife), James Leonard Lucas (father), Esther (mother, deceased), James Jr. (Coldfire, brother), unnamed daughter"
    },
    "image": {
      "url": "https://www.superherodb.com/pictures2/portraits/10/100/269.jpg"
    }
  },
]

export default characters;