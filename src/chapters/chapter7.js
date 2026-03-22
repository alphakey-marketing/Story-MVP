const chapter = {
  title: "The Price of Heaven",
  subtitle: "1560 — Kyoto does not want you. It needs you. These are not the same thing.",
  number: 7,
  scenes: [
    {
      sceneRef: "S01",
      text: [
        "1560. The Ashikaga Shogunate is a fiction sustained by the willingness of everyone involved to pretend it isn’t. The current shogun, Yoshiaki, is the last of the line. He has sent three letters to Nobunaga.",
        "The first two were pleas. The third was something closer to a demand, which means the man has either found his courage or lost his judgment. Nobunaga is traveling to Kyoto to determine which.",
        "<b>Mitsuhide:</b> If you put Yoshiaki on the shogunal seat, every lord in Japan who hasn’t committed to you yet will assume you’re reaching for the same seat.",
        "<b>Nobunaga:</b> They’ll assume that regardless.",
        "<b>Mitsuhide:</b> Yes. Which means the question is what you actually want from this.",
        "<b>Nobunaga:</b> A legitimate reason to be in Kyoto."
      ].join("<br>"),
      backgroundKey: "kyoto_approach_road_autumn",
      bgmKey: "bgm_journey",
      choices: [],
      nextScene: "S02"
    },
    {
      sceneRef: "S02",
      text: [
        "The shogunal palace is beautiful and slightly decayed — the way a man looks beautiful and slightly decayed when he has stopped eating properly but still insists on his dignity. Yoshiaki receives Nobunaga in the audience hall.",
        "<b>Yoshiaki:</b> Lord Nobunaga. My gratitude for answering at last. The Ashikaga name requires a protector with the force to hold Japan together. I am proposing an alliance that would benefit both —",
        "<b>Nobunaga:</b> You want me to march an army through Kyoto on your behalf. Tell me what you actually want, not what you think I’ll agree to.",
        "<b>Yoshiaki:</b> I want to survive, my lord."
      ].join("<br>"),
      backgroundKey: "kyoto_shogunal_palace",
      bgmKey: "bgm_tense_court",
      choices: [],
      nextScene: "S03"
    },
    {
      sceneRef: "S03",
      text: [
        "The honest answer changes the room. Yoshiaki is not a fool. He is a man who knows exactly how much leverage he doesn’t have and has decided that honesty costs less than pretense.",
        "Nobunaga has three options for what kind of relationship he builds with the last shogun."
      ].join("<br>"),
      backgroundKey: "kyoto_shogunal_private_room",
      bgmKey: "bgm_intrigue",
      choices: [
        {
          text: "Restore Yoshiaki fully. Make him the symbol that holds the traditional lords together while Nobunaga holds the actual power behind him.",
          nextScene: "S03A",
          flagDelta: { flagKey: "political_power", delta: 2 }
        },
        {
          text: "Use Yoshiaki, but make his limitations clear from the start. He is a puppet and both men will know it.",
          nextScene: "S03B",
          flagDelta: { flagKey: "ruthlessness", delta: 1 },
          flagDelta2: { flagKey: "political_power", delta: 1 }
        },
        {
          text: "Decline. Nobunaga does not need the Ashikaga name. He needs only the roads and the markets to build something that outlasts every shogunate.",
          nextScene: "S03C",
          flagDelta: { flagKey: "ruthlessness", delta: 2 }
        }
      ]
    },
    {
      sceneRef: "S03A",
      text: [
        "Yoshiaki is restored. The proclamation is read in every province. The traditional lords, who would never submit to Nobunaga directly, find themselves, through elaborate courtesy, submitting to the Shogun — who is in every practical sense submitting to Nobunaga.",
        "<b>Mitsuhide:</b> A fiction that works is not a fiction. It is simply a convenient truth.",
        "<b>Nobunaga:</b> Now you understand politics."
      ].join("<br>"),
      backgroundKey: "kyoto_shogunal_palace",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      nextScene: "S05"
    },
    {
      sceneRef: "S03B",
      text: [
        "<b>Nobunaga:</b> You will carry the Ashikaga name and you will carry it with dignity. But every order will come through me. Every appointment. Every command.",
        "<b>Yoshiaki:</b> You are asking me to be your—",
        "<b>Nobunaga:</b> I am asking you to survive. I thought that was what you wanted.",
        "Yoshiaki is silent for a long time. He knows what the alternative is. There is no alternative.",
        "<b>Yoshiaki:</b> Yes. It is."
      ].join("<br>"),
      backgroundKey: "kyoto_shogunal_private_room",
      bgmKey: "bgm_tense_court",
      choices: [],
      nextScene: "S05"
    },
    {
      sceneRef: "S03C",
      text: [
        "Nobunaga declines the audience and rides back toward Gifu before sundown. Word travels the way that silences always do — faster than any message.",
        "<b>Mitsuhide:</b> The traditional lords will read this as contempt.",
        "<b>Nobunaga:</b> They can read it any way they like. When I take Kyoto, they’ll have a choice: submit or leave. The Ashikaga name won’t change that."
      ].join("<br>"),
      backgroundKey: "kyoto_approach_road_afternoon",
      bgmKey: "bgm_defiance",
      choices: [],
      nextScene: "S05"
    },
    {
      sceneRef: "S05",
      text: [
        "Before leaving Kyoto or having left it, Nobunaga walks the street market without his guard. One of those moments of obscurity that great men sometimes allow themselves — a reminder of what they are building and for whom.",
        "<b>Merchant:</b> The roads from Owari are open again, they say. First time in fifteen years a cart got through without being taxed three times over.",
        "The man does not know who he is speaking to. He is speaking to a samurai in plain clothes who has stopped to look at fabric.",
        "<b>Merchant:</b> Word is Oda did it. Mad bastard, by all accounts. But the roads are open. Don’t care what he’s called as long as the roads stay open."
      ].join("<br>"),
      backgroundKey: "kyoto_street_market_afternoon",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      nextScene: "S06"
    },
    {
      sceneRef: "S06",
      text: [
        "This is the first time someone has spoken about the roads without speaking about fear or power or obligation. The merchant just wants to move his goods."
      ].join("<br>"),
      backgroundKey: "kyoto_street_market_afternoon",
      bgmKey: "bgm_quiet_resolve",
      choices: [
        {
          text: "Buy the fabric. Walk on without identifying himself.",
          nextScene: "S06A",
          flagDelta: { flagKey: "political_power", delta: 1 }
        },
        {
          text: "Tell the merchant who he is. See what an honest man says when he knows.",
          nextScene: "S06B",
          flagDelta: { flagKey: "nohime_trust", delta: 1 }
        },
        {
          text: "Say nothing. Walk on. File what the merchant said somewhere useful.",
          nextScene: "S06C",
          flagDelta: { flagKey: "ruthlessness", delta: -1 },
          flagDelta2: { flagKey: "political_power", delta: 1 }
        }
      ]
    },
    {
      sceneRef: "S06A",
      text: [
        "He buys two lengths of blue silk. The merchant never knows who he sold to. Nohime wears the fabric for the new year and does not ask where it came from, which means she already knows."
      ].join("<br>"),
      backgroundKey: "kyoto_street_market_afternoon",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      nextScene: "S07"
    },
    {
      sceneRef: "S06B",
      text: [
        "<b>Nobunaga:</b> I’m Oda Nobunaga.",
        "<b>Merchant:</b> ...",
        "<b>Merchant:</b> Keep the roads open, my lord. That’s all I ask.",
        "Nobunaga looks at the man for a long time. He has been told he is terrifying, brilliant, mad, a fool, divine, and monstrous. This is the first time someone has asked him only to keep the roads open. It is the most useful thing anyone has asked him for in years."
      ].join("<br>"),
      backgroundKey: "kyoto_street_market_afternoon",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      nextScene: "S07"
    },
    {
      sceneRef: "S06C",
      text: [
        "He walks on without speaking. But what the merchant said is not gone. It has been filed under a category that already has a name: the reason."
      ].join("<br>"),
      backgroundKey: "kyoto_road_evening",
      bgmKey: "bgm_journey",
      choices: [],
      nextScene: "S07"
    },
    {
      sceneRef: "S07",
      text: [
        "The road back to Gifu. Mitsuhide rides beside him in the late afternoon light. Neither of them speaks for a long time.",
        "<b>Mitsuhide:</b> Did you find what you were looking for?",
        "<b>Nobunaga:</b> No. But I found something I didn’t know I was looking for.",
        "<b>Mitsuhide:</b> Those are usually the more useful findings."
      ].join("<br>"),
      backgroundKey: "gifu_castle_tower_night",
      bgmKey: "bgm_tension_resolve",
      choices: [],
      nextScene: "S08_BATTLE"
    },
    {
      sceneRef: "S08_BATTLE",
      text: [
        "On the road back, a displaced rebel garrison has taken position at the Kyoto gate road. Yoshiaki’s enemies moving quickly, a test of resolve.",
        "<b>Nobunaga:</b> The roads open. Whatever it takes."
      ].join("<br>"),
      backgroundKey: "kyoto_gate_outer_wall",
      bgmKey: "bgm_war_drums",
      isBattleGate: true,
      battleEnemyKey: "kyoto_rebel_garrison",
      battleWinSceneRef: "S09_WIN",
      battleLoseSceneRef: "S09_LOSE",
      choices: []
    },
    {
      sceneRef: "S09_WIN_LOYAL",
      text: [
        "The garrison breaks. The road opens. Mitsuhide rides up as the last of them retreat, dust still settling on the evening road.",
        "<b>Mitsuhide:</b> You said the roads. Just the roads. I didn’t understand it until this moment.",
        "<b>Nobunaga:</b> Now you do.",
        "Word of the engagement reaches Kyoto before sundown. Mitsuhide files what he saw under a category that gives him, briefly, something like hope."
      ].join("<br>"),
      backgroundKey: "kyoto_road_evening_clear",
      bgmKey: "bgm_victory_somber",
      flagCondition: { flagKey: "mitsuhide_loyalty", operator: "gte", value: 2 },
      flagWrites: [
        { flagKey: "ch7_battle_won", flagValue: 1 }
      ],
      choices: [],
      nextScene: "S10"
    },
    {
      sceneRef: "S09_WIN",
      text: [
        "The garrison breaks. The road opens. Word of the engagement reaches Kyoto before sundown."
      ].join("<br>"),
      backgroundKey: "kyoto_road_evening_clear",
      bgmKey: "bgm_victory_somber",
      flagWrites: [
        { flagKey: "ch7_battle_won", flagValue: 1 }
      ],
      choices: [],
      nextScene: "S10"
    },
    {
      sceneRef: "S09_LOSE_POLITICAL",
      text: [
        "The garrison captain lowers his weapon when he sees the Ashikaga seal on Nobunaga’s escort. He will not attack the Shogun’s protector directly. He simply blocks the road and waits.",
        "<b>Mitsuhide:</b> One day. The seal bought us one day.",
        "<b>Nobunaga:</b> Yoshiaki was worth something after all.",
        "They fall back and send for reinforcements. The road opens the following morning. The political investment paid off in the one currency no one had priced: time."
      ].join("<br>"),
      backgroundKey: "kyoto_retreat_rainy",
      bgmKey: "bgm_defeat",
      flagCondition: { flagKey: "political_power", operator: "gte", value: 3 },
      flagWrites: [
        { flagKey: "ch7_battle_won", flagValue: 0 }
      ],
      choices: [],
      nextScene: "S10"
    },
    {
      sceneRef: "S09_LOSE",
      text: [
        "The garrison holds the road. You fall back, reorganize, and send for reinforcements. The road will open. It simply takes another day.",
        "<b>Mitsuhide:</b> Not every door opens the first time you push it."
      ].join("<br>"),
      backgroundKey: "kyoto_retreat_rainy",
      bgmKey: "bgm_defeat",
      flagWrites: [
        { flagKey: "ch7_battle_won", flagValue: 0 }
      ],
      choices: [],
      nextScene: "S10"
    },
    {
      sceneRef: "S10",
      text: [
        "Back at Gifu, that night. The tower. Nohime is there with the fabric.",
        "<b>Nohime:</b> You look different.",
        "<b>Nobunaga:</b> Kenshin asked me what I wanted. I answered him poorly. I think I have a better answer now.",
        "<b>Nohime:</b> Which is?",
        "<b>Nobunaga:</b> The roads. Open. For everyone. That’s the whole answer.",
        // Conditional lines
        "{if ch7_battle_won == 0} He paid for the answer today. The road cost something and it is open anyway, which is the only kind of answer worth having.",
        "{if ch7_battle_won == 1} The road opened on the first push. The answer is clean and the cost was low, which makes it, for the moment, feel exactly like the truth.",
        "Nohime looks at the blue silk in her hands. Then at him. She does not say anything, which means she believes him, which is rarer and worth more than any alliance."
      ].join("<br>"),
      backgroundKey: "gifu_castle_tower_night",
      bgmKey: "bgm_tension_resolve",
      choices: [],
      isChapterEnd: true
    }
  ]
};

export { chapter };