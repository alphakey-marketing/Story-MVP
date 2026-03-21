const chapter = {
  title: "Honnoji",
  subtitle: "1582 — Every ending was always this one.",
  number: 8,
  scenes: [
    {
      sceneRef: "S01",
      text: [
        "June, 1582. Honnoji temple in Kyoto. Nobunaga travels with a small escort — thirty men. He is resting here before the western campaign, which he expects to resolve Japan inside of two years.",
        "The temple is quiet. The city is asleep. Mitsuhide is in the west, commanding the advance force. He is three days away.",
        "Except that he is not."
      ].join("<br>"),
      backgroundKey: "honnoji_temple_night_arrival",
      bgmKey: "bgm_ominous",
      choices: [],
      nextScene: "S02"
    },
    // resolveConditionalScene for S02: LOYAL > COLD > default
    {
      sceneRef: "S02_LOYAL",
      text: [
        "<b>Ranmaru:</b> My lord — torches. The outer wall. Thousands of them.",
        "<b>Nobunaga:</b> Whose banner?",
        "<b>Ranmaru:</b> ...",
        "<b>Ranmaru:</b> Akechi, my lord.",
        "Akechi Mitsuhide. His most capable general. His longest-serving advisor. The man he asked, in the map room years ago, to tell him if he was treating people as tools.",
        "<b>Nobunaga:</b> ...Mitsuhide.",
        "He says only the name. It takes a moment — personal before tactical, weight before calculation. Then:",
        "<b>Nobunaga:</b> Is this the realm, then. … It cannot be helped."
      ].join("<br>"),
      backgroundKey: "honnoji_temple_courtyard_torches",
      bgmKey: "bgm_war_drums",
      flagCondition: { flagKey: "mitsuhide_loyalty", operator: "gte", value: 2 },
      choices: [],
      nextScene: "S03"
    },
    {
      sceneRef: "S02_COLD",
      text: [
        "<b>Ranmaru:</b> My lord — torches. The outer wall. Thousands of them.",
        "<b>Nobunaga:</b> Whose banner?",
        "<b>Ranmaru:</b> Akechi, my lord.",
        "<b>Nobunaga:</b> How many?",
        "<b>Ranmaru:</b> Thirteen thousand, my lord.",
        "Nobunaga nods. No surprise at the name. No pause before the number. The tool reached its tolerance and broke, as tools do. He had known, somewhere, that it would come to this.",
        "<b>Nobunaga:</b> It cannot be helped."
      ].join("<br>"),
      backgroundKey: "honnoji_temple_courtyard_torches",
      bgmKey: "bgm_war_drums",
      flagCondition: { flagKey: "mitsuhide_loyalty", operator: "lte", value: 0 },
      choices: [],
      nextScene: "S03"
    },
    {
      sceneRef: "S02",
      text: [
        "<b>Ranmaru:</b> My lord — torches. The outer wall. Thousands of them.",
        "<b>Nobunaga:</b> Whose banner?",
        "<b>Ranmaru:</b> ...",
        "<b>Ranmaru:</b> Akechi, my lord.",
        "Akechi Mitsuhide. His most capable general. His longest-serving advisor. The man he asked, in the map room years ago, to tell him if he was treating people as tools.",
        "<b>Nobunaga:</b> Is this the realm, then. … It cannot be helped."
      ].join("<br>"),
      backgroundKey: "honnoji_temple_courtyard_torches",
      bgmKey: "bgm_war_drums",
      choices: [],
      nextScene: "S03"
    },
    {
      sceneRef: "S03",
      text: [
        "The temple walls are breached. There are perhaps twenty defenders left. The fire has reached the east wing.",
        "This is the moment. The last true choice of the lord of Owari."
      ].join("<br>"),
      backgroundKey: "honnoji_inner_hall_smoke",
      bgmKey: "bgm_war_drums",
      choices: [
        {
          text: "Fight. Hold the inner hall as long as possible. Let them come to you and make them pay for every inch.",
          nextScene: "S04_BATTLE",
          flagDelta: { flagKey: "ruthlessness", delta: 1 }
        },
        {
          text: "Send Ranmaru out with a message. One name. One destination. The future has to survive even if you don’t.",
          nextScene: "S03A",
          flagDelta: { flagKey: "political_power", delta: 2 }
        },
        {
          text: "Write the final order. Three lines. The markets stay open. The roads stay open. Japan does not stop.",
          nextScene: "S03B",
          flagDelta: { flagKey: "nohime_trust", delta: 1 },
          flagDelta2: { flagKey: "political_power", delta: 1 }
        }
      ]
    },
    {
      sceneRef: "S03A",
      text: [
        "Nobunaga writes a single name on a strip of cloth and presses it into Ranmaru’s hand. The boy is fifteen and trying very hard not to shake.",
        "<b>Nobunaga:</b> Go. Don’t look back. The work continues.",
        "Ranmaru goes. The name on the cloth is Toyotomi Hideyoshi. In twelve days, Hideyoshi will turn his army around and destroy Mitsuhide at Yamazaki. The work continues. Nobunaga was right about that."
      ].join("<br>"),
      backgroundKey: "honnoji_inner_hall_smoke",
      bgmKey: "bgm_tragedy_low",
      choices: [],
      nextScene: "S04_BATTLE"
    },
    {
      sceneRef: "S03B",
      text: [
        "He finds a brush in the burning room. Three lines.",
        "<b>Nobunaga:</b> The markets stay open. The roads stay open. Japan does not stop.",
        "He seals it and throws it through the window into the garden, wrapped around a stone, where a servant finds it in the morning. It is preserved. Historians argue for four hundred years about what he meant. He meant exactly what he wrote."
      ].join("<br>"),
      backgroundKey: "honnoji_inner_hall_desk",
      bgmKey: "bgm_tragedy_low",
      choices: [],
      nextScene: "S04_BATTLE"
    },
    {
      sceneRef: "S04_BATTLE",
      text: [
        "The inner hall. Thirty against ten thousand. The fire is everywhere. This is the last thing that can be held.",
        // Conditional: ruthlessness >= 4
        "{if ruthlessness >= 4} He has burned temples, drowned armies, made mercy a foreign word. He knows what the ledger says. He does not regret it.",
        // Conditional: political_power >= 4
        "{if political_power >= 4} He built the structures — the alliances, the legitimacy, the Yoshiaki seal that bought a day on the Kyoto road. Some of it will survive him. That was always the point.",
        // Conditional: mitsuhide_loyalty >= 2
        "{if mitsuhide_loyalty >= 2} The man outside was his best general and the one he asked the most of. He understands, in this room, exactly what that cost.",
        "<b>Nobunaga:</b> Come, then."
      ].join("<br>"),
      backgroundKey: "honnoji_burning_inner_hall",
      bgmKey: "bgm_war_drums",
      isBattleGate: true,
      battleEnemyKey: "akechi_vanguard_honnoji",
      battleWinSceneRef: "S05_WIN",
      battleLoseSceneRef: "S05_LOSE",
      choices: []
    },
    {
      sceneRef: "S05_WIN",
      text: [
        "Against everything, the inner hall holds until dawn. Mitsuhide’s forces, seeing Nobunaga alive, falter. The coup collapses. History does not remember this version because history runs on probability, not will.",
        "But in this version, Nobunaga walks out of Honnoji at dawn. He is bleeding. He looks at the sky for a long time. Then he begins making plans for the western campaign. He does not stop.",
        "<b>Nobunaga:</b> The roads are still open.",
        // Conditional: mitsuhide_loyalty >= 2
        "{if mitsuhide_loyalty >= 2} He thinks of Kenshin’s warning — ‘tools break when used past their tolerance.’ He thinks of Mitsuhide. For the first time in thirty years, he is not entirely certain he was right about everything."
      ].join("<br>"),
      backgroundKey: "honnoji_dawn_aftermath",
      bgmKey: "bgm_victory_somber",
      choices: [],
      nextScene: "S06"
    },
    {
      sceneRef: "S05_LOSE",
      text: [
        "The hall falls. The fire is everywhere. Nobunaga retreats to the inner sanctum, wounded, alone. He can hear the army outside. He knows exactly what this is.",
        "He thinks of the merchant in Kyoto who only wanted the roads open. He thinks of Nohime with the blue silk. He thinks of Mitsuhide in the map room, in the lamp light, that first year.",
        "<b>Nobunaga:</b> The work continues.",
        "He is right about that. In twelve days, Toyotomi Hideyoshi turns his army around and destroys Mitsuhide at Yamazaki. The markets stay open. The roads stay open. Japan does not stop."
      ].join("<br>"),
      backgroundKey: "honnoji_burning_final",
      bgmKey: "bgm_defeat",
      choices: [],
      nextScene: "S06"
    },
    {
      sceneRef: "S06",
      text: [
        "History writes many things about Oda Nobunaga. That he was a monster. That he was a visionary. That he burned temples and opened markets and understood gunpowder at a time when everyone else was still thinking about swords.",
        "All of these things are true. None of them are the whole answer.",
        "The whole answer is this: he was a man who decided, one way or another, what Japan was worth. And then he spent himself entirely on the answer."
      ].join("<br>"),
      backgroundKey: "japan_map_painted_scroll",
      bgmKey: "bgm_ending_theme",
      choices: [],
      nextScene: "S07_END"
    },
    {
      sceneRef: "S07_END",
      text: [
        "Your choices shaped the man. The loyalties you built or burned, the cruelties you chose or refused, the questions you answered or deferred — these are the record.",
        "Owari Province, 1551. The clan lords whisper that the young heir is a fool. The road forward is lit only as far as the next step. It has always been enough.",
        "<b>Nobunaga:</b> Let them whisper."
      ].join("<br>"),
      backgroundKey: "owari_province_dawn",
      bgmKey: "bgm_ending_theme",
      choices: [],
      isChapterEnd: true
    }
  ]
};

export { chapter };