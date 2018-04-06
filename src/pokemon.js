const pokemon = [
  {
    "number": "001",
    "name": "Bulbasaur",
    "generation": "Generation I",
    "about": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    "types": [
      "Grass",
      "Poison"
    ],
    "resistant": [
      "Water",
      "Electric",
      "Grass",
      "Fighting",
      "Fairy"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      },
      {
        "name": "Vine Whip",
        "Type": "Grass",
        "Damage": 7
      }
    ],
    "chargeAttacks": [
      {
        "name": "Power Whip",
        "Type": "Grass",
        "Damage": 70
      },
      {
        "name": "Seed Bomb",
        "Type": "Grass",
        "Damage": 40
      },
      {
        "name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "6.04kg",
      "Maximum": "7.76kg"
    },
    "height": {
      "Minimum": "0.61m",
      "Maximum": "0.79m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "90 stamina points.",
    "baseAttack": "118 attack points.",
    "baseDefense": "118 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 25,
      "name": "Bulbasaur candies"
    },
    "nextEvolutions": [
      {
        "number": 2,
        "name": "Ivysaur"
      },
      {
        "number": 3,
        "name": "Venusaur"
      }
    ],
    "maxCP": 951,
    "maxHP": 1071
  },
  {
    "number": "002",
    "name": "Ivysaur",
    "generation": "Generation I",
    "about": "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
    "types": [
      "Grass",
      "Poison"
    ],
    "resistant": [
      "Water",
      "Electric",
      "Grass",
      "Fighting",
      "Fairy"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "fastAttacks": [
      {
        "name": "Razor Leaf",
        "Type": "Grass",
        "Damage": 15
      },
      {
        "name": "Vine Whip",
        "Type": "Grass",
        "Damage": 7
      }
    ],
    "chargeAttacks": [
      {
        "name": "Power Whip",
        "Type": "Grass",
        "Damage": 70
      },
      {
        "name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      },
      {
        "name": "Solar Beam",
        "Type": "Grass",
        "Damage": 120
      }
    ],
    "weight": {
      "Minimum": "11.38kg",
      "Maximum": "14.63kg"
    },
    "height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "120 stamina points.",
    "baseAttack": "151 attack points.",
    "baseDefense": "151 defense points.",
    "baseFleeRate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 1,
        "name": "Bulbasaur"
      }
    ],
    "nextEvolutionReq": {
      "Amount": 100,
      "name": "Bulbasaur candies"
    },
    "nextEvolutions": [
      {
        "number": 3,
        "name": "Venusaur"
      }
    ],
    "maxCP": 1483,
    "maxHP": 1632
  },
  {
    "number": "003",
    "name": "Venusaur",
    "generation": "Generation I",
    "about": "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
    "types": [
      "Grass",
      "Poison"
    ],
    "resistant": [
      "Water",
      "Electric",
      "Grass",
      "Fighting",
      "Fairy"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "fastAttacks": [
      {
        "name": "Razor Leaf",
        "Type": "Grass",
        "Damage": 15
      },
      {
        "name": "Vine Whip",
        "Type": "Grass",
        "Damage": 7
      }
    ],
    "chargeAttacks": [
      {
        "name": "Petal Blizzard",
        "Type": "Grass",
        "Damage": 65
      },
      {
        "name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      },
      {
        "name": "Solar Beam",
        "Type": "Grass",
        "Damage": 120
      }
    ],
    "weight": {
      "Minimum": "87.5kg",
      "Maximum": "112.5kg"
    },
    "height": {
      "Minimum": "1.75m",
      "Maximum": "2.25m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "160 stamina points.",
    "baseAttack": "198 attack points.",
    "baseDefense": "198 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 1,
        "name": "Bulbasaur"
      },
      {
        "number": 2,
        "name": "Ivysaur"
      }
    ],
    "maxCP": 2392,
    "maxHP": 2580
  },
  {
    "number": "004",
    "name": "Charmander",
    "generation": "Generation I",
    "about": "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
    "types": [
      "Fire"
    ],
    "resistant": [
      "Fire",
      "Grass",
      "Ice",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Ember",
        "Type": "Fire",
        "Damage": 10
      },
      {
        "name": "Scratch",
        "Type": "Normal",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Flame Burst",
        "Type": "Fire",
        "Damage": 30
      },
      {
        "name": "Flame Charge",
        "Type": "Fire",
        "Damage": 25
      },
      {
        "name": "Flamethrower",
        "Type": "Fire",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "7.44kg",
      "Maximum": "9.56kg"
    },
    "height": {
      "Minimum": "0.53m",
      "Maximum": "0.68m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "78 stamina points.",
    "baseAttack": "116 attack points.",
    "baseDefense": "96 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 25,
      "name": "Charmander candies"
    },
    "nextEvolutions": [
      {
        "number": 5,
        "name": "Charmeleon"
      },
      {
        "number": 6,
        "name": "Charizard"
      }
    ],
    "maxCP": 841,
    "maxHP": 955
  },
  {
    "number": "005",
    "name": "Charmeleon",
    "generation": "Generation I",
    "about": "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.",
    "types": [
      "Fire"
    ],
    "resistant": [
      "Fire",
      "Grass",
      "Ice",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Ember",
        "Type": "Fire",
        "Damage": 10
      },
      {
        "name": "Scratch",
        "Type": "Normal",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Fire Punch",
        "Type": "Fire",
        "Damage": 40
      },
      {
        "name": "Flame Burst",
        "Type": "Fire",
        "Damage": 30
      },
      {
        "name": "Flamethrower",
        "Type": "Fire",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "16.63kg",
      "Maximum": "21.38kg"
    },
    "height": {
      "Minimum": "0.96m",
      "Maximum": "1.24m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "116 stamina points.",
    "baseAttack": "158 attack points.",
    "baseDefense": "129 defense points.",
    "baseFleeRate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 4,
        "name": "Charmander"
      }
    ],
    "nextEvolutionReq": {
      "Amount": 100,
      "name": "Charmander candies"
    },
    "nextEvolutions": [
      {
        "number": 6,
        "name": "Charizard"
      }
    ],
    "maxCP": 1411,
    "maxHP": 1557
  },
  {
    "number": "006",
    "name": "Charizard",
    "generation": "Generation I",
    "about": "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
    "types": [
      "Fire",
      "Flying"
    ],
    "resistant": [
      "Fire",
      "Grass",
      "Fighting",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "weaknesses": [
      "Water",
      "Electric",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Ember",
        "Type": "Fire",
        "Damage": 10
      },
      {
        "name": "Wing Attack",
        "Type": "Flying",
        "Damage": 9
      }
    ],
    "chargeAttacks": [
      {
        "name": "Dragon Claw",
        "Type": "Dragon",
        "Damage": 35
      },
      {
        "name": "Fire Blast",
        "Type": "Fire",
        "Damage": 100
      },
      {
        "name": "Flamethrower",
        "Type": "Fire",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "79.19kg",
      "Maximum": "101.81kg"
    },
    "height": {
      "Minimum": "1.49m",
      "Maximum": "1.91m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "156 stamina points.",
    "baseAttack": "223 attack points.",
    "baseDefense": "176 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 4,
        "name": "Charmander"
      },
      {
        "number": 5,
        "name": "Charmeleon"
      }
    ],
    "maxCP": 2413,
    "maxHP": 2602
  },
  {
    "number": "007",
    "name": "Squirtle",
    "generation": "Generation I",
    "about": "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
    "types": [
      "Water"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "fastAttacks": [
      {
        "name": "Bubble",
        "Type": "Water",
        "Damage": 25
      },
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Aqua Jet",
        "Type": "Water",
        "Damage": 25
      },
      {
        "name": "Aqua Tail",
        "Type": "Water",
        "Damage": 45
      },
      {
        "name": "Water Pulse",
        "Type": "Water",
        "Damage": 35
      }
    ],
    "weight": {
      "Minimum": "7.88kg",
      "Maximum": "10.13kg"
    },
    "height": {
      "Minimum": "0.44m",
      "Maximum": "0.56m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "88 stamina points.",
    "baseAttack": "94 attack points.",
    "baseDefense": "122 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 25,
      "name": "Squirtle candies"
    },
    "nextEvolutions": [
      {
        "number": 8,
        "name": "Wartortle"
      },
      {
        "number": 9,
        "name": "Blastoise"
      }
    ],
    "maxCP": 891,
    "maxHP": 1008
  },
  {
    "number": "008",
    "name": "Wartortle",
    "generation": "Generation I",
    "about": "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon's toughness as a battler.",
    "types": [
      "Water"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "fastAttacks": [
      {
        "name": "Bite",
        "Type": "Dark",
        "Damage": 6
      },
      {
        "name": "Water Gun",
        "Type": "Water",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Aqua Jet",
        "Type": "Water",
        "Damage": 25
      },
      {
        "name": "Hydro Pump",
        "Type": "Water",
        "Damage": 90
      },
      {
        "name": "Ice Beam",
        "Type": "Ice",
        "Damage": 65
      }
    ],
    "weight": {
      "Minimum": "19.69kg",
      "Maximum": "25.31kg"
    },
    "height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "118 stamina points.",
    "baseAttack": "126 attack points.",
    "baseDefense": "155 defense points.",
    "baseFleeRate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 7,
        "name": "Squirtle"
      }
    ],
    "nextEvolutionReq": {
      "Amount": 100,
      "name": "Squirtle candies"
    },
    "nextEvolutions": [
      {
        "number": 9,
        "name": "Blastoise"
      }
    ],
    "maxCP": 1435,
    "maxHP": 1582
  },
  {
    "number": "009",
    "name": "Blastoise",
    "generation": "Generation I",
    "about": "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.",
    "types": [
      "Water"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "fastAttacks": [
      {
        "name": "Bite",
        "Type": "Dark",
        "Damage": 6
      },
      {
        "name": "Water Gun",
        "Type": "Water",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Flash Cannon",
        "Type": "Steel",
        "Damage": 60
      },
      {
        "name": "Hydro Pump",
        "Type": "Water",
        "Damage": 90
      },
      {
        "name": "Ice Beam",
        "Type": "Ice",
        "Damage": 65
      }
    ],
    "weight": {
      "Minimum": "74.81kg",
      "Maximum": "96.19kg"
    },
    "height": {
      "Minimum": "1.4m",
      "Maximum": "1.8m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "158 stamina points.",
    "baseAttack": "171 attack points.",
    "baseDefense": "210 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 7,
        "name": "Squirtle"
      },
      {
        "number": 8,
        "name": "Wartortle"
      }
    ],
    "maxCP": 2355,
    "maxHP": 2542
  },
  {
    "number": "010",
    "name": "Caterpie",
    "generation": "Generation I",
    "about": "Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pokémon releases a terrifically strong odor.",
    "types": [
      "Bug"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Ground"
    ],
    "weaknesses": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Bug Bite",
        "Type": "Bug",
        "Damage": 5
      },
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "2.54kg",
      "Maximum": "3.26kg"
    },
    "height": {
      "Minimum": "0.26m",
      "Maximum": "0.34m"
    },
    "buddyDistance": "1km (Shoulder)",
    "baseStamina": "90 stamina points.",
    "baseAttack": "55 attack points.",
    "baseDefense": "62 defense points.",
    "baseFleeRate": "20% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 12,
      "name": "Caterpie candies"
    },
    "nextEvolutions": [
      {
        "number": 11,
        "name": "Metapod"
      },
      {
        "number": 12,
        "name": "Butterfree"
      }
    ],
    "maxCP": 367,
    "maxHP": 443
  },
  {
    "number": "011",
    "name": "Metapod",
    "generation": "Generation I",
    "about": "The shell covering this Pokémon’s body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.",
    "types": [
      "Bug"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Ground"
    ],
    "weaknesses": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Bug Bite",
        "Type": "Bug",
        "Damage": 5
      },
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "8.66kg",
      "Maximum": "11.14kg"
    },
    "height": {
      "Minimum": "0.61m",
      "Maximum": "0.79m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "100 stamina points.",
    "baseAttack": "45 attack points.",
    "baseDefense": "94 defense points.",
    "baseFleeRate": "9% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 10,
        "name": "Caterpie"
      }
    ],
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Caterpie candies"
    },
    "nextEvolutions": [
      {
        "number": 12,
        "name": "Butterfree"
      }
    ],
    "maxCP": 397,
    "maxHP": 477
  },
  {
    "number": "012",
    "name": "Butterfree",
    "generation": "Generation I",
    "about": "Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.",
    "types": [
      "Bug",
      "Flying"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Ground",
      "Bug"
    ],
    "weaknesses": [
      "Fire",
      "Electric",
      "Ice",
      "Flying",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Bug Bite",
        "Type": "Bug",
        "Damage": 5
      },
      {
        "name": "Confusion",
        "Type": "Psychic",
        "Damage": 15
      }
    ],
    "chargeAttacks": [
      {
        "name": "Bug Buzz",
        "Type": "Bug",
        "Damage": 75
      },
      {
        "name": "Psychic",
        "Type": "Psychic",
        "Damage": 55
      },
      {
        "name": "Signal Beam",
        "Type": "Bug",
        "Damage": 45
      }
    ],
    "weight": {
      "Minimum": "28kg",
      "Maximum": "36kg"
    },
    "height": {
      "Minimum": "0.96m",
      "Maximum": "1.24m"
    },
    "buddyDistance": "1km (Flying)",
    "baseStamina": "120 stamina points.",
    "baseAttack": "167 attack points.",
    "baseDefense": "151 defense points.",
    "baseFleeRate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 10,
        "name": "Caterpie"
      },
      {
        "number": 11,
        "name": "Metapod"
      }
    ],
    "maxCP": 1315,
    "maxHP": 1454
  },
  {
    "number": "013",
    "name": "Weedle",
    "generation": "Generation I",
    "about": "Weedle has an extremely acute sense of smell. It is capable of distinguishing its favorite kinds of leaves from those it dislikes just by sniffing with its big red proboscis (nose).",
    "types": [
      "Bug",
      "Poison"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "weaknesses": [
      "Fire",
      "Flying",
      "Psychic",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Bug Bite",
        "Type": "Bug",
        "Damage": 5
      },
      {
        "name": "Poison Sting",
        "Type": "Poison",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "2.8kg",
      "Maximum": "3.6kg"
    },
    "height": {
      "Minimum": "0.26m",
      "Maximum": "0.34m"
    },
    "buddyDistance": "1km (Shoulder)",
    "baseStamina": "80 stamina points.",
    "baseAttack": "63 attack points.",
    "baseDefense": "55 defense points.",
    "baseFleeRate": "20% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 12,
      "name": "Weedle candies"
    },
    "nextEvolutions": [
      {
        "number": 14,
        "name": "Kakuna"
      },
      {
        "number": 15,
        "name": "Beedrill"
      }
    ],
    "maxCP": 372,
    "maxHP": 449
  },
  {
    "number": "014",
    "name": "Kakuna",
    "generation": "Generation I",
    "about": "Kakuna remains virtually immobile as it clings to a tree. However, on the inside, it is extremely busy as it prepares for its coming evolution. This is evident from how hot the shell becomes to the touch.",
    "types": [
      "Bug",
      "Poison"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "weaknesses": [
      "Fire",
      "Flying",
      "Psychic",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Bug Bite",
        "Type": "Bug",
        "Damage": 5
      },
      {
        "name": "Poison Sting",
        "Type": "Poison",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "8.75kg",
      "Maximum": "11.25kg"
    },
    "height": {
      "Minimum": "0.53m",
      "Maximum": "0.68m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "90 stamina points.",
    "baseAttack": "46 attack points.",
    "baseDefense": "86 defense points.",
    "baseFleeRate": "9% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 13,
        "name": "Weedle"
      }
    ],
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Weedle candies"
    },
    "nextEvolutions": [
      {
        "number": 15,
        "name": "Beedrill"
      }
    ],
    "maxCP": 405,
    "maxHP": 485
  },
  {
    "number": "015",
    "name": "Beedrill",
    "generation": "Generation I",
    "about": "Beedrill is extremely territorial. No one should ever approach its nest—this is for their own safety. If angered, they will attack in a furious swarm.",
    "types": [
      "Bug",
      "Poison"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "weaknesses": [
      "Fire",
      "Flying",
      "Psychic",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Bug Bite",
        "Type": "Bug",
        "Damage": 5
      },
      {
        "name": "Poison Jab",
        "Type": "Poison",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Aerial Ace",
        "Type": "Flying",
        "Damage": 30
      },
      {
        "name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      },
      {
        "name": "X Scissor",
        "Type": "Bug",
        "Damage": 35
      }
    ],
    "weight": {
      "Minimum": "25.81kg",
      "Maximum": "33.19kg"
    },
    "height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "buddyDistance": "1km (Flying)",
    "baseStamina": "130 stamina points.",
    "baseAttack": "169 attack points.",
    "baseDefense": "150 defense points.",
    "baseFleeRate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 13,
        "name": "Weedle"
      },
      {
        "number": 14,
        "name": "Kakuna"
      }
    ],
    "maxCP": 1301,
    "maxHP": 1439
  },
  {
    "number": "016",
    "name": "Pidgey",
    "generation": "Generation I",
    "about": "Pidgey has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings.",
    "types": [
      "Normal",
      "Flying"
    ],
    "resistant": [
      "Grass",
      "Ground",
      "Bug",
      "Ghost"
    ],
    "weaknesses": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Quick Attack",
        "Type": "Normal",
        "Damage": 10
      },
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Aerial Ace",
        "Type": "Flying",
        "Damage": 30
      },
      {
        "name": "Air Cutter",
        "Type": "Flying",
        "Damage": 30
      },
      {
        "name": "Twister",
        "Type": "Dragon",
        "Damage": 25
      }
    ],
    "weight": {
      "Minimum": "1.57kg",
      "Maximum": "2.02kg"
    },
    "height": {
      "Minimum": "0.26m",
      "Maximum": "0.34m"
    },
    "buddyDistance": "1km (Shoulder)",
    "baseStamina": "80 stamina points.",
    "baseAttack": "85 attack points.",
    "baseDefense": "76 defense points.",
    "baseFleeRate": "20% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 12,
      "name": "Pidgey candies"
    },
    "nextEvolutions": [
      {
        "number": 17,
        "name": "Pidgeotto"
      },
      {
        "number": 18,
        "name": "Pidgeot"
      }
    ],
    "maxCP": 585,
    "maxHP": 679
  },
  {
    "number": "017",
    "name": "Pidgeotto",
    "generation": "Generation I",
    "about": "Pidgeotto claims a large area as its own territory. This Pokémon flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.",
    "types": [
      "Normal",
      "Flying"
    ],
    "resistant": [
      "Grass",
      "Ground",
      "Bug",
      "Ghost"
    ],
    "weaknesses": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Steel Wing",
        "Type": "Steel",
        "Damage": 15
      },
      {
        "name": "Wing Attack",
        "Type": "Flying",
        "Damage": 9
      }
    ],
    "chargeAttacks": [
      {
        "name": "Aerial Ace",
        "Type": "Flying",
        "Damage": 30
      },
      {
        "name": "Air Cutter",
        "Type": "Flying",
        "Damage": 30
      },
      {
        "name": "Twister",
        "Type": "Dragon",
        "Damage": 25
      }
    ],
    "weight": {
      "Minimum": "26.25kg",
      "Maximum": "33.75kg"
    },
    "height": {
      "Minimum": "0.96m",
      "Maximum": "1.24m"
    },
    "buddyDistance": "1km (Flying)",
    "baseStamina": "126 stamina points.",
    "baseAttack": "117 attack points.",
    "baseDefense": "108 defense points.",
    "baseFleeRate": "9% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 16,
        "name": "Pidgey"
      }
    ],
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Pidgey candies"
    },
    "nextEvolutions": [
      {
        "number": 18,
        "name": "Pidgeot"
      }
    ],
    "maxCP": 1096,
    "maxHP": 1223
  },
  {
    "number": "018",
    "name": "Pidgeot",
    "generation": "Generation I",
    "types": [
      "Normal",
      "Flying"
    ],
    "resistant": [
      "Grass",
      "Ground",
      "Bug",
      "Ghost"
    ],
    "weaknesses": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "Previous evolution(s)": [
      {
        "number": 17,
        "name": "Pidgeotto"
      }
    ]
  },
  {
    "number": "019",
    "name": "Rattata",
    "generation": "Generation I",
    "about": "Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere.",
    "types": [
      "Normal"
    ],
    "resistant": [
      "Ghost"
    ],
    "weaknesses": [
      "Fighting"
    ],
    "fastAttacks": [
      {
        "name": "Quick Attack",
        "Type": "Normal",
        "Damage": 10
      },
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Body Slam",
        "Type": "Normal",
        "Damage": 40
      },
      {
        "name": "Dig",
        "Type": "Ground",
        "Damage": 70
      },
      {
        "name": "Hyper Fang",
        "Type": "Normal",
        "Damage": 35
      }
    ],
    "weight": {
      "Minimum": "3.06kg",
      "Maximum": "3.94kg"
    },
    "height": {
      "Minimum": "0.26m",
      "Maximum": "0.34m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "60 stamina points.",
    "baseAttack": "103 attack points.",
    "baseDefense": "70 defense points.",
    "baseFleeRate": "20% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 25,
      "name": "Rattata candies"
    },
    "nextEvolutions": [
      {
        "number": 20,
        "name": "Raticate"
      }
    ],
    "maxCP": 493,
    "maxHP": 581
  },
  {
    "number": "020",
    "name": "Raticate",
    "generation": "Generation I",
    "about": "Raticate’s sturdy fangs grow steadily. To keep them ground down, it gnaws on rocks and logs. It may even chew on the walls of houses.",
    "types": [
      "Normal"
    ],
    "resistant": [
      "Ghost"
    ],
    "weaknesses": [
      "Fighting"
    ],
    "fastAttacks": [
      {
        "name": "Bite",
        "Type": "Dark",
        "Damage": 6
      },
      {
        "name": "Quick Attack",
        "Type": "Normal",
        "Damage": 10
      }
    ],
    "chargeAttacks": [
      {
        "name": "Dig",
        "Type": "Ground",
        "Damage": 70
      },
      {
        "name": "Hyper Beam",
        "Type": "Normal",
        "Damage": 120
      },
      {
        "name": "Hyper Fang",
        "Type": "Normal",
        "Damage": 35
      }
    ],
    "weight": {
      "Minimum": "16.19kg",
      "Maximum": "20.81kg"
    },
    "height": {
      "Minimum": "0.61m",
      "Maximum": "0.79m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "110 stamina points.",
    "baseAttack": "161 attack points.",
    "baseDefense": "144 defense points.",
    "baseFleeRate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 19,
        "name": "Rattata"
      }
    ],
    "maxCP": 1304,
    "maxHP": 1444
  },
  {
    "number": "021",
    "name": "Spearow",
    "generation": "Generation I",
    "about": "Spearow has a very loud cry that can be heard over half a mile away. If its high, keening cry is heard echoing all around, it is a sign that they are warning each other of danger.",
    "types": [
      "Normal",
      "Flying"
    ],
    "resistant": [
      "Grass",
      "Ground",
      "Bug",
      "Ghost"
    ],
    "weaknesses": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Peck",
        "Type": "Flying",
        "Damage": 10
      },
      {
        "name": "Quick Attack",
        "Type": "Normal",
        "Damage": 10
      }
    ],
    "chargeAttacks": [
      {
        "name": "Aerial Ace",
        "Type": "Flying",
        "Damage": 30
      },
      {
        "name": "Drill Peck",
        "Type": "Flying",
        "Damage": 40
      },
      {
        "name": "Twister",
        "Type": "Dragon",
        "Damage": 25
      }
    ],
    "weight": {
      "Minimum": "1.75kg",
      "Maximum": "2.25kg"
    },
    "height": {
      "Minimum": "0.26m",
      "Maximum": "0.34m"
    },
    "buddyDistance": "1km (Shoulder)",
    "baseStamina": "80 stamina points.",
    "baseAttack": "112 attack points.",
    "baseDefense": "61 defense points.",
    "baseFleeRate": "15% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Spearow candies"
    },
    "nextEvolutions": [
      {
        "number": 22,
        "name": "Fearow"
      }
    ],
    "maxCP": 591,
    "maxHP": 686
  },
  {
    "number": "022",
    "name": "Fearow",
    "generation": "Generation I",
    "about": "Fearow is recognized by its long neck and elongated beak. They are conveniently shaped for catching prey in soil or water. It deftly moves its long and skinny beak to pluck prey.",
    "types": [
      "Normal",
      "Flying"
    ],
    "resistant": [
      "Grass",
      "Ground",
      "Bug",
      "Ghost"
    ],
    "weaknesses": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Peck",
        "Type": "Flying",
        "Damage": 10
      },
      {
        "name": "Steel Wing",
        "Type": "Steel",
        "Damage": 15
      }
    ],
    "chargeAttacks": [
      {
        "name": "Aerial Ace",
        "Type": "Flying",
        "Damage": 30
      },
      {
        "name": "Drill Run",
        "Type": "Ground",
        "Damage": 50
      },
      {
        "name": "Twister",
        "Type": "Dragon",
        "Damage": 25
      }
    ],
    "weight": {
      "Minimum": "33.25kg",
      "Maximum": "42.75kg"
    },
    "height": {
      "Minimum": "1.05m",
      "Maximum": "1.35m"
    },
    "buddyDistance": "1km (Flying)",
    "baseStamina": "130 stamina points.",
    "baseAttack": "182 attack points.",
    "baseDefense": "135 defense points.",
    "baseFleeRate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 21,
        "name": "Spearow"
      }
    ],
    "maxCP": 1592,
    "maxHP": 1746
  },
  {
    "number": "023",
    "name": "Ekans",
    "generation": "Generation I",
    "about": "Ekans curls itself up in a spiral while it rests. Assuming this position allows it to quickly respond to a threat from any direction with a glare from its upraised head.",
    "types": [
      "Poison"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "fastAttacks": [
      {
        "name": "Acid",
        "Type": "Poison",
        "Damage": 10
      },
      {
        "name": "Poison Sting",
        "Type": "Poison",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Gunk Shot",
        "Type": "Poison",
        "Damage": 65
      },
      {
        "name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      },
      {
        "name": "Wrap",
        "Type": "Normal",
        "Damage": 25
      }
    ],
    "weight": {
      "Minimum": "6.04kg",
      "Maximum": "7.76kg"
    },
    "height": {
      "Minimum": "1.75m",
      "Maximum": "2.25m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "70 stamina points.",
    "baseAttack": "110 attack points.",
    "baseDefense": "102 defense points.",
    "baseFleeRate": "15% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Ekans candies"
    },
    "nextEvolutions": [
      {
        "number": 24,
        "name": "Arbok"
      }
    ],
    "maxCP": 718,
    "maxHP": 824
  },
  {
    "number": "024",
    "name": "Arbok",
    "generation": "Generation I",
    "about": "This Pokémon is terrifically strong in order to constrict things with its body. It can even flatten steel oil drums. Once Arbok wraps its body around its foe, escaping its crunching embrace is impossible.",
    "types": [
      "Poison"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "fastAttacks": [
      {
        "name": "Acid",
        "Type": "Poison",
        "Damage": 10
      },
      {
        "name": "Bite",
        "Type": "Dark",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Dark Pulse",
        "Type": "Dark",
        "Damage": 45
      },
      {
        "name": "Gunk Shot",
        "Type": "Poison",
        "Damage": 65
      },
      {
        "name": "Sludge Wave",
        "Type": "Poison",
        "Damage": 70
      }
    ],
    "weight": {
      "Minimum": "56.88kg",
      "Maximum": "73.13kg"
    },
    "height": {
      "Minimum": "3.06m",
      "Maximum": "3.94m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "120 stamina points.",
    "baseAttack": "167 attack points.",
    "baseDefense": "158 defense points.",
    "baseFleeRate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 23,
        "name": "Ekans"
      }
    ],
    "maxCP": 1611,
    "maxHP": 1767
  },
  {
    "number": "025",
    "name": "Pikachu",
    "generation": "Generation I",
    "about": "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
    "types": [
      "Electric"
    ],
    "resistant": [
      "Electric",
      "Flying",
      "Steel"
    ],
    "weaknesses": [
      "Ground"
    ],
    "fastAttacks": [
      {
        "name": "Quick Attack",
        "Type": "Normal",
        "Damage": 10
      },
      {
        "name": "Thunder Shock",
        "Type": "Electric",
        "Damage": 5
      }
    ],
    "chargeAttacks": [
      {
        "name": "Discharge",
        "Type": "Electric",
        "Damage": 35
      },
      {
        "name": "Thunder",
        "Type": "Electric",
        "Damage": 100
      },
      {
        "name": "Thunderbolt",
        "Type": "Electric",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "5.25kg",
      "Maximum": "6.75kg"
    },
    "height": {
      "Minimum": "0.35m",
      "Maximum": "0.45m"
    },
    "buddyDistance": "1km (Shoulder)",
    "baseStamina": "70 stamina points.",
    "baseAttack": "112 attack points.",
    "baseDefense": "101 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 172,
        "name": "Pichu"
      }
    ],
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Pikachu candies"
    },
    "nextEvolutions": [
      {
        "number": 26,
        "name": "Raichu"
      }
    ],
    "maxCP": 777,
    "maxHP": 887
  },
  {
    "number": "026",
    "name": "Raichu",
    "generation": "Generation I",
    "about": "If the electrical sacs become excessively charged, Raichu plants its tail in the ground and discharges. Scorched patches of ground will be found near this Pokémon's nest.",
    "types": [
      "Electric"
    ],
    "resistant": [
      "Electric",
      "Flying",
      "Steel"
    ],
    "weaknesses": [
      "Ground"
    ],
    "fastAttacks": [
      {
        "name": "Spark",
        "Type": "Electric",
        "Damage": 7
      },
      {
        "name": "Thunder Shock",
        "Type": "Electric",
        "Damage": 5
      }
    ],
    "chargeAttacks": [
      {
        "name": "Brick Break",
        "Type": "Fighting",
        "Damage": 30
      },
      {
        "name": "Thunder",
        "Type": "Electric",
        "Damage": 100
      },
      {
        "name": "Thunder Punch",
        "Type": "Electric",
        "Damage": 40
      }
    ],
    "weight": {
      "Minimum": "26.25kg",
      "Maximum": "33.75kg"
    },
    "height": {
      "Minimum": "0.7m",
      "Maximum": "0.9m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "120 stamina points.",
    "baseAttack": "193 attack points.",
    "baseDefense": "165 defense points.",
    "baseFleeRate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 172,
        "name": "Pichu"
      },
      {
        "number": 25,
        "name": "Pikachu"
      }
    ],
    "maxCP": 1859,
    "maxHP": 2028
  },
  {
    "number": "027",
    "name": "Sandshrew",
    "generation": "Generation I",
    "about": "Sandshrew's body is configured to absorb water without waste, enabling it to survive in an arid desert. This Pokémon curls up to protect itself from its enemies.",
    "types": [
      "Ground"
    ],
    "resistant": [
      "Electric",
      "Poison",
      "Rock"
    ],
    "weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "fastAttacks": [
      {
        "name": "Mud Shot",
        "Type": "Ground",
        "Damage": 6
      },
      {
        "name": "Scratch",
        "Type": "Normal",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Dig",
        "Type": "Ground",
        "Damage": 70
      },
      {
        "name": "Rock Slide",
        "Type": "Rock",
        "Damage": 50
      },
      {
        "name": "Rock Tomb",
        "Type": "Rock",
        "Damage": 30
      }
    ],
    "weight": {
      "Minimum": "10.5kg",
      "Maximum": "13.5kg"
    },
    "height": {
      "Minimum": "0.53m",
      "Maximum": "0.68m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "100 stamina points.",
    "baseAttack": "126 attack points.",
    "baseDefense": "145 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Sandshrew candies"
    },
    "nextEvolutions": [
      {
        "number": 28,
        "name": "Sandslash"
      }
    ],
    "maxCP": 695,
    "maxHP": 798
  },
  {
    "number": "028",
    "name": "Sandslash",
    "generation": "Generation I",
    "about": "Sandslash's body is covered by tough spikes, which are hardened sections of its hide. Once a year, the old spikes fall out, to be replaced with new spikes that grow out from beneath the old ones.",
    "types": [
      "Ground"
    ],
    "resistant": [
      "Electric",
      "Poison",
      "Rock"
    ],
    "weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "fastAttacks": [
      {
        "name": "Metal Claw",
        "Type": "Steel",
        "Damage": 8
      },
      {
        "name": "Mud Shot",
        "Type": "Ground",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Bulldoze",
        "Type": "Ground",
        "Damage": 35
      },
      {
        "name": "Earthquake",
        "Type": "Ground",
        "Damage": 100
      },
      {
        "name": "Rock Tomb",
        "Type": "Rock",
        "Damage": 30
      }
    ],
    "weight": {
      "Minimum": "25.81kg",
      "Maximum": "33.19kg"
    },
    "height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "150 stamina points.",
    "baseAttack": "182 attack points.",
    "baseDefense": "202 defense points.",
    "baseFleeRate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 27,
        "name": "Sandshrew"
      }
    ],
    "maxCP": 1654,
    "maxHP": 1810
  },
  {
    "number": "029",
    "name": "Nidoran ♀",
    "generation": "Generation I",
    "about": "Nidoran♀ has barbs that secrete a powerful poison. They are thought to have developed as protection for this small-bodied Pokémon. When enraged, it releases a horrible toxin from its horn.",
    "types": [
      "Poison"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "fastAttacks": [
      {
        "name": "Bite",
        "Type": "Dark",
        "Damage": 6
      },
      {
        "name": "Poison Sting",
        "Type": "Poison",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Body Slam",
        "Type": "Normal",
        "Damage": 40
      },
      {
        "name": "Poison Fang",
        "Type": "Poison",
        "Damage": 25
      },
      {
        "name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "6.13kg",
      "Maximum": "7.88kg"
    },
    "height": {
      "Minimum": "0.35m",
      "Maximum": "0.45m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "110 stamina points.",
    "baseAttack": "86 attack points.",
    "baseDefense": "94 defense points.",
    "baseFleeRate": "15% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 25,
      "name": "Nidoran Female candies"
    },
    "nextEvolutions": [
      {
        "number": 30,
        "name": "Nidorina"
      },
      {
        "number": 31,
        "name": "Nidoqueen"
      }
    ],
    "maxCP": 768,
    "maxHP": 876
  },
  {
    "number": "030",
    "name": "Nidorina",
    "generation": "Generation I",
    "about": "When Nidorina are with their friends or family, they keep their barbs tucked away to prevent hurting each other. This Pokémon appears to become nervous if separated from the others.",
    "types": [
      "Poison"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "fastAttacks": [
      {
        "name": "Bite",
        "Type": "Dark",
        "Damage": 6
      },
      {
        "name": "Poison Sting",
        "Type": "Poison",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Dig",
        "Type": "Ground",
        "Damage": 70
      },
      {
        "name": "Poison Fang",
        "Type": "Poison",
        "Damage": 25
      },
      {
        "name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "17.5kg",
      "Maximum": "22.5kg"
    },
    "height": {
      "Minimum": "0.7m",
      "Maximum": "0.9m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "140 stamina points.",
    "baseAttack": "117 attack points.",
    "baseDefense": "126 defense points.",
    "baseFleeRate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 29,
        "name": "Nidoran"
      }
    ],
    "nextEvolutionReq": {
      "Amount": 100,
      "name": "Nidoran Female candies"
    },
    "nextEvolutions": [
      {
        "number": 31,
        "name": "Nidoqueen"
      }
    ],
    "maxCP": 1267,
    "maxHP": 1404
  },
  {
    "number": "031",
    "name": "Nidoqueen",
    "generation": "Generation I",
    "about": "Nidoqueen's body is encased in extremely hard scales. It is adept at sending foes flying with harsh tackles. This Pokémon is at its strongest when it is defending its young.",
    "types": [
      "Poison",
      "Ground"
    ],
    "resistant": [
      "Electric",
      "Fighting",
      "Poison",
      "Bug",
      "Rock",
      "Fairy"
    ],
    "weaknesses": [
      "Water",
      "Ice",
      "Ground",
      "Psychic"
    ],
    "fastAttacks": [
      {
        "name": "Bite",
        "Type": "Dark",
        "Damage": 6
      },
      {
        "name": "Poison Jab",
        "Type": "Poison",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Earthquake",
        "Type": "Ground",
        "Damage": 100
      },
      {
        "name": "Sludge Wave",
        "Type": "Poison",
        "Damage": 70
      },
      {
        "name": "Stone Edge",
        "Type": "Rock",
        "Damage": 80
      }
    ],
    "weight": {
      "Minimum": "52.5kg",
      "Maximum": "67.5kg"
    },
    "height": {
      "Minimum": "1.14m",
      "Maximum": "1.46m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "180 stamina points.",
    "baseAttack": "180 attack points.",
    "baseDefense": "174 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 29,
        "name": "Nidoran"
      },
      {
        "number": 30,
        "name": "Nidorina"
      }
    ],
    "maxCP": 2301,
    "maxHP": 2485
  },
  {
    "number": "032",
    "name": "Nidoran ♂",
    "generation": "Generation I",
    "about": "Nidoran♂ has developed muscles for moving its ears. Thanks to them, the ears can be freely moved in any direction. Even the slightest sound does not escape this Pokémon's notice.",
    "types": [
      "Poison"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "fastAttacks": [
      {
        "name": "Peck",
        "Type": "Flying",
        "Damage": 10
      },
      {
        "name": "Poison Sting",
        "Type": "Poison",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Body Slam",
        "Type": "Normal",
        "Damage": 40
      },
      {
        "name": "Horn Attack",
        "Type": "Normal",
        "Damage": 25
      },
      {
        "name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "7.88kg",
      "Maximum": "10.13kg"
    },
    "height": {
      "Minimum": "0.44m",
      "Maximum": "0.56m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "92 stamina points.",
    "baseAttack": "105 attack points.",
    "baseDefense": "76 defense points.",
    "baseFleeRate": "15% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 25,
      "name": "Nidoran Male candies"
    },
    "nextEvolutions": [
      {
        "number": 33,
        "name": "Nidorino"
      },
      {
        "number": 34,
        "name": "Nidoking"
      }
    ],
    "maxCP": 737,
    "maxHP": 843
  },
  {
    "number": "033",
    "name": "Nidorino",
    "generation": "Generation I",
    "about": "Nidorino has a horn that is harder than a diamond. If it senses a hostile presence, all the barbs on its back bristle up at once, and it challenges the foe with all its might.",
    "types": [
      "Poison"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "fastAttacks": [
      {
        "name": "Poison Jab",
        "Type": "Poison",
        "Damage": 12
      },
      {
        "name": "Poison Sting",
        "Type": "Poison",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Dig",
        "Type": "Ground",
        "Damage": 70
      },
      {
        "name": "Horn Attack",
        "Type": "Normal",
        "Damage": 25
      },
      {
        "name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "17.06kg",
      "Maximum": "21.94kg"
    },
    "height": {
      "Minimum": "0.79m",
      "Maximum": "1.01m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "122 stamina points.",
    "baseAttack": "137 attack points.",
    "baseDefense": "112 defense points.",
    "baseFleeRate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 32,
        "name": "Nidoran"
      }
    ],
    "nextEvolutionReq": {
      "Amount": 100,
      "name": "Nidoran Male candies"
    },
    "nextEvolutions": [
      {
        "number": 34,
        "name": "Nidoking"
      }
    ],
    "maxCP": 1236,
    "maxHP": 1372
  },
  {
    "number": "034",
    "name": "Nidoking",
    "generation": "Generation I",
    "about": "Nidoking's thick tail packs enormously destructive power. With one swing, it can topple a metal transmission tower. Once this Pokémon goes on a rampage, there is no stopping it.",
    "types": [
      "Poison",
      "Ground"
    ],
    "resistant": [
      "Electric",
      "Fighting",
      "Poison",
      "Bug",
      "Rock",
      "Fairy"
    ],
    "weaknesses": [
      "Water",
      "Ice",
      "Ground",
      "Psychic"
    ],
    "fastAttacks": [
      {
        "name": "Fury Cutter",
        "Type": "Bug",
        "Damage": 3
      },
      {
        "name": "Poison Jab",
        "Type": "Poison",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Earthquake",
        "Type": "Ground",
        "Damage": 100
      },
      {
        "name": "Megahorn",
        "Type": "Bug",
        "Damage": 80
      },
      {
        "name": "Sludge Wave",
        "Type": "Poison",
        "Damage": 70
      }
    ],
    "weight": {
      "Minimum": "54.25kg",
      "Maximum": "69.75kg"
    },
    "height": {
      "Minimum": "1.22m",
      "Maximum": "1.57m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "162 stamina points.",
    "baseAttack": "204 attack points.",
    "baseDefense": "157 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 32,
        "name": "Nidoran"
      },
      {
        "number": 33,
        "name": "Nidorino"
      }
    ],
    "maxCP": 2291,
    "maxHP": 2475
  },
  {
    "number": "035",
    "name": "Clefairy",
    "generation": "Generation I",
    "about": "On every night of a full moon, groups of this Pokémon come out to play. When dawn arrives, the tired Clefairy return to their quiet mountain retreats and go to sleep nestled up against each other.",
    "types": [
      "Fairy"
    ],
    "resistant": [
      "Fighting",
      "Bug",
      "Dragon",
      "Dark"
    ],
    "weaknesses": [
      "Poison",
      "Steel"
    ],
    "fastAttacks": [
      {
        "name": "Pound",
        "Type": "Normal",
        "Damage": 7
      },
      {
        "name": "Zen Headbutt",
        "Type": "Psychic",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Body Slam",
        "Type": "Normal",
        "Damage": 40
      },
      {
        "name": "Disarming Voice",
        "Type": "Fairy",
        "Damage": 25
      },
      {
        "name": "Moonblast",
        "Type": "Fairy",
        "Damage": 85
      }
    ],
    "weight": {
      "Minimum": "6.56kg",
      "Maximum": "8.44kg"
    },
    "height": {
      "Minimum": "0.53m",
      "Maximum": "0.68m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "140 stamina points.",
    "baseAttack": "107 attack points.",
    "baseDefense": "116 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 173,
        "name": "Cleffa"
      }
    ],
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Clefairy candies"
    },
    "nextEvolutions": [
      {
        "number": 36,
        "name": "Clefable"
      }
    ],
    "maxCP": 1074,
    "maxHP": 1200
  },
  {
    "number": "036",
    "name": "Clefable",
    "generation": "Generation I",
    "about": "Clefable moves by skipping lightly as if it were flying using its wings. Its bouncy step even lets it walk on water. It is known to take strolls on lakes on quiet, moonlit nights.",
    "types": [
      "Fairy"
    ],
    "resistant": [
      "Fighting",
      "Bug",
      "Dragon",
      "Dark"
    ],
    "weaknesses": [
      "Poison",
      "Steel"
    ],
    "fastAttacks": [
      {
        "name": "Pound",
        "Type": "Normal",
        "Damage": 7
      },
      {
        "name": "Zen Headbutt",
        "Type": "Psychic",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Dazzling Gleam",
        "Type": "Fairy",
        "Damage": 55
      },
      {
        "name": "Moonblast",
        "Type": "Fairy",
        "Damage": 85
      },
      {
        "name": "Psychic",
        "Type": "Psychic",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "35kg",
      "Maximum": "45kg"
    },
    "height": {
      "Minimum": "1.14m",
      "Maximum": "1.46m"
    },
    "buddyDistance": "1km (Big)",
    "baseStamina": "190 stamina points.",
    "baseAttack": "178 attack points.",
    "baseDefense": "171 defense points.",
    "baseFleeRate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 173,
        "name": "Cleffa"
      },
      {
        "number": 35,
        "name": "Clefairy"
      }
    ],
    "maxCP": 2217,
    "maxHP": 2397
  },
  {
    "number": "037",
    "name": "Vulpix",
    "generation": "Generation I",
    "about": "At the time of its birth, Vulpix has one white tail. The tail separates into six if this Pokémon receives plenty of love from its trainer. The six tails become magnificently curled.",
    "types": [
      "Fire"
    ],
    "resistant": [
      "Fire",
      "Grass",
      "Ice",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Ember",
        "Type": "Fire",
        "Damage": 10
      },
      {
        "name": "Quick Attack",
        "Type": "Normal",
        "Damage": 10
      }
    ],
    "chargeAttacks": [
      {
        "name": "Body Slam",
        "Type": "Normal",
        "Damage": 40
      },
      {
        "name": "Flame Charge",
        "Type": "Fire",
        "Damage": 25
      },
      {
        "name": "Flamethrower",
        "Type": "Fire",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "8.66kg",
      "Maximum": "11.14kg"
    },
    "height": {
      "Minimum": "0.53m",
      "Maximum": "0.68m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "76 stamina points.",
    "baseAttack": "96 attack points.",
    "baseDefense": "122 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Vulpi"
    },
    "nextEvolutions": [
      {
        "number": 38,
        "name": "Ninetales"
      }
    ],
    "maxCP": 725,
    "maxHP": 831
  },
  {
    "number": "038",
    "name": "Ninetales",
    "generation": "Generation I",
    "about": "Ninetales casts a sinister light from its bright red eyes to gain total control over its foe's mind. This Pokémon is said to live for one thousand years.",
    "types": [
      "Fire"
    ],
    "resistant": [
      "Fire",
      "Grass",
      "Ice",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Ember",
        "Type": "Fire",
        "Damage": 10
      },
      {
        "name": "Feint Attack",
        "Type": "Dark",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Fire Blast",
        "Type": "Fire",
        "Damage": 100
      },
      {
        "name": "Flamethrower",
        "Type": "Fire",
        "Damage": 55
      },
      {
        "name": "Heat Wave",
        "Type": "Fire",
        "Damage": 80
      }
    ],
    "weight": {
      "Minimum": "17.41kg",
      "Maximum": "22.39kg"
    },
    "height": {
      "Minimum": "0.96m",
      "Maximum": "1.24m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "146 stamina points.",
    "baseAttack": "169 attack points.",
    "baseDefense": "204 defense points.",
    "baseFleeRate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 37,
        "name": "Vulpix"
      }
    ],
    "maxCP": 2015,
    "maxHP": 2188
  },
  {
    "number": "039",
    "name": "Jigglypuff",
    "generation": "Generation I",
    "about": "Jigglypuff's vocal cords can freely adjust the wavelength of its voice. This Pokémon uses this ability to sing at precisely the right wavelength to make its foes most drowsy.",
    "types": [
      "Normal",
      "Fairy"
    ],
    "resistant": [
      "Bug",
      "Ghost",
      "Dragon",
      "Dark"
    ],
    "weaknesses": [
      "Poison",
      "Steel"
    ],
    "fastAttacks": [
      {
        "name": "Feint Attack",
        "Type": "Dark",
        "Damage": 12
      },
      {
        "name": "Pound",
        "Type": "Normal",
        "Damage": 7
      }
    ],
    "chargeAttacks": [
      {
        "name": "Body Slam",
        "Type": "Normal",
        "Damage": 40
      },
      {
        "name": "Dazzling Gleam",
        "Type": "Fairy",
        "Damage": 55
      },
      {
        "name": "Disarming Voice",
        "Type": "Fairy",
        "Damage": 25
      }
    ],
    "weight": {
      "Minimum": "4.81kg",
      "Maximum": "6.19kg"
    },
    "height": {
      "Minimum": "0.44m",
      "Maximum": "0.56m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "230 stamina points.",
    "baseAttack": "80 attack points.",
    "baseDefense": "44 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 174,
        "name": "Igglybuff"
      }
    ],
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Jigglypuff candies"
    },
    "nextEvolutions": [
      {
        "number": 40,
        "name": "Wigglytuff"
      }
    ],
    "maxCP": 796,
    "maxHP": 917
  },
  {
    "number": "040",
    "name": "Wigglytuff",
    "generation": "Generation I",
    "about": "Wigglytuff has large, saucerlike eyes. The surfaces of its eyes are always covered with a thin layer of tears. If any dust gets in this Pokémon's eyes, it is quickly washed away.",
    "types": [
      "Normal",
      "Fairy"
    ],
    "resistant": [
      "Bug",
      "Ghost",
      "Dragon",
      "Dark"
    ],
    "weaknesses": [
      "Poison",
      "Steel"
    ],
    "fastAttacks": [
      {
        "name": "Feint Attack",
        "Type": "Dark",
        "Damage": 12
      },
      {
        "name": "Pound",
        "Type": "Normal",
        "Damage": 7
      }
    ],
    "chargeAttacks": [
      {
        "name": "Dazzling Gleam",
        "Type": "Fairy",
        "Damage": 55
      },
      {
        "name": "Hyper Beam",
        "Type": "Normal",
        "Damage": 120
      },
      {
        "name": "Play Rough",
        "Type": "Fairy",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "10.5kg",
      "Maximum": "13.5kg"
    },
    "height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "buddyDistance": "1km (Big)",
    "baseStamina": "280 stamina points.",
    "baseAttack": "156 attack points.",
    "baseDefense": "93 defense points.",
    "baseFleeRate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 174,
        "name": "Igglybuff"
      },
      {
        "number": 39,
        "name": "Jigglypuff"
      }
    ],
    "maxCP": 1997,
    "maxHP": 2177
  },
  {
    "number": "041",
    "name": "Zubat",
    "generation": "Generation I",
    "about": "Zubat remains quietly unmoving in a dark spot during the bright daylight hours. It does so because prolonged exposure to the sun causes its body to become slightly burned.",
    "types": [
      "Poison",
      "Flying"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "weaknesses": [
      "Electric",
      "Ice",
      "Psychic",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Bite",
        "Type": "Dark",
        "Damage": 6
      },
      {
        "name": "Quick Attack",
        "Type": "Normal",
        "Damage": 10
      }
    ],
    "chargeAttacks": [
      {
        "name": "Air Cutter",
        "Type": "Flying",
        "Damage": 30
      },
      {
        "name": "Poison Fang",
        "Type": "Poison",
        "Damage": 25
      },
      {
        "name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "6.56kg",
      "Maximum": "8.44kg"
    },
    "height": {
      "Minimum": "0.7m",
      "Maximum": "0.9m"
    },
    "buddyDistance": "1km (Flying)",
    "baseStamina": "80 stamina points.",
    "baseAttack": "83 attack points.",
    "baseDefense": "76 defense points.",
    "baseFleeRate": "20% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Zubat candies"
    },
    "nextEvolutions": [
      {
        "number": 42,
        "name": "Golbat"
      },
      {
        "number": 169,
        "name": "Crobat"
      }
    ],
    "maxCP": 550,
    "maxHP": 642
  },
  {
    "number": "042",
    "name": "Golbat",
    "generation": "Generation I",
    "about": "Golbat loves to drink the blood of living things. It is particularly active in the pitch black of night. This Pokémon flits around in the night skies, seeking fresh blood.",
    "types": [
      "Poison",
      "Flying"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "weaknesses": [
      "Electric",
      "Ice",
      "Psychic",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Bite",
        "Type": "Dark",
        "Damage": 6
      },
      {
        "name": "Wing Attack",
        "Type": "Flying",
        "Damage": 9
      }
    ],
    "chargeAttacks": [
      {
        "name": "Air Cutter",
        "Type": "Flying",
        "Damage": 30
      },
      {
        "name": "Ominous Wind",
        "Type": "Ghost",
        "Damage": 30
      },
      {
        "name": "Poison Fang",
        "Type": "Poison",
        "Damage": 25
      }
    ],
    "weight": {
      "Minimum": "48.13kg",
      "Maximum": "61.88kg"
    },
    "height": {
      "Minimum": "1.4m",
      "Maximum": "1.8m"
    },
    "buddyDistance": "1km (Flying)",
    "baseStamina": "150 stamina points.",
    "baseAttack": "161 attack points.",
    "baseDefense": "153 defense points.",
    "baseFleeRate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 41,
        "name": "Zubat"
      }
    ],
    "nextEvolutions": [
      {
        "number": 169,
        "name": "Crobat"
      }
    ],
    "maxCP": 1760,
    "maxHP": 1921
  },
  {
    "number": "043",
    "name": "Oddish",
    "generation": "Generation I",
    "about": "During the daytime, Oddish buries itself in soil to absorb nutrients from the ground using its entire body. The more fertile the soil, the glossier its leaves become.",
    "types": [
      "Grass",
      "Poison"
    ],
    "resistant": [
      "Water",
      "Electric",
      "Grass",
      "Fighting",
      "Fairy"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "fastAttacks": [
      {
        "name": "Acid",
        "Type": "Poison",
        "Damage": 10
      },
      {
        "name": "Razor Leaf",
        "Type": "Grass",
        "Damage": 15
      }
    ],
    "chargeAttacks": [
      {
        "name": "Moonblast",
        "Type": "Fairy",
        "Damage": 85
      },
      {
        "name": "Seed Bomb",
        "Type": "Grass",
        "Damage": 40
      },
      {
        "name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "4.73kg",
      "Maximum": "6.08kg"
    },
    "height": {
      "Minimum": "0.44m",
      "Maximum": "0.56m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "90 stamina points.",
    "baseAttack": "131 attack points.",
    "baseDefense": "116 defense points.",
    "baseFleeRate": "15% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 25,
      "name": "Oddish candies"
    },
    "nextEvolutions": [
      {
        "number": 44,
        "name": "Gloom"
      },
      {
        "number": 45,
        "name": "Vileplume"
      },
      {
        "number": 182,
        "name": "Bellossom"
      }
    ],
    "maxCP": 1023,
    "maxHP": 1148
  },
  {
    "number": "044",
    "name": "Gloom",
    "generation": "Generation I",
    "about": "Gloom releases a foul fragrance from the pistil of its flower. When faced with danger, the stench worsens. If this Pokémon is feeling calm and secure, it does not release its usual stinky aroma.",
    "types": [
      "Grass",
      "Poison"
    ],
    "resistant": [
      "Water",
      "Electric",
      "Grass",
      "Fighting",
      "Fairy"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "fastAttacks": [
      {
        "name": "Acid",
        "Type": "Poison",
        "Damage": 10
      },
      {
        "name": "Razor Leaf",
        "Type": "Grass",
        "Damage": 15
      }
    ],
    "chargeAttacks": [
      {
        "name": "Moonblast",
        "Type": "Fairy",
        "Damage": 85
      },
      {
        "name": "Petal Blizzard",
        "Type": "Grass",
        "Damage": 65
      },
      {
        "name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "7.53kg",
      "Maximum": "9.68kg"
    },
    "height": {
      "Minimum": "0.7m",
      "Maximum": "0.9m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "120 stamina points.",
    "baseAttack": "153 attack points.",
    "baseDefense": "139 defense points.",
    "baseFleeRate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 43,
        "name": "Oddish"
      }
    ],
    "nextEvolutionReq": {
      "Amount": 100,
      "name": "Oddish candies"
    },
    "nextEvolutions": [
      {
        "number": 45,
        "name": "Vileplume"
      },
      {
        "number": 182,
        "name": "Bellossom"
      }
    ],
    "maxCP": 1537,
    "maxHP": 1689
  },
  {
    "number": "045",
    "name": "Vileplume",
    "generation": "Generation I",
    "about": "Vileplume's toxic pollen triggers atrocious allergy attacks. That's why it is advisable never to approach any attractive flowers in a jungle, however pretty they may be.",
    "types": [
      "Grass",
      "Poison"
    ],
    "resistant": [
      "Water",
      "Electric",
      "Grass",
      "Fighting",
      "Fairy"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "fastAttacks": [
      {
        "name": "Acid",
        "Type": "Poison",
        "Damage": 10
      },
      {
        "name": "Razor Leaf",
        "Type": "Grass",
        "Damage": 15
      }
    ],
    "chargeAttacks": [
      {
        "name": "Moonblast",
        "Type": "Fairy",
        "Damage": 85
      },
      {
        "name": "Petal Blizzard",
        "Type": "Grass",
        "Damage": 65
      },
      {
        "name": "Solar Beam",
        "Type": "Grass",
        "Damage": 120
      }
    ],
    "weight": {
      "Minimum": "16.28kg",
      "Maximum": "20.93kg"
    },
    "height": {
      "Minimum": "1.05m",
      "Maximum": "1.35m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "150 stamina points.",
    "baseAttack": "202 attack points.",
    "baseDefense": "170 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 43,
        "name": "Oddish"
      },
      {
        "number": 44,
        "name": "Gloom"
      }
    ],
    "maxCP": 2307,
    "maxHP": 2492
  },
  {
    "number": "046",
    "name": "Paras",
    "generation": "Generation I",
    "about": "Paras has parasitic mushrooms growing on its back called tochukaso. They grow large by drawing nutrients from this Bug Pokémon host. They are highly valued as a medicine for extending life.",
    "types": [
      "Bug",
      "Grass"
    ],
    "resistant": [
      "Water",
      "Electric",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Bug Bite",
        "Type": "Bug",
        "Damage": 5
      },
      {
        "name": "Scratch",
        "Type": "Normal",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Cross Poison",
        "Type": "Poison",
        "Damage": 25
      },
      {
        "name": "Seed Bomb",
        "Type": "Grass",
        "Damage": 40
      },
      {
        "name": "X Scissor",
        "Type": "Bug",
        "Damage": 35
      }
    ],
    "weight": {
      "Minimum": "4.73kg",
      "Maximum": "6.08kg"
    },
    "height": {
      "Minimum": "0.26m",
      "Maximum": "0.34m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "70 stamina points.",
    "baseAttack": "121 attack points.",
    "baseDefense": "99 defense points.",
    "baseFleeRate": "15% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Paras candies"
    },
    "nextEvolutions": [
      {
        "number": 47,
        "name": "Parasect"
      }
    ],
    "maxCP": 804,
    "maxHP": 916
  },
  {
    "number": "047",
    "name": "Parasect",
    "generation": "Generation I",
    "about": "Parasect is known to infest large trees en masse and drain nutrients from the lower trunk and roots. When an infested tree dies, they move onto another tree all at once.",
    "types": [
      "Bug",
      "Grass"
    ],
    "resistant": [
      "Water",
      "Electric",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Bug Bite",
        "Type": "Bug",
        "Damage": 5
      },
      {
        "name": "Fury Cutter",
        "Type": "Bug",
        "Damage": 3
      }
    ],
    "chargeAttacks": [
      {
        "name": "Cross Poison",
        "Type": "Poison",
        "Damage": 25
      },
      {
        "name": "Solar Beam",
        "Type": "Grass",
        "Damage": 120
      },
      {
        "name": "X Scissor",
        "Type": "Bug",
        "Damage": 35
      }
    ],
    "weight": {
      "Minimum": "25.81kg",
      "Maximum": "33.19kg"
    },
    "height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "120 stamina points.",
    "baseAttack": "165 attack points.",
    "baseDefense": "146 defense points.",
    "baseFleeRate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 46,
        "name": "Paras"
      }
    ],
    "maxCP": 1592,
    "maxHP": 1747
  },
  {
    "number": "048",
    "name": "Venonat",
    "generation": "Generation I",
    "about": "Venonat is said to have evolved with a coat of thin, stiff hair that covers its entire body for protection. It possesses large eyes that never fail to spot even miniscule prey.",
    "types": [
      "Bug",
      "Poison"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "weaknesses": [
      "Fire",
      "Flying",
      "Psychic",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Bug Bite",
        "Type": "Bug",
        "Damage": 5
      },
      {
        "name": "Confusion",
        "Type": "Psychic",
        "Damage": 15
      }
    ],
    "chargeAttacks": [
      {
        "name": "Poison Fang",
        "Type": "Poison",
        "Damage": 25
      },
      {
        "name": "Psybeam",
        "Type": "Psychic",
        "Damage": 40
      },
      {
        "name": "Signal Beam",
        "Type": "Bug",
        "Damage": 45
      }
    ],
    "weight": {
      "Minimum": "26.25kg",
      "Maximum": "33.75kg"
    },
    "height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "120 stamina points.",
    "baseAttack": "100 attack points.",
    "baseDefense": "102 defense points.",
    "baseFleeRate": "15% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Venonat candies"
    },
    "nextEvolutions": [
      {
        "number": 49,
        "name": "Venomoth"
      }
    ],
    "maxCP": 912,
    "maxHP": 1029
  },
  {
    "number": "049",
    "name": "Venomoth",
    "generation": "Generation I",
    "about": "Venomoth is nocturnal—it is a Pokémon that only becomes active at night. Its favorite prey are small insects that gather around streetlights, attracted by the light in the darkness.",
    "types": [
      "Bug",
      "Poison"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "weaknesses": [
      "Fire",
      "Flying",
      "Psychic",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Bug Bite",
        "Type": "Bug",
        "Damage": 5
      },
      {
        "name": "Confusion",
        "Type": "Psychic",
        "Damage": 15
      }
    ],
    "chargeAttacks": [
      {
        "name": "Bug Buzz",
        "Type": "Bug",
        "Damage": 75
      },
      {
        "name": "Poison Fang",
        "Type": "Poison",
        "Damage": 25
      },
      {
        "name": "Psychic",
        "Type": "Psychic",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "10.94kg",
      "Maximum": "14.06kg"
    },
    "height": {
      "Minimum": "1.31m",
      "Maximum": "1.69m"
    },
    "buddyDistance": "3km (Flying)",
    "baseStamina": "140 stamina points.",
    "baseAttack": "179 attack points.",
    "baseDefense": "150 defense points.",
    "baseFleeRate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 48,
        "name": "Venonat"
      }
    ],
    "maxCP": 1730,
    "maxHP": 1890
  },
  {
    "number": "050",
    "name": "Diglett",
    "generation": "Generation I",
    "about": "Diglett are raised in most farms. The reason is simple—wherever this Pokémon burrows, the soil is left perfectly tilled for planting crops. This soil is made ideal for growing delicious vegetables.",
    "types": [
      "Ground"
    ],
    "resistant": [
      "Electric",
      "Poison",
      "Rock"
    ],
    "weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "fastAttacks": [
      {
        "name": "Mud Slap",
        "Type": "Ground",
        "Damage": 15
      },
      {
        "name": "Scratch",
        "Type": "Normal",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Dig",
        "Type": "Ground",
        "Damage": 70
      },
      {
        "name": "Mud Bomb",
        "Type": "Ground",
        "Damage": 30
      },
      {
        "name": "Rock Tomb",
        "Type": "Rock",
        "Damage": 30
      }
    ],
    "weight": {
      "Minimum": "0.7kg",
      "Maximum": "0.9kg"
    },
    "height": {
      "Minimum": "0.18m",
      "Maximum": "0.23m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "20 stamina points.",
    "baseAttack": "109 attack points.",
    "baseDefense": "88 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Diglett candies"
    },
    "nextEvolutions": [
      {
        "number": 51,
        "name": "Dugtrio"
      }
    ],
    "maxCP": 365,
    "maxHP": 456
  },
  {
    "number": "051",
    "name": "Dugtrio",
    "generation": "Generation I",
    "about": "Dugtrio are actually triplets that emerged from one body. As a result, each triplet thinks exactly like the other two triplets. They work cooperatively to burrow endlessly.",
    "types": [
      "Ground"
    ],
    "resistant": [
      "Electric",
      "Poison",
      "Rock"
    ],
    "weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "fastAttacks": [
      {
        "name": "Mud Slap",
        "Type": "Ground",
        "Damage": 15
      },
      {
        "name": "Sucker Punch",
        "Type": "Dark",
        "Damage": 7
      }
    ],
    "chargeAttacks": [
      {
        "name": "Earthquake",
        "Type": "Ground",
        "Damage": 100
      },
      {
        "name": "Mud Bomb",
        "Type": "Ground",
        "Damage": 30
      },
      {
        "name": "Stone Edge",
        "Type": "Rock",
        "Damage": 80
      }
    ],
    "weight": {
      "Minimum": "29.14kg",
      "Maximum": "37.46kg"
    },
    "height": {
      "Minimum": "0.61m",
      "Maximum": "0.79m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "70 stamina points.",
    "baseAttack": "167 attack points.",
    "baseDefense": "147 defense points.",
    "baseFleeRate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 50,
        "name": "Diglett"
      }
    ],
    "maxCP": 1038,
    "maxHP": 1168
  },
  {
    "number": "052",
    "name": "Meowth",
    "generation": "Generation I",
    "about": "Meowth withdraws its sharp claws into its paws to slinkily sneak about without making any incriminating footsteps. For some reason, this Pokémon loves shiny coins that glitter with light.",
    "types": [
      "Normal"
    ],
    "resistant": [
      "Ghost"
    ],
    "weaknesses": [
      "Fighting"
    ],
    "fastAttacks": [
      {
        "name": "Bite",
        "Type": "Dark",
        "Damage": 6
      },
      {
        "name": "Scratch",
        "Type": "Normal",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Body Slam",
        "Type": "Normal",
        "Damage": 40
      },
      {
        "name": "Dark Pulse",
        "Type": "Dark",
        "Damage": 45
      },
      {
        "name": "Night Slash",
        "Type": "Dark",
        "Damage": 30
      }
    ],
    "weight": {
      "Minimum": "3.67kg",
      "Maximum": "4.72kg"
    },
    "height": {
      "Minimum": "0.35m",
      "Maximum": "0.45m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "80 stamina points.",
    "baseAttack": "92 attack points.",
    "baseDefense": "81 defense points.",
    "baseFleeRate": "15% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Meowth candies"
    },
    "nextEvolutions": [
      {
        "number": 53,
        "name": "Persian"
      }
    ],
    "maxCP": 656,
    "maxHP": 756
  },
  {
    "number": "053",
    "name": "Persian",
    "generation": "Generation I",
    "about": "Persian has six bold whiskers that give it a look of toughness. The whiskers sense air movements to determine what is in the Pokémon's surrounding vicinity. It becomes docile if grabbed by the whiskers.",
    "types": [
      "Normal"
    ],
    "resistant": [
      "Ghost"
    ],
    "weaknesses": [
      "Fighting"
    ],
    "fastAttacks": [
      {
        "name": "Feint Attack",
        "Type": "Dark",
        "Damage": 12
      },
      {
        "name": "Scratch",
        "Type": "Normal",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Night Slash",
        "Type": "Dark",
        "Damage": 30
      },
      {
        "name": "Play Rough",
        "Type": "Fairy",
        "Damage": 55
      },
      {
        "name": "Power Gem",
        "Type": "Rock",
        "Damage": 40
      }
    ],
    "weight": {
      "Minimum": "28kg",
      "Maximum": "36kg"
    },
    "height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "130 stamina points.",
    "baseAttack": "150 attack points.",
    "baseDefense": "139 defense points.",
    "baseFleeRate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 52,
        "name": "Meowth"
      }
    ],
    "maxCP": 1483,
    "maxHP": 1631
  },
  {
    "number": "054",
    "name": "Psyduck",
    "generation": "Generation I",
    "about": "Psyduck uses a mysterious power. When it does so, this Pokémon generates brain waves that are supposedly only seen in sleepers. This discovery spurred controversy among scholars.",
    "types": [
      "Water"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "fastAttacks": [
      {
        "name": "Water Gun",
        "Type": "Water",
        "Damage": 6
      },
      {
        "name": "Zen Headbutt",
        "Type": "Psychic",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Aqua Tail",
        "Type": "Water",
        "Damage": 45
      },
      {
        "name": "Cross Chop",
        "Type": "Fighting",
        "Damage": 60
      },
      {
        "name": "Psybeam",
        "Type": "Psychic",
        "Damage": 40
      }
    ],
    "weight": {
      "Minimum": "17.15kg",
      "Maximum": "22.05kg"
    },
    "height": {
      "Minimum": "0.7m",
      "Maximum": "0.9m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "100 stamina points.",
    "baseAttack": "122 attack points.",
    "baseDefense": "96 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Psyduck candies"
    },
    "nextEvolutions": [
      {
        "number": 55,
        "name": "Golduck"
      }
    ],
    "maxCP": 987,
    "maxHP": 1109
  },
  {
    "number": "055",
    "name": "Golduck",
    "generation": "Generation I",
    "about": "The webbed flippers on its forelegs and hind legs and the streamlined body of Golduck give it frightening speed. The Pokémon is definitely much faster than even the most athletic swimmer.",
    "types": [
      "Water"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "fastAttacks": [
      {
        "name": "Confusion",
        "Type": "Psychic",
        "Damage": 15
      },
      {
        "name": "Water Gun",
        "Type": "Water",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Hydro Pump",
        "Type": "Water",
        "Damage": 90
      },
      {
        "name": "Ice Beam",
        "Type": "Ice",
        "Damage": 65
      },
      {
        "name": "Psychic",
        "Type": "Psychic",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "67.02kg",
      "Maximum": "86.17kg"
    },
    "height": {
      "Minimum": "1.49m",
      "Maximum": "1.91m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "160 stamina points.",
    "baseAttack": "191 attack points.",
    "baseDefense": "163 defense points.",
    "baseFleeRate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 54,
        "name": "Psyduck"
      }
    ],
    "maxCP": 2206,
    "maxHP": 2386
  },
  {
    "number": "056",
    "name": "Mankey",
    "generation": "Generation I",
    "about": "When Mankey starts shaking and its nasal breathing turns rough, it's a sure sign that it is becoming angry. However, because it goes into a towering rage almost instantly, it is impossible for anyone to flee its wrath.",
    "types": [
      "Fighting"
    ],
    "resistant": [
      "Bug",
      "Rock",
      "Dark"
    ],
    "weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "fastAttacks": [
      {
        "name": "Karate Chop",
        "Type": "Fighting",
        "Damage": 6
      },
      {
        "name": "Scratch",
        "Type": "Normal",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Brick Break",
        "Type": "Fighting",
        "Damage": 30
      },
      {
        "name": "Cross Chop",
        "Type": "Fighting",
        "Damage": 60
      },
      {
        "name": "Low Sweep",
        "Type": "Fighting",
        "Damage": 30
      }
    ],
    "weight": {
      "Minimum": "24.5kg",
      "Maximum": "31.5kg"
    },
    "height": {
      "Minimum": "0.44m",
      "Maximum": "0.56m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "80 stamina points.",
    "baseAttack": "148 attack points.",
    "baseDefense": "87 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Mankey candies"
    },
    "nextEvolutions": [
      {
        "number": 57,
        "name": "Primeape"
      }
    ],
    "maxCP": 769,
    "maxHP": 878
  },
  {
    "number": "057",
    "name": "Primeape",
    "generation": "Generation I",
    "about": "When Primeape becomes furious, its blood circulation is boosted. In turn, its muscles are made even stronger. However, it also becomes much less intelligent at the same time.",
    "types": [
      "Fighting"
    ],
    "resistant": [
      "Bug",
      "Rock",
      "Dark"
    ],
    "weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "fastAttacks": [
      {
        "name": "Karate Chop",
        "Type": "Fighting",
        "Damage": 6
      },
      {
        "name": "Low Kick",
        "Type": "Fighting",
        "Damage": 5
      }
    ],
    "chargeAttacks": [
      {
        "name": "Cross Chop",
        "Type": "Fighting",
        "Damage": 60
      },
      {
        "name": "Low Sweep",
        "Type": "Fighting",
        "Damage": 30
      },
      {
        "name": "Night Slash",
        "Type": "Dark",
        "Damage": 30
      }
    ],
    "weight": {
      "Minimum": "28kg",
      "Maximum": "36kg"
    },
    "height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "130 stamina points.",
    "baseAttack": "207 attack points.",
    "baseDefense": "144 defense points.",
    "baseFleeRate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 56,
        "name": "Mankey"
      }
    ],
    "maxCP": 1704,
    "maxHP": 1864
  },
  {
    "number": "058",
    "name": "Growlithe",
    "generation": "Generation I",
    "about": "Growlithe has a superb sense of smell. Once it smells anything, this Pokémon won't forget the scent, no matter what. It uses its advanced olfactory sense to determine the emotions of other living things.",
    "types": [
      "Fire"
    ],
    "resistant": [
      "Fire",
      "Grass",
      "Ice",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Bite",
        "Type": "Dark",
        "Damage": 6
      },
      {
        "name": "Ember",
        "Type": "Fire",
        "Damage": 10
      }
    ],
    "chargeAttacks": [
      {
        "name": "Body Slam",
        "Type": "Normal",
        "Damage": 40
      },
      {
        "name": "Flame Wheel",
        "Type": "Fire",
        "Damage": 40
      },
      {
        "name": "Flamethrower",
        "Type": "Fire",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "16.63kg",
      "Maximum": "21.38kg"
    },
    "height": {
      "Minimum": "0.61m",
      "Maximum": "0.79m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "110 stamina points.",
    "baseAttack": "136 attack points.",
    "baseDefense": "96 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Growlithe candies"
    },
    "nextEvolutions": [
      {
        "number": 59,
        "name": "Arcanine"
      }
    ],
    "maxCP": 1199,
    "maxHP": 1335
  },
  {
    "number": "059",
    "name": "Arcanine",
    "generation": "Generation I",
    "about": "Arcanine is known for its high speed. It is said to be capable of running over 6,200 miles in a single day and night. The fire that blazes wildly within this Pokémon's body is its source of power.",
    "types": [
      "Fire"
    ],
    "resistant": [
      "Fire",
      "Grass",
      "Ice",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Bite",
        "Type": "Dark",
        "Damage": 6
      },
      {
        "name": "Fire Fang",
        "Type": "Fire",
        "Damage": 10
      }
    ],
    "chargeAttacks": [
      {
        "name": "Bulldoze",
        "Type": "Ground",
        "Damage": 35
      },
      {
        "name": "Fire Blast",
        "Type": "Fire",
        "Damage": 100
      },
      {
        "name": "Flamethrower",
        "Type": "Fire",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "135.63kg",
      "Maximum": "174.38kg"
    },
    "height": {
      "Minimum": "1.66m",
      "Maximum": "2.14m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "180 stamina points.",
    "baseAttack": "227 attack points.",
    "baseDefense": "166 defense points.",
    "baseFleeRate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 58,
        "name": "Growlithe"
      }
    ],
    "maxCP": 2781,
    "maxHP": 2983
  },
  {
    "number": "060",
    "name": "Poliwag",
    "generation": "Generation I",
    "about": "Poliwag has a very thin skin. It is possible to see the Pokémon's spiral innards right through the skin. Despite its thinness, however, the skin is also very flexible. Even sharp fangs bounce right off it.",
    "types": [
      "Water"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "fastAttacks": [
      {
        "name": "Bubble",
        "Type": "Water",
        "Damage": 25
      },
      {
        "name": "Mud Shot",
        "Type": "Ground",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Body Slam",
        "Type": "Normal",
        "Damage": 40
      },
      {
        "name": "Bubble Beam",
        "Type": "Water",
        "Damage": 30
      },
      {
        "name": "Mud Bomb",
        "Type": "Ground",
        "Damage": 30
      }
    ],
    "weight": {
      "Minimum": "10.85kg",
      "Maximum": "13.95kg"
    },
    "height": {
      "Minimum": "0.53m",
      "Maximum": "0.68m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "80 stamina points.",
    "baseAttack": "101 attack points.",
    "baseDefense": "82 defense points.",
    "baseFleeRate": "15% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 25,
      "name": "Poliwag candies"
    },
    "nextEvolutions": [
      {
        "number": 61,
        "name": "Poliwhirl"
      },
      {
        "number": 62,
        "name": "Poliwrath"
      },
      {
        "number": 186,
        "name": "Politoed"
      }
    ],
    "maxCP": 693,
    "maxHP": 795
  },
  {
    "number": "061",
    "name": "Poliwhirl",
    "generation": "Generation I",
    "about": "The surface of Poliwhirl's body is always wet and slick with an oily fluid. Because of this greasy covering, it can easily slip and slide out of the clutches of any enemy in battle.",
    "types": [
      "Water"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "fastAttacks": [
      {
        "name": "Bubble",
        "Type": "Water",
        "Damage": 25
      },
      {
        "name": "Mud Shot",
        "Type": "Ground",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Bubble Beam",
        "Type": "Water",
        "Damage": 30
      },
      {
        "name": "Mud Bomb",
        "Type": "Ground",
        "Damage": 30
      },
      {
        "name": "Scald",
        "Type": "Water",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "17.5kg",
      "Maximum": "22.5kg"
    },
    "height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "130 stamina points.",
    "baseAttack": "130 attack points.",
    "baseDefense": "130 defense points.",
    "baseFleeRate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 60,
        "name": "Poliwag"
      }
    ],
    "nextEvolutionReq": {
      "Amount": 100,
      "name": "Poliwag candies"
    },
    "nextEvolutions": [
      {
        "number": 62,
        "name": "Poliwrath"
      },
      {
        "number": 186,
        "name": "Politoed"
      }
    ],
    "maxCP": 1206,
    "maxHP": 1340
  },
  {
    "number": "062",
    "name": "Poliwrath",
    "generation": "Generation I",
    "about": "Poliwrath's highly developed, brawny muscles never grow fatigued, however much it exercises. It is so tirelessly strong, this Pokémon can swim back and forth across the ocean without effort.",
    "types": [
      "Water",
      "Fighting"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Bug",
      "Rock",
      "Dark",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Grass",
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "fastAttacks": [
      {
        "name": "Bubble",
        "Type": "Water",
        "Damage": 25
      },
      {
        "name": "Mud Shot",
        "Type": "Ground",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Hydro Pump",
        "Type": "Water",
        "Damage": 90
      },
      {
        "name": "Ice Punch",
        "Type": "Ice",
        "Damage": 45
      },
      {
        "name": "Submission",
        "Type": "Fighting",
        "Damage": 30
      }
    ],
    "weight": {
      "Minimum": "47.25kg",
      "Maximum": "60.75kg"
    },
    "height": {
      "Minimum": "1.14m",
      "Maximum": "1.46m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "180 stamina points.",
    "baseAttack": "182 attack points.",
    "baseDefense": "187 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 60,
        "name": "Poliwag"
      },
      {
        "number": 61,
        "name": "Poliwhirl"
      }
    ],
    "maxCP": 2321,
    "maxHP": 2505
  },
  {
    "number": "063",
    "name": "Abra",
    "generation": "Generation I",
    "about": "Abra sleeps for eighteen hours a day. However, it can sense the presence of foes even while it is sleeping. In such a situation, this Pokémon immediately teleports to safety.",
    "types": [
      "Psychic"
    ],
    "resistant": [
      "Fighting",
      "Psychic"
    ],
    "weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "fastAttacks": [
      {
        "name": "Zen Headbutt",
        "Type": "Psychic",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Psyshock",
        "Type": "Psychic",
        "Damage": 40
      },
      {
        "name": "Shadow Ball",
        "Type": "Ghost",
        "Damage": 45
      },
      {
        "name": "Signal Beam",
        "Type": "Bug",
        "Damage": 45
      }
    ],
    "weight": {
      "Minimum": "17.06kg",
      "Maximum": "21.94kg"
    },
    "height": {
      "Minimum": "0.79m",
      "Maximum": "1.01m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "50 stamina points.",
    "baseAttack": "195 attack points.",
    "baseDefense": "103 defense points.",
    "baseFleeRate": "99% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 25,
      "name": "Abra candies"
    },
    "nextEvolutions": [
      {
        "number": 64,
        "name": "Kadabra"
      },
      {
        "number": 65,
        "name": "Alakazam"
      }
    ],
    "maxCP": 508,
    "maxHP": 600
  },
  {
    "number": "064",
    "name": "Kadabra",
    "generation": "Generation I",
    "about": "Kadabra emits a peculiar alpha wave if it develops a headache. Only those people with a particularly strong psyche can hope to become a trainer of this Pokémon.",
    "types": [
      "Psychic"
    ],
    "resistant": [
      "Fighting",
      "Psychic"
    ],
    "weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "fastAttacks": [
      {
        "name": "Confusion",
        "Type": "Psychic",
        "Damage": 15
      },
      {
        "name": "Psycho Cut",
        "Type": "Psychic",
        "Damage": 7
      }
    ],
    "chargeAttacks": [
      {
        "name": "Dazzling Gleam",
        "Type": "Fairy",
        "Damage": 55
      },
      {
        "name": "Psybeam",
        "Type": "Psychic",
        "Damage": 40
      },
      {
        "name": "Shadow Ball",
        "Type": "Ghost",
        "Damage": 45
      }
    ],
    "weight": {
      "Minimum": "49.44kg",
      "Maximum": "63.56kg"
    },
    "height": {
      "Minimum": "1.14m",
      "Maximum": "1.46m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "80 stamina points.",
    "baseAttack": "232 attack points.",
    "baseDefense": "138 defense points.",
    "baseFleeRate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 63,
        "name": "Abra"
      }
    ],
    "nextEvolutionReq": {
      "Amount": 100,
      "name": "Abra candies"
    },
    "nextEvolutions": [
      {
        "number": 65,
        "name": "Alakazam"
      }
    ],
    "maxCP": 1005,
    "maxHP": 1131
  },
  {
    "number": "065",
    "name": "Alakazam",
    "generation": "Generation I",
    "about": "Alakazam's brain continually grows, making its head far too heavy to support with its neck. This Pokémon holds its head up using its psychokinetic power instead.",
    "types": [
      "Psychic"
    ],
    "resistant": [
      "Fighting",
      "Psychic"
    ],
    "weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "fastAttacks": [
      {
        "name": "Confusion",
        "Type": "Psychic",
        "Damage": 15
      },
      {
        "name": "Psycho Cut",
        "Type": "Psychic",
        "Damage": 7
      }
    ],
    "chargeAttacks": [
      {
        "name": "Dazzling Gleam",
        "Type": "Fairy",
        "Damage": 55
      },
      {
        "name": "Psychic",
        "Type": "Psychic",
        "Damage": 55
      },
      {
        "name": "Shadow Ball",
        "Type": "Ghost",
        "Damage": 45
      }
    ],
    "weight": {
      "Minimum": "42kg",
      "Maximum": "54kg"
    },
    "height": {
      "Minimum": "1.31m",
      "Maximum": "1.69m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "110 stamina points.",
    "baseAttack": "271 attack points.",
    "baseDefense": "194 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 63,
        "name": "Abra"
      },
      {
        "number": 64,
        "name": "Kadabra"
      }
    ],
    "maxCP": 1654,
    "maxHP": 1813
  },
  {
    "number": "066",
    "name": "Machop",
    "generation": "Generation I",
    "about": "Machop's muscles are special—they never get sore no matter how much they are used in exercise. This Pokémon has sufficient power to hurl a hundred adult humans.",
    "types": [
      "Fighting"
    ],
    "resistant": [
      "Bug",
      "Rock",
      "Dark"
    ],
    "weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "fastAttacks": [
      {
        "name": "Karate Chop",
        "Type": "Fighting",
        "Damage": 6
      },
      {
        "name": "Low Kick",
        "Type": "Fighting",
        "Damage": 5
      }
    ],
    "chargeAttacks": [
      {
        "name": "Brick Break",
        "Type": "Fighting",
        "Damage": 30
      },
      {
        "name": "Cross Chop",
        "Type": "Fighting",
        "Damage": 60
      },
      {
        "name": "Low Sweep",
        "Type": "Fighting",
        "Damage": 30
      }
    ],
    "weight": {
      "Minimum": "17.06kg",
      "Maximum": "21.94kg"
    },
    "height": {
      "Minimum": "0.7m",
      "Maximum": "0.9m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "140 stamina points.",
    "baseAttack": "137 attack points.",
    "baseDefense": "88 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 25,
      "name": "Machop candies"
    },
    "nextEvolutions": [
      {
        "number": 67,
        "name": "Machoke"
      },
      {
        "number": 68,
        "name": "Machamp"
      }
    ],
    "maxCP": 968,
    "maxHP": 1089
  },
  {
    "number": "067",
    "name": "Machoke",
    "generation": "Generation I",
    "about": "Machoke's thoroughly toned muscles possess the hardness of steel. This Pokémon has so much strength, it can easily hold aloft a sumo wrestler on just one finger.",
    "types": [
      "Fighting"
    ],
    "resistant": [
      "Bug",
      "Rock",
      "Dark"
    ],
    "weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "fastAttacks": [
      {
        "name": "Karate Chop",
        "Type": "Fighting",
        "Damage": 6
      },
      {
        "name": "Low Kick",
        "Type": "Fighting",
        "Damage": 5
      }
    ],
    "chargeAttacks": [
      {
        "name": "Brick Break",
        "Type": "Fighting",
        "Damage": 30
      },
      {
        "name": "Cross Chop",
        "Type": "Fighting",
        "Damage": 60
      },
      {
        "name": "Submission",
        "Type": "Fighting",
        "Damage": 30
      }
    ],
    "weight": {
      "Minimum": "61.69kg",
      "Maximum": "79.31kg"
    },
    "height": {
      "Minimum": "1.31m",
      "Maximum": "1.69m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "160 stamina points.",
    "baseAttack": "177 attack points.",
    "baseDefense": "130 defense points.",
    "baseFleeRate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 66,
        "name": "Machop"
      }
    ],
    "nextEvolutionReq": {
      "Amount": 100,
      "name": "Machop candies"
    },
    "nextEvolutions": [
      {
        "number": 68,
        "name": "Machamp"
      }
    ],
    "maxCP": 1606,
    "maxHP": 1760
  },
  {
    "number": "068",
    "name": "Machamp",
    "generation": "Generation I",
    "about": "Machamp has the power to hurl anything aside. However, trying to do any work requiring care and dexterity causes its arms to get tangled. This Pokémon tends to leap into action before it thinks.",
    "types": [
      "Fighting"
    ],
    "resistant": [
      "Bug",
      "Rock",
      "Dark"
    ],
    "weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "fastAttacks": [
      {
        "name": "Bullet Punch",
        "Type": "Steel",
        "Damage": 10
      },
      {
        "name": "Karate Chop",
        "Type": "Fighting",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Cross Chop",
        "Type": "Fighting",
        "Damage": 60
      },
      {
        "name": "Stone Edge",
        "Type": "Rock",
        "Damage": 80
      },
      {
        "name": "Submission",
        "Type": "Fighting",
        "Damage": 30
      }
    ],
    "weight": {
      "Minimum": "113.75kg",
      "Maximum": "146.25kg"
    },
    "height": {
      "Minimum": "1.4m",
      "Maximum": "1.8m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "180 stamina points.",
    "baseAttack": "234 attack points.",
    "baseDefense": "162 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 66,
        "name": "Machop"
      },
      {
        "number": 67,
        "name": "Machoke"
      }
    ],
    "maxCP": 2406,
    "maxHP": 2594
  },
  {
    "number": "069",
    "name": "Bellsprout",
    "generation": "Generation I",
    "about": "Bellsprout's thin and flexible body lets it bend and sway to avoid any attack, however strong it may be. From its mouth, this Pokémon spits a corrosive fluid that melts even iron.",
    "types": [
      "Grass",
      "Poison"
    ],
    "resistant": [
      "Water",
      "Electric",
      "Grass",
      "Fighting",
      "Fairy"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "fastAttacks": [
      {
        "name": "Acid",
        "Type": "Poison",
        "Damage": 10
      },
      {
        "name": "Vine Whip",
        "Type": "Grass",
        "Damage": 7
      }
    ],
    "chargeAttacks": [
      {
        "name": "Power Whip",
        "Type": "Grass",
        "Damage": 70
      },
      {
        "name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      },
      {
        "name": "Wrap",
        "Type": "Normal",
        "Damage": 25
      }
    ],
    "weight": {
      "Minimum": "3.5kg",
      "Maximum": "4.5kg"
    },
    "height": {
      "Minimum": "0.61m",
      "Maximum": "0.79m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "100 stamina points.",
    "baseAttack": "139 attack points.",
    "baseDefense": "64 defense points.",
    "baseFleeRate": "15% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 25,
      "name": "Bellsprout candies"
    },
    "nextEvolutions": [
      {
        "number": 70,
        "name": "Weepinbell"
      },
      {
        "number": 71,
        "name": "Victreebel"
      }
    ],
    "maxCP": 990,
    "maxHP": 1117
  },
  {
    "number": "070",
    "name": "Weepinbell",
    "generation": "Generation I",
    "about": "Weepinbell has a large hook on its rear end. At night, the Pokémon hooks on to a tree branch and goes to sleep. If it moves around in its sleep, it may wake up to find itself on the ground.",
    "types": [
      "Grass",
      "Poison"
    ],
    "resistant": [
      "Water",
      "Electric",
      "Grass",
      "Fighting",
      "Fairy"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "fastAttacks": [
      {
        "name": "Acid",
        "Type": "Poison",
        "Damage": 10
      },
      {
        "name": "Razor Leaf",
        "Type": "Grass",
        "Damage": 15
      }
    ],
    "chargeAttacks": [
      {
        "name": "Power Whip",
        "Type": "Grass",
        "Damage": 70
      },
      {
        "name": "Seed Bomb",
        "Type": "Grass",
        "Damage": 40
      },
      {
        "name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "5.6kg",
      "Maximum": "7.2kg"
    },
    "height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "130 stamina points.",
    "baseAttack": "172 attack points.",
    "baseDefense": "95 defense points.",
    "baseFleeRate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 69,
        "name": "Bellsprout"
      }
    ],
    "nextEvolutionReq": {
      "Amount": 100,
      "name": "Bellsprout candies"
    },
    "nextEvolutions": [
      {
        "number": 71,
        "name": "Victreebel"
      }
    ],
    "maxCP": 1567,
    "maxHP": 1723
  },
  {
    "number": "071",
    "name": "Victreebel",
    "generation": "Generation I",
    "about": "Victreebel has a long vine that extends from its head. This vine is waved and flicked about as if it were an animal to attract prey. When an unsuspecting prey draws near, this Pokémon swallows it whole.",
    "types": [
      "Grass",
      "Poison"
    ],
    "resistant": [
      "Water",
      "Electric",
      "Grass",
      "Fighting",
      "Fairy"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "fastAttacks": [
      {
        "name": "Acid",
        "Type": "Poison",
        "Damage": 10
      },
      {
        "name": "Razor Leaf",
        "Type": "Grass",
        "Damage": 15
      }
    ],
    "chargeAttacks": [
      {
        "name": "Leaf Blade",
        "Type": "Grass",
        "Damage": 55
      },
      {
        "name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      },
      {
        "name": "Solar Beam",
        "Type": "Grass",
        "Damage": 120
      }
    ],
    "weight": {
      "Minimum": "13.56kg",
      "Maximum": "17.44kg"
    },
    "height": {
      "Minimum": "1.49m",
      "Maximum": "1.91m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "160 stamina points.",
    "baseAttack": "207 attack points.",
    "baseDefense": "138 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 69,
        "name": "Bellsprout"
      },
      {
        "number": 70,
        "name": "Weepinbell"
      }
    ],
    "maxCP": 2342,
    "maxHP": 2530
  },
  {
    "number": "072",
    "name": "Tentacool",
    "generation": "Generation I",
    "about": "Tentacool's body is largely composed of water. If it is removed from the sea, it dries up like parchment. If this Pokémon happens to become dehydrated, put it back into the sea.",
    "types": [
      "Water",
      "Poison"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Fighting",
      "Poison",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "weaknesses": [
      "Electric",
      "Ground",
      "Psychic"
    ],
    "fastAttacks": [
      {
        "name": "Bubble",
        "Type": "Water",
        "Damage": 25
      },
      {
        "name": "Poison Sting",
        "Type": "Poison",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Bubble Beam",
        "Type": "Water",
        "Damage": 30
      },
      {
        "name": "Water Pulse",
        "Type": "Water",
        "Damage": 35
      },
      {
        "name": "Wrap",
        "Type": "Normal",
        "Damage": 25
      }
    ],
    "weight": {
      "Minimum": "39.81kg",
      "Maximum": "51.19kg"
    },
    "height": {
      "Minimum": "0.79m",
      "Maximum": "1.01m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "80 stamina points.",
    "baseAttack": "97 attack points.",
    "baseDefense": "182 defense points.",
    "baseFleeRate": "15% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Tentacool candies"
    },
    "nextEvolutions": [
      {
        "number": 73,
        "name": "Tentacruel"
      }
    ],
    "maxCP": 794,
    "maxHP": 905
  },
  {
    "number": "073",
    "name": "Tentacruel",
    "generation": "Generation I",
    "about": "Tentacruel has large red orbs on its head. The orbs glow before lashing the vicinity with a harsh ultrasonic blast. This Pokémon's outburst creates rough waves around it.",
    "types": [
      "Water",
      "Poison"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Fighting",
      "Poison",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "weaknesses": [
      "Electric",
      "Ground",
      "Psychic"
    ],
    "fastAttacks": [
      {
        "name": "Acid",
        "Type": "Poison",
        "Damage": 10
      },
      {
        "name": "Poison Jab",
        "Type": "Poison",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Blizzard",
        "Type": "Ice",
        "Damage": 100
      },
      {
        "name": "Hydro Pump",
        "Type": "Water",
        "Damage": 90
      },
      {
        "name": "Sludge Wave",
        "Type": "Poison",
        "Damage": 70
      }
    ],
    "weight": {
      "Minimum": "48.13kg",
      "Maximum": "61.88kg"
    },
    "height": {
      "Minimum": "1.4m",
      "Maximum": "1.8m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "160 stamina points.",
    "baseAttack": "166 attack points.",
    "baseDefense": "237 defense points.",
    "baseFleeRate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 72,
        "name": "Tentacool"
      }
    ],
    "maxCP": 2046,
    "maxHP": 2220
  },
  {
    "number": "074",
    "name": "Geodude",
    "generation": "Generation I",
    "about": "The longer a Geodude lives, the more its edges are chipped and worn away, making it more rounded in appearance. However, this Pokémon's heart will remain hard, craggy, and rough always.",
    "types": [
      "Rock",
      "Ground"
    ],
    "resistant": [
      "Normal",
      "Fire",
      "Electric",
      "Poison",
      "Flying",
      "Rock"
    ],
    "weaknesses": [
      "Water",
      "Grass",
      "Ice",
      "Fighting",
      "Ground",
      "Steel"
    ],
    "fastAttacks": [
      {
        "name": "Rock Throw",
        "Type": "Rock",
        "Damage": 12
      },
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Dig",
        "Type": "Ground",
        "Damage": 70
      },
      {
        "name": "Rock Slide",
        "Type": "Rock",
        "Damage": 50
      },
      {
        "name": "Rock Tomb",
        "Type": "Rock",
        "Damage": 30
      }
    ],
    "weight": {
      "Minimum": "17.5kg",
      "Maximum": "22.5kg"
    },
    "height": {
      "Minimum": "0.35m",
      "Maximum": "0.45m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "80 stamina points.",
    "baseAttack": "132 attack points.",
    "baseDefense": "163 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 25,
      "name": "Geodude candies"
    },
    "nextEvolutions": [
      {
        "number": 75,
        "name": "Graveler"
      },
      {
        "number": 76,
        "name": "Golem"
      }
    ],
    "maxCP": 742,
    "maxHP": 849
  },
  {
    "number": "075",
    "name": "Graveler",
    "generation": "Generation I",
    "about": "Graveler grows by feeding on rocks. Apparently, it prefers to eat rocks that are covered in moss. This Pokémon eats its way through a ton of rocks on a daily basis.",
    "types": [
      "Rock",
      "Ground"
    ],
    "resistant": [
      "Normal",
      "Fire",
      "Electric",
      "Poison",
      "Flying",
      "Rock"
    ],
    "weaknesses": [
      "Water",
      "Grass",
      "Ice",
      "Fighting",
      "Ground",
      "Steel"
    ],
    "fastAttacks": [
      {
        "name": "Mud Slap",
        "Type": "Ground",
        "Damage": 15
      },
      {
        "name": "Rock Throw",
        "Type": "Rock",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Dig",
        "Type": "Ground",
        "Damage": 70
      },
      {
        "name": "Rock Slide",
        "Type": "Rock",
        "Damage": 50
      },
      {
        "name": "Stone Edge",
        "Type": "Rock",
        "Damage": 80
      }
    ],
    "weight": {
      "Minimum": "91.88kg",
      "Maximum": "118.13kg"
    },
    "height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "buddyDistance": "1km (Big)",
    "baseStamina": "110 stamina points.",
    "baseAttack": "164 attack points.",
    "baseDefense": "196 defense points.",
    "baseFleeRate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 74,
        "name": "Geodude"
      }
    ],
    "nextEvolutionReq": {
      "Amount": 100,
      "name": "Geodude candies"
    },
    "nextEvolutions": [
      {
        "number": 76,
        "name": "Golem"
      }
    ],
    "maxCP": 1294,
    "maxHP": 1433
  },
  {
    "number": "076",
    "name": "Golem",
    "generation": "Generation I",
    "about": "Golem live up on mountains. If there is a large earthquake, these Pokémon will come rolling down off the mountains en masse to the foothills below.",
    "types": [
      "Rock",
      "Ground"
    ],
    "resistant": [
      "Normal",
      "Fire",
      "Electric",
      "Poison",
      "Flying",
      "Rock"
    ],
    "weaknesses": [
      "Water",
      "Grass",
      "Ice",
      "Fighting",
      "Ground",
      "Steel"
    ],
    "fastAttacks": [
      {
        "name": "Mud Slap",
        "Type": "Ground",
        "Damage": 15
      },
      {
        "name": "Rock Throw",
        "Type": "Rock",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Ancient Power",
        "Type": "Rock",
        "Damage": 35
      },
      {
        "name": "Earthquake",
        "Type": "Ground",
        "Damage": 100
      },
      {
        "name": "Stone Edge",
        "Type": "Rock",
        "Damage": 80
      }
    ],
    "weight": {
      "Minimum": "262.5kg",
      "Maximum": "337.5kg"
    },
    "height": {
      "Minimum": "1.22m",
      "Maximum": "1.57m"
    },
    "buddyDistance": "1km (Big)",
    "baseStamina": "160 stamina points.",
    "baseAttack": "211 attack points.",
    "baseDefense": "229 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 74,
        "name": "Geodude"
      },
      {
        "number": 75,
        "name": "Graveler"
      }
    ],
    "maxCP": 2126,
    "maxHP": 2303
  },
  {
    "number": "077",
    "name": "Ponyta",
    "generation": "Generation I",
    "about": "Ponyta is very weak at birth. It can barely stand up. This Pokémon becomes stronger by stumbling and falling to keep up with its parent.",
    "types": [
      "Fire"
    ],
    "resistant": [
      "Fire",
      "Grass",
      "Ice",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Ember",
        "Type": "Fire",
        "Damage": 10
      },
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Fire Blast",
        "Type": "Fire",
        "Damage": 100
      },
      {
        "name": "Flame Charge",
        "Type": "Fire",
        "Damage": 25
      },
      {
        "name": "Flame Wheel",
        "Type": "Fire",
        "Damage": 40
      }
    ],
    "weight": {
      "Minimum": "26.25kg",
      "Maximum": "33.75kg"
    },
    "height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "100 stamina points.",
    "baseAttack": "170 attack points.",
    "baseDefense": "132 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Ponyta candies"
    },
    "nextEvolutions": [
      {
        "number": 78,
        "name": "Rapidash"
      }
    ],
    "maxCP": 1370,
    "maxHP": 1516
  },
  {
    "number": "078",
    "name": "Rapidash",
    "generation": "Generation I",
    "about": "Rapidash usually can be seen casually cantering in the fields and plains. However, when this Pokémon turns serious, its fiery manes flare and blaze as it gallops its way up to 150 mph.",
    "types": [
      "Fire"
    ],
    "resistant": [
      "Fire",
      "Grass",
      "Ice",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Ember",
        "Type": "Fire",
        "Damage": 10
      },
      {
        "name": "Low Kick",
        "Type": "Fighting",
        "Damage": 5
      }
    ],
    "chargeAttacks": [
      {
        "name": "Drill Run",
        "Type": "Ground",
        "Damage": 50
      },
      {
        "name": "Fire Blast",
        "Type": "Fire",
        "Damage": 100
      },
      {
        "name": "Heat Wave",
        "Type": "Fire",
        "Damage": 80
      }
    ],
    "weight": {
      "Minimum": "83.13kg",
      "Maximum": "106.88kg"
    },
    "height": {
      "Minimum": "1.49m",
      "Maximum": "1.91m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "130 stamina points.",
    "baseAttack": "207 attack points.",
    "baseDefense": "167 defense points.",
    "baseFleeRate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 77,
        "name": "Ponyta"
      }
    ],
    "maxCP": 2024,
    "maxHP": 2199
  },
  {
    "number": "079",
    "name": "Slowpoke",
    "generation": "Generation I",
    "about": "Slowpoke uses its tail to catch prey by dipping it in water at the side of a river. However, this Pokémon often forgets what it's doing and often spends entire days just loafing at water's edge.",
    "types": [
      "Water",
      "Psychic"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Fighting",
      "Psychic",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Grass",
      "Bug",
      "Ghost",
      "Dark"
    ],
    "fastAttacks": [
      {
        "name": "Confusion",
        "Type": "Psychic",
        "Damage": 15
      },
      {
        "name": "Water Gun",
        "Type": "Water",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Psychic",
        "Type": "Psychic",
        "Damage": 55
      },
      {
        "name": "Psyshock",
        "Type": "Psychic",
        "Damage": 40
      },
      {
        "name": "Water Pulse",
        "Type": "Water",
        "Damage": 35
      }
    ],
    "weight": {
      "Minimum": "31.5kg",
      "Maximum": "40.5kg"
    },
    "height": {
      "Minimum": "1.05m",
      "Maximum": "1.35m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "180 stamina points.",
    "baseAttack": "109 attack points.",
    "baseDefense": "109 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Slowpoke candies"
    },
    "nextEvolutions": [
      {
        "number": 80,
        "name": "Slowbro"
      },
      {
        "number": 199,
        "name": "Slowking"
      }
    ],
    "maxCP": 1089,
    "maxHP": 1218
  },
  {
    "number": "080",
    "name": "Slowbro",
    "generation": "Generation I",
    "about": "Slowbro's tail has a Shellder firmly attached with a bite. As a result, the tail can't be used for fishing anymore. This causes Slowbro to grudgingly swim and catch prey instead.",
    "types": [
      "Water",
      "Psychic"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Fighting",
      "Psychic",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Grass",
      "Bug",
      "Ghost",
      "Dark"
    ],
    "fastAttacks": [
      {
        "name": "Confusion",
        "Type": "Psychic",
        "Damage": 15
      },
      {
        "name": "Water Gun",
        "Type": "Water",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Ice Beam",
        "Type": "Ice",
        "Damage": 65
      },
      {
        "name": "Psychic",
        "Type": "Psychic",
        "Damage": 55
      },
      {
        "name": "Water Pulse",
        "Type": "Water",
        "Damage": 35
      }
    ],
    "weight": {
      "Minimum": "68.69kg",
      "Maximum": "88.31kg"
    },
    "height": {
      "Minimum": "1.4m",
      "Maximum": "1.8m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "190 stamina points.",
    "baseAttack": "177 attack points.",
    "baseDefense": "194 defense points.",
    "baseFleeRate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 79,
        "name": "Slowpoke"
      }
    ],
    "maxCP": 2409,
    "maxHP": 2597
  },
  {
    "number": "081",
    "name": "Magnemite",
    "generation": "Generation I",
    "about": "Magnemite attaches itself to power lines to feed on electricity. If your house has a power outage, check your circuit breakers. You may find a large number of this Pokémon clinging to the breaker box.",
    "types": [
      "Electric",
      "Steel"
    ],
    "resistant": [
      "Normal",
      "Electric",
      "Grass",
      "Ice",
      "Poison",
      "Flying",
      "Psychic",
      "Bug",
      "Rock",
      "Dragon",
      "Steel",
      "Fairy"
    ],
    "weaknesses": [
      "Fire",
      "Fighting",
      "Ground"
    ],
    "fastAttacks": [
      {
        "name": "Spark",
        "Type": "Electric",
        "Damage": 7
      },
      {
        "name": "Thunder Shock",
        "Type": "Electric",
        "Damage": 5
      }
    ],
    "chargeAttacks": [
      {
        "name": "Discharge",
        "Type": "Electric",
        "Damage": 35
      },
      {
        "name": "Magnet Bomb",
        "Type": "Steel",
        "Damage": 30
      },
      {
        "name": "Thunderbolt",
        "Type": "Electric",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "5.25kg",
      "Maximum": "6.75kg"
    },
    "height": {
      "Minimum": "0.26m",
      "Maximum": "0.34m"
    },
    "buddyDistance": "3km (Flying)",
    "baseStamina": "50 stamina points.",
    "baseAttack": "165 attack points.",
    "baseDefense": "128 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Magnemite candies"
    },
    "nextEvolutions": [
      {
        "number": 82,
        "name": "Magneton"
      }
    ],
    "maxCP": 774,
    "maxHP": 890
  },
  {
    "number": "082",
    "name": "Magneton",
    "generation": "Generation I",
    "about": "Magneton emits a powerful magnetic force that is fatal to mechanical devices. As a result, large cities sound sirens to warn citizens of large-scale outbreaks of this Pokémon.",
    "types": [
      "Electric",
      "Steel"
    ],
    "resistant": [
      "Normal",
      "Electric",
      "Grass",
      "Ice",
      "Poison",
      "Flying",
      "Psychic",
      "Bug",
      "Rock",
      "Dragon",
      "Steel",
      "Fairy"
    ],
    "weaknesses": [
      "Fire",
      "Fighting",
      "Ground"
    ],
    "fastAttacks": [
      {
        "name": "Spark",
        "Type": "Electric",
        "Damage": 7
      },
      {
        "name": "Thunder Shock",
        "Type": "Electric",
        "Damage": 5
      }
    ],
    "chargeAttacks": [
      {
        "name": "Discharge",
        "Type": "Electric",
        "Damage": 35
      },
      {
        "name": "Flash Cannon",
        "Type": "Steel",
        "Damage": 60
      },
      {
        "name": "Magnet Bomb",
        "Type": "Steel",
        "Damage": 30
      }
    ],
    "weight": {
      "Minimum": "52.5kg",
      "Maximum": "67.5kg"
    },
    "height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "100 stamina points.",
    "baseAttack": "223 attack points.",
    "baseDefense": "182 defense points.",
    "baseFleeRate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 81,
        "name": "Magnemite"
      }
    ],
    "maxCP": 1715,
    "maxHP": 1879
  },
  {
    "number": "083",
    "name": "Farfetchd",
    "generation": "Generation I",
    "about": "Farfetch'd is always seen with a stalk from a plant of some sort. Apparently, there are good stalks and bad stalks. This Pokémon has been known to fight with others over stalks.",
    "types": [
      "Normal",
      "Flying"
    ],
    "resistant": [
      "Grass",
      "Ground",
      "Bug",
      "Ghost"
    ],
    "weaknesses": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Cut",
        "Type": "Normal",
        "Damage": 12
      },
      {
        "name": "Fury Cutter",
        "Type": "Bug",
        "Damage": 3
      }
    ],
    "chargeAttacks": [
      {
        "name": "Aerial Ace",
        "Type": "Flying",
        "Damage": 30
      },
      {
        "name": "Air Cutter",
        "Type": "Flying",
        "Damage": 30
      },
      {
        "name": "Leaf Blade",
        "Type": "Grass",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "13.13kg",
      "Maximum": "16.88kg"
    },
    "height": {
      "Minimum": "0.7m",
      "Maximum": "0.9m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "104 stamina points.",
    "baseAttack": "124 attack points.",
    "baseDefense": "118 defense points.",
    "baseFleeRate": "9% chance to flee.",
    "Common Capture Area": "Early reports that this Pokèmon is likely to be found in: Asia or hatched from an Egg in that geographic area.",
    "Asia": "Common Capture Area",
    "maxCP": 1133,
    "maxHP": 1263
  },
  {
    "number": "084",
    "name": "Doduo",
    "generation": "Generation I",
    "about": "Doduo's two heads never sleep at the same time. Its two heads take turns sleeping, so one head can always keep watch for enemies while the other one sleeps.",
    "types": [
      "Normal",
      "Flying"
    ],
    "resistant": [
      "Grass",
      "Ground",
      "Bug",
      "Ghost"
    ],
    "weaknesses": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Peck",
        "Type": "Flying",
        "Damage": 10
      },
      {
        "name": "Quick Attack",
        "Type": "Normal",
        "Damage": 10
      }
    ],
    "chargeAttacks": [
      {
        "name": "Aerial Ace",
        "Type": "Flying",
        "Damage": 30
      },
      {
        "name": "Drill Peck",
        "Type": "Flying",
        "Damage": 40
      },
      {
        "name": "Swift",
        "Type": "Normal",
        "Damage": 30
      }
    ],
    "weight": {
      "Minimum": "34.3kg",
      "Maximum": "44.1kg"
    },
    "height": {
      "Minimum": "1.22m",
      "Maximum": "1.57m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "70 stamina points.",
    "baseAttack": "158 attack points.",
    "baseDefense": "88 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Doduo candies"
    },
    "nextEvolutions": [
      {
        "number": 85,
        "name": "Dodrio"
      }
    ],
    "maxCP": 746,
    "maxHP": 855
  },
  {
    "number": "085",
    "name": "Dodrio",
    "generation": "Generation I",
    "about": "Watch out if Dodrio's three heads are looking in three separate directions. It's a sure sign that it is on its guard. Don't go near this Pokémon if it's being wary-it may decide to peck you.",
    "types": [
      "Normal",
      "Flying"
    ],
    "resistant": [
      "Grass",
      "Ground",
      "Bug",
      "Ghost"
    ],
    "weaknesses": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Feint Attack",
        "Type": "Dark",
        "Damage": 12
      },
      {
        "name": "Steel Wing",
        "Type": "Steel",
        "Damage": 15
      }
    ],
    "chargeAttacks": [
      {
        "name": "Aerial Ace",
        "Type": "Flying",
        "Damage": 30
      },
      {
        "name": "Air Cutter",
        "Type": "Flying",
        "Damage": 30
      },
      {
        "name": "Drill Peck",
        "Type": "Flying",
        "Damage": 40
      }
    ],
    "weight": {
      "Minimum": "74.55kg",
      "Maximum": "95.85kg"
    },
    "height": {
      "Minimum": "1.57m",
      "Maximum": "2.02m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "120 stamina points.",
    "baseAttack": "218 attack points.",
    "baseDefense": "145 defense points.",
    "baseFleeRate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 84,
        "name": "Doduo"
      }
    ],
    "maxCP": 1677,
    "maxHP": 1836
  },
  {
    "number": "086",
    "name": "Seel",
    "generation": "Generation I",
    "about": "Seel hunts for prey in the frigid sea underneath sheets of ice. When it needs to breathe, it punches a hole through the ice with the sharply protruding section of its head.",
    "types": [
      "Water"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "fastAttacks": [
      {
        "name": "Ice Shard",
        "Type": "Ice",
        "Damage": 15
      },
      {
        "name": "Lick",
        "Type": "Ghost",
        "Damage": 5
      }
    ],
    "chargeAttacks": [
      {
        "name": "Aqua Jet",
        "Type": "Water",
        "Damage": 25
      },
      {
        "name": "Aqua Tail",
        "Type": "Water",
        "Damage": 45
      },
      {
        "name": "Icy Wind",
        "Type": "Ice",
        "Damage": 25
      }
    ],
    "weight": {
      "Minimum": "78.75kg",
      "Maximum": "101.25kg"
    },
    "height": {
      "Minimum": "0.96m",
      "Maximum": "1.24m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "130 stamina points.",
    "baseAttack": "85 attack points.",
    "baseDefense": "128 defense points.",
    "baseFleeRate": "9% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Seel candies"
    },
    "nextEvolutions": [
      {
        "number": 87,
        "name": "Dewgong"
      }
    ],
    "maxCP": 985,
    "maxHP": 1107
  },
  {
    "number": "087",
    "name": "Dewgong",
    "generation": "Generation I",
    "about": "Dewgong loves to snooze on bitterly cold ice. The sight of this Pokémon sleeping on a glacier was mistakenly thought to be a mermaid by a mariner long ago.",
    "types": [
      "Water",
      "Ice"
    ],
    "resistant": [
      "Water",
      "Ice"
    ],
    "weaknesses": [
      "Electric",
      "Grass",
      "Fighting",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Frost Breath",
        "Type": "Ice",
        "Damage": 9
      },
      {
        "name": "Ice Shard",
        "Type": "Ice",
        "Damage": 15
      }
    ],
    "chargeAttacks": [
      {
        "name": "Aqua Jet",
        "Type": "Water",
        "Damage": 25
      },
      {
        "name": "Blizzard",
        "Type": "Ice",
        "Damage": 100
      },
      {
        "name": "Icy Wind",
        "Type": "Ice",
        "Damage": 25
      }
    ],
    "weight": {
      "Minimum": "105kg",
      "Maximum": "135kg"
    },
    "height": {
      "Minimum": "1.49m",
      "Maximum": "1.91m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "180 stamina points.",
    "baseAttack": "139 attack points.",
    "baseDefense": "184 defense points.",
    "baseFleeRate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 86,
        "name": "Seel"
      }
    ],
    "maxCP": 1975,
    "maxHP": 2145
  },
  {
    "number": "088",
    "name": "Grimer",
    "generation": "Generation I",
    "about": "Grimer's sludgy and rubbery body can be forced through any opening, however small it may be. This Pokémon enters sewer pipes to drink filthy wastewater.",
    "types": [
      "Poison"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "fastAttacks": [
      {
        "name": "Mud Slap",
        "Type": "Ground",
        "Damage": 15
      },
      {
        "name": "Poison Jab",
        "Type": "Poison",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Mud Bomb",
        "Type": "Ground",
        "Damage": 30
      },
      {
        "name": "Sludge",
        "Type": "Poison",
        "Damage": 30
      },
      {
        "name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "26.25kg",
      "Maximum": "33.75kg"
    },
    "height": {
      "Minimum": "0.79m",
      "Maximum": "1.01m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "160 stamina points.",
    "baseAttack": "135 attack points.",
    "baseDefense": "90 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Grimer candies"
    },
    "nextEvolutions": [
      {
        "number": 89,
        "name": "Muk"
      }
    ],
    "maxCP": 1152,
    "maxHP": 1284
  },
  {
    "number": "089",
    "name": "Muk",
    "generation": "Generation I",
    "about": "From Muk's body seeps a foul fluid that gives off a nose-bendingly horrible stench. Just one drop of this Pokémon's body fluid can turn a pool stagnant and rancid.",
    "types": [
      "Poison"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "fastAttacks": [
      {
        "name": "Lick",
        "Type": "Ghost",
        "Damage": 5
      },
      {
        "name": "Poison Jab",
        "Type": "Poison",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Dark Pulse",
        "Type": "Dark",
        "Damage": 45
      },
      {
        "name": "Gunk Shot",
        "Type": "Poison",
        "Damage": 65
      },
      {
        "name": "Sludge Wave",
        "Type": "Poison",
        "Damage": 70
      }
    ],
    "weight": {
      "Minimum": "26.25kg",
      "Maximum": "33.75kg"
    },
    "height": {
      "Minimum": "1.05m",
      "Maximum": "1.35m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "210 stamina points.",
    "baseAttack": "190 attack points.",
    "baseDefense": "184 defense points.",
    "baseFleeRate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 88,
        "name": "Grimer"
      }
    ],
    "maxCP": 2414,
    "maxHP": 2602
  },
  {
    "number": "090",
    "name": "Shellder",
    "generation": "Generation I",
    "about": "At night, this Pokémon uses its broad tongue to burrow a hole in the seafloor sand and then sleep in it. While it is sleeping, Shellder closes its shell, but leaves its tongue hanging out.",
    "types": [
      "Water"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "fastAttacks": [
      {
        "name": "Ice Shard",
        "Type": "Ice",
        "Damage": 15
      },
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Bubble Beam",
        "Type": "Water",
        "Damage": 30
      },
      {
        "name": "Icy Wind",
        "Type": "Ice",
        "Damage": 25
      },
      {
        "name": "Water Pulse",
        "Type": "Water",
        "Damage": 35
      }
    ],
    "weight": {
      "Minimum": "3.5kg",
      "Maximum": "4.5kg"
    },
    "height": {
      "Minimum": "0.26m",
      "Maximum": "0.34m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "60 stamina points.",
    "baseAttack": "116 attack points.",
    "baseDefense": "168 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Shellder candies"
    },
    "nextEvolutions": [
      {
        "number": 91,
        "name": "Cloyster"
      }
    ],
    "maxCP": 715,
    "maxHP": 822
  },
  {
    "number": "091",
    "name": "Cloyster",
    "generation": "Generation I",
    "about": "Cloyster is capable of swimming in the sea. It does so by swallowing water, then jetting it out toward the rear. This Pokémon shoots spikes from its shell using the same system.",
    "types": [
      "Water",
      "Ice"
    ],
    "resistant": [
      "Water",
      "Ice"
    ],
    "weaknesses": [
      "Electric",
      "Grass",
      "Fighting",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Frost Breath",
        "Type": "Ice",
        "Damage": 9
      },
      {
        "name": "Ice Shard",
        "Type": "Ice",
        "Damage": 15
      }
    ],
    "chargeAttacks": [
      {
        "name": "Blizzard",
        "Type": "Ice",
        "Damage": 100
      },
      {
        "name": "Hydro Pump",
        "Type": "Water",
        "Damage": 90
      },
      {
        "name": "Icy Wind",
        "Type": "Ice",
        "Damage": 25
      }
    ],
    "weight": {
      "Minimum": "115.94kg",
      "Maximum": "149.06kg"
    },
    "height": {
      "Minimum": "1.31m",
      "Maximum": "1.69m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "100 stamina points.",
    "baseAttack": "186 attack points.",
    "baseDefense": "323 defense points.",
    "baseFleeRate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 90,
        "name": "Shellder"
      }
    ],
    "maxCP": 1879,
    "maxHP": 2052
  },
  {
    "number": "092",
    "name": "Gastly",
    "generation": "Generation I",
    "about": "Gastly is largely composed of gaseous matter. When exposed to a strong wind, the gaseous body quickly dwindles away. Groups of this Pokémon cluster under the eaves of houses to escape the ravages of wind.",
    "types": [
      "Ghost",
      "Poison"
    ],
    "resistant": [
      "Normal",
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "weaknesses": [
      "Ground",
      "Psychic",
      "Ghost",
      "Dark"
    ],
    "fastAttacks": [
      {
        "name": "Lick",
        "Type": "Ghost",
        "Damage": 5
      },
      {
        "name": "Sucker Punch",
        "Type": "Dark",
        "Damage": 7
      }
    ],
    "chargeAttacks": [
      {
        "name": "Dark Pulse",
        "Type": "Dark",
        "Damage": 45
      },
      {
        "name": "Ominous Wind",
        "Type": "Ghost",
        "Damage": 30
      },
      {
        "name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "0.09kg",
      "Maximum": "0.11kg"
    },
    "height": {
      "Minimum": "1.14m",
      "Maximum": "1.46m"
    },
    "buddyDistance": "3km (Flying)",
    "baseStamina": "60 stamina points.",
    "baseAttack": "186 attack points.",
    "baseDefense": "70 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 25,
      "name": "Gastly candies"
    },
    "nextEvolutions": [
      {
        "number": 93,
        "name": "Haunter"
      },
      {
        "number": 94,
        "name": "Gengar"
      }
    ],
    "maxCP": 696,
    "maxHP": 804
  },
  {
    "number": "093",
    "name": "Haunter",
    "generation": "Generation I",
    "about": "Haunter is a dangerous Pokémon. If one beckons you while floating in darkness, you must never approach it. This Pokémon will try to lick you with its tongue and steal your life away.",
    "types": [
      "Ghost",
      "Poison"
    ],
    "resistant": [
      "Normal",
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "weaknesses": [
      "Ground",
      "Psychic",
      "Ghost",
      "Dark"
    ],
    "fastAttacks": [
      {
        "name": "Lick",
        "Type": "Ghost",
        "Damage": 5
      },
      {
        "name": "Shadow Claw",
        "Type": "Ghost",
        "Damage": 11
      }
    ],
    "chargeAttacks": [
      {
        "name": "Dark Pulse",
        "Type": "Dark",
        "Damage": 45
      },
      {
        "name": "Shadow Ball",
        "Type": "Ghost",
        "Damage": 45
      },
      {
        "name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "0.09kg",
      "Maximum": "0.11kg"
    },
    "height": {
      "Minimum": "1.4m",
      "Maximum": "1.8m"
    },
    "buddyDistance": "3km (Flying)",
    "baseStamina": "90 stamina points.",
    "baseAttack": "223 attack points.",
    "baseDefense": "112 defense points.",
    "baseFleeRate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 92,
        "name": "Gastly"
      }
    ],
    "nextEvolutionReq": {
      "Amount": 100,
      "name": "Gastly candies"
    },
    "nextEvolutions": [
      {
        "number": 94,
        "name": "Gengar"
      }
    ],
    "maxCP": 1240,
    "maxHP": 1380
  },
  {
    "number": "094",
    "name": "Gengar",
    "generation": "Generation I",
    "about": "Sometimes, on a dark night, your shadow thrown by a streetlight will suddenly and startlingly overtake you. It is actually a Gengar running past you, pretending to be your shadow.",
    "types": [
      "Ghost",
      "Poison"
    ],
    "resistant": [
      "Normal",
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "weaknesses": [
      "Ground",
      "Psychic",
      "Ghost",
      "Dark"
    ],
    "fastAttacks": [
      {
        "name": "Shadow Claw",
        "Type": "Ghost",
        "Damage": 11
      },
      {
        "name": "Sucker Punch",
        "Type": "Dark",
        "Damage": 7
      }
    ],
    "chargeAttacks": [
      {
        "name": "Dark Pulse",
        "Type": "Dark",
        "Damage": 45
      },
      {
        "name": "Shadow Ball",
        "Type": "Ghost",
        "Damage": 45
      },
      {
        "name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "35.44kg",
      "Maximum": "45.56kg"
    },
    "height": {
      "Minimum": "1.31m",
      "Maximum": "1.69m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "120 stamina points.",
    "baseAttack": "261 attack points.",
    "baseDefense": "156 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 92,
        "name": "Gastly"
      },
      {
        "number": 93,
        "name": "Haunter"
      }
    ],
    "maxCP": 1907,
    "maxHP": 2078
  },
  {
    "number": "095",
    "name": "Onix",
    "generation": "Generation I",
    "about": "Onix has a magnet in its brain. It acts as a compass so that this Pokémon does not lose direction while it is tunneling. As it grows older, its body becomes increasingly rounder and smoother.",
    "types": [
      "Rock",
      "Ground"
    ],
    "resistant": [
      "Normal",
      "Fire",
      "Electric",
      "Poison",
      "Flying",
      "Rock"
    ],
    "weaknesses": [
      "Water",
      "Grass",
      "Ice",
      "Fighting",
      "Ground",
      "Steel"
    ],
    "fastAttacks": [
      {
        "name": "Rock Throw",
        "Type": "Rock",
        "Damage": 12
      },
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Iron Head",
        "Type": "Steel",
        "Damage": 30
      },
      {
        "name": "Rock Slide",
        "Type": "Rock",
        "Damage": 50
      },
      {
        "name": "Stone Edge",
        "Type": "Rock",
        "Damage": 80
      }
    ],
    "weight": {
      "Minimum": "183.75kg",
      "Maximum": "236.25kg"
    },
    "height": {
      "Minimum": "7.7m",
      "Maximum": "9.9m"
    },
    "buddyDistance": "5km (Big)",
    "baseStamina": "70 stamina points.",
    "baseAttack": "85 attack points.",
    "baseDefense": "288 defense points.",
    "baseFleeRate": "9% chance to flee.",
    "nextEvolutions": [
      {
        "number": 208,
        "name": "Steelix"
      }
    ],
    "maxCP": 745,
    "maxHP": 857
  },
  {
    "number": "096",
    "name": "Drowzee",
    "generation": "Generation I",
    "about": "If your nose becomes itchy while you are sleeping, it's a sure sign that one of these Pokémon is standing above your pillow and trying to eat you dream through your nostrils.",
    "types": [
      "Psychic"
    ],
    "resistant": [
      "Fighting",
      "Psychic"
    ],
    "weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "fastAttacks": [
      {
        "name": "Confusion",
        "Type": "Psychic",
        "Damage": 15
      },
      {
        "name": "Pound",
        "Type": "Normal",
        "Damage": 7
      }
    ],
    "chargeAttacks": [
      {
        "name": "Psybeam",
        "Type": "Psychic",
        "Damage": 40
      },
      {
        "name": "Psychic",
        "Type": "Psychic",
        "Damage": 55
      },
      {
        "name": "Psyshock",
        "Type": "Psychic",
        "Damage": 40
      }
    ],
    "weight": {
      "Minimum": "28.35kg",
      "Maximum": "36.45kg"
    },
    "height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "120 stamina points.",
    "baseAttack": "89 attack points.",
    "baseDefense": "158 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Drowzee candies"
    },
    "nextEvolutions": [
      {
        "number": 97,
        "name": "Hypno"
      }
    ],
    "maxCP": 955,
    "maxHP": 1075
  },
  {
    "number": "097",
    "name": "Hypno",
    "generation": "Generation I",
    "about": "Hypno holds a pendulum in its hand. The arcing movement and glitter of the pendulum lull the foe into a deep state of hypnosis. While this Pokémon searches for prey, it polishes the pendulum.",
    "types": [
      "Psychic"
    ],
    "resistant": [
      "Fighting",
      "Psychic"
    ],
    "weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "fastAttacks": [
      {
        "name": "Confusion",
        "Type": "Psychic",
        "Damage": 15
      },
      {
        "name": "Zen Headbutt",
        "Type": "Psychic",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Psychic",
        "Type": "Psychic",
        "Damage": 55
      },
      {
        "name": "Psyshock",
        "Type": "Psychic",
        "Damage": 40
      },
      {
        "name": "Shadow Ball",
        "Type": "Ghost",
        "Damage": 45
      }
    ],
    "weight": {
      "Minimum": "66.15kg",
      "Maximum": "85.05kg"
    },
    "height": {
      "Minimum": "1.4m",
      "Maximum": "1.8m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "170 stamina points.",
    "baseAttack": "144 attack points.",
    "baseDefense": "215 defense points.",
    "baseFleeRate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 96,
        "name": "Drowzee"
      }
    ],
    "maxCP": 2012,
    "maxHP": 2184
  },
  {
    "number": "098",
    "name": "Krabby",
    "generation": "Generation I",
    "about": "Krabby live on beaches, burrowed inside holes dug into the sand. On sandy beaches with little in the way of food, these Pokémon can be seen squabbling with each other over territory.",
    "types": [
      "Water"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "fastAttacks": [
      {
        "name": "Bubble",
        "Type": "Water",
        "Damage": 25
      },
      {
        "name": "Mud Shot",
        "Type": "Ground",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Bubble Beam",
        "Type": "Water",
        "Damage": 30
      },
      {
        "name": "Vice Grip",
        "Type": "Normal",
        "Damage": 25
      },
      {
        "name": "Water Pulse",
        "Type": "Water",
        "Damage": 35
      }
    ],
    "weight": {
      "Minimum": "5.69kg",
      "Maximum": "7.31kg"
    },
    "height": {
      "Minimum": "0.35m",
      "Maximum": "0.45m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "60 stamina points.",
    "baseAttack": "181 attack points.",
    "baseDefense": "156 defense points.",
    "baseFleeRate": "15% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Krabby candies"
    },
    "nextEvolutions": [
      {
        "number": 99,
        "name": "Kingler"
      }
    ],
    "maxCP": 686,
    "maxHP": 792
  },
  {
    "number": "099",
    "name": "Kingler",
    "generation": "Generation I",
    "about": "Kingler has an enormous, oversized claw. It waves this huge claw in the air to communicate with others. However, because the claw is so heavy, the Pokémon quickly tires.",
    "types": [
      "Water"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "fastAttacks": [
      {
        "name": "Metal Claw",
        "Type": "Steel",
        "Damage": 8
      },
      {
        "name": "Mud Shot",
        "Type": "Ground",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Vice Grip",
        "Type": "Normal",
        "Damage": 25
      },
      {
        "name": "Water Pulse",
        "Type": "Water",
        "Damage": 35
      },
      {
        "name": "X Scissor",
        "Type": "Bug",
        "Damage": 35
      }
    ],
    "weight": {
      "Minimum": "52.5kg",
      "Maximum": "67.5kg"
    },
    "height": {
      "Minimum": "1.14m",
      "Maximum": "1.46m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "110 stamina points.",
    "baseAttack": "240 attack points.",
    "baseDefense": "214 defense points.",
    "baseFleeRate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 98,
        "name": "Krabby"
      }
    ],
    "maxCP": 1663,
    "maxHP": 1823
  },
  {
    "number": "100",
    "name": "Voltorb",
    "generation": "Generation I",
    "about": "Voltorb was first sighted at a company that manufactures Poké Balls. The link between that sighting and the fact that this Pokémon looks very similar to a Poké Ball remains a mystery.",
    "types": [
      "Electric"
    ],
    "resistant": [
      "Electric",
      "Flying",
      "Steel"
    ],
    "weaknesses": [
      "Ground"
    ],
    "fastAttacks": [
      {
        "name": "Spark",
        "Type": "Electric",
        "Damage": 7
      },
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Discharge",
        "Type": "Electric",
        "Damage": 35
      },
      {
        "name": "Signal Beam",
        "Type": "Bug",
        "Damage": 45
      },
      {
        "name": "Thunderbolt",
        "Type": "Electric",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "9.1kg",
      "Maximum": "11.7kg"
    },
    "height": {
      "Minimum": "0.44m",
      "Maximum": "0.56m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "80 stamina points.",
    "baseAttack": "109 attack points.",
    "baseDefense": "114 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Voltorb candies"
    },
    "nextEvolutions": [
      {
        "number": 101,
        "name": "Electrode"
      }
    ],
    "maxCP": 733,
    "maxHP": 839
  },
  {
    "number": "101",
    "name": "Electrode",
    "generation": "Generation I",
    "about": "Electrode eats electricity in the atmosphere. On days when lightning strikes, you can see this Pokémon exploding all over the place from eating too much electricity.",
    "types": [
      "Electric"
    ],
    "resistant": [
      "Electric",
      "Flying",
      "Steel"
    ],
    "weaknesses": [
      "Ground"
    ],
    "fastAttacks": [
      {
        "name": "Spark",
        "Type": "Electric",
        "Damage": 7
      },
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Discharge",
        "Type": "Electric",
        "Damage": 35
      },
      {
        "name": "Hyper Beam",
        "Type": "Normal",
        "Damage": 120
      },
      {
        "name": "Thunderbolt",
        "Type": "Electric",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "58.27kg",
      "Maximum": "74.92kg"
    },
    "height": {
      "Minimum": "1.05m",
      "Maximum": "1.35m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "120 stamina points.",
    "baseAttack": "173 attack points.",
    "baseDefense": "179 defense points.",
    "baseFleeRate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 100,
        "name": "Voltorb"
      }
    ],
    "maxCP": 1496,
    "maxHP": 1646
  },
  {
    "number": "102",
    "name": "Exeggcute",
    "generation": "Generation I",
    "about": "This Pokémon consists of six eggs that form a closely knit cluster. The six eggs attract each other and spin around. When cracks increasingly appear on the eggs, Exeggcute is close to evolution.",
    "types": [
      "Grass",
      "Psychic"
    ],
    "resistant": [
      "Water",
      "Electric",
      "Grass",
      "Fighting",
      "Ground",
      "Psychic"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug",
      "Ghost",
      "Dark"
    ],
    "fastAttacks": [
      {
        "name": "Confusion",
        "Type": "Psychic",
        "Damage": 15
      }
    ],
    "chargeAttacks": [
      {
        "name": "Ancient Power",
        "Type": "Rock",
        "Damage": 35
      },
      {
        "name": "Psychic",
        "Type": "Psychic",
        "Damage": 55
      },
      {
        "name": "Seed Bomb",
        "Type": "Grass",
        "Damage": 40
      }
    ],
    "weight": {
      "Minimum": "2.19kg",
      "Maximum": "2.81kg"
    },
    "height": {
      "Minimum": "0.35m",
      "Maximum": "0.45m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "120 stamina points.",
    "baseAttack": "107 attack points.",
    "baseDefense": "140 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "E"
    },
    "nextEvolutions": [
      {
        "number": 103,
        "name": "Exeggutor"
      }
    ],
    "maxCP": 978,
    "maxHP": 1099
  },
  {
    "number": "103",
    "name": "Exeggutor",
    "generation": "Generation I",
    "about": "Exeggutor originally came from the tropics. Its heads steadily grow larger from exposure to strong sunlight. It is said that when the heads fall off, they group together to form Exeggcute.",
    "types": [
      "Grass",
      "Psychic"
    ],
    "resistant": [
      "Water",
      "Electric",
      "Grass",
      "Fighting",
      "Ground",
      "Psychic"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug",
      "Ghost",
      "Dark"
    ],
    "fastAttacks": [
      {
        "name": "Confusion",
        "Type": "Psychic",
        "Damage": 15
      },
      {
        "name": "Zen Headbutt",
        "Type": "Psychic",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Psychic",
        "Type": "Psychic",
        "Damage": 55
      },
      {
        "name": "Seed Bomb",
        "Type": "Grass",
        "Damage": 40
      },
      {
        "name": "Solar Beam",
        "Type": "Grass",
        "Damage": 120
      }
    ],
    "weight": {
      "Minimum": "105kg",
      "Maximum": "135kg"
    },
    "height": {
      "Minimum": "1.75m",
      "Maximum": "2.25m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "190 stamina points.",
    "baseAttack": "233 attack points.",
    "baseDefense": "158 defense points.",
    "baseFleeRate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 102,
        "name": "Exeggcute"
      }
    ],
    "maxCP": 2752,
    "maxHP": 2955
  },
  {
    "number": "104",
    "name": "Cubone",
    "generation": "Generation I",
    "about": "Cubone pines for the mother it will never see again. Seeing a likeness of its mother in the full moon, it cries. The stains on the skull the Pokémon wears are made by the tears it sheds.",
    "types": [
      "Ground"
    ],
    "resistant": [
      "Electric",
      "Poison",
      "Rock"
    ],
    "weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "fastAttacks": [
      {
        "name": "Mud Slap",
        "Type": "Ground",
        "Damage": 15
      },
      {
        "name": "Rock Smash",
        "Type": "Fighting",
        "Damage": 15
      }
    ],
    "chargeAttacks": [
      {
        "name": "Bone Club",
        "Type": "Ground",
        "Damage": 25
      },
      {
        "name": "Bulldoze",
        "Type": "Ground",
        "Damage": 35
      },
      {
        "name": "Dig",
        "Type": "Ground",
        "Damage": 70
      }
    ],
    "weight": {
      "Minimum": "5.69kg",
      "Maximum": "7.31kg"
    },
    "height": {
      "Minimum": "0.35m",
      "Maximum": "0.45m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "100 stamina points.",
    "baseAttack": "90 attack points.",
    "baseDefense": "165 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Cubone candies"
    },
    "nextEvolutions": [
      {
        "number": 105,
        "name": "Marowak"
      }
    ],
    "maxCP": 889,
    "maxHP": 1006
  },
  {
    "number": "105",
    "name": "Marowak",
    "generation": "Generation I",
    "about": "Marowak is the evolved form of a Cubone that has overcome its sadness at the loss of its mother and grown tough. This Pokémon's tempered and hardened spirit is not easily broken.",
    "types": [
      "Ground"
    ],
    "resistant": [
      "Electric",
      "Poison",
      "Rock"
    ],
    "weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "fastAttacks": [
      {
        "name": "Mud Slap",
        "Type": "Ground",
        "Damage": 15
      },
      {
        "name": "Rock Smash",
        "Type": "Fighting",
        "Damage": 15
      }
    ],
    "chargeAttacks": [
      {
        "name": "Bone Club",
        "Type": "Ground",
        "Damage": 25
      },
      {
        "name": "Dig",
        "Type": "Ground",
        "Damage": 70
      },
      {
        "name": "Earthquake",
        "Type": "Ground",
        "Damage": 100
      }
    ],
    "weight": {
      "Minimum": "39.38kg",
      "Maximum": "50.63kg"
    },
    "height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "120 stamina points.",
    "baseAttack": "144 attack points.",
    "baseDefense": "200 defense points.",
    "baseFleeRate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 104,
        "name": "Cubone"
      }
    ],
    "maxCP": 1505,
    "maxHP": 1656
  },
  {
    "number": "106",
    "name": "Hitmonlee",
    "generation": "Generation I",
    "about": "Hitmonlee's legs freely contract and stretch. Using these springlike legs, it bowls over foes with devastating kicks. After battle, it rubs down its legs and loosens the muscles to overcome fatigue.",
    "types": [
      "Fighting"
    ],
    "resistant": [
      "Bug",
      "Rock",
      "Dark"
    ],
    "weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "fastAttacks": [
      {
        "name": "Low Kick",
        "Type": "Fighting",
        "Damage": 5
      },
      {
        "name": "Rock Smash",
        "Type": "Fighting",
        "Damage": 15
      }
    ],
    "chargeAttacks": [
      {
        "name": "Brick Break",
        "Type": "Fighting",
        "Damage": 30
      },
      {
        "name": "Low Sweep",
        "Type": "Fighting",
        "Damage": 30
      },
      {
        "name": "Stone Edge",
        "Type": "Rock",
        "Damage": 80
      }
    ],
    "weight": {
      "Minimum": "43.57kg",
      "Maximum": "56.02kg"
    },
    "height": {
      "Minimum": "1.31m",
      "Maximum": "1.69m"
    },
    "buddyDistance": "5km (Big)",
    "baseStamina": "100 stamina points.",
    "baseAttack": "224 attack points.",
    "baseDefense": "211 defense points.",
    "baseFleeRate": "9% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 236,
        "name": "Tyrogue"
      }
    ],
    "maxCP": 1349,
    "maxHP": 1492
  },
  {
    "number": "107",
    "name": "Hitmonchan",
    "generation": "Generation I",
    "about": "Hitmonchan is said to possess the spirit of a boxer who had been working toward a world championship. This Pokémon has an indomitable spirit and will never give up in the face of adversity.",
    "types": [
      "Fighting"
    ],
    "resistant": [
      "Bug",
      "Rock",
      "Dark"
    ],
    "weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "fastAttacks": [
      {
        "name": "Bullet Punch",
        "Type": "Steel",
        "Damage": 10
      },
      {
        "name": "Rock Smash",
        "Type": "Fighting",
        "Damage": 15
      }
    ],
    "chargeAttacks": [
      {
        "name": "Brick Break",
        "Type": "Fighting",
        "Damage": 30
      },
      {
        "name": "Fire Punch",
        "Type": "Fire",
        "Damage": 40
      },
      {
        "name": "Ice Punch",
        "Type": "Ice",
        "Damage": 45
      },
      {
        "name": "Thunder Punch",
        "Type": "Electric",
        "Damage": 40
      }
    ],
    "weight": {
      "Minimum": "43.93kg",
      "Maximum": "56.48kg"
    },
    "height": {
      "Minimum": "1.22m",
      "Maximum": "1.57m"
    },
    "buddyDistance": "5km (Big)",
    "baseStamina": "100 stamina points.",
    "baseAttack": "193 attack points.",
    "baseDefense": "212 defense points.",
    "baseFleeRate": "9% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 236,
        "name": "Tyrogue"
      }
    ],
    "maxCP": 1370,
    "maxHP": 1516
  },
  {
    "number": "108",
    "name": "Lickitung",
    "generation": "Generation I",
    "about": "Whenever Lickitung comes across something new, it will unfailingly give it a lick. It does so because it memorizes things by texture and by taste. It is somewhat put off by sour things.",
    "types": [
      "Normal"
    ],
    "resistant": [
      "Ghost"
    ],
    "weaknesses": [
      "Fighting"
    ],
    "fastAttacks": [
      {
        "name": "Lick",
        "Type": "Ghost",
        "Damage": 5
      },
      {
        "name": "Zen Headbutt",
        "Type": "Psychic",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Hyper Beam",
        "Type": "Normal",
        "Damage": 120
      },
      {
        "name": "Power Whip",
        "Type": "Grass",
        "Damage": 70
      },
      {
        "name": "Stomp",
        "Type": "Normal",
        "Damage": 30
      }
    ],
    "weight": {
      "Minimum": "57.31kg",
      "Maximum": "73.69kg"
    },
    "height": {
      "Minimum": "1.05m",
      "Maximum": "1.35m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "180 stamina points.",
    "baseAttack": "108 attack points.",
    "baseDefense": "137 defense points.",
    "baseFleeRate": "9% chance to flee.",
    "maxCP": 1477,
    "maxHP": 1626
  },
  {
    "number": "109",
    "name": "Koffing",
    "generation": "Generation I",
    "about": "If Koffing becomes agitated, it raises the toxicity of its internal gases and then jets them out from all over its body. This Pokémon may also overinflate its round body, then explode.",
    "types": [
      "Poison"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Dark Pulse",
        "Type": "Dark",
        "Damage": 45
      },
      {
        "name": "Sludge",
        "Type": "Poison",
        "Damage": 30
      },
      {
        "name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "0.88kg",
      "Maximum": "1.13kg"
    },
    "height": {
      "Minimum": "0.53m",
      "Maximum": "0.68m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "80 stamina points.",
    "baseAttack": "119 attack points.",
    "baseDefense": "164 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Koffing candies"
    },
    "nextEvolutions": [
      {
        "number": 110,
        "name": "Weezing"
      }
    ],
    "maxCP": 1025,
    "maxHP": 1151
  },
  {
    "number": "110",
    "name": "Weezing",
    "generation": "Generation I",
    "about": "Weezing loves the gases given off by rotted kitchen garbage. This Pokémon will find a dirty, unkempt house and make it its home. At night, when the people in the house are asleep, it will go through the trash.",
    "types": [
      "Poison"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "weaknesses": [
      "Ground",
      "Psychic"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Dark Pulse",
        "Type": "Dark",
        "Damage": 45
      },
      {
        "name": "Shadow Ball",
        "Type": "Ghost",
        "Damage": 45
      },
      {
        "name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "8.31kg",
      "Maximum": "10.69kg"
    },
    "height": {
      "Minimum": "1.05m",
      "Maximum": "1.35m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "130 stamina points.",
    "baseAttack": "174 attack points.",
    "baseDefense": "221 defense points.",
    "baseFleeRate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 109,
        "name": "Koffing"
      }
    ],
    "maxCP": 2073,
    "maxHP": 2250
  },
  {
    "number": "111",
    "name": "Rhyhorn",
    "generation": "Generation I",
    "about": "Rhyhorn runs in a straight line, smashing everything in its path. It is not bothered even if it rushes headlong into a block of steel. This Pokémon may feel some pain from the collision the next day, however.",
    "types": [
      "Ground",
      "Rock"
    ],
    "resistant": [
      "Normal",
      "Fire",
      "Electric",
      "Poison",
      "Flying",
      "Rock"
    ],
    "weaknesses": [
      "Water",
      "Grass",
      "Ice",
      "Fighting",
      "Ground",
      "Steel"
    ],
    "fastAttacks": [
      {
        "name": "Mud Slap",
        "Type": "Ground",
        "Damage": 15
      },
      {
        "name": "Rock Smash",
        "Type": "Fighting",
        "Damage": 15
      }
    ],
    "chargeAttacks": [
      {
        "name": "Bulldoze",
        "Type": "Ground",
        "Damage": 35
      },
      {
        "name": "Horn Attack",
        "Type": "Normal",
        "Damage": 25
      },
      {
        "name": "Stomp",
        "Type": "Normal",
        "Damage": 30
      }
    ],
    "weight": {
      "Minimum": "100.63kg",
      "Maximum": "129.38kg"
    },
    "height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "160 stamina points.",
    "baseAttack": "140 attack points.",
    "baseDefense": "157 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Rhyhorn candies"
    },
    "nextEvolutions": [
      {
        "number": 112,
        "name": "Rhydon"
      }
    ],
    "maxCP": 1055,
    "maxHP": 1182
  },
  {
    "number": "112",
    "name": "Rhydon",
    "generation": "Generation I",
    "about": "Rhydon's horn can crush even uncut diamonds. One sweeping blow of its tail can topple a building. This Pokémon's hide is extremely tough. Even direct cannon hits don't leave a scratch.",
    "types": [
      "Ground",
      "Rock"
    ],
    "resistant": [
      "Normal",
      "Fire",
      "Electric",
      "Poison",
      "Flying",
      "Rock"
    ],
    "weaknesses": [
      "Water",
      "Grass",
      "Ice",
      "Fighting",
      "Ground",
      "Steel"
    ],
    "fastAttacks": [
      {
        "name": "Mud Slap",
        "Type": "Ground",
        "Damage": 15
      },
      {
        "name": "Rock Smash",
        "Type": "Fighting",
        "Damage": 15
      }
    ],
    "chargeAttacks": [
      {
        "name": "Earthquake",
        "Type": "Ground",
        "Damage": 100
      },
      {
        "name": "Megahorn",
        "Type": "Bug",
        "Damage": 80
      },
      {
        "name": "Stone Edge",
        "Type": "Rock",
        "Damage": 80
      }
    ],
    "weight": {
      "Minimum": "105kg",
      "Maximum": "135kg"
    },
    "height": {
      "Minimum": "1.66m",
      "Maximum": "2.14m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "210 stamina points.",
    "baseAttack": "222 attack points.",
    "baseDefense": "206 defense points.",
    "baseFleeRate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 111,
        "name": "Rhyhorn"
      }
    ],
    "maxCP": 2068,
    "maxHP": 2243
  },
  {
    "number": "113",
    "name": "Chansey",
    "generation": "Generation I",
    "about": "Chansey lays nutritionally excellent eggs on an everyday basis. The eggs are so delicious, they are easily and eagerly devoured by even those people who have lost their appetite.",
    "types": [
      "Normal"
    ],
    "resistant": [
      "Ghost"
    ],
    "weaknesses": [
      "Fighting"
    ],
    "fastAttacks": [
      {
        "name": "Pound",
        "Type": "Normal",
        "Damage": 7
      },
      {
        "name": "Zen Headbutt",
        "Type": "Psychic",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Dazzling Gleam",
        "Type": "Fairy",
        "Damage": 55
      },
      {
        "name": "Hyper Beam",
        "Type": "Normal",
        "Damage": 120
      },
      {
        "name": "Psychic",
        "Type": "Psychic",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "30.27kg",
      "Maximum": "38.92kg"
    },
    "height": {
      "Minimum": "0.96m",
      "Maximum": "1.24m"
    },
    "buddyDistance": "5km (Big)",
    "baseStamina": "500 stamina points.",
    "baseAttack": "60 attack points.",
    "baseDefense": "176 defense points.",
    "baseFleeRate": "9% chance to flee.",
    "nextEvolutions": [
      {
        "number": 242,
        "name": "Blissey"
      }
    ],
    "maxCP": 549,
    "maxHP": 675
  },
  {
    "number": "114",
    "name": "Tangela",
    "generation": "Generation I",
    "about": "Tangela's vines snap off easily if they are grabbed. This happens without pain, allowing it to make a quick getaway. The lost vines are replaced by newly grown vines the very next day.",
    "types": [
      "Grass"
    ],
    "resistant": [
      "Water",
      "Electric",
      "Grass",
      "Ground"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug"
    ],
    "fastAttacks": [
      {
        "name": "Vine Whip",
        "Type": "Grass",
        "Damage": 7
      }
    ],
    "chargeAttacks": [
      {
        "name": "Power Whip",
        "Type": "Grass",
        "Damage": 70
      },
      {
        "name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      },
      {
        "name": "Solar Beam",
        "Type": "Grass",
        "Damage": 120
      }
    ],
    "weight": {
      "Minimum": "30.63kg",
      "Maximum": "39.38kg"
    },
    "height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "130 stamina points.",
    "baseAttack": "183 attack points.",
    "baseDefense": "205 defense points.",
    "baseFleeRate": "9% chance to flee.",
    "maxCP": 1586,
    "maxHP": 1739
  },
  {
    "number": "115",
    "name": "Kangaskhan",
    "generation": "Generation I",
    "about": "If you come across a young Kangaskhan playing by itself, you must never disturb it or attempt to catch it. The baby Pokémon's parent is sure to be in the area, and it will become violently enraged at you.",
    "types": [
      "Normal"
    ],
    "resistant": [
      "Ghost"
    ],
    "weaknesses": [
      "Fighting"
    ],
    "fastAttacks": [
      {
        "name": "Low Kick",
        "Type": "Fighting",
        "Damage": 5
      },
      {
        "name": "Mud Slap",
        "Type": "Ground",
        "Damage": 15
      }
    ],
    "chargeAttacks": [
      {
        "name": "Brick Break",
        "Type": "Fighting",
        "Damage": 30
      },
      {
        "name": "Earthquake",
        "Type": "Ground",
        "Damage": 100
      },
      {
        "name": "Stomp",
        "Type": "Normal",
        "Damage": 30
      }
    ],
    "weight": {
      "Minimum": "70kg",
      "Maximum": "90kg"
    },
    "height": {
      "Minimum": "1.93m",
      "Maximum": "2.48m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "210 stamina points.",
    "baseAttack": "181 attack points.",
    "baseDefense": "165 defense points.",
    "baseFleeRate": "9% chance to flee.",
    "Common Capture Area": "Early reports that this Pokèmon is likely to be found in: Australia, New Zealand or hatched from an Egg in that geographic area.",
    "Australia, New Zealand": "Common Capture Area",
    "maxCP": 1875,
    "maxHP": 2043
  },
  {
    "number": "116",
    "name": "Horsea",
    "generation": "Generation I",
    "about": "Horsea eats small insects and moss off of rocks. If the ocean current turns fast, this Pokémon anchors itself by wrapping its tail around rocks or coral to prevent being washed away.",
    "types": [
      "Water"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "fastAttacks": [
      {
        "name": "Bubble",
        "Type": "Water",
        "Damage": 25
      },
      {
        "name": "Water Gun",
        "Type": "Water",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Bubble Beam",
        "Type": "Water",
        "Damage": 30
      },
      {
        "name": "Dragon Pulse",
        "Type": "Dragon",
        "Damage": 65
      },
      {
        "name": "Flash Cannon",
        "Type": "Steel",
        "Damage": 60
      }
    ],
    "weight": {
      "Minimum": "7kg",
      "Maximum": "9kg"
    },
    "height": {
      "Minimum": "0.35m",
      "Maximum": "0.45m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "60 stamina points.",
    "baseAttack": "129 attack points.",
    "baseDefense": "125 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Horsea candies"
    },
    "nextEvolutions": [
      {
        "number": 117,
        "name": "Seadra"
      },
      {
        "number": 230,
        "name": "Kingdra"
      }
    ],
    "maxCP": 688,
    "maxHP": 794
  },
  {
    "number": "117",
    "name": "Seadra",
    "generation": "Generation I",
    "about": "Seadra sleeps after wriggling itself between the branches of coral. Those trying to harvest coral are occasionally stung by this Pokémon's poison barbs if they fail to notice it.",
    "types": [
      "Water"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "fastAttacks": [
      {
        "name": "Dragon Breath",
        "Type": "Dragon",
        "Damage": 6
      },
      {
        "name": "Water Gun",
        "Type": "Water",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Blizzard",
        "Type": "Ice",
        "Damage": 100
      },
      {
        "name": "Dragon Pulse",
        "Type": "Dragon",
        "Damage": 65
      },
      {
        "name": "Hydro Pump",
        "Type": "Water",
        "Damage": 90
      }
    ],
    "weight": {
      "Minimum": "21.88kg",
      "Maximum": "28.13kg"
    },
    "height": {
      "Minimum": "1.05m",
      "Maximum": "1.35m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "110 stamina points.",
    "baseAttack": "187 attack points.",
    "baseDefense": "182 defense points.",
    "baseFleeRate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 116,
        "name": "Horsea"
      }
    ],
    "nextEvolutions": [
      {
        "number": 230,
        "name": "Kingdra"
      }
    ],
    "maxCP": 1559,
    "maxHP": 1713
  },
  {
    "number": "118",
    "name": "Goldeen",
    "generation": "Generation I",
    "about": "Goldeen is a very beautiful Pokémon with fins that billow elegantly in water. However, don't let your guard down around this Pokémon—it could ram you powerfully with its horn.",
    "types": [
      "Water"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "fastAttacks": [
      {
        "name": "Mud Shot",
        "Type": "Ground",
        "Damage": 6
      },
      {
        "name": "Peck",
        "Type": "Flying",
        "Damage": 10
      }
    ],
    "chargeAttacks": [
      {
        "name": "Aqua Tail",
        "Type": "Water",
        "Damage": 45
      },
      {
        "name": "Horn Attack",
        "Type": "Normal",
        "Damage": 25
      },
      {
        "name": "Water Pulse",
        "Type": "Water",
        "Damage": 35
      }
    ],
    "weight": {
      "Minimum": "13.13kg",
      "Maximum": "16.88kg"
    },
    "height": {
      "Minimum": "0.53m",
      "Maximum": "0.68m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "90 stamina points.",
    "baseAttack": "123 attack points.",
    "baseDefense": "115 defense points.",
    "baseFleeRate": "15% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Goldeen candies"
    },
    "nextEvolutions": [
      {
        "number": 119,
        "name": "Seaking"
      }
    ],
    "maxCP": 851,
    "maxHP": 965
  },
  {
    "number": "119",
    "name": "Seaking",
    "generation": "Generation I",
    "about": "In the autumn, Seaking males can be seen performing courtship dances in riverbeds to woo females. During this season, this Pokémon's body coloration is at its most beautiful.",
    "types": [
      "Water"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "fastAttacks": [
      {
        "name": "Peck",
        "Type": "Flying",
        "Damage": 10
      },
      {
        "name": "Poison Jab",
        "Type": "Poison",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Drill Run",
        "Type": "Ground",
        "Damage": 50
      },
      {
        "name": "Icy Wind",
        "Type": "Ice",
        "Damage": 25
      },
      {
        "name": "Megahorn",
        "Type": "Bug",
        "Damage": 80
      }
    ],
    "weight": {
      "Minimum": "34.13kg",
      "Maximum": "43.88kg"
    },
    "height": {
      "Minimum": "1.14m",
      "Maximum": "1.46m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "160 stamina points.",
    "baseAttack": "175 attack points.",
    "baseDefense": "154 defense points.",
    "baseFleeRate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 118,
        "name": "Goldeen"
      }
    ],
    "maxCP": 1877,
    "maxHP": 2043
  },
  {
    "number": "120",
    "name": "Staryu",
    "generation": "Generation I",
    "about": "Staryu's center section has an organ called the core that shines bright red. If you go to a beach toward the end of summer, the glowing cores of these Pokémon look like the stars in the sky.",
    "types": [
      "Water"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      },
      {
        "name": "Water Gun",
        "Type": "Water",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Bubble Beam",
        "Type": "Water",
        "Damage": 30
      },
      {
        "name": "Power Gem",
        "Type": "Rock",
        "Damage": 40
      },
      {
        "name": "Swift",
        "Type": "Normal",
        "Damage": 30
      }
    ],
    "weight": {
      "Minimum": "30.19kg",
      "Maximum": "38.81kg"
    },
    "height": {
      "Minimum": "0.7m",
      "Maximum": "0.9m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "60 stamina points.",
    "baseAttack": "137 attack points.",
    "baseDefense": "112 defense points.",
    "baseFleeRate": "15% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Staryu candies"
    },
    "nextEvolutions": [
      {
        "number": 121,
        "name": "Starmie"
      }
    ],
    "maxCP": 821,
    "maxHP": 937
  },
  {
    "number": "121",
    "name": "Starmie",
    "generation": "Generation I",
    "about": "Starmie's center section-the core-glows brightly in seven colors. Because of its luminous nature, this Pokémon has been given the nickname the gem of the sea.\"\"",
    "types": [
      "Water",
      "Psychic"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Fighting",
      "Psychic",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Grass",
      "Bug",
      "Ghost",
      "Dark"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      },
      {
        "name": "Water Gun",
        "Type": "Water",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Hydro Pump",
        "Type": "Water",
        "Damage": 90
      },
      {
        "name": "Power Gem",
        "Type": "Rock",
        "Damage": 40
      },
      {
        "name": "Psychic",
        "Type": "Psychic",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "70kg",
      "Maximum": "90kg"
    },
    "height": {
      "Minimum": "0.96m",
      "Maximum": "1.24m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "120 stamina points.",
    "baseAttack": "210 attack points.",
    "baseDefense": "184 defense points.",
    "baseFleeRate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 120,
        "name": "Staryu"
      }
    ],
    "maxCP": 2007,
    "maxHP": 2182
  },
  {
    "number": "122",
    "name": "Mr Mime",
    "generation": "Generation I",
    "about": "Mr. Mime is a master of pantomime. Its gestures and motions convince watchers that something unseeable actually exists. Once the watchers are convinced, the unseeable thing exists as if it were real.",
    "types": [
      "Psychic",
      "Fairy"
    ],
    "resistant": [
      "Fighting",
      "Psychic",
      "Dragon"
    ],
    "weaknesses": [
      "Poison",
      "Ghost",
      "Steel"
    ],
    "fastAttacks": [
      {
        "name": "Confusion",
        "Type": "Psychic",
        "Damage": 15
      },
      {
        "name": "Zen Headbutt",
        "Type": "Psychic",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Psybeam",
        "Type": "Psychic",
        "Damage": 40
      },
      {
        "name": "Psychic",
        "Type": "Psychic",
        "Damage": 55
      },
      {
        "name": "Shadow Ball",
        "Type": "Ghost",
        "Damage": 45
      }
    ],
    "weight": {
      "Minimum": "47.69kg",
      "Maximum": "61.31kg"
    },
    "height": {
      "Minimum": "1.14m",
      "Maximum": "1.46m"
    },
    "buddyDistance": "5km (Medium)",
    "baseStamina": "80 stamina points.",
    "baseAttack": "192 attack points.",
    "baseDefense": "233 defense points.",
    "baseFleeRate": "9% chance to flee.",
    "Common Capture Area": "Early reports that this Pokèmon is likely to be found in: Western Europe or hatched from an Egg in that geographic area.",
    "Western Europe": "Common Capture Area",
    "maxCP": 1345,
    "maxHP": 1494
  },
  {
    "number": "123",
    "name": "Scyther",
    "generation": "Generation I",
    "about": "Scyther is blindingly fast. Its blazing speed enhances the effectiveness of the twin scythes on its forearms. This Pokémon's scythes are so effective, they can slice through thick logs in one wicked stroke.",
    "types": [
      "Bug",
      "Flying"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Ground",
      "Bug"
    ],
    "weaknesses": [
      "Fire",
      "Electric",
      "Ice",
      "Flying",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Fury Cutter",
        "Type": "Bug",
        "Damage": 3
      },
      {
        "name": "Steel Wing",
        "Type": "Steel",
        "Damage": 15
      }
    ],
    "chargeAttacks": [
      {
        "name": "Bug Buzz",
        "Type": "Bug",
        "Damage": 75
      },
      {
        "name": "Night Slash",
        "Type": "Dark",
        "Damage": 30
      },
      {
        "name": "X Scissor",
        "Type": "Bug",
        "Damage": 35
      }
    ],
    "weight": {
      "Minimum": "49kg",
      "Maximum": "63kg"
    },
    "height": {
      "Minimum": "1.31m",
      "Maximum": "1.69m"
    },
    "buddyDistance": "5km (Big)",
    "baseStamina": "140 stamina points.",
    "baseAttack": "218 attack points.",
    "baseDefense": "170 defense points.",
    "baseFleeRate": "9% chance to flee.",
    "nextEvolutions": [
      {
        "number": 212,
        "name": "Scizor"
      }
    ],
    "maxCP": 1905,
    "maxHP": 2073
  },
  {
    "number": "124",
    "name": "Jynx",
    "generation": "Generation I",
    "about": "Jynx walks rhythmically, swaying and shaking its hips as if it were dancing. Its motions are so bouncingly alluring, people seeing it are compelled to shake their hips without giving any thought to what they are doing.",
    "types": [
      "Ice",
      "Psychic"
    ],
    "resistant": [
      "Ice",
      "Psychic"
    ],
    "weaknesses": [
      "Fire",
      "Bug",
      "Rock",
      "Ghost",
      "Dark",
      "Steel"
    ],
    "fastAttacks": [
      {
        "name": "Frost Breath",
        "Type": "Ice",
        "Damage": 9
      },
      {
        "name": "Pound",
        "Type": "Normal",
        "Damage": 7
      }
    ],
    "chargeAttacks": [
      {
        "name": "Draining Kiss",
        "Type": "Fairy",
        "Damage": 25
      },
      {
        "name": "Ice Punch",
        "Type": "Ice",
        "Damage": 45
      },
      {
        "name": "Psyshock",
        "Type": "Psychic",
        "Damage": 40
      }
    ],
    "weight": {
      "Minimum": "35.52kg",
      "Maximum": "45.67kg"
    },
    "height": {
      "Minimum": "1.22m",
      "Maximum": "1.57m"
    },
    "buddyDistance": "5km (Big)",
    "baseStamina": "130 stamina points.",
    "baseAttack": "223 attack points.",
    "baseDefense": "182 defense points.",
    "baseFleeRate": "9% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 238,
        "name": "Smoochum"
      }
    ],
    "maxCP": 1563,
    "maxHP": 1716
  },
  {
    "number": "125",
    "name": "Electabuzz",
    "generation": "Generation I",
    "about": "When a storm arrives, gangs of this Pokémon compete with each other to scale heights that are likely to be stricken by lightning bolts. Some towns use Electabuzz in place of lightning rods.",
    "types": [
      "Electric"
    ],
    "resistant": [
      "Electric",
      "Flying",
      "Steel"
    ],
    "weaknesses": [
      "Ground"
    ],
    "fastAttacks": [
      {
        "name": "Low Kick",
        "Type": "Fighting",
        "Damage": 5
      },
      {
        "name": "Thunder Shock",
        "Type": "Electric",
        "Damage": 5
      }
    ],
    "chargeAttacks": [
      {
        "name": "Thunder",
        "Type": "Electric",
        "Damage": 100
      },
      {
        "name": "Thunder Punch",
        "Type": "Electric",
        "Damage": 40
      },
      {
        "name": "Thunderbolt",
        "Type": "Electric",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "26.25kg",
      "Maximum": "33.75kg"
    },
    "height": {
      "Minimum": "0.96m",
      "Maximum": "1.24m"
    },
    "buddyDistance": "5km (Medium)",
    "baseStamina": "130 stamina points.",
    "baseAttack": "198 attack points.",
    "baseDefense": "173 defense points.",
    "baseFleeRate": "9% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 239,
        "name": "Elekid"
      }
    ],
    "maxCP": 1947,
    "maxHP": 2119
  },
  {
    "number": "126",
    "name": "Magmar",
    "generation": "Generation I",
    "about": "In battle, Magmar blows out intensely hot flames from all over its body to intimidate its opponent. This Pokémon's fiery bursts create heat waves that ignite grass and trees in its surroundings.",
    "types": [
      "Fire"
    ],
    "resistant": [
      "Fire",
      "Grass",
      "Ice",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Ember",
        "Type": "Fire",
        "Damage": 10
      },
      {
        "name": "Karate Chop",
        "Type": "Fighting",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Fire Blast",
        "Type": "Fire",
        "Damage": 100
      },
      {
        "name": "Fire Punch",
        "Type": "Fire",
        "Damage": 40
      },
      {
        "name": "Flamethrower",
        "Type": "Fire",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "38.94kg",
      "Maximum": "50.06kg"
    },
    "height": {
      "Minimum": "1.14m",
      "Maximum": "1.46m"
    },
    "buddyDistance": "5km (Big)",
    "baseStamina": "130 stamina points.",
    "baseAttack": "206 attack points.",
    "baseDefense": "169 defense points.",
    "baseFleeRate": "9% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 240,
        "name": "Magby"
      }
    ],
    "maxCP": 2086,
    "maxHP": 2265
  },
  {
    "number": "127",
    "name": "Pinsir",
    "generation": "Generation I",
    "about": "Pinsir is astoundingly strong. It can grip a foe weighing twice its weight in its horns and easily lift it. This Pokémon's movements turn sluggish in cold places.",
    "types": [
      "Bug"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Ground"
    ],
    "weaknesses": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Fury Cutter",
        "Type": "Bug",
        "Damage": 3
      },
      {
        "name": "Rock Smash",
        "Type": "Fighting",
        "Damage": 15
      }
    ],
    "chargeAttacks": [
      {
        "name": "Submission",
        "Type": "Fighting",
        "Damage": 30
      },
      {
        "name": "Vice Grip",
        "Type": "Normal",
        "Damage": 25
      },
      {
        "name": "X Scissor",
        "Type": "Bug",
        "Damage": 35
      }
    ],
    "weight": {
      "Minimum": "48.13kg",
      "Maximum": "61.88kg"
    },
    "height": {
      "Minimum": "1.31m",
      "Maximum": "1.69m"
    },
    "buddyDistance": "5km (Big)",
    "baseStamina": "130 stamina points.",
    "baseAttack": "238 attack points.",
    "baseDefense": "197 defense points.",
    "baseFleeRate": "9% chance to flee.",
    "maxCP": 1950,
    "maxHP": 2121
  },
  {
    "number": "128",
    "name": "Tauros",
    "generation": "Generation I",
    "about": "This Pokémon is not satisfied unless it is rampaging at all times. If there is no opponent for Tauros to battle, it will charge at thick trees and knock them down to calm itself.",
    "types": [
      "Normal"
    ],
    "resistant": [
      "Ghost"
    ],
    "weaknesses": [
      "Fighting"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      },
      {
        "name": "Zen Headbutt",
        "Type": "Psychic",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Earthquake",
        "Type": "Ground",
        "Damage": 100
      },
      {
        "name": "Horn Attack",
        "Type": "Normal",
        "Damage": 25
      },
      {
        "name": "Iron Head",
        "Type": "Steel",
        "Damage": 30
      }
    ],
    "weight": {
      "Minimum": "77.35kg",
      "Maximum": "99.45kg"
    },
    "height": {
      "Minimum": "1.22m",
      "Maximum": "1.57m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "150 stamina points.",
    "baseAttack": "198 attack points.",
    "baseDefense": "197 defense points.",
    "baseFleeRate": "9% chance to flee.",
    "Common Capture Area": "Early reports that this Pokèmon is likely to be found in: North America or hatched from an Egg in that geographic area.",
    "North America": "Common Capture Area",
    "maxCP": 1686,
    "maxHP": 1844
  },
  {
    "number": "129",
    "name": "Magikarp",
    "generation": "Generation I",
    "about": "Magikarp is a pathetic excuse for a Pokémon that is only capable of flopping and splashing. This behavior prompted scientists to undertake research into it.",
    "types": [
      "Water"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "fastAttacks": [
      {
        "name": "Splash",
        "Type": "Water",
        "Damage": 0
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "8.75kg",
      "Maximum": "11.25kg"
    },
    "height": {
      "Minimum": "0.79m",
      "Maximum": "1.01m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "40 stamina points.",
    "baseAttack": "29 attack points.",
    "baseDefense": "102 defense points.",
    "baseFleeRate": "15% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 400,
      "name": "Magikarp candies"
    },
    "nextEvolutions": [
      {
        "number": 130,
        "name": "Gyarados"
      }
    ],
    "maxCP": 203,
    "maxHP": 262
  },
  {
    "number": "130",
    "name": "Gyarados",
    "generation": "Generation I",
    "about": "When Magikarp evolves into Gyarados, its brain cells undergo a structural transformation. It is said that this transformation is to blame for this Pokémon's wildly violent nature.",
    "types": [
      "Water",
      "Flying"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Fighting",
      "Ground",
      "Bug",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Bite",
        "Type": "Dark",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Dragon Pulse",
        "Type": "Dragon",
        "Damage": 65
      },
      {
        "name": "Hydro Pump",
        "Type": "Water",
        "Damage": 90
      },
      {
        "name": "Twister",
        "Type": "Dragon",
        "Damage": 25
      }
    ],
    "weight": {
      "Minimum": "205.63kg",
      "Maximum": "264.38kg"
    },
    "height": {
      "Minimum": "5.69m",
      "Maximum": "7.31m"
    },
    "buddyDistance": "1km (Big)",
    "baseStamina": "190 stamina points.",
    "baseAttack": "237 attack points.",
    "baseDefense": "197 defense points.",
    "baseFleeRate": "7% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 129,
        "name": "Magikarp"
      }
    ],
    "maxCP": 2498,
    "maxHP": 2688
  },
  {
    "number": "131",
    "name": "Lapras",
    "generation": "Generation I",
    "about": "People have driven Lapras almost to the point of extinction. In the evenings, this Pokémon is said to sing plaintively as it seeks what few others of its kind still remain.",
    "types": [
      "Water",
      "Ice"
    ],
    "resistant": [
      "Water",
      "Ice"
    ],
    "weaknesses": [
      "Electric",
      "Grass",
      "Fighting",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Frost Breath",
        "Type": "Ice",
        "Damage": 9
      },
      {
        "name": "Ice Shard",
        "Type": "Ice",
        "Damage": 15
      }
    ],
    "chargeAttacks": [
      {
        "name": "Blizzard",
        "Type": "Ice",
        "Damage": 100
      },
      {
        "name": "Dragon Pulse",
        "Type": "Dragon",
        "Damage": 65
      },
      {
        "name": "Ice Beam",
        "Type": "Ice",
        "Damage": 65
      }
    ],
    "weight": {
      "Minimum": "192.5kg",
      "Maximum": "247.5kg"
    },
    "height": {
      "Minimum": "2.19m",
      "Maximum": "2.81m"
    },
    "buddyDistance": "5km (Big)",
    "baseStamina": "260 stamina points.",
    "baseAttack": "186 attack points.",
    "baseDefense": "190 defense points.",
    "baseFleeRate": "9% chance to flee.",
    "maxCP": 2777,
    "maxHP": 2980
  },
  {
    "number": "132",
    "name": "Ditto",
    "generation": "Generation I",
    "about": "Ditto rearranges its cell structure to transform itself into other shapes. However, if it tries to transform itself into something by relying on its memory, this Pokémon manages to get details wrong.",
    "types": [
      "Normal"
    ],
    "resistant": [
      "Ghost"
    ],
    "weaknesses": [
      "Fighting"
    ],
    "fastAttacks": [
      {
        "name": "Transform",
        "Type": "Normal",
        "Damage": 0
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "3.5kg",
      "Maximum": "4.5kg"
    },
    "height": {
      "Minimum": "0.26m",
      "Maximum": "0.34m"
    },
    "buddyDistance": "3km (Medium)",
    "baseStamina": "96 stamina points.",
    "baseAttack": "91 attack points.",
    "baseDefense": "91 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "maxCP": 809,
    "maxHP": 919
  },
  {
    "number": "133",
    "name": "Eevee",
    "generation": "Generation I",
    "about": "Eevee has an unstable genetic makeup that suddenly mutates due to the environment in which it lives. Radiation from various stones causes this Pokémon to evolve.",
    "types": [
      "Normal"
    ],
    "resistant": [
      "Ghost"
    ],
    "weaknesses": [
      "Fighting"
    ],
    "fastAttacks": [
      {
        "name": "Quick Attack",
        "Type": "Normal",
        "Damage": 10
      },
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Body Slam",
        "Type": "Normal",
        "Damage": 40
      },
      {
        "name": "Dig",
        "Type": "Ground",
        "Damage": 70
      },
      {
        "name": "Swift",
        "Type": "Normal",
        "Damage": 30
      }
    ],
    "weight": {
      "Minimum": "5.69kg",
      "Maximum": "7.31kg"
    },
    "height": {
      "Minimum": "0.26m",
      "Maximum": "0.34m"
    },
    "buddyDistance": "5km (Shoulder)",
    "baseStamina": "110 stamina points.",
    "baseAttack": "104 attack points.",
    "baseDefense": "121 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 25,
      "name": "Eevee candies"
    },
    "nextEvolutions": [
      {
        "number": 134,
        "name": "Vaporeon"
      },
      {
        "number": 135,
        "name": "Jolteon"
      },
      {
        "number": 136,
        "name": "Flareon"
      },
      {
        "number": 196,
        "name": "Espeon"
      },
      {
        "number": 197,
        "name": "Umbreon"
      }
    ],
    "maxCP": 957,
    "maxHP": 1077
  },
  {
    "number": "134",
    "name": "Vaporeon",
    "generation": "Generation I",
    "about": "Vaporeon underwent a spontaneous mutation and grew fins and gills that allow it to live underwater. This Pokémon has the ability to freely control water.",
    "types": [
      "Water"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "fastAttacks": [
      {
        "name": "Water Gun",
        "Type": "Water",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Aqua Tail",
        "Type": "Water",
        "Damage": 45
      },
      {
        "name": "Hydro Pump",
        "Type": "Water",
        "Damage": 90
      },
      {
        "name": "Water Pulse",
        "Type": "Water",
        "Damage": 35
      }
    ],
    "weight": {
      "Minimum": "25.38kg",
      "Maximum": "32.63kg"
    },
    "height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "buddyDistance": "5km (Medium)",
    "baseStamina": "260 stamina points.",
    "baseAttack": "205 attack points.",
    "baseDefense": "177 defense points.",
    "baseFleeRate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 133,
        "name": "Eevee"
      }
    ],
    "maxCP": 2618,
    "maxHP": 2816
  },
  {
    "number": "135",
    "name": "Jolteon",
    "generation": "Generation I",
    "about": "Jolteon's cells generate a low level of electricity. This power is amplified by the static electricity of its fur, enabling the Pokémon to drop thunderbolts. The bristling fur is made of electrically charged needles.",
    "types": [
      "Electric"
    ],
    "resistant": [
      "Electric",
      "Flying",
      "Steel"
    ],
    "weaknesses": [
      "Ground"
    ],
    "fastAttacks": [
      {
        "name": "Thunder Shock",
        "Type": "Electric",
        "Damage": 5
      }
    ],
    "chargeAttacks": [
      {
        "name": "Discharge",
        "Type": "Electric",
        "Damage": 35
      },
      {
        "name": "Thunder",
        "Type": "Electric",
        "Damage": 100
      },
      {
        "name": "Thunderbolt",
        "Type": "Electric",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "21.44kg",
      "Maximum": "27.56kg"
    },
    "height": {
      "Minimum": "0.7m",
      "Maximum": "0.9m"
    },
    "buddyDistance": "5km (Medium)",
    "baseStamina": "130 stamina points.",
    "baseAttack": "232 attack points.",
    "baseDefense": "201 defense points.",
    "baseFleeRate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 133,
        "name": "Eevee"
      }
    ],
    "maxCP": 1968,
    "maxHP": 2140
  },
  {
    "number": "136",
    "name": "Flareon",
    "generation": "Generation I",
    "about": "Flareon's fluffy fur has a functional purpose-it releases heat into the air so that its body does not get excessively hot. This Pokémon's body temperature can rise to a maximum of 1,650 degrees Fahrenheit.",
    "types": [
      "Fire"
    ],
    "resistant": [
      "Fire",
      "Grass",
      "Ice",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Ember",
        "Type": "Fire",
        "Damage": 10
      }
    ],
    "chargeAttacks": [
      {
        "name": "Fire Blast",
        "Type": "Fire",
        "Damage": 100
      },
      {
        "name": "Flamethrower",
        "Type": "Fire",
        "Damage": 55
      },
      {
        "name": "Heat Wave",
        "Type": "Fire",
        "Damage": 80
      }
    ],
    "weight": {
      "Minimum": "21.88kg",
      "Maximum": "28.13kg"
    },
    "height": {
      "Minimum": "0.79m",
      "Maximum": "1.01m"
    },
    "buddyDistance": "5km (Medium)",
    "baseStamina": "130 stamina points.",
    "baseAttack": "246 attack points.",
    "baseDefense": "204 defense points.",
    "baseFleeRate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 133,
        "name": "Eevee"
      }
    ],
    "maxCP": 2448,
    "maxHP": 2643
  },
  {
    "number": "137",
    "name": "Porygon",
    "generation": "Generation I",
    "about": "Porygon is capable of reverting itself entirely back to program data and entering cyberspace. This Pokémon is copy-protected so it cannot be duplicated by copying.",
    "types": [
      "Normal"
    ],
    "resistant": [
      "Ghost"
    ],
    "weaknesses": [
      "Fighting"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      },
      {
        "name": "Zen Headbutt",
        "Type": "Psychic",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Discharge",
        "Type": "Electric",
        "Damage": 35
      },
      {
        "name": "Psybeam",
        "Type": "Psychic",
        "Damage": 40
      },
      {
        "name": "Signal Beam",
        "Type": "Bug",
        "Damage": 45
      }
    ],
    "weight": {
      "Minimum": "31.94kg",
      "Maximum": "41.06kg"
    },
    "height": {
      "Minimum": "0.7m",
      "Maximum": "0.9m"
    },
    "buddyDistance": "3km (Big)",
    "baseStamina": "130 stamina points.",
    "baseAttack": "153 attack points.",
    "baseDefense": "139 defense points.",
    "baseFleeRate": "9% chance to flee.",
    "nextEvolutions": [
      {
        "number": 233,
        "name": "Porygon2"
      }
    ],
    "maxCP": 1540,
    "maxHP": 1691
  },
  {
    "number": "138",
    "name": "Omanyte",
    "generation": "Generation I",
    "about": "Omanyte is one of the ancient and long-since-extinct Pokémon that have been regenerated from fossils by people. If attacked by an enemy, it withdraws itself inside its hard shell.",
    "types": [
      "Rock",
      "Water"
    ],
    "resistant": [
      "Normal",
      "Fire",
      "Ice",
      "Poison",
      "Flying"
    ],
    "weaknesses": [
      "Electric",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "fastAttacks": [
      {
        "name": "Mud Shot",
        "Type": "Ground",
        "Damage": 6
      },
      {
        "name": "Water Gun",
        "Type": "Water",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Ancient Power",
        "Type": "Rock",
        "Damage": 35
      },
      {
        "name": "Brine",
        "Type": "Water",
        "Damage": 25
      },
      {
        "name": "Rock Tomb",
        "Type": "Rock",
        "Damage": 30
      }
    ],
    "weight": {
      "Minimum": "6.56kg",
      "Maximum": "8.44kg"
    },
    "height": {
      "Minimum": "0.35m",
      "Maximum": "0.45m"
    },
    "buddyDistance": "5km (Medium)",
    "baseStamina": "70 stamina points.",
    "baseAttack": "155 attack points.",
    "baseDefense": "174 defense points.",
    "baseFleeRate": "9% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Omanyte candies"
    },
    "nextEvolutions": [
      {
        "number": 139,
        "name": "Omastar"
      }
    ],
    "maxCP": 992,
    "maxHP": 1119
  },
  {
    "number": "139",
    "name": "Omastar",
    "generation": "Generation I",
    "types": [
      "Rock",
      "Water"
    ],
    "resistant": [
      "Normal",
      "Fire",
      "Ice",
      "Poison",
      "Flying"
    ],
    "weaknesses": [
      "Electric",
      "Grass",
      "Fighting",
      "Ground"
    ]
  },
  {
    "number": "140",
    "name": "Kabuto",
    "generation": "Generation I",
    "about": "Kabuto is a Pokémon that has been regenerated from a fossil. However, in extremely rare cases, living examples have been discovered. The Pokémon has not changed at all for 300 million years.",
    "types": [
      "Rock",
      "Water"
    ],
    "resistant": [
      "Normal",
      "Fire",
      "Ice",
      "Poison",
      "Flying"
    ],
    "weaknesses": [
      "Electric",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "fastAttacks": [
      {
        "name": "Mud Shot",
        "Type": "Ground",
        "Damage": 6
      },
      {
        "name": "Scratch",
        "Type": "Normal",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Ancient Power",
        "Type": "Rock",
        "Damage": 35
      },
      {
        "name": "Aqua Jet",
        "Type": "Water",
        "Damage": 25
      },
      {
        "name": "Rock Tomb",
        "Type": "Rock",
        "Damage": 30
      }
    ],
    "weight": {
      "Minimum": "10.06kg",
      "Maximum": "12.94kg"
    },
    "height": {
      "Minimum": "0.44m",
      "Maximum": "0.56m"
    },
    "buddyDistance": "5km (Medium)",
    "baseStamina": "60 stamina points.",
    "baseAttack": "148 attack points.",
    "baseDefense": "162 defense points.",
    "baseFleeRate": "9% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Kabuto candies"
    },
    "nextEvolutions": [
      {
        "number": 141,
        "name": "Kabutops"
      }
    ],
    "maxCP": 975,
    "maxHP": 1104
  },
  {
    "number": "141",
    "name": "Kabutops",
    "generation": "Generation I",
    "about": "Kabutops swam underwater to hunt for its prey in ancient times. The Pokémon was apparently evolving from being a water-dweller to living on land as evident from the beginnings of change in its gills and legs.",
    "types": [
      "Rock",
      "Water"
    ],
    "resistant": [
      "Normal",
      "Fire",
      "Ice",
      "Poison",
      "Flying"
    ],
    "weaknesses": [
      "Electric",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "fastAttacks": [
      {
        "name": "Fury Cutter",
        "Type": "Bug",
        "Damage": 3
      },
      {
        "name": "Mud Shot",
        "Type": "Ground",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Ancient Power",
        "Type": "Rock",
        "Damage": 35
      },
      {
        "name": "Stone Edge",
        "Type": "Rock",
        "Damage": 80
      },
      {
        "name": "Water Pulse",
        "Type": "Water",
        "Damage": 35
      }
    ],
    "weight": {
      "Minimum": "35.44kg",
      "Maximum": "45.56kg"
    },
    "height": {
      "Minimum": "1.14m",
      "Maximum": "1.46m"
    },
    "buddyDistance": "5km (Big)",
    "baseStamina": "120 stamina points.",
    "baseAttack": "220 attack points.",
    "baseDefense": "203 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 140,
        "name": "Kabuto"
      }
    ],
    "maxCP": 1957,
    "maxHP": 2130
  },
  {
    "number": "142",
    "name": "Aerodactyl",
    "generation": "Generation I",
    "about": "Aerodactyl is a Pokémon from the age of dinosaurs. It was regenerated from genetic material extracted from amber. It is imagined to have been the king of the skies in ancient times.",
    "types": [
      "Rock",
      "Flying"
    ],
    "resistant": [
      "Normal",
      "Fire",
      "Poison",
      "Flying",
      "Bug"
    ],
    "weaknesses": [
      "Water",
      "Electric",
      "Ice",
      "Rock",
      "Steel"
    ],
    "fastAttacks": [
      {
        "name": "Bite",
        "Type": "Dark",
        "Damage": 6
      },
      {
        "name": "Steel Wing",
        "Type": "Steel",
        "Damage": 15
      }
    ],
    "chargeAttacks": [
      {
        "name": "Ancient Power",
        "Type": "Rock",
        "Damage": 35
      },
      {
        "name": "Hyper Beam",
        "Type": "Normal",
        "Damage": 120
      },
      {
        "name": "Iron Head",
        "Type": "Steel",
        "Damage": 30
      }
    ],
    "weight": {
      "Minimum": "51.63kg",
      "Maximum": "66.38kg"
    },
    "height": {
      "Minimum": "1.57m",
      "Maximum": "2.02m"
    },
    "buddyDistance": "5km (Big)",
    "baseStamina": "160 stamina points.",
    "baseAttack": "221 attack points.",
    "baseDefense": "164 defense points.",
    "baseFleeRate": "9% chance to flee.",
    "maxCP": 1994,
    "maxHP": 2165
  },
  {
    "number": "143",
    "name": "Snorlax",
    "generation": "Generation I",
    "about": "Snorlax's typical day consists of nothing more than eating and sleeping. It is such a docile Pokémon that there are children who use its expansive belly as a place to play.",
    "types": [
      "Normal"
    ],
    "resistant": [
      "Ghost"
    ],
    "weaknesses": [
      "Fighting"
    ],
    "fastAttacks": [
      {
        "name": "Lick",
        "Type": "Ghost",
        "Damage": 5
      },
      {
        "name": "Zen Headbutt",
        "Type": "Psychic",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Body Slam",
        "Type": "Normal",
        "Damage": 40
      },
      {
        "name": "Earthquake",
        "Type": "Ground",
        "Damage": 100
      },
      {
        "name": "Hyper Beam",
        "Type": "Normal",
        "Damage": 120
      }
    ],
    "weight": {
      "Minimum": "402.5kg",
      "Maximum": "517.5kg"
    },
    "height": {
      "Minimum": "1.84m",
      "Maximum": "2.36m"
    },
    "buddyDistance": "5km (Big)",
    "baseStamina": "320 stamina points.",
    "baseAttack": "190 attack points.",
    "baseDefense": "190 defense points.",
    "baseFleeRate": "9% chance to flee.",
    "maxCP": 2901,
    "maxHP": 3112
  },
  {
    "number": "144",
    "name": "Articuno",
    "generation": "Generation I",
    "about": "Articuno is a legendary bird Pokémon that can control ice. The flapping of its wings chills the air. As a result, it is said that when this Pokémon flies, snow will fall.",
    "types": [
      "Ice",
      "Flying"
    ],
    "resistant": [
      "Grass",
      "Ground",
      "Bug"
    ],
    "weaknesses": [
      "Fire",
      "Electric",
      "Rock",
      "Steel"
    ],
    "fastAttacks": [
      {
        "name": "Frost Breath",
        "Type": "Ice",
        "Damage": 9
      }
    ],
    "chargeAttacks": [
      {
        "name": "Blizzard",
        "Type": "Ice",
        "Damage": 100
      },
      {
        "name": "Ice Beam",
        "Type": "Ice",
        "Damage": 65
      },
      {
        "name": "Icy Wind",
        "Type": "Ice",
        "Damage": 25
      }
    ],
    "weight": {
      "Minimum": "48.48kg",
      "Maximum": "62.33kg"
    },
    "height": {
      "Minimum": "1.49m",
      "Maximum": "1.91m"
    },
    "buddyDistance": "5km (Flying)",
    "baseStamina": "180 stamina points.",
    "baseAttack": "192 attack points.",
    "baseDefense": "249 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "Pokèmon Class": "This is a LEGENDARY Pokèmon.",
    "LEGENDARY": "Pokèmon Class",
    "maxCP": 2776,
    "maxHP": 2978
  },
  {
    "number": "145",
    "name": "Zapdos",
    "generation": "Generation I",
    "about": "Zapdos is a legendary bird Pokémon that has the ability to control electricity. It usually lives in thunderclouds. The Pokémon gains power if it is stricken by lightning bolts.",
    "types": [
      "Electric",
      "Flying"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Flying",
      "Bug",
      "Steel"
    ],
    "weaknesses": [
      "Ice",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Thunder Shock",
        "Type": "Electric",
        "Damage": 5
      }
    ],
    "chargeAttacks": [
      {
        "name": "Discharge",
        "Type": "Electric",
        "Damage": 35
      },
      {
        "name": "Thunder",
        "Type": "Electric",
        "Damage": 100
      },
      {
        "name": "Thunderbolt",
        "Type": "Electric",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "46.02kg",
      "Maximum": "59.17kg"
    },
    "height": {
      "Minimum": "1.4m",
      "Maximum": "1.8m"
    },
    "buddyDistance": "5km (Flying)",
    "baseStamina": "180 stamina points.",
    "baseAttack": "253 attack points.",
    "baseDefense": "188 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "Pokèmon Class": "This is a LEGENDARY Pokèmon.",
    "LEGENDARY": "Pokèmon Class",
    "maxCP": 2907,
    "maxHP": 3114
  },
  {
    "number": "146",
    "name": "Moltres",
    "generation": "Generation I",
    "about": "Moltres is a legendary bird Pokémon that has the ability to control fire. If this Pokémon is injured, it is said to dip its body in the molten magma of a volcano to burn and heal itself.",
    "types": [
      "Fire",
      "Flying"
    ],
    "resistant": [
      "Fire",
      "Grass",
      "Fighting",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "weaknesses": [
      "Water",
      "Electric",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Ember",
        "Type": "Fire",
        "Damage": 10
      }
    ],
    "chargeAttacks": [
      {
        "name": "Fire Blast",
        "Type": "Fire",
        "Damage": 100
      },
      {
        "name": "Flamethrower",
        "Type": "Fire",
        "Damage": 55
      },
      {
        "name": "Heat Wave",
        "Type": "Fire",
        "Damage": 80
      }
    ],
    "weight": {
      "Minimum": "52.5kg",
      "Maximum": "67.5kg"
    },
    "height": {
      "Minimum": "1.75m",
      "Maximum": "2.25m"
    },
    "buddyDistance": "5km (Big)",
    "baseStamina": "180 stamina points.",
    "baseAttack": "251 attack points.",
    "baseDefense": "184 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "Pokèmon Class": "This is a LEGENDARY Pokèmon.",
    "LEGENDARY": "Pokèmon Class",
    "maxCP": 3028,
    "maxHP": 3240
  },
  {
    "number": "147",
    "name": "Dratini",
    "generation": "Generation I",
    "about": "Dratini continually molts and sloughs off its old skin. It does so because the life energy within its body steadily builds to reach uncontrollable levels.",
    "types": [
      "Dragon"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Electric",
      "Grass"
    ],
    "weaknesses": [
      "Ice",
      "Dragon",
      "Fairy"
    ],
    "fastAttacks": [
      {
        "name": "Dragon Breath",
        "Type": "Dragon",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Aqua Tail",
        "Type": "Water",
        "Damage": 45
      },
      {
        "name": "Twister",
        "Type": "Dragon",
        "Damage": 25
      },
      {
        "name": "Wrap",
        "Type": "Normal",
        "Damage": 25
      }
    ],
    "weight": {
      "Minimum": "2.89kg",
      "Maximum": "3.71kg"
    },
    "height": {
      "Minimum": "1.57m",
      "Maximum": "2.02m"
    },
    "buddyDistance": "5km (Medium)",
    "baseStamina": "82 stamina points.",
    "baseAttack": "119 attack points.",
    "baseDefense": "94 defense points.",
    "baseFleeRate": "9% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 25,
      "name": "Dratini candies"
    },
    "nextEvolutions": [
      {
        "number": 148,
        "name": "Dragonair"
      },
      {
        "number": 149,
        "name": "Dragonite"
      }
    ],
    "maxCP": 867,
    "maxHP": 983
  },
  {
    "number": "148",
    "name": "Dragonair",
    "generation": "Generation I",
    "about": "Dragonair stores an enormous amount of energy inside its body. It is said to alter weather conditions in its vicinity by discharging energy from its crystals on its neck and tail.",
    "types": [
      "Dragon"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Electric",
      "Grass"
    ],
    "weaknesses": [
      "Ice",
      "Dragon",
      "Fairy"
    ],
    "fastAttacks": [
      {
        "name": "Dragon Breath",
        "Type": "Dragon",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Aqua Tail",
        "Type": "Water",
        "Damage": 45
      },
      {
        "name": "Dragon Pulse",
        "Type": "Dragon",
        "Damage": 65
      },
      {
        "name": "Wrap",
        "Type": "Normal",
        "Damage": 25
      }
    ],
    "weight": {
      "Minimum": "14.44kg",
      "Maximum": "18.56kg"
    },
    "height": {
      "Minimum": "3.5m",
      "Maximum": "4.5m"
    },
    "buddyDistance": "5km (Big)",
    "baseStamina": "122 stamina points.",
    "baseAttack": "163 attack points.",
    "baseDefense": "138 defense points.",
    "baseFleeRate": "6% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 147,
        "name": "Dratini"
      }
    ],
    "nextEvolutionReq": {
      "Amount": 100,
      "name": "Dratini candies"
    },
    "nextEvolutions": [
      {
        "number": 149,
        "name": "Dragonite"
      }
    ],
    "maxCP": 1593,
    "maxHP": 1747
  },
  {
    "number": "149",
    "name": "Dragonite",
    "generation": "Generation I",
    "about": "Dragonite is capable of circling the globe in just 16 hours. It is a kindhearted Pokémon that leads lost and foundering ships in a storm to the safety of land.",
    "types": [
      "Dragon",
      "Flying"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Grass",
      "Fighting",
      "Ground",
      "Bug"
    ],
    "weaknesses": [
      "Ice",
      "Rock",
      "Dragon",
      "Fairy"
    ],
    "fastAttacks": [
      {
        "name": "Dragon Breath",
        "Type": "Dragon",
        "Damage": 6
      },
      {
        "name": "Steel Wing",
        "Type": "Steel",
        "Damage": 15
      }
    ],
    "chargeAttacks": [
      {
        "name": "Dragon Claw",
        "Type": "Dragon",
        "Damage": 35
      },
      {
        "name": "Dragon Pulse",
        "Type": "Dragon",
        "Damage": 65
      },
      {
        "name": "Hyper Beam",
        "Type": "Normal",
        "Damage": 120
      }
    ],
    "weight": {
      "Minimum": "183.75kg",
      "Maximum": "236.25kg"
    },
    "height": {
      "Minimum": "1.93m",
      "Maximum": "2.48m"
    },
    "buddyDistance": "5km (Big)",
    "baseStamina": "182 stamina points.",
    "baseAttack": "263 attack points.",
    "baseDefense": "201 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 147,
        "name": "Dratini"
      },
      {
        "number": 148,
        "name": "Dragonair"
      }
    ],
    "maxCP": 3280,
    "maxHP": 3500
  },
  {
    "number": "150",
    "name": "Mewtwo",
    "generation": "Generation I",
    "about": "Mewtwo is a Pokémon that was created by genetic manipulation. However, even though the scientific power of humans created this Pokémon's body, they failed to endow Mewtwo with a compassionate heart",
    "types": [
      "Psychic"
    ],
    "resistant": [
      "Fighting",
      "Psychic"
    ],
    "weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "fastAttacks": [
      {
        "name": "Confusion",
        "Type": "Psychic",
        "Damage": 15
      },
      {
        "name": "Psycho Cut",
        "Type": "Psychic",
        "Damage": 7
      }
    ],
    "chargeAttacks": [
      {
        "name": "Hyper Beam",
        "Type": "Normal",
        "Damage": 120
      },
      {
        "name": "Psychic",
        "Type": "Psychic",
        "Damage": 55
      },
      {
        "name": "Shadow Ball",
        "Type": "Ghost",
        "Damage": 45
      }
    ],
    "weight": {
      "Minimum": "106.75kg",
      "Maximum": "137.25kg"
    },
    "height": {
      "Minimum": "1.75m",
      "Maximum": "2.25m"
    },
    "buddyDistance": "5km (Big)",
    "baseStamina": "212 stamina points.",
    "baseAttack": "330 attack points.",
    "baseDefense": "200 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "Pokèmon Class": "This is a LEGENDARY Pokèmon.",
    "LEGENDARY": "Pokèmon Class",
    "maxCP": 3904,
    "maxHP": 4144
  },
  {
    "number": "151",
    "name": "Mew",
    "generation": "Generation I",
    "about": "Mew is said to possess the genetic composition of all Pokémon. It is capable of making itself invisible at will, so it entirely avoids notice even if it approaches people.",
    "types": [
      "Psychic"
    ],
    "resistant": [
      "Fighting",
      "Psychic"
    ],
    "weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "fastAttacks": [
      {
        "name": "Pound",
        "Type": "Normal",
        "Damage": 7
      }
    ],
    "chargeAttacks": [
      {
        "name": "Blizzard",
        "Type": "Ice",
        "Damage": 100
      },
      {
        "name": "Dragon Pulse",
        "Type": "Dragon",
        "Damage": 65
      },
      {
        "name": "Earthquake",
        "Type": "Ground",
        "Damage": 100
      },
      {
        "name": "Fire Blast",
        "Type": "Fire",
        "Damage": 100
      },
      {
        "name": "Hyper Beam",
        "Type": "Normal",
        "Damage": 120
      },
      {
        "name": "Psychic",
        "Type": "Psychic",
        "Damage": 55
      },
      {
        "name": "Solar Beam",
        "Type": "Grass",
        "Damage": 120
      },
      {
        "name": "Thunder",
        "Type": "Electric",
        "Damage": 100
      }
    ],
    "weight": {
      "Minimum": "3.5kg",
      "Maximum": "4.5kg"
    },
    "height": {
      "Minimum": "0.35m",
      "Maximum": "0.45m"
    },
    "buddyDistance": "5km (Medium)",
    "baseStamina": "200 stamina points.",
    "baseAttack": "210 attack points.",
    "baseDefense": "210 defense points.",
    "baseFleeRate": "10% chance to flee.",
    "Pokèmon Class": "This is a MYTHIC Pokèmon.",
    "MYTHIC": "Pokèmon Class",
    "maxCP": 3087,
    "maxHP": 3299
  },
  {
    "number": "152",
    "name": "Chikorita",
    "generation": "Generation II",
    "about": "In battle, Chikorita waves its leaf around to keep the foe at bay. However, a sweet fragrance also wafts from the leaf, becalming the battling Pokémon and creating a cozy, friendly atmosphere all around.",
    "types": [
      "Grass"
    ],
    "resistant": [
      "Water",
      "Electric",
      "Grass",
      "Ground"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug"
    ],
    "fastAttacks": [
      {
        "name": "Razor Leaf",
        "Type": "Grass",
        "Damage": 15
      },
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "5.6kg",
      "Maximum": "7.2kg"
    },
    "height": {
      "Minimum": "0.78m",
      "Maximum": "1m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "90 stamina points.",
    "baseAttack": "92 attack points.",
    "baseDefense": "122 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 25,
      "name": "Chikorita candies"
    },
    "nextEvolutions": [
      {
        "number": 153,
        "name": "Bayleef"
      },
      {
        "number": 154,
        "name": "Meganium"
      }
    ]
  },
  {
    "number": "153",
    "name": "Bayleef",
    "generation": "Generation II",
    "about": "Bayleef's neck is ringed by curled-up leaves. Inside each tubular leaf is a small shoot of a tree. The fragrance of this shoot makes people peppy.",
    "types": [
      "Grass"
    ],
    "resistant": [
      "Water",
      "Electric",
      "Grass",
      "Ground"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug"
    ],
    "fastAttacks": [
      {
        "name": "Razor Leaf",
        "Type": "Grass",
        "Damage": 15
      },
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "13.83kg",
      "Maximum": "17.78kg"
    },
    "height": {
      "Minimum": "1.04m",
      "Maximum": "1.34m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "120 stamina points.",
    "baseAttack": "122 attack points.",
    "baseDefense": "155 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 152,
        "name": "Chikorita"
      }
    ],
    "nextEvolutionReq": {
      "Amount": 100,
      "name": "Chikorita candies"
    },
    "nextEvolutions": [
      {
        "number": 154,
        "name": "Meganium"
      }
    ]
  },
  {
    "number": "154",
    "name": "Meganium",
    "generation": "Generation II",
    "about": "The fragrance of Meganium's flower soothes and calms emotions. In battle, this Pokémon gives off more of its becalming scent to blunt the foe's fighting spirit.",
    "types": [
      "Grass"
    ],
    "resistant": [
      "Water",
      "Electric",
      "Grass",
      "Ground"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug"
    ],
    "fastAttacks": [
      {
        "name": "Razor Leaf",
        "Type": "Grass",
        "Damage": 15
      },
      {
        "name": "Vine Whip",
        "Type": "Grass",
        "Damage": 7
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "87.94kg",
      "Maximum": "113.06kg"
    },
    "height": {
      "Minimum": "1.57m",
      "Maximum": "2.02m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "160 stamina points.",
    "baseAttack": "168 attack points.",
    "baseDefense": "202 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 152,
        "name": "Chikorita"
      },
      {
        "number": 153,
        "name": "Bayleef"
      }
    ]
  },
  {
    "number": "155",
    "name": "Cyndaquil",
    "generation": "Generation II",
    "about": "Cyndaquil protects itself by flaring up the flames on its back. The flames are vigorous if the Pokémon is angry. However, if it is tired, the flames splutter fitfully with incomplete combustion.",
    "types": [
      "Fire"
    ],
    "resistant": [
      "Fire",
      "Grass",
      "Ice",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Ember",
        "Type": "Fire",
        "Damage": 10
      },
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "6.91kg",
      "Maximum": "8.89kg"
    },
    "height": {
      "Minimum": "0.45m",
      "Maximum": "0.57m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "78 stamina points.",
    "baseAttack": "116 attack points.",
    "baseDefense": "96 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "nextEvolutions": [
      {
        "number": 156,
        "name": "Quilava"
      },
      {
        "number": 157,
        "name": "Typhlosion"
      }
    ]
  },
  {
    "number": "156",
    "name": "Quilava",
    "generation": "Generation II",
    "about": "Quilava keeps its foes at bay with the intensity of its flames and gusts of superheated air. This Pokémon applies its outstanding nimbleness to dodge attacks even while scorching the foe with flames.",
    "types": [
      "Fire"
    ],
    "resistant": [
      "Fire",
      "Grass",
      "Ice",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Ember",
        "Type": "Fire",
        "Damage": 10
      },
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "16.63kg",
      "Maximum": "21.38kg"
    },
    "height": {
      "Minimum": "0.78m",
      "Maximum": "1m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "116 stamina points.",
    "baseAttack": "158 attack points.",
    "baseDefense": "129 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 155,
        "name": "Cyndaquil"
      }
    ],
    "nextEvolutions": [
      {
        "number": 157,
        "name": "Typhlosion"
      }
    ]
  },
  {
    "number": "157",
    "name": "Typhlosion",
    "generation": "Generation II",
    "about": "Typhlosion obscures itself behind a shimmering heat haze that it creates using its intensely hot flames. This Pokémon creates blazing explosive blasts that burn everything to cinders.",
    "types": [
      "Fire"
    ],
    "resistant": [
      "Fire",
      "Grass",
      "Ice",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Ember",
        "Type": "Fire",
        "Damage": 10
      },
      {
        "name": "Shadow Claw",
        "Type": "Ghost",
        "Damage": 11
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "69.56kg",
      "Maximum": "89.44kg"
    },
    "height": {
      "Minimum": "1.49m",
      "Maximum": "1.91m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "156 stamina points.",
    "baseAttack": "223 attack points.",
    "baseDefense": "176 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 155,
        "name": "Cyndaquil"
      },
      {
        "number": 156,
        "name": "Quilava"
      }
    ]
  },
  {
    "number": "158",
    "name": "Totodile",
    "generation": "Generation II",
    "about": "Despite the smallness of its body, Totodile's jaws are very powerful. While the Pokémon may think it is just playfully nipping, its bite has enough power to cause serious injury.",
    "types": [
      "Water"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "fastAttacks": [
      {
        "name": "Scratch",
        "Type": "Normal",
        "Damage": 6
      },
      {
        "name": "Water Gun",
        "Type": "Water",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "8.31kg",
      "Maximum": "10.69kg"
    },
    "height": {
      "Minimum": "0.53m",
      "Maximum": "0.69m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "100 stamina points.",
    "baseAttack": "117 attack points.",
    "baseDefense": "116 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "nextEvolutions": [
      {
        "number": 159,
        "name": "Croconaw"
      },
      {
        "number": 160,
        "name": "Feraligatr"
      }
    ]
  },
  {
    "number": "159",
    "name": "Croconaw",
    "generation": "Generation II",
    "about": "Once Croconaw has clamped its jaws on its foe, it will absolutely not let go. Because the tips of its fangs are forked back like barbed fishhooks, they become impossible to remove when they have sunk in.",
    "types": [
      "Water"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "fastAttacks": [
      {
        "name": "Scratch",
        "Type": "Normal",
        "Damage": 6
      },
      {
        "name": "Water Gun",
        "Type": "Water",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "21.88kg",
      "Maximum": "28.13kg"
    },
    "height": {
      "Minimum": "0.95m",
      "Maximum": "1.23m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "130 stamina points.",
    "baseAttack": "150 attack points.",
    "baseDefense": "151 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 158,
        "name": "Totodile"
      }
    ],
    "nextEvolutions": [
      {
        "number": 160,
        "name": "Feraligatr"
      }
    ]
  },
  {
    "number": "160",
    "name": "Feraligatr",
    "generation": "Generation II",
    "about": "Feraligatr intimidates its foes by opening its huge mouth. In battle, it will kick the ground hard with its thick and powerful hind legs to charge at the foe at an incredible speed.",
    "types": [
      "Water"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "fastAttacks": [
      {
        "name": "Bite",
        "Type": "Dark",
        "Damage": 6
      },
      {
        "name": "Water Gun",
        "Type": "Water",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "77.7kg",
      "Maximum": "99.9kg"
    },
    "height": {
      "Minimum": "2.02m",
      "Maximum": "2.6m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "170 stamina points.",
    "baseAttack": "205 attack points.",
    "baseDefense": "197 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 158,
        "name": "Totodile"
      },
      {
        "number": 159,
        "name": "Croconaw"
      }
    ]
  },
  {
    "number": "161",
    "name": "Sentret",
    "generation": "Generation II",
    "about": "When Sentret sleeps, it does so while another stands guard. The sentry wakes the others at the first sign of danger. When this Pokémon becomes separated from its pack, it becomes incapable of sleep due to fear.",
    "types": [
      "Normal"
    ],
    "resistant": [
      "Ghost"
    ],
    "weaknesses": [
      "Fighting"
    ],
    "fastAttacks": [
      {
        "name": "Quick Attack",
        "Type": "Normal",
        "Damage": 10
      },
      {
        "name": "Scratch",
        "Type": "Normal",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "5.25kg",
      "Maximum": "6.75kg"
    },
    "height": {
      "Minimum": "0.69m",
      "Maximum": "0.89m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "70 stamina points.",
    "baseAttack": "79 attack points.",
    "baseDefense": "77 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "nextEvolutions": [
      {
        "number": 162,
        "name": "Furret"
      }
    ]
  },
  {
    "number": "162",
    "name": "Furret",
    "generation": "Generation II",
    "about": "Furret has a very slim build. When under attack, it can slickly squirm through narrow spaces and get away. In spite of its short limbs, this Pokémon is very nimble and fleet.",
    "types": [
      "Normal"
    ],
    "resistant": [
      "Ghost"
    ],
    "weaknesses": [
      "Fighting"
    ],
    "fastAttacks": [
      {
        "name": "Quick Attack",
        "Type": "Normal",
        "Damage": 10
      },
      {
        "name": "Sucker Punch",
        "Type": "Dark",
        "Damage": 7
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "28.44kg",
      "Maximum": "36.56kg"
    },
    "height": {
      "Minimum": "1.57m",
      "Maximum": "2.02m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "170 stamina points.",
    "baseAttack": "148 attack points.",
    "baseDefense": "130 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 161,
        "name": "Sentret"
      }
    ]
  },
  {
    "number": "163",
    "name": "Hoothoot",
    "generation": "Generation II",
    "about": "Hoothoot has an internal organ that senses and tracks the earth's rotation. Using this special organ, this Pokémon begins hooting at precisely the same time every day.",
    "types": [
      "Normal",
      "Flying"
    ],
    "resistant": [
      "Grass",
      "Ground",
      "Bug",
      "Ghost"
    ],
    "weaknesses": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Peck",
        "Type": "Flying",
        "Damage": 10
      },
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "18.55kg",
      "Maximum": "23.85kg"
    },
    "height": {
      "Minimum": "0.62m",
      "Maximum": "0.8m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "120 stamina points.",
    "baseAttack": "67 attack points.",
    "baseDefense": "101 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "nextEvolutions": [
      {
        "number": 164,
        "name": "Noctowl"
      }
    ]
  },
  {
    "number": "164",
    "name": "Noctowl",
    "generation": "Generation II",
    "about": "Noctowl never fails at catching prey in darkness. This Pokémon owes its success to its superior vision that allows it to see in minimal light, and to its soft, supple wings that make no sound in flight.",
    "types": [
      "Normal",
      "Flying"
    ],
    "resistant": [
      "Grass",
      "Ground",
      "Bug",
      "Ghost"
    ],
    "weaknesses": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Peck",
        "Type": "Flying",
        "Damage": 10
      },
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "35.7kg",
      "Maximum": "45.9kg"
    },
    "height": {
      "Minimum": "1.4m",
      "Maximum": "1.8m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "200 stamina points.",
    "baseAttack": "145 attack points.",
    "baseDefense": "179 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 163,
        "name": "Hoothoot"
      }
    ]
  },
  {
    "number": "165",
    "name": "Ledyba",
    "generation": "Generation II",
    "about": "Ledyba secretes an aromatic fluid from where its legs join its body. This fluid is used for communicating with others. This Pokémon conveys its feelings to others by altering the fluid's scent.",
    "types": [
      "Bug",
      "Flying"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Ground",
      "Bug"
    ],
    "weaknesses": [
      "Fire",
      "Electric",
      "Ice",
      "Flying",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Bug Bite",
        "Type": "Bug",
        "Damage": 5
      },
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "9.45kg",
      "Maximum": "12.15kg"
    },
    "height": {
      "Minimum": "0.87m",
      "Maximum": "1.11m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "80 stamina points.",
    "baseAttack": "72 attack points.",
    "baseDefense": "142 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "nextEvolutions": [
      {
        "number": 166,
        "name": "Ledian"
      }
    ]
  },
  {
    "number": "166",
    "name": "Ledian",
    "generation": "Generation II",
    "about": "It is said that in lands with clean air, where the stars fill the sky, there live Ledian in countless numbers. There is a good reason for this—the Pokémon uses the light of the stars as its energy.",
    "types": [
      "Bug",
      "Flying"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Ground",
      "Bug"
    ],
    "weaknesses": [
      "Fire",
      "Electric",
      "Ice",
      "Flying",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Bug Bite",
        "Type": "Bug",
        "Damage": 5
      },
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "31.15kg",
      "Maximum": "40.05kg"
    },
    "height": {
      "Minimum": "1.22m",
      "Maximum": "1.57m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "110 stamina points.",
    "baseAttack": "107 attack points.",
    "baseDefense": "209 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 165,
        "name": "Ledyba"
      }
    ]
  },
  {
    "number": "167",
    "name": "Spinarak",
    "generation": "Generation II",
    "about": "The web spun by Spinarak can be considered its second nervous system. It is said that this Pokémon can determine what kind of prey is touching its web just by the tiny vibrations it feels through the web's strands.",
    "types": [
      "Bug",
      "Poison"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "weaknesses": [
      "Fire",
      "Flying",
      "Psychic",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Bug Bite",
        "Type": "Bug",
        "Damage": 5
      },
      {
        "name": "Poison Sting",
        "Type": "Poison",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "7.44kg",
      "Maximum": "9.56kg"
    },
    "height": {
      "Minimum": "0.45m",
      "Maximum": "0.57m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "80 stamina points.",
    "baseAttack": "105 attack points.",
    "baseDefense": "73 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "nextEvolutions": [
      {
        "number": 168,
        "name": "Ariados"
      }
    ]
  },
  {
    "number": "168",
    "name": "Ariados",
    "generation": "Generation II",
    "about": "Ariados's feet are tipped with tiny hooked claws that enable it to scuttle on ceilings and vertical walls. This Pokémon constricts the foe with thin and strong silk webbing.",
    "types": [
      "Bug",
      "Poison"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "weaknesses": [
      "Fire",
      "Flying",
      "Psychic",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Bug Bite",
        "Type": "Bug",
        "Damage": 5
      },
      {
        "name": "Poison Sting",
        "Type": "Poison",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "29.31kg",
      "Maximum": "37.69kg"
    },
    "height": {
      "Minimum": "0.95m",
      "Maximum": "1.23m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "140 stamina points.",
    "baseAttack": "161 attack points.",
    "baseDefense": "128 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 167,
        "name": "Spinarak"
      }
    ]
  },
  {
    "number": "169",
    "name": "Crobat",
    "generation": "Generation II",
    "about": "If this Pokémon is flying by fluttering only a pair of wings on either the forelegs or hind legs, it's proof that Crobat has been flying a long distance. It switches the wings it uses if it is tired.",
    "types": [
      "Poison",
      "Flying"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "weaknesses": [
      "Electric",
      "Ice",
      "Psychic",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Bite",
        "Type": "Dark",
        "Damage": 6
      },
      {
        "name": "Wing Attack",
        "Type": "Flying",
        "Damage": 9
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "65.63kg",
      "Maximum": "84.38kg"
    },
    "height": {
      "Minimum": "1.57m",
      "Maximum": "2.02m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "170 stamina points.",
    "baseAttack": "194 attack points.",
    "baseDefense": "178 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 41,
        "name": "Zubat"
      },
      {
        "number": 42,
        "name": "Golbat"
      }
    ]
  },
  {
    "number": "170",
    "name": "Chinchou",
    "generation": "Generation II",
    "about": "Chinchou lets loose positive and negative electrical charges from its two antennas to make its prey faint. This Pokémon flashes its electric lights to exchange signals with others.",
    "types": [
      "Water",
      "Electric"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Flying",
      "Steel"
    ],
    "weaknesses": [
      "Grass",
      "Ground"
    ],
    "fastAttacks": [
      {
        "name": "Bubble",
        "Type": "Water",
        "Damage": 25
      },
      {
        "name": "Spark",
        "Type": "Electric",
        "Damage": 7
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "10.5kg",
      "Maximum": "13.5kg"
    },
    "height": {
      "Minimum": "0.45m",
      "Maximum": "0.57m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "150 stamina points.",
    "baseAttack": "106 attack points.",
    "baseDefense": "106 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "nextEvolutions": [
      {
        "number": 171,
        "name": "Lanturn"
      }
    ]
  },
  {
    "number": "171",
    "name": "Lanturn",
    "generation": "Generation II",
    "about": "Lanturn is nicknamed “the deep-sea star for its illuminated antenna. This Pokémon produces light by causing a chemical reaction between bacteria and its bodily fluids inside the antenna.\"",
    "types": [
      "Water",
      "Electric"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Flying",
      "Steel"
    ],
    "weaknesses": [
      "Grass",
      "Ground"
    ],
    "fastAttacks": [
      {
        "name": "Spark",
        "Type": "Electric",
        "Damage": 7
      },
      {
        "name": "Water Gun",
        "Type": "Water",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "19.69kg",
      "Maximum": "25.31kg"
    },
    "height": {
      "Minimum": "1.04m",
      "Maximum": "1.34m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "250 stamina points.",
    "baseAttack": "146 attack points.",
    "baseDefense": "146 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 170,
        "name": "Chinchou"
      }
    ]
  },
  {
    "number": "172",
    "name": "Pichu",
    "generation": "Generation II",
    "about": "Pichu charges itself with electricity more easily on days with thunderclouds or when the air is very dry. You can hear the crackling of static electricity coming off this Pokémon.",
    "types": [
      "Electric"
    ],
    "resistant": [
      "Electric",
      "Flying",
      "Steel"
    ],
    "weaknesses": [
      "Ground"
    ],
    "fastAttacks": [
      {
        "name": "Quick Attack",
        "Type": "Normal",
        "Damage": 10
      },
      {
        "name": "Thunder Shock",
        "Type": "Electric",
        "Damage": 5
      }
    ],
    "chargeAttacks": [
      {
        "name": "Disarming Voice",
        "Type": "Fairy",
        "Damage": 25
      },
      {
        "name": "Thunder Punch",
        "Type": "Electric",
        "Damage": 40
      },
      {
        "name": "Thunderbolt",
        "Type": "Electric",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "1.75kg",
      "Maximum": "2.25kg"
    },
    "height": {
      "Minimum": "0.26m",
      "Maximum": "0.34m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "40 stamina points.",
    "baseAttack": "77 attack points.",
    "baseDefense": "63 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 25,
      "name": "Pikachu candies"
    },
    "nextEvolutions": [
      {
        "number": 25,
        "name": "Pikachu"
      },
      {
        "number": 26,
        "name": "Raichu"
      }
    ]
  },
  {
    "number": "173",
    "name": "Cleffa",
    "generation": "Generation II",
    "about": "On nights with many shooting stars, Cleffa can be seen dancing in a ring. They dance through the night and stop only at the break of day, when these Pokémon quench their thirst with the morning dew.",
    "types": [
      "Fairy"
    ],
    "resistant": [
      "Fighting",
      "Bug",
      "Dragon",
      "Dark"
    ],
    "weaknesses": [
      "Poison",
      "Steel"
    ],
    "fastAttacks": [
      {
        "name": "Pound",
        "Type": "Normal",
        "Damage": 7
      },
      {
        "name": "Zen Headbutt",
        "Type": "Psychic",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Body Slam",
        "Type": "Normal",
        "Damage": 40
      },
      {
        "name": "Psychic",
        "Type": "Psychic",
        "Damage": 55
      },
      {
        "name": "Signal Beam",
        "Type": "Bug",
        "Damage": 45
      }
    ],
    "weight": {
      "Minimum": "2.63kg",
      "Maximum": "3.38kg"
    },
    "height": {
      "Minimum": "0.26m",
      "Maximum": "0.34m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "100 stamina points.",
    "baseAttack": "75 attack points.",
    "baseDefense": "91 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 25,
      "name": "Clefairy candies"
    },
    "nextEvolutions": [
      {
        "number": 35,
        "name": "Clefairy"
      },
      {
        "number": 36,
        "name": "Clefable"
      }
    ]
  },
  {
    "number": "174",
    "name": "Igglybuff",
    "generation": "Generation II",
    "about": "Igglybuff's vocal cords are not sufficiently developed. It would hurt its throat if it were to sing too much. This Pokémon gargles with freshwater from a clean stream.",
    "types": [
      "Normal",
      "Fairy"
    ],
    "resistant": [
      "Bug",
      "Ghost",
      "Dragon",
      "Dark"
    ],
    "weaknesses": [
      "Poison",
      "Steel"
    ],
    "fastAttacks": [
      {
        "name": "Feint Attack",
        "Type": "Dark",
        "Damage": 12
      },
      {
        "name": "Pound",
        "Type": "Normal",
        "Damage": 7
      }
    ],
    "chargeAttacks": [
      {
        "name": "Body Slam",
        "Type": "Normal",
        "Damage": 40
      },
      {
        "name": "Psychic",
        "Type": "Psychic",
        "Damage": 55
      },
      {
        "name": "Shadow Ball",
        "Type": "Ghost",
        "Damage": 45
      }
    ],
    "weight": {
      "Minimum": "0.88kg",
      "Maximum": "1.13kg"
    },
    "height": {
      "Minimum": "0.26m",
      "Maximum": "0.34m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "180 stamina points.",
    "baseAttack": "69 attack points.",
    "baseDefense": "34 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 25,
      "name": "Jigglypuff candies"
    },
    "nextEvolutions": [
      {
        "number": 39,
        "name": "Jigglypuff"
      },
      {
        "number": 40,
        "name": "Wigglytuff"
      }
    ]
  },
  {
    "number": "175",
    "name": "Togepi",
    "generation": "Generation II",
    "about": "As its energy, Togepi uses the positive emotions of compassion and pleasure exuded by people and Pokémon. This Pokémon stores up feelings of happiness inside its shell, then shares them with others.",
    "types": [
      "Fairy"
    ],
    "resistant": [
      "Fighting",
      "Bug",
      "Dragon",
      "Dark"
    ],
    "weaknesses": [
      "Poison",
      "Steel"
    ],
    "fastAttacks": [
      {
        "name": "Peck",
        "Type": "Flying",
        "Damage": 10
      },
      {
        "name": "Zen Headbutt",
        "Type": "Psychic",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Ancient Power",
        "Type": "Rock",
        "Damage": 35
      },
      {
        "name": "Dazzling Gleam",
        "Type": "Fairy",
        "Damage": 55
      },
      {
        "name": "Psyshock",
        "Type": "Psychic",
        "Damage": 40
      }
    ],
    "weight": {
      "Minimum": "1.31kg",
      "Maximum": "1.69kg"
    },
    "height": {
      "Minimum": "0.26m",
      "Maximum": "0.34m"
    },
    "buddyDistance": "5km (Medium)",
    "baseStamina": "70 stamina points.",
    "baseAttack": "67 attack points.",
    "baseDefense": "116 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 50,
      "name": "Togepi candies"
    },
    "nextEvolutions": [
      {
        "number": 176,
        "name": "Togetic"
      }
    ]
  },
  {
    "number": "176",
    "name": "Togetic",
    "generation": "Generation II",
    "about": "Togetic is said to be a Pokémon that brings good fortune. When the Pokémon spots someone who is pure of heart, it is said to appear and share its happiness with that person.",
    "types": [
      "Fairy",
      "Flying"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Ground",
      "Bug",
      "Dragon",
      "Dark"
    ],
    "weaknesses": [
      "Electric",
      "Ice",
      "Poison",
      "Rock",
      "Steel"
    ],
    "fastAttacks": [
      {
        "name": "Steel Wing",
        "Type": "Steel",
        "Damage": 15
      },
      {
        "name": "Zen Headbutt",
        "Type": "Psychic",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Aerial Ace",
        "Type": "Flying",
        "Damage": 30
      },
      {
        "name": "Ancient Power",
        "Type": "Rock",
        "Damage": 35
      },
      {
        "name": "Dazzling Gleam",
        "Type": "Fairy",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "2.8kg",
      "Maximum": "3.6kg"
    },
    "height": {
      "Minimum": "0.53m",
      "Maximum": "0.69m"
    },
    "buddyDistance": "5km (Medium)",
    "baseStamina": "110 stamina points.",
    "baseAttack": "139 attack points.",
    "baseDefense": "191 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 175,
        "name": "Togepi"
      }
    ]
  },
  {
    "number": "177",
    "name": "Natu",
    "generation": "Generation II",
    "about": "Natu cannot fly because its wings are not yet fully grown. If your eyes meet with this Pokémon's eyes, it will stare back intently at you. But if you move even slightly, it will hop away to safety.",
    "types": [
      "Psychic",
      "Flying"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Ground",
      "Psychic"
    ],
    "weaknesses": [
      "Electric",
      "Ice",
      "Rock",
      "Ghost",
      "Dark"
    ],
    "fastAttacks": [
      {
        "name": "Peck",
        "Type": "Flying",
        "Damage": 10
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "1.75kg",
      "Maximum": "2.25kg"
    },
    "height": {
      "Minimum": "0.18m",
      "Maximum": "0.23m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "80 stamina points.",
    "baseAttack": "134 attack points.",
    "baseDefense": "89 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "nextEvolutions": [
      {
        "number": 178,
        "name": "Xatu"
      }
    ]
  },
  {
    "number": "178",
    "name": "Xatu",
    "generation": "Generation II",
    "about": "Xatu stands rooted and still in one spot all day long. People believe that this Pokémon does so out of fear of the terrible things it has foreseen in the future.",
    "types": [
      "Psychic",
      "Flying"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Ground",
      "Psychic"
    ],
    "weaknesses": [
      "Electric",
      "Ice",
      "Rock",
      "Ghost",
      "Dark"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "13.13kg",
      "Maximum": "16.88kg"
    },
    "height": {
      "Minimum": "1.31m",
      "Maximum": "1.69m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "130 stamina points.",
    "baseAttack": "192 attack points.",
    "baseDefense": "146 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 177,
        "name": "Natu"
      }
    ]
  },
  {
    "number": "179",
    "name": "Mareep",
    "generation": "Generation II",
    "about": "Mareep's fluffy coat of wool rubs together and builds a static charge. The more static electricity is charged, the more brightly the lightbulb at the tip of its tail glows.",
    "types": [
      "Electric"
    ],
    "resistant": [
      "Electric",
      "Flying",
      "Steel"
    ],
    "weaknesses": [
      "Ground"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "6.83kg",
      "Maximum": "8.78kg"
    },
    "height": {
      "Minimum": "0.53m",
      "Maximum": "0.69m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "110 stamina points.",
    "baseAttack": "114 attack points.",
    "baseDefense": "82 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "nextEvolutions": [
      {
        "number": 180,
        "name": "Flaaffy"
      },
      {
        "number": 181,
        "name": "Ampharos"
      }
    ]
  },
  {
    "number": "180",
    "name": "Flaaffy",
    "generation": "Generation II",
    "about": "Flaaffy's wool quality changes so that it can generate a high amount of static electricity with a small amount of wool. The bare and slick parts of its hide are shielded against electricity.",
    "types": [
      "Electric"
    ],
    "resistant": [
      "Electric",
      "Flying",
      "Steel"
    ],
    "weaknesses": [
      "Ground"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "11.64kg",
      "Maximum": "14.96kg"
    },
    "height": {
      "Minimum": "0.69m",
      "Maximum": "0.89m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "140 stamina points.",
    "baseAttack": "145 attack points.",
    "baseDefense": "112 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 179,
        "name": "Mareep"
      }
    ],
    "nextEvolutions": [
      {
        "number": 181,
        "name": "Ampharos"
      }
    ]
  },
  {
    "number": "181",
    "name": "Ampharos",
    "generation": "Generation II",
    "about": "Ampharos gives off so much light that it can be seen even from space. People in the old days used the light of this Pokémon to send signals back and forth with others far away.",
    "types": [
      "Electric"
    ],
    "resistant": [
      "Electric",
      "Flying",
      "Steel"
    ],
    "weaknesses": [
      "Ground"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "53.81kg",
      "Maximum": "69.19kg"
    },
    "height": {
      "Minimum": "1.22m",
      "Maximum": "1.57m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "180 stamina points.",
    "baseAttack": "211 attack points.",
    "baseDefense": "172 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 179,
        "name": "Mareep"
      },
      {
        "number": 180,
        "name": "Flaaffy"
      }
    ]
  },
  {
    "number": "182",
    "name": "Bellossom",
    "generation": "Generation II",
    "about": "When Bellossom gets exposed to plenty of sunlight, the leaves ringing its body begin to spin around. This Pokémon's dancing is renowned in the southern lands.",
    "types": [
      "Grass"
    ],
    "resistant": [
      "Water",
      "Electric",
      "Grass",
      "Ground"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "5.08kg",
      "Maximum": "6.53kg"
    },
    "height": {
      "Minimum": "0.36m",
      "Maximum": "0.46m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "150 stamina points.",
    "baseAttack": "169 attack points.",
    "baseDefense": "189 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 43,
        "name": "Oddish"
      },
      {
        "number": 44,
        "name": "Gloom"
      }
    ]
  },
  {
    "number": "183",
    "name": "Marill",
    "generation": "Generation II",
    "about": "Marill's oil-filled tail acts much like a life preserver. If you see just its tail bobbing on the water's surface, it's a sure indication that this Pokémon is diving beneath the water to feed on aquatic plants.",
    "types": [
      "Water",
      "Fairy"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Fighting",
      "Bug",
      "Dragon",
      "Dark"
    ],
    "weaknesses": [
      "Electric",
      "Grass",
      "Poison"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "7.44kg",
      "Maximum": "9.56kg"
    },
    "height": {
      "Minimum": "0.36m",
      "Maximum": "0.46m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "140 stamina points.",
    "baseAttack": "37 attack points.",
    "baseDefense": "93 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "nextEvolutions": [
      {
        "number": 184,
        "name": "Azumarill"
      }
    ]
  },
  {
    "number": "184",
    "name": "Azumarill",
    "generation": "Generation II",
    "about": "Azumarill's long ears are indispensable sensors. By focusing its hearing, this Pokémon can identify what kinds of prey are around, even in rough and fast-running rivers.",
    "types": [
      "Water",
      "Fairy"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Fighting",
      "Bug",
      "Dragon",
      "Dark"
    ],
    "weaknesses": [
      "Electric",
      "Grass",
      "Poison"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "24.94kg",
      "Maximum": "32.06kg"
    },
    "height": {
      "Minimum": "0.69m",
      "Maximum": "0.89m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "200 stamina points.",
    "baseAttack": "112 attack points.",
    "baseDefense": "152 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 183,
        "name": "Marill"
      }
    ]
  },
  {
    "number": "185",
    "name": "Sudowoodo",
    "generation": "Generation II",
    "about": "Sudowoodo camouflages itself as a tree to avoid being attacked by enemies. However, because its hands remain green throughout the year, the Pokémon is easily identified as a fake during the winter.",
    "types": [
      "Rock"
    ],
    "resistant": [
      "Normal",
      "Fire",
      "Poison",
      "Flying"
    ],
    "weaknesses": [
      "Water",
      "Grass",
      "Fighting",
      "Ground",
      "Steel"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "33.25kg",
      "Maximum": "42.75kg"
    },
    "height": {
      "Minimum": "1.04m",
      "Maximum": "1.34m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "140 stamina points.",
    "baseAttack": "167 attack points.",
    "baseDefense": "198 defense points.",
    "baseFleeRate": "5% chance to flee."
  },
  {
    "number": "186",
    "name": "Politoed",
    "generation": "Generation II",
    "about": "The curled hair on Politoed's head is proof of its status as a king. It is said that the longer and more curled the hair, the more respect this Pokémon earns from its peers.",
    "types": [
      "Water"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "29.66kg",
      "Maximum": "38.14kg"
    },
    "height": {
      "Minimum": "9.54m",
      "Maximum": "12.26m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "180 stamina points.",
    "baseAttack": "174 attack points.",
    "baseDefense": "192 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 60,
        "name": "Poliwag"
      },
      {
        "number": 61,
        "name": "Poliwhirl"
      }
    ]
  },
  {
    "number": "187",
    "name": "Hoppip",
    "generation": "Generation II",
    "about": "This Pokémon drifts and floats with the wind. If it senses the approach of strong winds, Hoppip links its leaves with other Hoppip to prepare against being blown away.",
    "types": [
      "Grass",
      "Flying"
    ],
    "resistant": [
      "Water",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "0.44kg",
      "Maximum": "0.56kg"
    },
    "height": {
      "Minimum": "0.36m",
      "Maximum": "0.46m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "70 stamina points.",
    "baseAttack": "67 attack points.",
    "baseDefense": "101 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "nextEvolutions": [
      {
        "number": 188,
        "name": "Skiploom"
      },
      {
        "number": 189,
        "name": "Jumpluff"
      }
    ]
  },
  {
    "number": "188",
    "name": "Skiploom",
    "generation": "Generation II",
    "about": "Skiploom's flower blossoms when the temperature rises above 64 degrees Fahrenheit. How much the flower opens depends on the temperature. For that reason, this Pokémon is sometimes used as a thermometer.",
    "types": [
      "Grass",
      "Flying"
    ],
    "resistant": [
      "Water",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "0.88kg",
      "Maximum": "1.13kg"
    },
    "height": {
      "Minimum": "0.53m",
      "Maximum": "0.69m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "110 stamina points.",
    "baseAttack": "91 attack points.",
    "baseDefense": "127 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 187,
        "name": "Hoppip"
      }
    ],
    "nextEvolutions": [
      {
        "number": 189,
        "name": "Jumpluff"
      }
    ]
  },
  {
    "number": "189",
    "name": "Jumpluff",
    "generation": "Generation II",
    "about": "Jumpluff rides warm southern winds to cross the sea and fly to foreign lands. The Pokémon descends to the ground when it encounters cold air while it is floating.",
    "types": [
      "Grass",
      "Flying"
    ],
    "resistant": [
      "Water",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "2.63kg",
      "Maximum": "3.38kg"
    },
    "height": {
      "Minimum": "0.69m",
      "Maximum": "0.89m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "150 stamina points.",
    "baseAttack": "118 attack points.",
    "baseDefense": "197 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 187,
        "name": "Hoppip"
      },
      {
        "number": 188,
        "name": "Skiploom"
      }
    ]
  },
  {
    "number": "190",
    "name": "Aipom",
    "generation": "Generation II",
    "about": "Aipom's tail ends in a hand-like appendage that can be cleverly manipulated. However, because the Pokémon uses its tail so much, its real hands have become rather clumsy.",
    "types": [
      "Normal"
    ],
    "resistant": [
      "Ghost"
    ],
    "weaknesses": [
      "Fighting"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "10.06kg",
      "Maximum": "12.94kg"
    },
    "height": {
      "Minimum": "0.69m",
      "Maximum": "0.89m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "110 stamina points.",
    "baseAttack": "136 attack points.",
    "baseDefense": "112 defense points.",
    "baseFleeRate": "5% chance to flee."
  },
  {
    "number": "191",
    "name": "Sunkern",
    "generation": "Generation II",
    "about": "Sunkern tries to move as little as it possibly can. It does so because it tries to conserve all the nutrients it has stored in its body for its evolution. It will not eat a thing, subsisting only on morning dew.",
    "types": [
      "Grass"
    ],
    "resistant": [
      "Water",
      "Electric",
      "Grass",
      "Ground"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "1.57kg",
      "Maximum": "2.02kg"
    },
    "height": {
      "Minimum": "0.26m",
      "Maximum": "0.34m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "60 stamina points.",
    "baseAttack": "55 attack points.",
    "baseDefense": "55 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "nextEvolutions": [
      {
        "number": 192,
        "name": "Sunflora"
      }
    ]
  },
  {
    "number": "192",
    "name": "Sunflora",
    "generation": "Generation II",
    "about": "Sunflora converts solar energy into nutrition. It moves around actively in the daytime when it is warm. It stops moving as soon as the sun goes down for the night.",
    "types": [
      "Grass"
    ],
    "resistant": [
      "Water",
      "Electric",
      "Grass",
      "Ground"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "7.44kg",
      "Maximum": "9.56kg"
    },
    "height": {
      "Minimum": "0.69m",
      "Maximum": "0.89m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "150 stamina points.",
    "baseAttack": "185 attack points.",
    "baseDefense": "148 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 191,
        "name": "Sunkern"
      }
    ]
  },
  {
    "number": "193",
    "name": "Yanma",
    "generation": "Generation II",
    "about": "Yanma is capable of seeing 360 degrees without having to move its eyes. It is a great flier that is adept at making sudden stops and turning midair. This Pokémon uses its flying ability to quickly chase down targeted prey.",
    "types": [
      "Bug",
      "Flying"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Ground",
      "Bug"
    ],
    "weaknesses": [
      "Fire",
      "Electric",
      "Ice",
      "Flying",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "33.25kg",
      "Maximum": "42.75kg"
    },
    "height": {
      "Minimum": "1.04m",
      "Maximum": "1.34m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "130 stamina points.",
    "baseAttack": "154 attack points.",
    "baseDefense": "94 defense points.",
    "baseFleeRate": "5% chance to flee."
  },
  {
    "number": "194",
    "name": "Wooper",
    "generation": "Generation II",
    "about": "Wooper usually lives in water. However, it occasionally comes out onto land in search of food. On land, it coats its body with a gooey, toxic film.",
    "types": [
      "Water",
      "Ground"
    ],
    "resistant": [
      "Fire",
      "Poison",
      "Rock",
      "Steel"
    ],
    "weaknesses": [
      "Grass"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "7.44kg",
      "Maximum": "9.56kg"
    },
    "height": {
      "Minimum": "0.36m",
      "Maximum": "0.46m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "110 stamina points.",
    "baseAttack": "75 attack points.",
    "baseDefense": "75 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "nextEvolutions": [
      {
        "number": 195,
        "name": "Quagsire"
      }
    ]
  },
  {
    "number": "195",
    "name": "Quagsire",
    "generation": "Generation II",
    "about": "Quagsire hunts for food by leaving its mouth wide open in water and waiting for its prey to blunder in unaware. Because the Pokémon does not move, it does not get very hungry.",
    "types": [
      "Water",
      "Ground"
    ],
    "resistant": [
      "Fire",
      "Poison",
      "Rock",
      "Steel"
    ],
    "weaknesses": [
      "Grass"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "65.63kg",
      "Maximum": "84.38kg"
    },
    "height": {
      "Minimum": "1.22m",
      "Maximum": "1.57m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "190 stamina points.",
    "baseAttack": "152 attack points.",
    "baseDefense": "152 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 194,
        "name": "Wooper"
      }
    ]
  },
  {
    "number": "196",
    "name": "Espeon",
    "generation": "Generation II",
    "about": "Espeon is extremely loyal to any Trainer it considers to be worthy. It is said that this Pokémon developed its precognitive powers to protect its Trainer from harm.",
    "types": [
      "Psychic"
    ],
    "resistant": [
      "Fighting",
      "Psychic"
    ],
    "weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "fastAttacks": [
      {
        "name": "Confusion",
        "Type": "Psychic",
        "Damage": 15
      },
      {
        "name": "Zen Headbutt",
        "Type": "Psychic",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "23.19kg",
      "Maximum": "29.81kg"
    },
    "height": {
      "Minimum": "0.78m",
      "Maximum": "1m"
    },
    "buddyDistance": "5km (Medium)",
    "baseStamina": "130 stamina points.",
    "baseAttack": "261 attack points.",
    "baseDefense": "194 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 133,
        "name": "Eevee"
      }
    ]
  },
  {
    "number": "197",
    "name": "Umbreon",
    "generation": "Generation II",
    "about": "Umbreon evolved as a result of exposure to the moon's waves. It hides silently in darkness and waits for its foes to make a move. The rings on its body glow when it leaps to attack.",
    "types": [
      "Dark"
    ],
    "resistant": [
      "Psychic",
      "Ghost",
      "Dark"
    ],
    "weaknesses": [
      "Fighting",
      "Bug",
      "Fairy"
    ],
    "fastAttacks": [
      {
        "name": "Bite",
        "Type": "Dark",
        "Damage": 6
      },
      {
        "name": "Feint Attack",
        "Type": "Dark",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "23.63kg",
      "Maximum": "30.38kg"
    },
    "height": {
      "Minimum": "0.87m",
      "Maximum": "1.11m"
    },
    "buddyDistance": "5km (Medium)",
    "baseStamina": "190 stamina points.",
    "baseAttack": "126 attack points.",
    "baseDefense": "250 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 133,
        "name": "Eevee"
      }
    ]
  },
  {
    "number": "198",
    "name": "Murkrow",
    "generation": "Generation II",
    "about": "Murkrow was feared and loathed as the alleged bearer of ill fortune. This Pokémon shows strong interest in anything that sparkles or glitters. It will even try to steal rings from women.",
    "types": [
      "Dark",
      "Flying"
    ],
    "resistant": [
      "Grass",
      "Ground",
      "Psychic",
      "Ghost",
      "Dark"
    ],
    "weaknesses": [
      "Electric",
      "Ice",
      "Rock",
      "Fairy"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "1.84kg",
      "Maximum": "2.36kg"
    },
    "height": {
      "Minimum": "0.45m",
      "Maximum": "0.57m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "120 stamina points.",
    "baseAttack": "175 attack points.",
    "baseDefense": "87 defense points.",
    "baseFleeRate": "5% chance to flee."
  },
  {
    "number": "199",
    "name": "Slowking",
    "generation": "Generation II",
    "about": "Slowking undertakes research every day in an effort to solve the mysteries of the world. However, this Pokémon apparently forgets everything it has learned if the Shellder on its head comes off.",
    "types": [
      "Water",
      "Psychic"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Fighting",
      "Psychic",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Grass",
      "Bug",
      "Ghost",
      "Dark"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "69.56kg",
      "Maximum": "89.44kg"
    },
    "height": {
      "Minimum": "1.76m",
      "Maximum": "2.26m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "190 stamina points.",
    "baseAttack": "177 attack points.",
    "baseDefense": "194 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 79,
        "name": "Slowpoke"
      }
    ]
  },
  {
    "number": "200",
    "name": "Misdreavus",
    "generation": "Generation II",
    "about": "Misdreavus frightens people with a creepy, sobbing cry. The Pokémon apparently uses its red spheres to absorb the fearful feelings of foes and turn them into nutrition.",
    "types": [
      "Ghost"
    ],
    "resistant": [
      "Normal",
      "Fighting",
      "Poison",
      "Bug"
    ],
    "weaknesses": [
      "Ghost",
      "Dark"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "0.88kg",
      "Maximum": "1.13kg"
    },
    "height": {
      "Minimum": "0.62m",
      "Maximum": "0.8m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "120 stamina points.",
    "baseAttack": "167 attack points.",
    "baseDefense": "167 defense points.",
    "baseFleeRate": "5% chance to flee."
  },
  {
    "number": "201",
    "name": "Unown",
    "generation": "Generation II",
    "about": "This Pokémon is shaped like ancient writing. It is a mystery as to which came first, the ancient writings or the various Unown. Research into this topic is ongoing but nothing is known.",
    "types": [
      "Psychic"
    ],
    "resistant": [
      "Fighting",
      "Psychic"
    ],
    "weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "4.38kg",
      "Maximum": "5.63kg"
    },
    "height": {
      "Minimum": "0.45m",
      "Maximum": "0.57m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "96 stamina points.",
    "baseAttack": "136 attack points.",
    "baseDefense": "91 defense points.",
    "baseFleeRate": "5% chance to flee."
  },
  {
    "number": "202",
    "name": "Wobbuffet",
    "generation": "Generation II",
    "about": "If two or more Wobbuffet meet, they will turn competitive and try to outdo each other's endurance. However, they may try to see which one can endure the longest without food. Trainers need to beware of this habit.",
    "types": [
      "Psychic"
    ],
    "resistant": [
      "Fighting",
      "Psychic"
    ],
    "weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "24.94kg",
      "Maximum": "32.06kg"
    },
    "height": {
      "Minimum": "1.14m",
      "Maximum": "1.46m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "380 stamina points.",
    "baseAttack": "60 attack points.",
    "baseDefense": "106 defense points.",
    "baseFleeRate": "5% chance to flee."
  },
  {
    "number": "203",
    "name": "Girafarig",
    "generation": "Generation II",
    "about": "Girafarig's rear head also has a brain, but it is small. The rear head attacks in response to smells and sounds. Approaching this Pokémon from behind can cause the rear head to suddenly lash out and bite.",
    "types": [
      "Normal",
      "Psychic"
    ],
    "resistant": [
      "Psychic"
    ],
    "weaknesses": [
      "Bug",
      "Dark"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "36.31kg",
      "Maximum": "46.69kg"
    },
    "height": {
      "Minimum": "1.31m",
      "Maximum": "1.69m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "140 stamina points.",
    "baseAttack": "182 attack points.",
    "baseDefense": "133 defense points.",
    "baseFleeRate": "5% chance to flee."
  },
  {
    "number": "204",
    "name": "Pineco",
    "generation": "Generation II",
    "about": "Pineco hangs from a tree branch and patiently waits for prey to come along. If the Pokémon is disturbed while eating by someone shaking its tree, it drops down to the ground and explodes with no warning.",
    "types": [
      "Bug"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Ground"
    ],
    "weaknesses": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "6.3kg",
      "Maximum": "8.1kg"
    },
    "height": {
      "Minimum": "0.53m",
      "Maximum": "0.69m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "100 stamina points.",
    "baseAttack": "108 attack points.",
    "baseDefense": "146 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "nextEvolutions": [
      {
        "number": 205,
        "name": "Forretress"
      }
    ]
  },
  {
    "number": "205",
    "name": "Forretress",
    "generation": "Generation II",
    "about": "Forretress conceals itself inside its hardened steel shell. The shell is opened when the Pokémon is catching prey, but it does so at such a quick pace that the shell's inside cannot be seen.",
    "types": [
      "Bug",
      "Steel"
    ],
    "resistant": [
      "Normal",
      "Grass",
      "Ice",
      "Poison",
      "Psychic",
      "Bug",
      "Dragon",
      "Steel",
      "Fairy"
    ],
    "weaknesses": [
      "Fire"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "110.08kg",
      "Maximum": "141.53kg"
    },
    "height": {
      "Minimum": "1.04m",
      "Maximum": "1.34m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "150 stamina points.",
    "baseAttack": "161 attack points.",
    "baseDefense": "242 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 204,
        "name": "Pineco"
      }
    ]
  },
  {
    "number": "206",
    "name": "Dunsparce",
    "generation": "Generation II",
    "about": "Dunsparce has a drill for its tail. It uses this tail to burrow into the ground backward. This Pokémon is known to make its nest in complex shapes deep under the ground.",
    "types": [
      "Normal"
    ],
    "resistant": [
      "Ghost"
    ],
    "weaknesses": [
      "Fighting"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "12.25kg",
      "Maximum": "15.75kg"
    },
    "height": {
      "Minimum": "1.31m",
      "Maximum": "1.69m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "200 stamina points.",
    "baseAttack": "131 attack points.",
    "baseDefense": "131 defense points.",
    "baseFleeRate": "5% chance to flee."
  },
  {
    "number": "207",
    "name": "Gligar",
    "generation": "Generation II",
    "about": "Gligar glides through the air without a sound as if it were sliding. This Pokémon hangs on to the face of its foe using its clawed hind legs and the large pincers on its forelegs, then injects the prey with its poison barb.",
    "types": [
      "Ground",
      "Flying"
    ],
    "resistant": [
      "Fighting",
      "Poison",
      "Ground",
      "Bug"
    ],
    "weaknesses": [
      "Water",
      "Ice"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "56.7kg",
      "Maximum": "72.9kg"
    },
    "height": {
      "Minimum": "0.95m",
      "Maximum": "1.23m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "130 stamina points.",
    "baseAttack": "143 attack points.",
    "baseDefense": "204 defense points.",
    "baseFleeRate": "5% chance to flee."
  },
  {
    "number": "208",
    "name": "Steelix",
    "generation": "Generation II",
    "about": "Steelix lives even further underground than Onix. This Pokémon is known to dig toward the earth's core. There are records of this Pokémon reaching a depth of over six-tenths of a mile underground.",
    "types": [
      "Steel",
      "Ground"
    ],
    "resistant": [
      "Normal",
      "Electric",
      "Poison",
      "Flying",
      "Psychic",
      "Bug",
      "Rock",
      "Dragon",
      "Steel",
      "Fairy"
    ],
    "weaknesses": [
      "Fire",
      "Water",
      "Fighting",
      "Ground"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "350kg",
      "Maximum": "450kg"
    },
    "height": {
      "Minimum": "8.04m",
      "Maximum": "10.34m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "150 stamina points.",
    "baseAttack": "148 attack points.",
    "baseDefense": "333 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 95,
        "name": "Onix"
      }
    ]
  },
  {
    "number": "209",
    "name": "Snubbull",
    "generation": "Generation II",
    "about": "By baring its fangs and making a scary face, Snubbull sends smaller Pokémon scurrying away in terror. However, this Pokémon seems a little sad at making its foes flee.",
    "types": [
      "Fairy"
    ],
    "resistant": [
      "Fighting",
      "Bug",
      "Dragon",
      "Dark"
    ],
    "weaknesses": [
      "Poison",
      "Steel"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "6.83kg",
      "Maximum": "8.78kg"
    },
    "height": {
      "Minimum": "0.53m",
      "Maximum": "0.69m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "120 stamina points.",
    "baseAttack": "137 attack points.",
    "baseDefense": "89 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "nextEvolutions": [
      {
        "number": 210,
        "name": "Granbull"
      }
    ]
  },
  {
    "number": "210",
    "name": "Granbull",
    "generation": "Generation II",
    "about": "Granbull has a particularly well-developed lower jaw. The enormous fangs are heavy, causing the Pokémon to tip its head back for balance. Unless it is startled, it will not try to bite indiscriminately.",
    "types": [
      "Fairy"
    ],
    "resistant": [
      "Fighting",
      "Bug",
      "Dragon",
      "Dark"
    ],
    "weaknesses": [
      "Poison",
      "Steel"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "42.61kg",
      "Maximum": "54.79kg"
    },
    "height": {
      "Minimum": "1.22m",
      "Maximum": "1.57m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "180 stamina points.",
    "baseAttack": "212 attack points.",
    "baseDefense": "137 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 209,
        "name": "Snubbull"
      }
    ]
  },
  {
    "number": "211",
    "name": "Qwilfish",
    "generation": "Generation II",
    "about": "Qwilfish sucks in water, inflating itself. This Pokémon uses the pressure of the water it swallowed to shoot toxic quills all at once from all over its body. It finds swimming somewhat challenging.",
    "types": [
      "Water",
      "Poison"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Fighting",
      "Poison",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "weaknesses": [
      "Electric",
      "Ground",
      "Psychic"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "3.41kg",
      "Maximum": "4.39kg"
    },
    "height": {
      "Minimum": "0.45m",
      "Maximum": "0.57m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "130 stamina points.",
    "baseAttack": "184 attack points.",
    "baseDefense": "148 defense points.",
    "baseFleeRate": "5% chance to flee."
  },
  {
    "number": "212",
    "name": "Scizor",
    "generation": "Generation II",
    "about": "Scizor has a body with the hardness of steel. It is not easily fazed by ordinary sorts of attacks. This Pokémon flaps its wings to regulate its body temperature.",
    "types": [
      "Bug",
      "Steel"
    ],
    "resistant": [
      "Normal",
      "Grass",
      "Ice",
      "Poison",
      "Psychic",
      "Bug",
      "Dragon",
      "Steel",
      "Fairy"
    ],
    "weaknesses": [
      "Fire"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "109.38kg",
      "Maximum": "140.63kg"
    },
    "height": {
      "Minimum": "1.76m",
      "Maximum": "2.26m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "140 stamina points.",
    "baseAttack": "236 attack points.",
    "baseDefense": "191 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 123,
        "name": "Scyther"
      }
    ]
  },
  {
    "number": "213",
    "name": "Shuckle",
    "generation": "Generation II",
    "about": "Shuckle quietly hides itself under rocks, keeping its body concealed inside its hard shell while eating berries it has stored away. The berries mix with its body fluids to become a juice.",
    "types": [
      "Bug",
      "Rock"
    ],
    "resistant": [
      "Normal",
      "Poison"
    ],
    "weaknesses": [
      "Water",
      "Rock",
      "Steel"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "17.94kg",
      "Maximum": "23.06kg"
    },
    "height": {
      "Minimum": "0.53m",
      "Maximum": "0.69m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "40 stamina points.",
    "baseAttack": "17 attack points.",
    "baseDefense": "396 defense points.",
    "baseFleeRate": "5% chance to flee."
  },
  {
    "number": "214",
    "name": "Heracross",
    "generation": "Generation II",
    "about": "Heracross charges in a straight line at its foe, slips beneath the foe's grasp, and then scoops up and hurls the opponent with its mighty horn. This Pokémon even has enough power to topple a massive tree.",
    "types": [
      "Bug",
      "Fighting"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Ground",
      "Bug",
      "Dark"
    ],
    "weaknesses": [
      "Fire",
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "47.25kg",
      "Maximum": "60.75kg"
    },
    "height": {
      "Minimum": "1.31m",
      "Maximum": "1.69m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "160 stamina points.",
    "baseAttack": "234 attack points.",
    "baseDefense": "189 defense points.",
    "baseFleeRate": "5% chance to flee."
  },
  {
    "number": "215",
    "name": "Sneasel",
    "generation": "Generation II",
    "about": "Sneasel scales trees by punching its hooked claws into the bark. This Pokémon seeks out unguarded nests and steals eggs for food while the parents are away.",
    "types": [
      "Dark",
      "Ice"
    ],
    "resistant": [
      "Ice",
      "Psychic",
      "Ghost",
      "Dark"
    ],
    "weaknesses": [
      "Fire",
      "Fighting",
      "Bug",
      "Rock",
      "Steel",
      "Fairy"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "24.5kg",
      "Maximum": "31.5kg"
    },
    "height": {
      "Minimum": "0.78m",
      "Maximum": "1m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "110 stamina points.",
    "baseAttack": "189 attack points.",
    "baseDefense": "157 defense points.",
    "baseFleeRate": "5% chance to flee."
  },
  {
    "number": "216",
    "name": "Teddiursa",
    "generation": "Generation II",
    "about": "This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill.",
    "types": [
      "Normal"
    ],
    "resistant": [
      "Ghost"
    ],
    "weaknesses": [
      "Fighting"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "7.7kg",
      "Maximum": "9.9kg"
    },
    "height": {
      "Minimum": "0.53m",
      "Maximum": "0.69m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "120 stamina points.",
    "baseAttack": "142 attack points.",
    "baseDefense": "93 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "nextEvolutions": [
      {
        "number": 217,
        "name": "Ursaring"
      }
    ]
  },
  {
    "number": "217",
    "name": "Ursaring",
    "generation": "Generation II",
    "about": "In the forests inhabited by Ursaring, it is said that there are many streams and towering trees where they gather food. This Pokémon walks through its forest gathering food every day.",
    "types": [
      "Normal"
    ],
    "resistant": [
      "Ghost"
    ],
    "weaknesses": [
      "Fighting"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "110.08kg",
      "Maximum": "141.53kg"
    },
    "height": {
      "Minimum": "1.57m",
      "Maximum": "2.02m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "180 stamina points.",
    "baseAttack": "236 attack points.",
    "baseDefense": "144 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 216,
        "name": "Teddiursa"
      }
    ]
  },
  {
    "number": "218",
    "name": "Slugma",
    "generation": "Generation II",
    "about": "Molten magma courses throughout Slugma's circulatory system. If this Pokémon is chilled, the magma cools and hardens. Its body turns brittle and chunks fall off, reducing its size.",
    "types": [
      "Fire"
    ],
    "resistant": [
      "Fire",
      "Grass",
      "Ice",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "30.63kg",
      "Maximum": "39.38kg"
    },
    "height": {
      "Minimum": "0.62m",
      "Maximum": "0.8m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "80 stamina points.",
    "baseAttack": "118 attack points.",
    "baseDefense": "71 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "nextEvolutions": [
      {
        "number": 219,
        "name": "Magcargo"
      }
    ]
  },
  {
    "number": "219",
    "name": "Magcargo",
    "generation": "Generation II",
    "about": "Magcargo's shell is actually its skin that hardened as a result of cooling. Its shell is very brittle and fragile—just touching it causes it to crumble apart. This Pokémon returns to its original size by dipping itself in magma.",
    "types": [
      "Fire",
      "Rock"
    ],
    "resistant": [
      "Normal",
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug",
      "Fairy"
    ],
    "weaknesses": [
      "Water",
      "Fighting",
      "Ground",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "48.13kg",
      "Maximum": "61.88kg"
    },
    "height": {
      "Minimum": "0.69m",
      "Maximum": "0.89m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "100 stamina points.",
    "baseAttack": "139 attack points.",
    "baseDefense": "209 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 218,
        "name": "Slugma"
      }
    ]
  },
  {
    "number": "220",
    "name": "Swinub",
    "generation": "Generation II",
    "about": "Swinub roots for food by rubbing its snout against the ground. Its favorite food is a mushroom that grows under the cover of dead grass. This Pokémon occasionally roots out hot springs.",
    "types": [
      "Ice",
      "Ground"
    ],
    "resistant": [
      "Electric",
      "Poison"
    ],
    "weaknesses": [
      "Fire",
      "Water",
      "Grass",
      "Fighting",
      "Steel"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "5.69kg",
      "Maximum": "7.31kg"
    },
    "height": {
      "Minimum": "0.36m",
      "Maximum": "0.46m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "100 stamina points.",
    "baseAttack": "90 attack points.",
    "baseDefense": "74 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "nextEvolutions": [
      {
        "number": 221,
        "name": "Piloswine"
      }
    ]
  },
  {
    "number": "221",
    "name": "Piloswine",
    "generation": "Generation II",
    "about": "Piloswine is covered by a thick coat of long hair that enables it to endure the freezing cold. This Pokémon uses its tusks to dig up food that has been buried under ice.",
    "types": [
      "Ice",
      "Ground"
    ],
    "resistant": [
      "Electric",
      "Poison"
    ],
    "weaknesses": [
      "Fire",
      "Water",
      "Grass",
      "Fighting",
      "Steel"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "48.82kg",
      "Maximum": "62.77kg"
    },
    "height": {
      "Minimum": "0.95m",
      "Maximum": "1.23m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "200 stamina points.",
    "baseAttack": "181 attack points.",
    "baseDefense": "147 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 220,
        "name": "Swinub"
      }
    ]
  },
  {
    "number": "222",
    "name": "Corsola",
    "generation": "Generation II",
    "about": "Corsola's branches glitter very beautifully in seven colors when they catch sunlight. If any branch breaks off, this Pokémon grows it back in just one night.",
    "types": [
      "Water",
      "Rock"
    ],
    "resistant": [
      "Normal",
      "Fire",
      "Ice",
      "Poison",
      "Flying"
    ],
    "weaknesses": [
      "Electric",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "4.38kg",
      "Maximum": "5.63kg"
    },
    "height": {
      "Minimum": "0.53m",
      "Maximum": "0.69m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "110 stamina points.",
    "baseAttack": "118 attack points.",
    "baseDefense": "156 defense points.",
    "baseFleeRate": "5% chance to flee."
  },
  {
    "number": "223",
    "name": "Remoraid",
    "generation": "Generation II",
    "about": "Remoraid sucks in water, then expels it at high velocity using its abdominal muscles to shoot down flying prey. When evolution draws near, this Pokémon travels downstream from rivers.",
    "types": [
      "Water"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "10.5kg",
      "Maximum": "13.5kg"
    },
    "height": {
      "Minimum": "0.53m",
      "Maximum": "0.69m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "70 stamina points.",
    "baseAttack": "127 attack points.",
    "baseDefense": "69 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "nextEvolutions": [
      {
        "number": 224,
        "name": "Octillery"
      }
    ]
  },
  {
    "number": "224",
    "name": "Octillery",
    "generation": "Generation II",
    "about": "Octillery grabs onto its foe using its tentacles. This Pokémon tries to immobilize it before delivering the finishing blow. If the foe turns out to be too strong, Octillery spews ink to escape.",
    "types": [
      "Water"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "24.94kg",
      "Maximum": "32.06kg"
    },
    "height": {
      "Minimum": "0.78m",
      "Maximum": "1m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "150 stamina points.",
    "baseAttack": "197 attack points.",
    "baseDefense": "141 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 223,
        "name": "Remoraid"
      }
    ]
  },
  {
    "number": "225",
    "name": "Delibird",
    "generation": "Generation II",
    "about": "Delibird carries its food bundled up in its tail. There once was a famous explorer who managed to reach the peak of the world's highest mountain, thanks to one of these Pokémon sharing its food.",
    "types": [
      "Ice",
      "Flying"
    ],
    "resistant": [
      "Grass",
      "Ground",
      "Bug"
    ],
    "weaknesses": [
      "Fire",
      "Electric",
      "Rock",
      "Steel"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "14kg",
      "Maximum": "18kg"
    },
    "height": {
      "Minimum": "0.78m",
      "Maximum": "1m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "90 stamina points.",
    "baseAttack": "128 attack points.",
    "baseDefense": "90 defense points.",
    "baseFleeRate": "5% chance to flee."
  },
  {
    "number": "226",
    "name": "Mantine",
    "generation": "Generation II",
    "about": "On sunny days, schools of Mantine can be seen elegantly leaping over the sea's waves. This Pokémon is not bothered by the Remoraid that hitches rides.",
    "types": [
      "Water",
      "Flying"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Fighting",
      "Ground",
      "Bug",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "192.5kg",
      "Maximum": "247.5kg"
    },
    "height": {
      "Minimum": "1.85m",
      "Maximum": "2.37m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "130 stamina points.",
    "baseAttack": "148 attack points.",
    "baseDefense": "260 defense points.",
    "baseFleeRate": "5% chance to flee."
  },
  {
    "number": "227",
    "name": "Skarmory",
    "generation": "Generation II",
    "about": "Skarmory is entirely encased in hard, protective armor. This Pokémon flies at close to 190 mph. It slashes foes with its wings that possess swordlike cutting edges.",
    "types": [
      "Steel",
      "Flying"
    ],
    "resistant": [
      "Normal",
      "Grass",
      "Poison",
      "Flying",
      "Psychic",
      "Bug",
      "Dragon",
      "Steel",
      "Fairy"
    ],
    "weaknesses": [
      "Fire",
      "Electric"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "44.19kg",
      "Maximum": "56.81kg"
    },
    "height": {
      "Minimum": "1.49m",
      "Maximum": "1.91m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "130 stamina points.",
    "baseAttack": "148 attack points.",
    "baseDefense": "260 defense points.",
    "baseFleeRate": "5% chance to flee."
  },
  {
    "number": "228",
    "name": "Houndour",
    "generation": "Generation II",
    "about": "Houndour hunt as a coordinated pack. They communicate with each other using a variety of cries to corner their prey. This Pokémon's remarkable teamwork is unparalleled.",
    "types": [
      "Dark",
      "Fire"
    ],
    "resistant": [
      "Fire",
      "Grass",
      "Ice",
      "Psychic",
      "Ghost",
      "Dark",
      "Steel"
    ],
    "weaknesses": [
      "Water",
      "Fighting",
      "Ground",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "9.45kg",
      "Maximum": "12.15kg"
    },
    "height": {
      "Minimum": "0.53m",
      "Maximum": "0.69m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "90 stamina points.",
    "baseAttack": "152 attack points.",
    "baseDefense": "93 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "nextEvolutions": [
      {
        "number": 229,
        "name": "Houndoom"
      }
    ]
  },
  {
    "number": "229",
    "name": "Houndoom",
    "generation": "Generation II",
    "about": "In a Houndoom pack, the one with its horns raked sharply toward the back serves a leadership role. These Pokémon choose their leader by fighting among themselves.",
    "types": [
      "Dark",
      "Fire"
    ],
    "resistant": [
      "Fire",
      "Grass",
      "Ice",
      "Psychic",
      "Ghost",
      "Dark",
      "Steel"
    ],
    "weaknesses": [
      "Water",
      "Fighting",
      "Ground",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "30.63kg",
      "Maximum": "39.38kg"
    },
    "height": {
      "Minimum": "1.22m",
      "Maximum": "1.57m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "150 stamina points.",
    "baseAttack": "224 attack points.",
    "baseDefense": "159 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 228,
        "name": "Houndour"
      }
    ]
  },
  {
    "number": "230",
    "name": "Kingdra",
    "generation": "Generation II",
    "about": "Kingdra lives at extreme ocean depths that are otherwise uninhabited. It has long been believed that the yawning of this Pokémon creates spiraling ocean currents.",
    "types": [
      "Water",
      "Dragon"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Steel"
    ],
    "weaknesses": [
      "Dragon",
      "Fairy"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "133kg",
      "Maximum": "171kg"
    },
    "height": {
      "Minimum": "1.57m",
      "Maximum": "2.02m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "150 stamina points.",
    "baseAttack": "194 attack points.",
    "baseDefense": "194 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 116,
        "name": "Horsea"
      },
      {
        "number": 117,
        "name": "Seadra"
      }
    ]
  },
  {
    "number": "231",
    "name": "Phanpy",
    "generation": "Generation II",
    "about": "For its nest, Phanpy digs a vertical pit in the ground at the edge of a river. It marks the area around its nest with its trunk to let the others know that the area has been claimed.",
    "types": [
      "Ground"
    ],
    "resistant": [
      "Electric",
      "Poison",
      "Rock"
    ],
    "weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "29.31kg",
      "Maximum": "37.69kg"
    },
    "height": {
      "Minimum": "0.45m",
      "Maximum": "0.57m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "180 stamina points.",
    "baseAttack": "107 attack points.",
    "baseDefense": "107 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "nextEvolutions": [
      {
        "number": 232,
        "name": "Donphan"
      }
    ]
  },
  {
    "number": "232",
    "name": "Donphan",
    "generation": "Generation II",
    "about": "Donphan's favorite attack is curling its body into a ball, then charging at its foe while rolling at high speed. Once it starts rolling, this Pokémon can't stop very easily.",
    "types": [
      "Ground"
    ],
    "resistant": [
      "Electric",
      "Poison",
      "Rock"
    ],
    "weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "105kg",
      "Maximum": "135kg"
    },
    "height": {
      "Minimum": "0.95m",
      "Maximum": "1.23m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "180 stamina points.",
    "baseAttack": "214 attack points.",
    "baseDefense": "214 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 231,
        "name": "Phanpy"
      }
    ]
  },
  {
    "number": "233",
    "name": "Porygon2",
    "generation": "Generation II",
    "about": "Porygon2 was created by humans using the power of science. The man-made Pokémon has been endowed with artificial intelligence that enables it to learn new gestures and emotions on its own.",
    "types": [
      "Normal"
    ],
    "resistant": [
      "Ghost"
    ],
    "weaknesses": [
      "Fighting"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "28.44kg",
      "Maximum": "36.56kg"
    },
    "height": {
      "Minimum": "0.53m",
      "Maximum": "0.69m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "170 stamina points.",
    "baseAttack": "198 attack points.",
    "baseDefense": "183 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 137,
        "name": "Porygon"
      }
    ]
  },
  {
    "number": "234",
    "name": "Stantler",
    "generation": "Generation II",
    "about": "Stantler's magnificent antlers were traded at high prices as works of art. As a result, this Pokémon was hunted close to extinction by those who were after the priceless antlers.",
    "types": [
      "Normal"
    ],
    "resistant": [
      "Ghost"
    ],
    "weaknesses": [
      "Fighting"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "62.3kg",
      "Maximum": "80.1kg"
    },
    "height": {
      "Minimum": "1.22m",
      "Maximum": "1.57m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "146 stamina points.",
    "baseAttack": "192 attack points.",
    "baseDefense": "132 defense points.",
    "baseFleeRate": "5% chance to flee."
  },
  {
    "number": "235",
    "name": "Smeargle",
    "generation": "Generation II",
    "about": "Smeargle marks the boundaries of its territory using a body fluid that leaks out from the tip of its tail. Over 5,000 different marks left by this Pokémon have been found.",
    "types": [
      "Normal"
    ],
    "resistant": [
      "Ghost"
    ],
    "weaknesses": [
      "Fighting"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "50.75kg",
      "Maximum": "65.25kg"
    },
    "height": {
      "Minimum": "1.04m",
      "Maximum": "1.34m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "110 stamina points.",
    "baseAttack": "40 attack points.",
    "baseDefense": "88 defense points.",
    "baseFleeRate": "5% chance to flee."
  },
  {
    "number": "236",
    "name": "Tyrogue",
    "generation": "Generation II",
    "about": "Tyrogue becomes stressed out if it does not get to train every day. When raising this Pokémon, the Trainer must establish and uphold various training methods.",
    "types": [
      "Fighting"
    ],
    "resistant": [
      "Bug",
      "Rock",
      "Dark"
    ],
    "weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "fastAttacks": [
      {
        "name": "Low Kick",
        "Type": "Fighting",
        "Damage": 5
      },
      {
        "name": "Rock Smash",
        "Type": "Fighting",
        "Damage": 15
      }
    ],
    "chargeAttacks": [
      {
        "name": "Body Slam",
        "Type": "Normal",
        "Damage": 40
      },
      {
        "name": "Brick Break",
        "Type": "Fighting",
        "Damage": 30
      },
      {
        "name": "Low Sweep",
        "Type": "Fighting",
        "Damage": 30
      }
    ],
    "weight": {
      "Minimum": "18.38kg",
      "Maximum": "23.63kg"
    },
    "height": {
      "Minimum": "0.62m",
      "Maximum": "0.8m"
    },
    "buddyDistance": "5km (Medium)",
    "baseStamina": "70 stamina points.",
    "baseAttack": "64 attack points.",
    "baseDefense": "64 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 25,
      "name": "Tyrogue candies"
    },
    "nextEvolutions": [
      {
        "number": 106,
        "name": "Hitmonlee"
      },
      {
        "number": 107,
        "name": "Hitmonchan"
      },
      {
        "number": 237,
        "name": "Hitmontop"
      }
    ]
  },
  {
    "number": "237",
    "name": "Hitmontop",
    "generation": "Generation II",
    "about": "Hitmontop spins on its head at high speed, all the while delivering kicks. This technique is a remarkable mix of both offense and defense at the same time. The Pokémon travels faster spinning than it does walking.",
    "types": [
      "Fighting"
    ],
    "resistant": [
      "Bug",
      "Rock",
      "Dark"
    ],
    "weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "42kg",
      "Maximum": "54kg"
    },
    "height": {
      "Minimum": "1.22m",
      "Maximum": "1.57m"
    },
    "buddyDistance": "5km (Medium)",
    "baseStamina": "100 stamina points.",
    "baseAttack": "173 attack points.",
    "baseDefense": "214 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 236,
        "name": "Tyrogue"
      }
    ]
  },
  {
    "number": "238",
    "name": "Smoochum",
    "generation": "Generation II",
    "about": "Smoochum actively runs about, but also falls quite often. Whenever the chance arrives, it will look for its reflection to make sure its face hasn't become dirty.",
    "types": [
      "Ice",
      "Psychic"
    ],
    "resistant": [
      "Ice",
      "Psychic"
    ],
    "weaknesses": [
      "Fire",
      "Bug",
      "Rock",
      "Ghost",
      "Dark",
      "Steel"
    ],
    "fastAttacks": [
      {
        "name": "Frost Breath",
        "Type": "Ice",
        "Damage": 9
      },
      {
        "name": "Pound",
        "Type": "Normal",
        "Damage": 7
      }
    ],
    "chargeAttacks": [
      {
        "name": "Ice Beam",
        "Type": "Ice",
        "Damage": 65
      },
      {
        "name": "Ice Punch",
        "Type": "Ice",
        "Damage": 45
      },
      {
        "name": "Psyshock",
        "Type": "Psychic",
        "Damage": 40
      }
    ],
    "weight": {
      "Minimum": "5.25kg",
      "Maximum": "6.75kg"
    },
    "height": {
      "Minimum": "0.36m",
      "Maximum": "0.46m"
    },
    "buddyDistance": "5km (Medium)",
    "baseStamina": "90 stamina points.",
    "baseAttack": "153 attack points.",
    "baseDefense": "116 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 25,
      "name": "Jyn"
    },
    "nextEvolutions": [
      {
        "number": 124,
        "name": "Jynx"
      }
    ]
  },
  {
    "number": "239",
    "name": "Elekid",
    "generation": "Generation II",
    "about": "Elekid stores electricity in its body. If it touches metal and accidentally discharges all its built-up electricity, this Pokémon begins swinging its arms in circles to recharge itself.",
    "types": [
      "Electric"
    ],
    "resistant": [
      "Electric",
      "Flying",
      "Steel"
    ],
    "weaknesses": [
      "Ground"
    ],
    "fastAttacks": [
      {
        "name": "Low Kick",
        "Type": "Fighting",
        "Damage": 5
      },
      {
        "name": "Thunder Shock",
        "Type": "Electric",
        "Damage": 5
      }
    ],
    "chargeAttacks": [
      {
        "name": "Discharge",
        "Type": "Electric",
        "Damage": 35
      },
      {
        "name": "Thunder Punch",
        "Type": "Electric",
        "Damage": 40
      },
      {
        "name": "Thunderbolt",
        "Type": "Electric",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "20.56kg",
      "Maximum": "26.44kg"
    },
    "height": {
      "Minimum": "0.53m",
      "Maximum": "0.69m"
    },
    "buddyDistance": "5km (Medium)",
    "baseStamina": "90 stamina points.",
    "baseAttack": "135 attack points.",
    "baseDefense": "110 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 25,
      "name": "Electabuzz candies"
    },
    "nextEvolutions": [
      {
        "number": 125,
        "name": "Electabuzz"
      }
    ]
  },
  {
    "number": "240",
    "name": "Magby",
    "generation": "Generation II",
    "about": "Magby's state of health is determined by observing the fire it breathes. If the Pokémon is spouting yellow flames from its mouth, it is in good health. When it is fatigued, black smoke will be mixed in with the flames.",
    "types": [
      "Fire"
    ],
    "resistant": [
      "Fire",
      "Grass",
      "Ice",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Ember",
        "Type": "Fire",
        "Damage": 10
      },
      {
        "name": "Karate Chop",
        "Type": "Fighting",
        "Damage": 6
      }
    ],
    "chargeAttacks": [
      {
        "name": "Brick Break",
        "Type": "Fighting",
        "Damage": 30
      },
      {
        "name": "Fire Punch",
        "Type": "Fire",
        "Damage": 40
      },
      {
        "name": "Flamethrower",
        "Type": "Fire",
        "Damage": 55
      }
    ],
    "weight": {
      "Minimum": "18.72kg",
      "Maximum": "24.07kg"
    },
    "height": {
      "Minimum": "0.62m",
      "Maximum": "0.8m"
    },
    "buddyDistance": "5km (Medium)",
    "baseStamina": "90 stamina points.",
    "baseAttack": "151 attack points.",
    "baseDefense": "108 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "nextEvolutionReq": {
      "Amount": 25,
      "name": "Magmar candies"
    },
    "nextEvolutions": [
      {
        "number": 126,
        "name": "Magmar"
      }
    ]
  },
  {
    "number": "241",
    "name": "Miltank",
    "generation": "Generation II",
    "about": "Miltank gives over five gallons of milk on a daily basis. Its sweet milk is enjoyed by children and grown-ups alike. People who can't drink milk turn it into yogurt and eat it instead.",
    "types": [
      "Normal"
    ],
    "resistant": [
      "Ghost"
    ],
    "weaknesses": [
      "Fighting"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "66.06kg",
      "Maximum": "84.94kg"
    },
    "height": {
      "Minimum": "1.04m",
      "Maximum": "1.34m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "190 stamina points.",
    "baseAttack": "157 attack points.",
    "baseDefense": "211 defense points.",
    "baseFleeRate": "5% chance to flee."
  },
  {
    "number": "242",
    "name": "Blissey",
    "generation": "Generation II",
    "about": "Blissey senses sadness with its fluffy coat of fur. If it does so, this Pokémon will rush over to a sad person, no matter how far away, to share a Lucky Egg that brings a smile to any face.",
    "types": [
      "Normal"
    ],
    "resistant": [
      "Ghost"
    ],
    "weaknesses": [
      "Fighting"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "40.95kg",
      "Maximum": "52.65kg"
    },
    "height": {
      "Minimum": "1.31m",
      "Maximum": "1.69m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "510 stamina points.",
    "baseAttack": "129 attack points.",
    "baseDefense": "229 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Previous evolution(s)": [
      {
        "number": 113,
        "name": "Chansey"
      }
    ]
  },
  {
    "number": "243",
    "name": "Raikou",
    "generation": "Generation II",
    "about": "Raikou embodies the speed of lightning. The roars of this Pokémon send shock waves shuddering through the air and shake the ground as if lightning bolts had come crashing down.",
    "types": [
      "Electric"
    ],
    "resistant": [
      "Electric",
      "Flying",
      "Steel"
    ],
    "weaknesses": [
      "Ground"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "155.75kg",
      "Maximum": "200.25kg"
    },
    "height": {
      "Minimum": "1.67m",
      "Maximum": "2.15m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "180 stamina points.",
    "baseAttack": "241 attack points.",
    "baseDefense": "210 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Pokèmon Class": "This is a LEGENDARY Pokèmon.",
    "LEGENDARY": "Pokèmon Class"
  },
  {
    "number": "244",
    "name": "Entei",
    "generation": "Generation II",
    "about": "Entei embodies the passion of magma. This Pokémon is thought to have been born in the eruption of a volcano. It sends up massive bursts of fire that utterly consume all that they touch.",
    "types": [
      "Fire"
    ],
    "resistant": [
      "Fire",
      "Grass",
      "Ice",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "173.25kg",
      "Maximum": "222.75kg"
    },
    "height": {
      "Minimum": "1.85m",
      "Maximum": "2.37m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "230 stamina points.",
    "baseAttack": "235 attack points.",
    "baseDefense": "176 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Pokèmon Class": "This is a LEGENDARY Pokèmon.",
    "LEGENDARY": "Pokèmon Class"
  },
  {
    "number": "245",
    "name": "Suicune",
    "generation": "Generation II",
    "about": "Suicune embodies the compassion of a pure spring of water. It runs across the land with gracefulness. This Pokémon has the power to purify dirty water.",
    "types": [
      "Water"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "163.63kg",
      "Maximum": "210.38kg"
    },
    "height": {
      "Minimum": "1.76m",
      "Maximum": "2.26m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "200 stamina points.",
    "baseAttack": "180 attack points.",
    "baseDefense": "235 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Pokèmon Class": "This is a LEGENDARY Pokèmon.",
    "LEGENDARY": "Pokèmon Class"
  },
  {
    "number": "246",
    "name": "Larvitar",
    "generation": "Generation II",
    "types": [
      "Rock",
      "Ground"
    ]
  },
  {
    "number": "247",
    "name": "Pupitar",
    "generation": "Generation II",
    "types": [
      "Rock",
      "Ground"
    ]
  },
  {
    "number": "248",
    "name": "Tyranitar",
    "generation": "Generation II",
    "types": [
      "Rock",
      "Dark"
    ]
  },
  {
    "number": "249",
    "name": "Lugia",
    "generation": "Generation II",
    "about": "Lugia's wings pack devastating power—a light fluttering of its wings can blow apart regular houses. As a result, this Pokémon chooses to live out of sight deep under the sea.",
    "types": [
      "Psychic",
      "Flying"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Ground",
      "Psychic"
    ],
    "weaknesses": [
      "Electric",
      "Ice",
      "Rock",
      "Ghost",
      "Dark"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "189kg",
      "Maximum": "243kg"
    },
    "height": {
      "Minimum": "4.56m",
      "Maximum": "5.86m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "212 stamina points.",
    "baseAttack": "193 attack points.",
    "baseDefense": "323 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Pokèmon Class": "This is a LEGENDARY Pokèmon.",
    "LEGENDARY": "Pokèmon Class"
  },
  {
    "number": "250",
    "name": "Ho-Oh",
    "generation": "Generation II",
    "types": [
      "Fire",
      "Flying"
    ]
  },
  {
    "number": "251",
    "name": "Celebi",
    "generation": "Generation II",
    "about": "This Pokémon came from the future by crossing over time. It is thought that so long as Celebi appears, a bright and shining future awaits us.",
    "types": [
      "Psychic",
      "Grass"
    ],
    "resistant": [
      "Water",
      "Electric",
      "Grass",
      "Fighting",
      "Ground",
      "Psychic"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug",
      "Ghost",
      "Dark"
    ],
    "fastAttacks": [
      {
        "name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "chargeAttacks": [
      {
        "name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "weight": {
      "Minimum": "4.38kg",
      "Maximum": "5.63kg"
    },
    "height": {
      "Minimum": "0.53m",
      "Maximum": "0.69m"
    },
    "buddyDistance": "1km (Medium)",
    "baseStamina": "200 stamina points.",
    "baseAttack": "210 attack points.",
    "baseDefense": "210 defense points.",
    "baseFleeRate": "5% chance to flee.",
    "Pokèmon Class": "This is a MYTHIC Pokèmon.",
    "MYTHIC": "Pokèmon Class"
  }
]
export default pokemon;
