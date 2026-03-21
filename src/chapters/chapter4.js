const chapter = {
  title: "The Monk's Fire",
  subtitle: "1554 — Religion is politics. Politics is war. War is religion.",
  number: 4,
  scenes: [
    {
      sceneRef: "S01",
      text: [
        "Spring, 1554. The Ikko-ikki have been raiding Nobunaga's supply lines for three weeks. Not destroying them — testing them. Probing. The way a man checks ice before he crosses it.",
        "The warrior monks of the Honganji answer to one man: Kennyo. Abbot. Strategist. A man who has never held a sword and has never needed to.",
        "<b>Mitsuhide:</b> Eleven raids in three weeks. No direct engagement. They hit, they retreat into the marshlands, and they vanish. We cannot pursue them into the Nagashima delta — the terrain swallows armies.",
        "<b>Nobunaga:</b> They're not trying to win a battle. They're trying to tell me something.",
        "<b>Mitsuhide:</b> That they can bleed us indefinitely without risking a direct confrontation?",
        "<b>Nobunaga:</b> That they've been waiting for someone like me. Someone big enough to be worth the fight.",
        "As if on cue, a monk arrives at the castle gate. Kennyo's seal. A request — polite, formal, precise — for an audience.",
        "<b>Mitsuhide:</b> He sent an envoy.",
        "<b>Nobunaga:</b> He sent a message. The monk is just how it travels."
      ].join("<br>"),
      backgroundKey: "nagashima_supply_road_smoke",
      bgmKey: "bgm_war_drums_quiet",
      choices: [],
      nextScene: "S02"
    },
    {
      sceneRef: "S02",
      text: [
        "The monk is young. Educated. He stands very straight and his hands do not shake, which means Kennyo chose him specifically — a man who would not flinch. Everything about this meeting is being reported back."
      ].join("<br>"),
      backgroundKey: "gifu_castle_audience_chamber",
      bgmKey: "bgm_intrigue",
      choices: [
        {
          text: "Receive him properly. Hear what Kennyo is offering before deciding whether to refuse it.",
          nextScene: "S02A",
          flagDelta: { flagKey: "political_power", delta: 1 }
        },
        {
          text: "Receive him in the stables. In front of the grooms. Send him back with a gelding — let Kennyo read the metaphor.",
          nextScene: "S02B",
          flagDelta: { flagKey: "ruthlessness", delta: 1 },
          flagDelta2: { flagKey: "kennyo_hate", delta: 2 }
        },
        {
          text: "Don't receive him at all. Send the letter back with the seal unbroken.",
          nextScene: "S02C",
          flagDelta: { flagKey: "ruthlessness", delta: 1 },
          flagDelta2: { flagKey: "kennyo_hate", delta: 1 }
        }
      ]
    },
    {
      sceneRef: "S02A",
      text: [
        "<b>Monk Envoy:</b> The Abbot Kennyo of the Honganji extends his respectful greetings. He wishes to propose a cessation of hostilities in exchange for Oda recognition of Honganji autonomy in the delta territories.",
        "<b>Nobunaga:</b> Tell the Abbot I don't negotiate the map of Japan with men who raid my supply lines as a prelude to conversation. When the raids stop, I will consider what he's worth talking to.",
        "<b>Monk Envoy:</b> And if the raids do not stop?",
        "<b>Nobunaga:</b> Then tell him I stop considering.",
        "The monk leaves. The raids stop for eleven days. Then they resume, slightly differently — which means Kennyo is now genuinely thinking, not just posturing. That is more alarming, not less."
      ].join("<br>"),
      backgroundKey: "gifu_castle_audience_chamber",
      bgmKey: "bgm_intrigue",
      choices: [],
      nextScene: "S03"
    },
    {
      sceneRef: "S02B",
      text: [
        "The monk receives Nobunaga's message in a room that smells of horses, in front of six grooms who struggle not to laugh. He does not flinch once.",
        "<b>Mitsuhide:</b> Kennyo does not forgive humiliation, my lord. He is patient enough to wait years for a response to this.",
        "<b>Nobunaga:</b> Then he'll have years to think about whether his monks can survive the wait.",
        "The raids double in frequency within a week. Kennyo is no longer testing. He is answering."
      ].join("<br>"),
      backgroundKey: "gifu_castle_stables",
      bgmKey: "bgm_defiance",
      choices: [],
      nextScene: "S03"
    },
    {
      sceneRef: "S02C",
      text: [
        "The monk stands at the gate for two hours before a guard tells him no audience will be granted. He rides back with the letter across his saddle, seal unbroken.",
        "<b>Mitsuhide:</b> He will interpret that as contempt.",
        "<b>Nobunaga:</b> I'm not dismissing him. I'm making him wait.",
        "<b>Mitsuhide:</b> There is a difference.",
        "<b>Nobunaga:</b> Yes. It's important that he knows that too.",
        "The raids intensify within days. Kennyo has read the silence correctly. He is no longer waiting for a reply."
      ].join("<br>"),
      backgroundKey: "gifu_castle_gate",
      bgmKey: "bgm_tension_resolve",
      choices: [],
      nextScene: "S03"
    },
    {
      sceneRef: "S03",
      text: [
        "Twelve days later. A supply village on the Nagashima road. Forty families. A small granary. A monastery school on its eastern edge where a monk named Gyokan has taught calligraphy and mathematics for thirty years.",
        "The Ikko-ikki burn it in the night. The fire spreads. By morning, a third of the village is ash.",
        "<b>Scout:</b> Twenty-two dead, my lord. Farmers. Two monks from the school.",
        "<b>Mitsuhide:</b> My lord. The monastery school—",
        "<b>Nobunaga:</b> What about it?",
        "<b>Mitsuhide:</b> Nothing. We can discuss the response first."
      ].join("<br>"),
      backgroundKey: "nagashima_village_burning",
      bgmKey: "bgm_tragedy_low",
      choices: [],
      nextScene: "S04"
    },
    {
      sceneRef: "S04",
      text: [
        "Twenty-two dead. Forty families displaced. The Nagashima road is effectively cut. Every lord in the region is watching to see what Nobunaga does next."
      ].join("<br>"),
      backgroundKey: "nagashima_village_ruins_dawn",
      bgmKey: "bgm_tragedy_low",
      choices: [
        {
          text: "Shelter the survivors in Gifu. Rebuild the village — visibly. Let the delta farmers see what Oda protection looks like.",
          nextScene: "S04A",
          flagDelta: { flagKey: "political_power", delta: 1 },
          flagDelta2: { flagKey: "nohime_trust", delta: 1 }
        },
        {
          text: "Move survivors east to a fortified settlement. Re-route the road so Kennyo loses his target.",
          nextScene: "S04B",
          flagDelta: { flagKey: "political_power", delta: 1 }
        },
        {
          text: "Find the nearest Ikko-ikki outpost. Burn it. Send back the ashes.",
          nextScene: "S04C",
          flagDelta: { flagKey: "ruthlessness", delta: 2 },
          flagDelta2: { flagKey: "kennyo_hate", delta: 2 }
        }
      ]
    },
    {
      sceneRef: "S04A",
      text: [
        "The survivors arrive at Gifu in wagons. Within three days, word has spread to every farming settlement in the Nagashima delta.",
        "<b>Nohime:</b> This was expensive.",
        "<b>Nobunaga:</b> It was an investment.",
        "<b>Nohime:</b> In what?",
        "<b>Nobunaga:</b> In the next village that Kennyo considers burning.",
        "Before the last wagon clears the gate, Nobunaga sends Mitsuhide to ride with the supply escort back to the road. He lends him his own horse for it — the one that has been to Okehazama and back. Mitsuhide looks at the animal and then at Nobunaga, and says nothing. He mounts and goes."
      ].join("<br>"),
      backgroundKey: "gifu_castle_outer_district",
      bgmKey: "bgm_quiet_resolve",
      flagWrites: [
        { flagKey: "road_command", flagValue: 1 }
      ],
      choices: [],
      nextScene: "S05"
    },
    {
      sceneRef: "S04B",
      text: [
        "Three days later, Ikko-ikki raiders arrive at the old village location and find ash and absence. They have nothing to raid.",
        "<b>Mitsuhide:</b> It works tactically. But the farmers who were moved — some of them will blame you rather than Kennyo.",
        "<b>Nobunaga:</b> Some of them will. The ones who understand what happened won't."
      ].join("<br>"),
      backgroundKey: "fortified_settlement_east",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      nextScene: "S05"
    },
    {
      sceneRef: "S04C",
      text: [
        "The outpost burns before dawn. Twenty monks evacuate in time. The supplies — three months of them — do not. You send back a single message: 'Now we are even.'",
        "<b>Mitsuhide:</b> There was a monk named Gyokan in that school. He taught there for thirty years.",
        "<b>Nobunaga:</b> You knew him.",
        "<b>Mitsuhide:</b> He taught me to write. When I was seven.",
        "A long silence. On the table between them, Mitsuhide has set down his writing case without noticing he did it — old lacquer, worn smooth at the corners, the kind of object carried so long it has become invisible to its owner. Gyokan's student. Still carrying the tools of the first man who taught him precision had value.",
        "Mitsuhide bows and walks away before Nobunaga can speak. His back is perfectly straight."
      ].join("<br>"),
      backgroundKey: "ikko_ikki_outpost_burning",
      bgmKey: "bgm_war_drums",
      choices: [],
      nextScene: "S05"
    },
    {
      sceneRef: "S05",
      text: [
        "That evening. Nobunaga finds Mitsuhide in the map room, alone. He has not moved any markers. He has been standing in front of the map for what appears to have been an hour.",
        "<b>Nobunaga:</b> Mitsuhide.",
        "<b>Mitsuhide:</b> The Ikko-ikki have three staging points in the delta. If we take the northern crossing first—",
        "<b>Nobunaga:</b> Stop.",
        "The silence in the map room is the kind that has weight."
      ].join("<br>"),
      backgroundKey: "gifu_castle_corridor_night",
      bgmKey: "bgm_tragedy_low",
      choices: [],
      nextScene: "S06"
    },
    {
      sceneRef: "S06",
      text: [
        "Mitsuhide is at the edge of something. Not breaking — he does not break visibly. But something is under pressure that was not under pressure before."
      ].join("<br>"),
      backgroundKey: "gifu_castle_map_room_night",
      bgmKey: "bgm_tragedy_low",
      choices: [
        {
          text: "\"Grief is a private matter. We have a war in front of us. Mourn after.\"",
          nextScene: "S06A",
          flagDelta: { flagKey: "mitsuhide_loyalty", delta: -2 }
        },
        {
          text: "\"I didn't know he was there. I should have known. I am sorry, Mitsuhide.\"",
          nextScene: "S06B",
          flagDelta: { flagKey: "mitsuhide_loyalty", delta: 2 },
          flagDelta2: { flagKey: "bond_strength", delta: 1 }
        },
        {
          text: "\"Sit down. Tell me about him. The campaign can wait one hour.\"",
          nextScene: "S06C",
          flagDelta: { flagKey: "mitsuhide_loyalty", delta: 2 },
          flagDelta2: { flagKey: "bond_strength", delta: 1 }
        }
      ]
    },
    {
      sceneRef: "S06A",
      text: [
        "<b>Mitsuhide:</b> Yes, my lord.",
        "He is brilliant for the rest of the evening. Every assessment is precise. But something behind his eyes has gone very, very quiet. The presence of a man who has begun, for the first time, to file things away."
      ].join("<br>"),
      backgroundKey: "gifu_castle_map_room_night",
      bgmKey: "bgm_war_drums_quiet",
      choices: [],
      nextScene: "S08_BATTLE"
    },
    {
      sceneRef: "S06B",
      text: [
        "<b>Nobunaga:</b> I mean it.",
        "<b>Mitsuhide:</b> He was a small man. Very thin. He smelled of ink. He said my brushwork was impatient.",
        "<b>Nobunaga:</b> Was he right?",
        "<b>Mitsuhide:</b> About everything except that. My brushwork was precise. He just wanted an excuse to keep me working.",
        "<b>Mitsuhide:</b> Thank you, my lord."
      ].join("<br>"),
      backgroundKey: "gifu_castle_map_room_night",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      nextScene: "S08_BATTLE"
    },
    {
      sceneRef: "S06C",
      text: [
        "<b>Nobunaga:</b> Sit down. One hour. Tell me about the man.",
        "Mitsuhide sits. He talks for forty minutes without stopping — about a thin monk who smelled of ink, about mornings in a cold classroom, about a man who taught him that precision was the closest thing to virtue he had ever encountered.",
        "<b>Mitsuhide:</b> He would have said this war was inevitable. He used to say: men with power always mistake permission for righteousness.",
        "<b>Nobunaga:</b> He wasn't wrong.",
        "Something in the room has shifted. The thing that was under pressure has been, for now, relieved."
      ].join("<br>"),
      backgroundKey: "gifu_castle_map_room_night",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      nextScene: "S08_BATTLE"
    },
    {
      sceneRef: "S08_BATTLE",
      text: [
        "<b>Mitsuhide:</b> They have chosen the ground well.",
        "<b>Nobunaga:</b> They always do. We have to take this crossing anyway."
      ].join("<br>"),
      backgroundKey: "nagashima_delta_crossing_dawn",
      bgmKey: "bgm_war_drums",
      isBattleGate: true,
      battleEnemyKey: "ikko_ikki_nagashima_force",
      battleWinSceneRef: "S09_WIN",
      battleLoseSceneRef: "S09_LOSE",
      conditionalVariants: [
        { outcome: "win", sceneRef: "S09_WIN_COLD", condition: { flagKey: "mitsuhide_loyalty", operator: "lte", value: 0 } },
        { outcome: "lose", sceneRef: "S09_LOSE_COLD", condition: { flagKey: "mitsuhide_loyalty", operator: "lte", value: 0 } }
      ],
      choices: []
    },
    {
      sceneRef: "S09_WIN",
      text: [
        "The crossing falls by midday. The Ikko-ikki retreat into the marshlands — intact, orderly, taking their wounded. They were not broken. But the road is open.",
        "Mitsuhide surveys the crossing without speaking. Then, quietly, to no one in particular:",
        "<b>Mitsuhide:</b> Gyokan would have said the road being open is its own kind of text. Something written in the right medium, for the right reader.",
        "<b>Nobunaga:</b> He taught you well.",
        "Mitsuhide says nothing further. He goes back to work. The pressure that was in the room before the battle is, for now, somewhere else."
      ].join("<br>"),
      backgroundKey: "nagashima_crossing_aftermath",
      bgmKey: "bgm_victory_somber",
      choices: [],
      nextScene: "S10"
    },
    {
      sceneRef: "S09_WIN_COLD",
      text: [
        "The crossing falls by midday. The Ikko-ikki retreat intact. The road is open.",
        "Mitsuhide is already at the next marker on the map before Nobunaga reaches the bank. There is no pause. There is no ceremony. The work continues.",
        "The silence between them is not the silence of men who have understood each other. It is the silence of men who have stopped trying."
      ].join("<br>"),
      backgroundKey: "nagashima_crossing_aftermath",
      bgmKey: "bgm_victory_somber",
      isConditionalVariant: true,
      conditionalVariantOf: "S09_WIN",
      nextScene: "S10",
      flagCondition: { flagKey: "mitsuhide_loyalty", operator: "lte", value: 0 },
      choices: []
    },
    {
      sceneRef: "S10",
      text: [
        "A courier arrives from Katsuie's camp the morning after the crossing. No letter. A short sword in a plain wooden case — campaign steel, utilitarian, the kind of blade a general actually carries rather than displays. A note in Katsuie's handwriting, four words: 'The road stays open.'",
        "<b>Mitsuhide:</b> He does not usually send gifts.",
        "<b>Nobunaga:</b> This isn't a gift. It's an acknowledgment. There's a difference."
      ].join("<br>"),
      backgroundKey: "gifu_castle_map_room_day",
      bgmKey: "bgm_quiet_resolve",
      choices: [
        {
          text: "Accept it. Send back a reply: 'As it always will.'",
          nextScene: "S10A",
          flagDelta: { flagKey: "weapon_legacy", delta: 1 },
          flagDelta2: { flagKey: "katsuie_loyalty", delta: 1 }
        },
        {
          text: "Return it with a note: a general's blade belongs in the field, not on a lord's table.",
          nextScene: "S10B",
          flagDelta: { flagKey: "katsuie_loyalty", delta: 1 }
        }
      ]
    },
    {
      sceneRef: "S10A",
      text: [
        "The reply goes back the same day. Katsuie receives it at the northern wall. He reads it once, folds it once, and puts it in his armour. He does not mention it again. Neither does Nobunaga. The blade sits on the corner of the campaign table for the rest of the chapter, and nobody moves it."
      ].join("<br>"),
      backgroundKey: "gifu_castle_map_room_day",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      nextScene: "S11_WIN"
    },
    {
      sceneRef: "S10B",
      text: [
        "The blade goes back the same day with the note. Katsuie receives it at the northern wall. He reads the note. He buckles the sword back on without a word to anyone. It is a clean answer. He respects clean answers."
      ].join("<br>"),
      backgroundKey: "gifu_castle_map_room_day",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      nextScene: "S11_WIN"
    },
    {
      sceneRef: "S09_LOSE",
      text: [
        "The assault fails. The marshland swallows the advance and spits it back out. You retreat in order — which is itself a skill — but the crossing holds for the monks.",
        "<b>Mitsuhide:</b> Different season. Different approach. The crossing will fall. Just not today.",
        "He says it standing beside Nobunaga at the retreat line. Not to the map. To him. The difference is not small."
      ].join("<br>"),
      backgroundKey: "nagashima_retreat_night",
      bgmKey: "bgm_defeat",
      choices: [],
      nextScene: "S11_LOSE"
    },
    {
      sceneRef: "S09_LOSE_COLD",
      text: [
        "The assault fails. You retreat in order. The crossing holds for the monks.",
        "Mitsuhide states the tactical position to the assembled captains. His voice is precise. He does not look at Nobunaga while he speaks.",
        "<b>Mitsuhide:</b> Different season. Different approach. The crossing will fall.",
        "He says it to the room. Not to his lord. That is the thing that has changed, and only Nobunaga is close enough to notice."
      ].join("<br>"),
      backgroundKey: "nagashima_retreat_night",
      bgmKey: "bgm_defeat",
      isConditionalVariant: true,
      conditionalVariantOf: "S09_LOSE",
      nextScene: "S11_LOSE",
      flagCondition: { flagKey: "mitsuhide_loyalty", operator: "lte", value: 0 },
      choices: []
    },
    {
      sceneRef: "S11_WIN",
      text: [
        "A letter arrives from Kennyo. Formal. Precise. It does not mention the outpost or the crossing. It mentions only that the Honganji will endure.",
        "<b>Nobunaga:</b> He's patient. Good. Patient men telegraph their patience. I'll see him coming long before he arrives.",
        "Somewhere in Osaka, Kennyo folds his own copy of the letter. He does not smile. He begins the long game."
      ].join("<br>"),
      backgroundKey: "gifu_castle_tower_night",
      bgmKey: "bgm_tension_resolve",
      choices: [],
      isChapterEnd: true
    },
    {
      sceneRef: "S11_LOSE",
      text: [
        "A letter arrives from Kennyo. Formal. Precise. It mentions, in passing, that the Nagashima crossing remains open to Honganji pilgrims. It does not need to say anything else.",
        "<b>Nobunaga:</b> He's patient. And now he knows I know it.",
        "Somewhere in Osaka, Kennyo reads a report from the delta. He permits himself one moment of satisfaction. Then he begins the next stage of the long game, which is now measurably longer than it was this morning.",
        "<b>Nobunaga:</b> The crossing falls next time. I have seen the ground now. That was worth the cost of today."
      ].join("<br>"),
      backgroundKey: "gifu_castle_tower_night",
      bgmKey: "bgm_defeat",
      choices: [],
      isChapterEnd: true
    }
  ]
};

export { chapter };