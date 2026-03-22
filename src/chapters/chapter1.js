// Chapter 1: The Fool of Owari
const chapter = {
  title: "The Fool of Owari",
  subtitle: "1551 — The land mocks you. Let it.",
  number: 1,
  scenes: [
    {
      sceneRef: "S01",
      text: [
        "Owari Province, 1551. The clan lords whisper that the young heir is a fool — wild, reckless, and beneath contempt. They have never been more wrong.",
        "<b>Nobunaga:</b> Let them whisper."
      ].join("<br>"),
      backgroundKey: "owari_province_dawn",
      bgmKey: "bgm_owari_morning",
      choices: [],
      nextScene: "S02"
    },
    {
      sceneRef: "S02",
      text: [
        "<b>Elder Hayashi:</b> You eat with commoners. You dress like a vagrant. You are an embarrassment to the Oda name.",
        "<b>Nobunaga:</b> And yet here I am. And there you sit, asking my permission.",
        "<b>Elder Hayashi:</b> The council demands you submit to our oversight. You are young, untested, and reckless.",
        "The elders watch you. Your first answer as lord of Owari will define what kind of warlord you become."
      ].join("<br>"),
      backgroundKey: "owari_castle_interior",
      bgmKey: "bgm_tense_court",
      choices: [
        {
          text: '"I submit. For now. A wise lord listens before he acts."',
          nextScene: "S03A",
          flagDelta: { flagKey: "political_power", delta: 1 }
        },
        {
          text: '"Kneel to no council. I am Oda Nobunaga."',
          nextScene: "S03B",
          flagDelta: { flagKey: "ruthlessness", delta: 1 }
        }
      ]
    },
    {
      sceneRef: "S03A",
      text: [
        "They smile. They think you are tamed. They are wrong.",
        "<b>Nobunaga:</b> A fox does not announce the hunt."
      ].join("<br>"),
      backgroundKey: "owari_castle_interior",
      bgmKey: "bgm_tense_court",
      choices: [],
      nextScene: "S04"
    },
    {
      sceneRef: "S03B",
      text: [
        "<b>Elder Hayashi:</b> You'll be dead within a year.",
        "<b>Nobunaga:</b> Then enjoy this year. It's the last you'll have power over anything."
      ].join("<br>"),
      backgroundKey: "owari_castle_exterior",
      bgmKey: "bgm_defiance",
      choices: [],
      nextScene: "S04"
    },
    {
      sceneRef: "S04",
      text: [
        "A samurai from Mino arrives at your gate. Educated. Sharp-eyed. Looking for a lord worth serving.",
        "<b>Mitsuhide:</b> I have heard of the Fool of Owari. I came to see if the rumors were true.",
        "<b>Nobunaga:</b> And?",
        "<b>Mitsuhide:</b> They undersell you. I would serve you, if you'll have me.",
        "How you receive him sets the tone of your most important relationship."
      ].join("<br>"),
      backgroundKey: "owari_road_afternoon",
      bgmKey: "bgm_journey",
      choices: [
        {
          text: "\"Welcome. A brilliant mind is rare — I'd be a fool to turn one away.\"",
          nextScene: "S05",
          flagDelta: { flagKey: "mitsuhide_loyalty", delta: 2 },
          flagDelta2: { flagKey: "bond_strength", delta: 1 }
        },
        {
          text: "\"Prove yourself first. Fetch water from the well.\"",
          nextScene: "S05"
        },
        {
          text: "\"I trust no outsiders. Be gone.\"",
          nextScene: "S05",
          flagDelta: { flagKey: "mitsuhide_loyalty", delta: -1 },
          flagDelta2: { flagKey: "bond_strength", delta: 1 }
        }
      ]
    },
    {
      sceneRef: "S05",
      text: [
        "<b>Monk Messenger:</b> My lord — near Nagashino. Workers unearthed a blade. Three men dead. No wounds. The blade sings at night.",
        "<b>Nobunaga:</b> ...",
        "A cursed blade. Power wrapped in danger. What you do next will shape your relationship with the spirit world."
      ].join("<br>"),
      backgroundKey: "nagashino_ruins_dusk",
      bgmKey: "bgm_ominous",
      choices: [
        {
          text: "\"Send men to retrieve it. Power is power.\"",
          nextScene: "S06A",
          flagDelta: { flagKey: "supernatural_affinity", delta: 2 }
        },
        {
          text: "\"Destroy it. Superstition breeds weakness in my men.\"",
          nextScene: "S06B",
          flagDelta: { flagKey: "supernatural_affinity", delta: -1 },
          flagDelta2: { flagKey: "mitsuhide_loyalty", delta: 1 }
        }
      ]
    },
    {
      sceneRef: "S06A",
      text: [
        "The sword arrives wrapped in black silk. Your men refuse to touch it. You pick it up yourself.",
        "<b>Nobunaga:</b> It hums. Like recognition.",
        "Something stirs at the edge of your mind. Ancient. Patient. Hungry.",
        "A fox sits in the open doorway of the armory. It does not flinch at the sound of men or steel. It watches you hold the blade, then turns and walks into the dark. You note it the way you note anything that does not behave as expected."
      ].join("<br>"),
      backgroundKey: "owari_castle_armory_night",
      bgmKey: "bgm_ominous",
      choices: [],
      nextScene: "S07",
      flagWrites: [
        { flagKey: "weapon_legacy", flagValue: 1 },
        { flagKey: "omen_read", flagValue: 1 }
      ]
    },
    {
      sceneRef: "S06B",
      text: [
        "The blade is destroyed. The monk bows deeply. Mitsuhide stands at your shoulder, watching.",
        "<b>Mitsuhide:</b> A wise decision, my lord. A blade that kills its bearers serves no one.",
        "One of the soldiers who carried the blade has left a dog behind — a lean, quiet animal that followed his horse from Nagashino and will not follow him back. It sits at the edge of the ash and waits. When the party turns for Owari, it falls in beside the column without being invited. Nobody sends it away."
      ].join("<br>"),
      backgroundKey: "nagashino_ruins_ash",
      bgmKey: "bgm_resolve",
      choices: [],
      nextScene: "S07"
    },
    {
      sceneRef: "S07",
      text: [
        "<b>Scout:</b> 25,000 men, my lord. Imagawa Yoshimoto marches for Kyoto. He passes through Owari like we don't exist.",
        "<b>Mitsuhide:</b> We have 2,000. This is not a battle. This is an execution.",
        "<b>Nobunaga:</b> Or an opportunity. Storms are loud. Scouts go blind. 25,000 men cannot all watch at once.",
        "His horse refuses to move. It plants its feet in the mud and turns its head away from the gorge, ears flat, shaking. Nobunaga dismounts without a word. He takes the reins and leads it forward by hand, walking at the front of the column into the storm on foot. The horse follows him."
      ].join("<br>"),
      backgroundKey: "owari_border_storm",
      bgmKey: "bgm_war_drums",
      choices: [
        {
          text: "\"Strike now — full ambush in the storm. No hesitation.\"",
          nextScene: "S08_BATTLE",
          flagDelta: { flagKey: "ruthlessness", delta: 2 }
        },
        {
          text: "\"Send a decoy force to draw attention. We flank quietly.\"",
          nextScene: "S08_BATTLE",
          flagDelta: { flagKey: "political_power", delta: 1 }
        }
      ]
    },
    {
      sceneRef: "S08_BATTLE",
      text: [
        "The storm breaks. Lightning splits the sky over Okehazama gorge. Yoshimoto rests in his palanquin, certain no fool would attack in this weather.",
        "<b>Nobunaga:</b> Move."
      ].join("<br>"),
      backgroundKey: "okehazama_gorge_storm",
      bgmKey: "bgm_war_drums",
      isBattleGate: true,
      battleEnemyKey: "imagawa_vanguard",
      battleWinSceneRef: "S09_WIN",
      battleLoseSceneRef: "S09_LOSE",
      choices: []
    },
    {
      sceneRef: "S09_WIN",
      text: [
        "Yoshimoto is dead. His head is in your hands. 25,000 men scatter like smoke in the morning wind.",
        "<b>Mitsuhide:</b> ...How.",
        "<b>Nobunaga:</b> They were waiting for a battle. I gave them a storm.",
        "The horse is found afterward grazing at the edge of the gorge, calm now, unhurt. Someone asks its name. Nobunaga does not answer immediately. Then: \"Okehazama.\" The groom nods and writes it down. It is the first thing named after a victory rather than before one."
      ].join("<br>"),
      backgroundKey: "okehazama_aftermath_dawn",
      bgmKey: "bgm_victory_somber",
      flagWrites: [
        { flagKey: "road_command", flagValue: 1 }
      ],
      choices: [],
      nextScene: "S10_WIN"
    },
    {
      sceneRef: "S09_LOSE",
      text: [
        "The ambush fails. You retreat through the storm, wounded. Yoshimoto marches on, laughing at the Fool of Owari.",
        "<b>Mitsuhide:</b> We live. That is enough for today, my lord.",
        "<b>Nobunaga:</b> No. It is not enough. It will never be enough."
      ].join("<br>"),
      backgroundKey: "owari_castle_night_rain",
      bgmKey: "bgm_defeat",
      choices: [],
      nextScene: "S10_LOSE"
    },
    {
      sceneRef: "S10_WIN",
      text: [
        "<b>Messenger:</b> My lord. A letter. Seal of the Uesugi clan.",
        "You break the seal. The handwriting is precise. Controlled. The hand of a man who has never doubted himself.",
        "<b>Kenshin (letter):</b> The Fool of Owari has teeth. Interesting. You are either the most dangerous man in Japan or the luckiest. I intend to find out which. We will meet, and I will judge whether you are a sword worth fearing — or a plague to be ended.",
        "<b>Nobunaga:</b> Tell him I look forward to his judgment.",
        "The first step is taken. Japan watches. The age of the Fool of Owari has begun."
      ].join("<br>"),
      backgroundKey: "owari_castle_night",
      bgmKey: "bgm_tension_resolve",
      choices: [],
      isChapterEnd: true
    },
    {
      sceneRef: "S10_LOSE",
      text: [
        "<b>Messenger:</b> My lord. A letter. Seal of the Uesugi clan.",
        "You break the seal. The handwriting is precise. Controlled. The hand of a man who makes no corrections.",
        "<b>Kenshin (letter):</b> The Fool of Owari attempted Yoshimoto and failed. His name is now a lesson in the cost of arrogance. We will not need to meet.",
        "Nobunaga reads it twice. Then he holds the letter over the lamp until it catches. He watches it burn without looking away.",
        "<b>Nobunaga:</b> We will meet.",
        "The ash falls. The age of the Fool of Owari has begun — on his knees, looking up. He will not forget the view."
      ].join("<br>"),
      backgroundKey: "owari_castle_night",
      bgmKey: "bgm_defeat",
      choices: [],
      isChapterEnd: true
    }
  ]
};

export { chapter };