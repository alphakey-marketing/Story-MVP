const chapter = {
  title: "The God of War",
  subtitle: "1570 \u2014 Three years. Kenshin kept his word. Now you must keep yours.",
  number: 10,
  scenes: [
    {
      sceneRef: "S01",
      text: [
        "1570. Uesugi Kenshin's three-year assessment is complete. He has made his decision. Sixty thousand Uesugi soldiers are moving south.",
        "They are not moving to fight Nobunaga directly \u2014 not yet. They are moving to test the alliances. The first test is Anegawa, where the Asakura and Asai clans have already committed forces. Kenshin wants to see what the Oda-Tokugawa alliance actually means when the sword is drawn.",
        "<b>Mitsuhide:</b> He is watching, not participating. Not yet.",
        "<b>Nobunaga:</b> Kenshin is patient. He only moves when the outcome is already decided.",
        "<b>Mitsuhide:</b> Then we must make sure he sees the outcome he hasn't planned for."
      ].join("<br>"),
      backgroundKey: "anegawa_river_summer_approach",
      bgmKey: "bgm_war_drums_quiet",
      choices: [],
      nextScene: "S02"
    },
    {
      sceneRef: "S02",
      text: [
        "Tokugawa Ieyasu rides up at dusk with twelve thousand men. He has come exactly when he said he would, which is not something every ally does.",
        "<b>Ieyasu:</b> The Asakura are on your left flank. I'll take the Asai on the right.",
        "<b>Nobunaga:</b> You've already assessed the field.",
        "<b>Ieyasu:</b> I've been riding for four days. I thought about it on the road.",
        "He says it without ceremony. He is a serious man who does serious work without announcing it, which is why Nobunaga values him above most allies."
      ].join("<br>"),
      backgroundKey: "anegawa_river_evening_camp",
      bgmKey: "bgm_tension_resolve",
      choices: [],
      nextScene: "S03"
    },
    {
      sceneRef: "S03",
      text: [
        "The battle plan is agreed. The question is how Nobunaga signals the alliance \u2014 whether it is a partnership of equals, a loan of convenience, or something more permanent."
      ].join("<br>"),
      backgroundKey: "anegawa_river_evening_camp",
      bgmKey: "bgm_tension_resolve",
      choices: [
        {
          text: "\"If the right flank breaks, fall back and I'll cover. We hold or fall together.\"",
          nextScene: "S03A",
          flagDelta: { flagKey: "ieyasu_trust", delta: 2 },
          flagDelta2: { flagKey: "bond_strength", delta: 1 }
        },
        {
          text: "\"Hold the Asai. I don't care how. I need your flank to hold.",
          nextScene: "S03B",
          flagDelta: { flagKey: "ieyasu_trust", delta: 1 },
          flagDelta2: { flagKey: "ruthlessness", delta: 1 }
        },
        {
          text: "\"You know your men. Do what you need to do.\"",
          nextScene: "S03C",
          flagDelta: { flagKey: "ieyasu_trust", delta: 1 },
          flagDelta2: { flagKey: "political_power", delta: 1 }
        }
      ]
    },
    {
      sceneRef: "S03A",
      text: [
        "Ieyasu looks at Nobunaga for a moment with an expression that is difficult to read. Then he nods once, sharply.",
        "<b>Ieyasu:</b> Understood. The flank will hold.",
        "It does. Three hours into the battle, when the Asai break through toward the center, Ieyasu holds his position and takes the counter-attack himself, buying time. He loses four hundred men doing it. He does not mention this afterward.",
        "He files Nobunaga's words under a category called: reliable."
      ].join("<br>"),
      backgroundKey: "anegawa_battle_dawn",
      bgmKey: "bgm_war_drums",
      choices: [],
      nextScene: "S04_BATTLE"
    },
    {
      sceneRef: "S03B",
      text: [
        "<b>Ieyasu:</b> The flank will hold, my lord.",
        "He says it without inflection. He has been told to perform a function. He will perform it. The Asai right flank does hold, through sheer grinding attrition. Ieyasu is efficient in ways that do not require warmth.",
        "He files Nobunaga's words under a category called: useful."
      ].join("<br>"),
      backgroundKey: "anegawa_battle_dawn",
      bgmKey: "bgm_war_drums",
      choices: [],
      nextScene: "S04_BATTLE"
    },
    {
      sceneRef: "S03C",
      text: [
        "<b>Ieyasu:</b> Then I'll do what I need to do.",
        "He wheels his horse and goes. He and Nobunaga work in parallel throughout the battle \u2014 aware of each other, neither subordinate, each doing the work. It is, in its way, the most mature military partnership either of them has experienced.",
        "He files Nobunaga's words under a category called: respect."
      ].join("<br>"),
      backgroundKey: "anegawa_battle_dawn",
      bgmKey: "bgm_war_drums",
      choices: [],
      nextScene: "S04_BATTLE"
    },
    {
      sceneRef: "S04_BATTLE",
      text: [
        "The Battle of Anegawa. Oda and Tokugawa against Asakura and Asai, while Uesugi Kenshin watches from the eastern ridge like a god assessing the worth of the world below.",
        "<b>Nobunaga:</b> The roads open. Whatever it takes."
      ].join("<br>"),
      backgroundKey: "anegawa_battle_dawn",
      bgmKey: "bgm_war_drums",
      isBattleGate: true,
      battleEnemyKey: "asakura_asai_combined",
      battleWinSceneRef: "S05_WIN",
      battleLoseSceneRef: "S05_LOSE",
      choices: []
    },
    {
      sceneRef: "S05_WIN",
      text: [
        "The Asakura-Asai alliance breaks at midday. The Oda-Tokugawa line holds and then advances. The battle is decisive \u2014 not a rout, but a clear outcome. The river runs clear by evening.",
        "<b>Ieyasu:</b> A good day's work.",
        "He says it the way a craftsman might, assessing a finished table. Nobunaga looks at him and thinks, for the first time with full clarity, that this is the man who will finish what he starts if he cannot finish it himself. The thought is not comfortable. He files it accurately.",
        "<b>Nobunaga:</b> Yes. It was."
      ].join("<br>"),
      backgroundKey: "anegawa_aftermath_evening",
      bgmKey: "bgm_victory_somber",
      flagWrites: [{ flagKey: "battle_won", flagValue: 1 }],
      choices: [],
      nextScene: "S06"
    },
    {
      sceneRef: "S05_LOSE",
      text: [
        "The combined force holds but cannot break through. The Asakura-Asai line is stronger than expected. As night falls, both sides disengage. The battle is inconclusive \u2014 a costly stalemate that neither side claims as victory.",
        "<b>Ieyasu:</b> We hold the field, at least.",
        "Holding the field is not the same as winning. Kenshin, on the eastern ridge, has seen what he came to see: the Oda-Tokugawa alliance is real, but tested. He will adjust his assessment accordingly."
      ].join("<br>"),
      backgroundKey: "anegawa_night_aftermath",
      bgmKey: "bgm_defeat",
      flagWrites: [{ flagKey: "battle_lost", flagValue: 1 }],
      choices: [],
      nextScene: "S06"
    },
    {
      sceneRef: "S06",
      text: [
        "From the eastern ridge, a rider descends. Not Kenshin himself \u2014 he sends a message instead. A single line, written in his hand:",
        "<b>Kenshin's message:</b> 'The three years are concluded. I have updated my assessment.'",
        "Nothing more. No threat. No alliance offer. No demand. An observation from a man who does not waste words.",
        "<b>Mitsuhide:</b> What does that mean?",
        "<b>Nobunaga:</b> It means he's decided something. We'll find out what when he moves."
      ].join("<br>"),
      backgroundKey: "anegawa_eastern_ridge_dusk",
      bgmKey: "bgm_intrigue",
      choices: [
        {
          text: "Send a reply: 'Your assessment of me has always been more accurate than most.'",
          nextScene: "S06A",
          flagDelta: { flagKey: "kenshin_verdict", delta: 2 },
          flagDelta2: { flagKey: "omen_read", delta: 1 }
        },
        {
          text: "Send no reply. He will act on what he saw, not on what you write.",
          nextScene: "S06B",
          flagDelta: { flagKey: "political_power", delta: 1 }
        },
        {
          text: "Send a challenge: 'When you decide to test it directly, I will be waiting.'",
          nextScene: "S06C",
          flagDelta: { flagKey: "ruthlessness", delta: 1 },
          flagDelta2: { flagKey: "kenshin_verdict", delta: 1 }
        }
      ]
    },
    {
      sceneRef: "S06A",
      text: [
        "Kenshin receives the reply at his camp on the ridge. His aide reports, later, that he read it twice and then sat quietly for several minutes before returning to his maps.",
        "What Kenshin wrote in his journal that night is discovered four hundred years later. The relevant passage reads: 'He understands what I am measuring. That is either the most dangerous thing or the most promising thing I have yet observed about him. I have not decided which.'"
      ].join("<br>"),
      backgroundKey: "anegawa_eastern_ridge_dusk",
      bgmKey: "bgm_tension_resolve",
      choices: [],
      nextScene: "S07"
    },
    {
      sceneRef: "S06B",
      text: [
        "No reply goes. Kenshin receives the silence. He nods, according to his aide, once. He has received the correct answer: Nobunaga does not perform for an audience. He simply acts.",
        "Kenshin returns north. His updated assessment remains unvoiced but present in every subsequent decision he makes regarding the Kinai region."
      ].join("<br>"),
      backgroundKey: "anegawa_eastern_ridge_dusk",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      nextScene: "S07"
    },
    {
      sceneRef: "S06C",
      text: [
        "Kenshin receives the challenge. He smiles, reportedly \u2014 his aides record it as one of perhaps four times they saw him smile in twenty years of service.",
        "<b>Kenshin's second message:</b> 'I know.'",
        "Two words. He is, in his way, as precise as Nobunaga."
      ].join("<br>"),
      backgroundKey: "anegawa_eastern_ridge_dusk",
      bgmKey: "bgm_defiance",
      choices: [],
      nextScene: "S07"
    },
    {
      sceneRef: "S07",
      text: [
        "The alliance with Ieyasu has been tested and has held. That is the fact that matters most. Everything else \u2014 the ongoing Asakura threat, Kenshin's northern silence, the administration of Mino behind them \u2014 is work that can continue.",
        "<b>Ieyasu:</b> I'll ride home tomorrow. Send word if you need the Mikawa road.",
        "<b>Nobunaga:</b> I know where to find you.",
        "<b>Ieyasu:</b> Yes. You do.",
        "He rides home. The alliance endures. The roads stay open."
      ].join("<br>"),
      backgroundKey: "anegawa_aftermath_evening",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      isChapterEnd: true
    }
  ]
};

export { chapter };
