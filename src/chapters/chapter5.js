const chapter = {
  title: "The Mountain and the Mirror",
  subtitle: "1556 — Kenshin sees you. The question is whether you can see yourself.",
  number: 5,
  scenes: [
    {
      sceneRef: "S01",
      text: [
        "1556. The letter from Kenshin arrives. Not a declaration of war — an invitation. A mountain inn on the border road. Two parties. No armies.",
        "<b>Mitsuhide:</b> He has never requested a meeting before. Every lord he's summoned to a border conference has emerged having agreed to something.",
        "<b>Nobunaga:</b> Then I'll be the first one who doesn't.",
        "<b>Nohime:</b> He calls himself the God of War. He means it literally. He prays before every battle and has never lost one.",
        "<b>Nobunaga:</b> A god who has never lost is a god who hasn't fought me yet."
      ].join("<br>"),
      backgroundKey: "mountain_road_north_mist",
      bgmKey: "bgm_journey",
      choices: [],
      nextScene: "S02"
    },
    {
      sceneRef: "S02",
      text: [
        "The mountain inn. Kenshin is already seated when Nobunaga arrives. This is deliberate — he wanted to be seen waiting without appearing to wait.",
        "<b>Kenshin:</b> The Fool of Owari. You look nothing like your reputation.",
        "<b>Nobunaga:</b> Neither do you. I expected robes. You wear armor to a diplomatic meeting.",
        "<b>Kenshin:</b> I am always at war. Even in peace I am at war. That is not a boast — it is simply what I am.",
        "He pours tea for both of them. He is watching everything. Nobunaga recognizes the style — it is how he himself enters a room."
      ].join("<br>"),
      backgroundKey: "mountain_inn_exterior",
      bgmKey: "bgm_tense_court",
      choices: [],
      nextScene: "S03"
    },
    {
      sceneRef: "S03",
      text: [
        "<b>Kenshin:</b> I have been watching you for three years. You fight like a man who doesn't believe in the rules of war.",
        "<b>Nobunaga:</b> I believe in results. The rules are other men's habit.",
        "<b>Kenshin:</b> I want to ask you something, and I want an honest answer. Not a political one.",
        "<b>Nobunaga:</b> Ask.",
        "<b>Kenshin:</b> What do you actually want? Not the strategy. Not Tenka fubu. What do you, Oda Nobunaga, actually want from all of this?"
      ].join("<br>"),
      backgroundKey: "mountain_inn_interior",
      bgmKey: "bgm_intrigue",
      choices: [
        {
          text: "\"To be the last war Japan needs. One unification so complete no one needs to fight again.\"",
          nextScene: "S03A",
          flagDelta: { flagKey: "political_power", delta: 1 }
        },
        {
          text: "\"To prove that the rules of this country were written by men who couldn't win without them.\"",
          nextScene: "S03B",
          flagDelta: { flagKey: "ruthlessness", delta: 1 }
        },
        {
          text: "\"I don't know yet. I'm working on it.\"",
          nextScene: "S03C",
          flagDelta: { flagKey: "nohime_trust", delta: 1 },
          flagDelta2: { flagKey: "omen_read", delta: 1 }
        }
      ]
    },
    {
      sceneRef: "S03A",
      text: [
        "<b>Kenshin:</b> A noble answer. A political one.",
        "<b>Nobunaga:</b> They are the same answer.",
        "<b>Kenshin:</b> If they were the same answer, you would not have needed to say both. But I will grant that it is at least true in part. I give you three years before I decide whether you are worth stopping."
      ].join("<br>"),
      backgroundKey: "mountain_inn_interior",
      bgmKey: "bgm_intrigue",
      flagWrites: [{ flagKey: "kenshin_verdict", flagValue: 1 }],
      choices: [],
      nextScene: "S04"
    },
    {
      sceneRef: "S03B",
      text: [
        "<b>Kenshin:</b> An honest answer. Also a dangerous one to say aloud.",
        "<b>Nobunaga:</b> You asked for honesty.",
        "<b>Kenshin:</b> I did. And I respect it more than the polished version. A man who knows what he wants is predictable. Predictability has its uses — for both of us. I give you three years."
      ].join("<br>"),
      backgroundKey: "mountain_inn_interior",
      bgmKey: "bgm_intrigue",
      flagWrites: [{ flagKey: "kenshin_verdict", flagValue: 1 }],
      choices: [],
      nextScene: "S04"
    },
    {
      sceneRef: "S03C",
      text: [
        "A long pause. Kenshin sets down his tea.",
        "<b>Kenshin:</b> ...That is the first thing you've said that I believe completely.",
        "<b>Nobunaga:</b> Good. I'd hate to have you believe the wrong thing.",
        "<b>Kenshin:</b> A man who does not know what he wants is more dangerous than one who does. I give you three years — and I will be watching to see what answer you find.",
        "He receives the assessment the way Nohime received the heron on the Mino road — without naming it, without resolution, filed somewhere that does not announce itself. Not certainty. Attention."
      ].join("<br>"),
      backgroundKey: "mountain_inn_interior",
      bgmKey: "bgm_intrigue",
      flagWrites: [{ flagKey: "kenshin_verdict", flagValue: 1 }],
      choices: [],
      nextScene: "S04"
    },
    {
      sceneRef: "S04",
      text: [
        "<b>Kenshin:</b> Your general. Mitsuhide. He is the most capable man in your service and you treat him like a tool.",
        "<b>Nobunaga:</b> He is a general. That is his function.",
        "<b>Kenshin:</b> Tools break when they are used past their tolerance. Men break differently. I have seen three lords lose their greatest general to exactly this mistake. I mention it because I am curious whether you are smart enough to hear it."
      ].join("<br>"),
      backgroundKey: "mountain_inn_interior",
      bgmKey: "bgm_intrigue",
      choices: [
        {
          text: "\"Noted. Mitsuhide is more than a tool — I know that.\"",
          nextScene: "S04A",
          flagDelta: { flagKey: "mitsuhide_loyalty", delta: 1 }
        },
        {
          text: "\"I appreciate the counsel. But I know my own house.\"",
          nextScene: "S04B",
          flagDelta: { flagKey: "ruthlessness", delta: 1 }
        }
      ]
    },
    {
      sceneRef: "S04A",
      text: [
        "<b>Kenshin:</b> Whether you know it and whether you act on it are two different things. I will file that answer under 'promising.'"
      ].join("<br>"),
      backgroundKey: "mountain_inn_interior",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      nextScene: "S05"
    },
    {
      sceneRef: "S04B",
      text: [
        "<b>Kenshin:</b> Men who know their own house rarely need to say so. I will file that under 'noted but unresolved.'"
      ].join("<br>"),
      backgroundKey: "mountain_inn_interior",
      bgmKey: "bgm_intrigue",
      choices: [],
      nextScene: "S05"
    },
    {
      sceneRef: "S05",
      text: [
        "<b>Kenshin:</b> One more question. The blade. The one your men found at Nagashino.",
        "<b>Nobunaga:</b> You know about that.",
        "<b>Kenshin:</b> I know about everything in this country that carries weight. Do you still have it?"
      ].join("<br>"),
      backgroundKey: "mountain_inn_interior_dusk",
      bgmKey: "bgm_intrigue",
      choices: [
        {
          text: "\"Yes. It is mine.\"",
          nextScene: "S05A",
          flagDelta: { flagKey: "supernatural_affinity", delta: 1 },
          flagDelta2: { flagKey: "omen_read", delta: 1 }
        },
        {
          text: "\"It was destroyed. It had no strategic value.\"",
          nextScene: "S05B",
          flagDelta: { flagKey: "supernatural_affinity", delta: -1 }
        },
        {
          text: "(Say nothing — meet his gaze and wait)",
          nextScene: "S05C",
          flagDelta: { flagKey: "supernatural_affinity", delta: 1 },
          flagDelta2: { flagKey: "ruthlessness", delta: 1 }
        }
      ]
    },
    {
      sceneRef: "S05A",
      text: [
        "<b>Kenshin:</b> Then be careful. Things that choose their bearers are not neutral tools. They have an agenda of their own.",
        "<b>Nobunaga:</b> I know. We've discussed it.",
        "<b>Kenshin:</b> ...",
        "For the first time in the conversation, Kenshin looks surprised. He files this under a category that does not yet have a name.",
        "A pause. The fire in the room settles. The mountain air outside the screen door has changed in some way that neither of them comments on — a pressure difference, the kind that comes before weather, or before something else entirely. Nobunaga notes it the way he notes everything: without expression, as a fact."
      ].join("<br>"),
      backgroundKey: "mountain_inn_interior_dusk",
      bgmKey: "bgm_ominous",
      choices: [],
      nextScene: "S06"
    },
    {
      sceneRef: "S05B",
      text: [
        "<b>Kenshin:</b> A rational response. Perhaps the correct one. The gods of this country prefer to remain unchallenged.",
        "<b>Nobunaga:</b> Then they should have chosen a quieter era."
      ].join("<br>"),
      backgroundKey: "mountain_inn_interior_dusk",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      nextScene: "S06"
    },
    {
      sceneRef: "S05C",
      text: [
        "Nobunaga says nothing. He holds Kenshin's gaze for a long time. Kenshin, who does not look away from anything, holds his gaze back.",
        "<b>Kenshin:</b> I see. The answer is in the silence. That is, in its way, the most alarming answer available."
      ].join("<br>"),
      backgroundKey: "mountain_inn_interior_dusk",
      bgmKey: "bgm_ominous",
      choices: [],
      nextScene: "S06"
    },
    {
      sceneRef: "S06",
      text: [
        "<b>Kenshin:</b> I have one final thing to offer. Not a threat. An observation.",
        "<b>Kenshin:</b> You are building something real. The roads. The markets. The idea that Japan could be one thing. These are correct ideas and you are the first person in two hundred years who has meant them when saying them.",
        "<b>Kenshin:</b> The question is whether the man building it can survive long enough for the thing to outlast him. That is the only question that matters. I have not yet decided whether the answer is yes.",
        "He leaves. The mountain is dark. Nobunaga stands at the inn's edge for a long time with Kenshin's words, which are neither threat nor comfort but something rarer: an honest assessment. He has not received many of those. He notes this also."
      ].join("<br>"),
      backgroundKey: "mountain_inn_exterior_night",
      bgmKey: "bgm_tension_resolve",
      flagWrites: [
        { flagKey: "bond_strength", flagValue: 1 }
      ],
      choices: [],
      nextScene: "S07"
    },
    {
      sceneRef: "S07",
      text: [
        "<b>Nohime:</b> Well?",
        "<b>Nobunaga:</b> He's patient, intelligent, and genuinely unconcerned with whether I like him.",
        "<b>Nohime:</b> So he's like you.",
        "<b>Nobunaga:</b> He's like the version of me that had a religion to hold him still. Which makes him either more dangerous or less, depending on whether the religion holds."
      ].join("<br>"),
      backgroundKey: "gifu_castle_garden_evening",
      bgmKey: "bgm_intrigue",
      choices: [
        {
          text: "\"He'll hold. His god is the only thing he won't question.\"",
          nextScene: "S07A",
          flagDelta: { flagKey: "political_power", delta: 1 }
        },
        {
          text: "\"The religion is the weakness. Find what cracks it and you find what breaks him.\"",
          nextScene: "S07B",
          flagDelta: { flagKey: "ruthlessness", delta: 1 }
        }
      ]
    },
    {
      sceneRef: "S07A",
      text: [
        "<b>Nohime:</b> Which makes him consistent, at minimum. There are worse things in an enemy than consistency.",
        "<b>Nobunaga:</b> Exactly. I can plan around a man who won't change his nature. It's the ones who surprise you that cost."
      ].join("<br>"),
      backgroundKey: "gifu_castle_garden_evening",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      nextScene: "S18"
    },
    {
      sceneRef: "S07B",
      text: [
        "<b>Nohime:</b> I'll look into what cracks it.",
        "She says it neutrally, which means she will do it and do it well and file the result where it can be used without sentiment."
      ].join("<br>"),
      backgroundKey: "gifu_castle_garden_evening",
      bgmKey: "bgm_intrigue",
      choices: [],
      nextScene: "S18"
    },
    {
      sceneRef: "S18",
      text: [
        "Two days after the mountain meeting, a package arrives from Nagashino. The swordsmith Nobunaga sent the recovered blade to — six months ago, with instructions to restore what could be restored — has finished the work.",
        "The blade is different now. Not repaired — reforged. The smith has taken what was broken and worked it into something that carries the break as part of its structure. A visible seam along the lower third. Not hidden. Incorporated.",
        "<b>Mitsuhide:</b> The smith says it is stronger at the seam than it was before it broke. He says that is not always true but it was true this time.",
        "<b>Nobunaga:</b> I believe him."
      ].join("<br>"),
      backgroundKey: "gifu_castle_map_room_day",
      bgmKey: "bgm_quiet_resolve",
      choices: [
        {
          text: "Accept the blade. Have it mounted in the campaign room.",
          nextScene: "S18A",
        flagHardSet: { flagKey: "blade_legacy", value: 3 }  // reforged = 3
        {
          text: "Return it to the smith. A reforged blade is not the same blade. He should keep the work.",
          nextScene: "S18B",
          flagDelta: { flagKey: "ruthlessness", delta: 1 }
        }
      ]
    },
    {
      sceneRef: "S18A",
      text: [
        "The blade is mounted on the east wall of the campaign room, seam facing outward. No inscription. No ceremony. Mitsuhide looks at it once before returning to the map. He does not ask about it. Neither does anyone else.",
        "It will be there for every meeting from this point forward. The seam visible. The break part of the record."
      ].join("<br>"),
      backgroundKey: "gifu_castle_map_room_day",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      nextScene: "S08"
    },
    {
      sceneRef: "S18B",
      text: [
        "The blade goes back to Nagashino with a note: the work is yours. Nobunaga does not explain the decision to Mitsuhide. Mitsuhide does not ask.",
        "The east wall of the campaign room stays bare. Which is also a kind of statement, though nobody reads it that way yet."
      ].join("<br>"),
      backgroundKey: "gifu_castle_map_room_day",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      nextScene: "S08"
    },
    {
      sceneRef: "S08",
      text: [
        "That night, Nobunaga stands at the tower. Below, Gifu lights up the dark the way a fire lights up a room — from the inside out.",
        "He named this place after the mountain from which Zhou conquered all under heaven. Tenka fubu. All under heaven, by force.",
        "He said it like a vow. He is still deciding whether he meant it as a vow or a direction. Kenshin's question is still in the room with him: what do you actually want?",
        "<b>Nobunaga:</b> I'm working on it."
      ].join("<br>"),
      backgroundKey: "gifu_castle_tower_night",
      bgmKey: "bgm_tension_resolve",
      choices: [],
      isChapterEnd: true
    }
  ]
};

export { chapter };