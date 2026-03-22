const chapter = {
  title: "The Weight of Heaven",
  subtitle: "1579\u20131581 \u2014 At the summit, you can see everything. Including what is coming.",
  number: 12,
  scenes: [
    {
      sceneRef: "S01",
      text: [
        "1579. Nobunaga has unified most of Honshu. The western campaign is the last major obstacle. Hideyoshi is already in the field, grinding toward Mori territory month by month. The northern lords are mostly pacified. The eastern routes have been open for more than a decade.",
        "He stands at the highest point of Azuchi castle \u2014 the castle he built on Lake Biwa, seven stories, painted gold at the top, visible from twenty ri in clear weather \u2014 and looks out at the country.",
        "This is what all of it was for. He is aware that it is not finished. He is also aware that he will not finish it. The question is whether what he has built will outlast him long enough for someone else to close the last pieces.",
        "<b>Nobunaga:</b> It will. It has to."
      ].join("<br>"),
      backgroundKey: "azuchi_castle_summit_dawn",
      bgmKey: "bgm_tension_resolve",
      choices: [],
      nextScene: "S02"
    },
    {
      sceneRef: "S02",
      text: [
        "A monk arrives at Azuchi. Not a Ikko-ikki monk \u2014 a different kind, an old man from the northern mountains who has walked for three weeks to get here. He refuses to speak to anyone except Nobunaga himself, and he refuses to say what about.",
        "He is granted an audience, because Nobunaga is curious and Azuchi castle has enough security to receive one old monk.",
        "<b>Monk:</b> I know about the blade from Nagashino.",
        "<b>Nobunaga:</b> Many people know about the blade.",
        "<b>Monk:</b> I know where it came from. Not who made it. Where it came from. Those are different things."
      ].join("<br>"),
      backgroundKey: "azuchi_castle_audience_hall",
      bgmKey: "bgm_ominous",
      choices: [],
      nextScene: "S03"
    },
    {
      sceneRef: "S03_BL3",
      text: [
        "The monk looks at the blade mounted on the east wall of the map room \u2014 the reforged one, seam facing outward \u2014 for a long time.",
        "<b>Monk:</b> You reforged it.",
        "<b>Nobunaga:</b> The smith said it was stronger at the seam than before.",
        "<b>Monk:</b> That is true. And also not the whole truth. The blade was carried by a man who unified the western islands in the fifth century. It passed through seven bearers before it broke. It was waiting for someone who would not repair it but incorporate the break.",
        "A long silence.",
        "<b>Monk:</b> It has been waiting a very long time. I came to see whether you knew what you had done.",
        "<b>Nobunaga:</b> And do I?",
        "<b>Monk:</b> I think you are beginning to."
      ].join("<br>"),
      backgroundKey: "azuchi_castle_map_room",
      bgmKey: "bgm_ominous",
      flagCondition: { flagKey: "blade_legacy", operator: "eq", value: 3 },
      choices: [],
      nextScene: "S04"
    },
    {
      sceneRef: "S03_BL2",
      text: [
        "The monk looks at the blade \u2014 the original, intact, mounted in the campaign room.",
        "<b>Monk:</b> You kept it.",
        "<b>Nobunaga:</b> It had value.",
        "<b>Monk:</b> It was carried by a man who unified the western islands in the fifth century. It passed through seven bearers. Each one kept it whole, as you have. Each one also stopped, in the end, before they finished what they started.",
        "The monk says nothing else. He bows and leaves. He does not explain what he means by stopped. He does not explain whether the stopping was the blade's doing or the bearer's."
      ].join("<br>"),
      backgroundKey: "azuchi_castle_map_room",
      bgmKey: "bgm_ominous",
      flagCondition: { flagKey: "blade_legacy", operator: "eq", value: 2 },
      choices: [],
      nextScene: "S04"
    },
    {
      sceneRef: "S03_BL1",
      text: [
        "<b>Monk:</b> The blade from Nagashino. You destroyed it.",
        "<b>Nobunaga:</b> It had no strategic value.",
        "<b>Monk:</b> It was carried by a man who unified the western islands in the fifth century. It passed through seven bearers before it came to you. You are the eighth.",
        "<b>Nobunaga:</b> I told you. I destroyed it.",
        "<b>Monk:</b> Yes. I came to see whether you knew what you had destroyed.",
        "He leaves without explaining further. He has a very long walk back to the northern mountains."
      ].join("<br>"),
      backgroundKey: "azuchi_castle_audience_hall",
      bgmKey: "bgm_ominous",
      flagCondition: { flagKey: "blade_legacy", operator: "eq", value: 1 },
      choices: [],
      nextScene: "S04"
    },
    {
      sceneRef: "S03",
      text: [
        "<b>Monk:</b> The blade from Nagashino. I have been told you travel without it.",
        "<b>Nobunaga:</b> I travel light.",
        "<b>Monk:</b> It was carried by a man who unified the western islands in the fifth century. It passed through seven bearers. When the eighth bearer has no interest in it, it simply waits for the ninth. These things are patient.",
        "He bows and leaves. Nobunaga watches him go. He is not sure what to do with the information. He files it."
      ].join("<br>"),
      backgroundKey: "azuchi_castle_audience_hall",
      bgmKey: "bgm_ominous",
      choices: [],
      nextScene: "S04"
    },
    {
      sceneRef: "S04",
      text: [
        "How Nobunaga responds to what the monk said is not a matter of strategy. It is a matter of which part of himself he chooses to ask."
      ].join("<br>"),
      backgroundKey: "azuchi_castle_summit_dawn",
      bgmKey: "bgm_ominous",
      choices: [
        {
          text: "Take the monk's words seriously. Something older than politics is moving here.",
          nextScene: "S04A",
          flagDelta: { flagKey: "supernatural_affinity", delta: 2 },
          flagDelta2: { flagKey: "omen_read", delta: 1 }
        },
        {
          text: "File it as interesting but unprovable. The work is the work.",
          nextScene: "S04B",
          flagDelta: { flagKey: "political_power", delta: 1 }
        }
      ]
    },
    {
      sceneRef: "S04A",
      text: [
        "He stands at the tower for a long time that night. The lake is silver in the moonlight. Somewhere below, the castle lights are warm. The roads from the lake's eastern shore are open.",
        "He thinks of the heron on the Mino road. The fox at the delta. The pressure change at the mountain inn the night Kenshin gave him an honest assessment. He has been noting these things for thirty years. He has not yet decided what they mean. He decides, tonight, that not knowing what they mean is not the same as their meaning nothing."
      ].join("<br>"),
      backgroundKey: "azuchi_castle_lake_night",
      bgmKey: "bgm_ominous",
      choices: [],
      nextScene: "S05"
    },
    {
      sceneRef: "S04B",
      text: [
        "The monk's words are interesting. They are not actionable. The work is the work.",
        "He returns to the western campaign dispatches. There are seventeen of them. Hideyoshi is making progress. The roads from Kyoto to the western coast are more open than they have been in a century.",
        "That is the fact that matters."
      ].join("<br>"),
      backgroundKey: "azuchi_castle_map_room",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      nextScene: "S05"
    },
    {
      sceneRef: "S05",
      text: [
        "1580. Uesugi Kenshin is dead.",
        "He died in the spring, in his camp, of what the records describe as apoplexy. He was fifty years old. He had not been defeated in battle. He had simply stopped.",
        "A letter arrives from his estate \u2014 written in Kenshin's hand, dated two months before his death, addressed to Nobunaga directly. It has been held by his retainers, waiting for the appropriate moment to be delivered."
      ].join("<br>"),
      backgroundKey: "azuchi_castle_map_room",
      bgmKey: "bgm_tragedy_low",
      choices: [],
      nextScene: "S06"
    },
    {
      sceneRef: "S06_HIGH",
      text: [
        "<b>Kenshin's letter:</b> 'You have answered the question I asked you at the mountain inn, though not in words. The roads. Open. For everyone. That is a correct answer. I was not certain, when we met, that you meant it. I am now certain that you meant it and that the meaning has cost you exactly as much as correct answers always cost.'",
        "'I will not see the unification. I confess that I am glad. Watching it completed by someone else is, for a man such as myself, its own kind of defeat. But it is a defeat I can respect. That is rarer than you might think.'",
        "'I leave you one warning. The man who stands closest to you has been measuring the cost for some time. He is the most loyal man in your service and also, by the same measure, the most dangerous. Watch him \u2014 not with suspicion, but with the attention a man gives to the thing he values most.'"
      ].join("<br>"),
      backgroundKey: "azuchi_castle_map_room",
      bgmKey: "bgm_tragedy_low",
      flagCondition: { flagKey: "kenshin_verdict", operator: "gte", value: 3 },
      flagWrites: [{ flagKey: "kenshin_verdict", flagValue: 1 }],
      choices: [],
      nextScene: "S07"
    },
    {
      sceneRef: "S06_MED",
      text: [
        "<b>Kenshin's letter:</b> 'The three years I gave you became ten. You have done more with them than I expected, which is itself a kind of answer to the question I asked you in the mountains.'",
        "'The roads are open. I have traveled them. I have seen the markets that were not there before. That is not nothing. It may, in time, be everything.'",
        "'I will not see the end. I am not certain that is a loss \u2014 I have never been comfortable watching other men finish what should have been mine. But I will say: you are not what I thought you were. You are something less and something more. I am unsure, still, which part outweighs the other.'"
      ].join("<br>"),
      backgroundKey: "azuchi_castle_map_room",
      bgmKey: "bgm_tragedy_low",
      flagCondition: { flagKey: "kenshin_verdict", operator: "gte", value: 1 },
      flagWrites: [{ flagKey: "kenshin_verdict", flagValue: 1 }],
      choices: [],
      nextScene: "S07"
    },
    {
      sceneRef: "S06",
      text: [
        "<b>Kenshin's letter:</b> 'I said I would give you three years. You took considerably more than three years, but you used them. The country is different than it was when we met at the mountain inn. Whether it is better I cannot say with certainty. But it is different, and the difference is yours.'",
        "'I do not offer praise. I offer acknowledgment. These are not the same thing. Acknowledgment is rarer and more accurate.'",
        "'I am dying as this letter is written. My only regret is that I did not move sooner, or that I moved too soon, or that the god of war I claimed to be was never quite as settled in his certainty as the image suggested. Uncertainty is, perhaps, the only honest thing.'"
      ].join("<br>"),
      backgroundKey: "azuchi_castle_map_room",
      bgmKey: "bgm_tragedy_low",
      choices: [],
      nextScene: "S07"
    },
    {
      sceneRef: "S07",
      text: [
        "That evening, Mitsuhide comes to the map room. He has heard about Kenshin's death. He sets down the western campaign dispatches and stands by the window.",
        "<b>Mitsuhide:</b> He was the only one who ever honestly assessed you.",
        "<b>Nobunaga:</b> You assess me honestly.",
        "<b>Mitsuhide:</b> I assess you as the man who employs me. That is a different filter.",
        "A long pause. This is one of those conversations that has more weight than its words."
      ].join("<br>"),
      backgroundKey: "azuchi_castle_map_room",
      bgmKey: "bgm_tension_resolve",
      choices: [
        {
          text: "\"Then tell me what you actually think. Not the assessment of someone employed. The honest one.\"",
          nextScene: "S07A",
          flagDelta: { flagKey: "mitsuhide_loyalty", delta: 1 },
          flagDelta2: { flagKey: "bond_strength", delta: 1 }
        },
        {
          text: "\"The filter doesn't change the accuracy. You've always told me when I was wrong.\"",
          nextScene: "S07B",
          flagDelta: { flagKey: "mitsuhide_loyalty", delta: 1 }
        },
        {
          text: "\"An honest employer is worth more than a dishonest equal.\"",
          nextScene: "S07C",
          flagDelta: { flagKey: "ruthlessness", delta: 1 }
        }
      ]
    },
    {
      sceneRef: "S07A",
      text: [
        "A very long pause. Mitsuhide looks out the window at the lake.",
        "<b>Mitsuhide:</b> You are building the right thing. I have believed this since the Kyoto road. I have doubted the methods. I have not doubted the thing being built.",
        "<b>Nobunaga:</b> That's enough.",
        "<b>Mitsuhide:</b> Is it?",
        "Neither of them answers. The question stays in the room with them, which is, between them, the same as the answer."
      ].join("<br>"),
      backgroundKey: "azuchi_castle_map_room",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      nextScene: "S08"
    },
    {
      sceneRef: "S07B",
      text: [
        "<b>Mitsuhide:</b> Yes. I have.",
        "<b>Nobunaga:</b> And?",
        "<b>Mitsuhide:</b> And you listened. Sometimes. When the argument was right and not merely inconvenient.",
        "<b>Nobunaga:</b> That's the honest assessment.",
        "<b>Mitsuhide:</b> That is the honest assessment. I'm glad you wanted it."
      ].join("<br>"),
      backgroundKey: "azuchi_castle_map_room",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      nextScene: "S08"
    },
    {
      sceneRef: "S07C",
      text: [
        "Mitsuhide looks at him steadily.",
        "<b>Mitsuhide:</b> Yes. Perhaps.",
        "He picks up the western campaign dispatches. He does not say anything else. He is very good at this \u2014 at taking a conversation that has just closed a door and simply continuing with the work, as if the door were not there.",
        "He has been doing it for a long time."
      ].join("<br>"),
      backgroundKey: "azuchi_castle_map_room",
      bgmKey: "bgm_tension_resolve",
      choices: [],
      nextScene: "S08"
    },
    {
      sceneRef: "S08",
      text: [
        "1581. Azuchi castle. Late autumn. Nobunaga is walking the garden path at the base of the castle when he sees it \u2014 a fox, at the far edge of the garden, sitting in a patch of late sun and watching him with complete stillness.",
        "It is the third time. He has seen two before: the one at the Mino wall the evening the province fell, and the one in Owari thirty years ago, the night before Okehazama.",
        "The fox does not move. Nobunaga does not move. They look at each other for a long moment. Then the fox turns and walks into the garden shadow and is gone."
      ].join("<br>"),
      backgroundKey: "azuchi_castle_garden_autumn",
      bgmKey: "bgm_ominous",
      choices: [
        {
          text: "Follow the path it took. See where the fox was sitting.",
          nextScene: "S08A",
          flagDelta: { flagKey: "omen_read", delta: 2 },
          flagDelta2: { flagKey: "supernatural_affinity", delta: 1 }
        },
        {
          text: "Note it and return to the castle. There are dispatches to review.",
          nextScene: "S08B",
          flagDelta: { flagKey: "omen_read", delta: 1 }
        }
      ]
    },
    {
      sceneRef: "S08A",
      text: [
        "Where the fox was sitting, there is a small stone \u2014 not placed there, just a garden stone. But on it, in the lichen, there is a pattern that is almost certainly just lichen. He looks at it for a long time.",
        "He does not tell anyone about the stone. He does not tell anyone about the fox. He files both under a category that has been growing heavier since the first year of his reign and that does not yet have a complete name.",
        "He is not afraid of what the fox means. He simply recognizes that it means something, and that some things do not require translation to be real."
      ].join("<br>"),
      backgroundKey: "azuchi_castle_garden_autumn",
      bgmKey: "bgm_ominous",
      choices: [],
      nextScene: "S09"
    },
    {
      sceneRef: "S08B",
      text: [
        "He returns to the castle. There are seventeen dispatches from the western campaign. Hideyoshi needs more supply lines through the Harima coast. This is the work.",
        "The fox is filed. He has noted it. What he will do with the notation he is not yet sure."
      ].join("<br>"),
      backgroundKey: "azuchi_castle_map_room",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      nextScene: "S09"
    },
    {
      sceneRef: "S09",
      text: [
        "The western campaign is almost done. The last obstacle is the Mori clan's sea routes and Hideyoshi's siege of Takamatsu castle. Nobunaga is preparing to ride west himself \u2014 to be there for the final campaign, to close it personally.",
        "He makes the preparations at Azuchi. Then he rides to Kyoto, to rest at Honnoji temple before continuing west.",
        "It is June, 1582.",
        "<b>Nobunaga:</b> One more campaign. Then it is done."
      ].join("<br>"),
      backgroundKey: "kyoto_approach_road_summer",
      bgmKey: "bgm_journey",
      choices: [],
      isChapterEnd: true
    }
  ]
};

export { chapter };
