const chapter = {
  title: "Nohime's Gambit",
  subtitle: "1558 — The sharpest blade in the castle was never at your hip.",
  number: 6,
  scenes: [
    {
      sceneRef: "S01",
      text: [
        "1558. Three lords of the eastern provinces are in communication with Shingen. The letters are careful, encoded, and arrive through Gifu's trading caravans. Nobunaga's intelligence network intercepts the third one.",
        "Nohime is the one who brings it to him. She has been running the network herself for four months. He did not ask her to. She did not tell him she was.",
        "<b>Nohime:</b> Lord Fujita, Lord Kaneko, and Governor Souda. They are offering Shingen three things: passage rights through the eastern passes, grain from two harvests, and — according to this letter — my location during the New Year ceremonies.",
        "<b>Nobunaga:</b> Your location.",
        "<b>Nohime:</b> Leverage. If they cannot touch you directly, they touch what stands near you. It is a standard approach.",
        "<b>Nobunaga:</b> Standard.",
        "<b>Nohime:</b> I am not alarmed. I am informing you because the intelligence network requires direction and you are the lord of this castle."
      ].join("<br>"),
      backgroundKey: "gifu_castle_inner_garden",
      bgmKey: "bgm_intrigue",
      choices: [],
      nextScene: "S02"
    },
    {
      sceneRef: "S02",
      text: [
        "Three lords. A conspiracy. The New Year ceremonies are six weeks away. There are several ways to handle this and each of them says something about the kind of lord Nobunaga is."
      ].join("<br>"),
      backgroundKey: "gifu_castle_map_room_day",
      bgmKey: "bgm_intrigue",
      choices: [
        {
          text: "Arrest all three. Public trial. Confiscate their provinces. Make the example legible to every lord watching.",
          nextScene: "S02A",
          flagDelta: { flagKey: "ruthlessness", delta: 2 },
          flagDelta2: { flagKey: "political_power", delta: -1 }
        },
        {
          text: "Let Nohime run a counter-operation. Feed them false intelligence. Let them report to Shingen and let him act on a lie.",
          nextScene: "S02B",
          flagDelta: { flagKey: "nohime_trust", delta: 2 },
          flagDelta2: { flagKey: "political_power", delta: 2 }
        },
        {
          text: "Confront Lord Fujita alone. Privately. Show him the letter. See what he offers in exchange for his life.",
          nextScene: "S02C",
          flagDelta: { flagKey: "political_power", delta: 1 }
        }
      ]
    },
    {
      sceneRef: "S02A",
      text: [
        "The arrests are clean. The trials are public. The confiscations are total. Within three days, every minor lord in the eastern provinces sends formal expressions of loyalty.",
        "<b>Nohime:</b> The expressions of loyalty will last until a larger threat makes silence more affordable.",
        "<b>Nobunaga:</b> They'll last long enough. And then we make an example of the next three.",
        "<b>Nohime:</b> Shingen will know the network is compromised. He'll replace his contact protocols within the month.",
        "<b>Nobunaga:</b> Then we'll compromise the replacement."
      ].join("<br>"),
      backgroundKey: "gifu_castle_gate_day",
      bgmKey: "bgm_war_drums_quiet",
      choices: [],
      nextScene: "S04"
    },
    {
      sceneRef: "S02B",
      text: [
        "<b>Nohime:</b> The false intelligence will need to be plausible. Something Shingen would believe — which means it has to cost us something real to send.",
        "<b>Nobunaga:</b> What do you have in mind?",
        "<b>Nohime:</b> Tell them I will be at the New Year ceremonies as planned. Then place me somewhere else entirely. Let Shingen's agent appear at the ceremonies and find a hundred soldiers and no Nohime.",
        "<b>Nobunaga:</b> You're using yourself as bait.",
        "<b>Nohime:</b> I'm using the idea of me as bait. There is a difference.",
        "The operation runs perfectly. Shingen's agent is captured at the ceremonies. The three lords, now exposed, negotiate for their lives. The eastern provinces are Oda for the next decade."
      ].join("<br>"),
      backgroundKey: "gifu_castle_inner_garden",
      bgmKey: "bgm_intrigue",
      choices: [],
      nextScene: "S04"
    },
    {
      sceneRef: "S02C",
      text: [
        "Lord Fujita looks at the letter for a long time. He is an old man. His hands are very still.",
        "<b>Lord Fujita:</b> What do you want?",
        "<b>Nobunaga:</b> The other two. Their names in writing, their protocols to Shingen, and three seasons of the eastern grain route.",
        "<b>Lord Fujita:</b> And my life.",
        "<b>Nobunaga:</b> And your life.",
        "The old man's hands remain still. Then he picks up the brush."
      ].join("<br>"),
      backgroundKey: "fujita_manor_audience",
      bgmKey: "bgm_tense_court",
      choices: [],
      nextScene: "S04"
    },
    {
      sceneRef: "S04",
      text: [
        "Three days after the resolution, Nohime finds Nobunaga in the garden. She does not usually come to the garden. The garden is the place where she leaves him to think.",
        "<b>Nobunaga:</b> You ran that network for four months without telling me.",
        "<b>Nohime:</b> You had other things to focus on.",
        "<b>Nobunaga:</b> Why tell me now?",
        "<b>Nohime:</b> Because this one needed your authority to resolve cleanly. If it didn't, I wouldn't have."
      ].join("<br>"),
      backgroundKey: "gifu_castle_garden_evening",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      nextScene: "S05"
    },
    {
      sceneRef: "S05",
      text: [
        "He looks at her for a long moment. She looks back. This is how they exist — two people who are both the sharpest thing in any room, sharing the same room."
      ].join("<br>"),
      backgroundKey: "gifu_castle_garden_evening",
      bgmKey: "bgm_quiet_resolve",
      choices: [
        {
          text: "\"You should have told me immediately. I need to know what happens in my own castle.\"",
          nextScene: "S05A",
          flagDelta: { flagKey: "nohime_trust", delta: -1 }
        },
        {
          text: "\"Keep running it. You have my full authority. Tell me what you need.\"",
          nextScene: "S05B",
          flagDelta: { flagKey: "nohime_trust", delta: 2 },
          flagDelta2: { flagKey: "political_power", delta: 1 }
        },
        {
          text: "\"The next time you do something like this, I want to know about it when it starts, not when it ends.\"",
          nextScene: "S05C",
          flagDelta: { flagKey: "nohime_trust", delta: 1 }
        }
      ]
    },
    {
      sceneRef: "S05A",
      text: [
        "<b>Nohime:</b> You would have redirected me before I had enough to bring you.",
        "<b>Nobunaga:</b> That is my prerogative.",
        "<b>Nohime:</b> Yes. It is. I understand.",
        "She bows correctly and leaves. She will tell him the next thing when it is ready and not before. Some things do not change."
      ].join("<br>"),
      backgroundKey: "gifu_castle_garden_evening",
      bgmKey: "bgm_intrigue",
      choices: [],
      nextScene: "S06"
    },
    {
      sceneRef: "S05B",
      text: [
        "<b>Nohime:</b> I need better access to the trade ledgers and an additional four men in the northern route.",
        "<b>Nobunaga:</b> Done.",
        "Nohime's intelligence network becomes, within the year, the most reliable source of foreign court intelligence in the Kinai region. She never tells anyone this. She doesn't need to."
      ].join("<br>"),
      backgroundKey: "gifu_castle_garden_evening",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      nextScene: "S06"
    },
    {
      sceneRef: "S05C",
      text: [
        "<b>Nohime:</b> That is a reasonable expectation. I will meet it where I can.",
        "<b>Nobunaga:</b> I know 'where I can' means 'where I decide.'",
        "<b>Nohime:</b> You have always understood me correctly."
      ].join("<br>"),
      backgroundKey: "gifu_castle_garden_evening",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      nextScene: "S06"
    },
    {
      sceneRef: "S06",
      text: [
        "Later that night, in the tower. Mitsuhide arrives with the eastern province ledgers. He sets them down and notices Nobunaga is looking at nothing in particular with an expression Mitsuhide has not seen before.",
        "<b>Mitsuhide:</b> My lord.",
        "<b>Nobunaga:</b> Mitsuhide. If I ask too much of the people around me — if I treat them as tools rather than as what they are — I need you to tell me.",
        "<b>Mitsuhide:</b> ...",
        "Mitsuhide looks at the ledgers. Then at Nobunaga. The thing that had been under pressure, the night of the burning school, shifts very slightly.",
        "<b>Mitsuhide:</b> I will tell you, my lord."
      ].join("<br>"),
      backgroundKey: "gifu_castle_tower_night",
      bgmKey: "bgm_tension_resolve",
      choices: [],
      isChapterEnd: true
    }
  ]
};

export { chapter };