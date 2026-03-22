const chapter = {
  title: "The Long Peace",
  subtitle: "1561\u20131566 \u2014 Power held long enough becomes its own kind of weather.",
  number: 8,
  scenes: [
    {
      sceneRef: "S01",
      text: [
        "1561. The campaigns slow. Not because the enemies are gone \u2014 they are not \u2014 but because Nobunaga has built enough that the machine runs without constant feeding. Gifu becomes a real city. The eastern routes stay clear. Merchants who have not traveled freely in a decade begin to move again.",
        "This is what it looks like from the inside: a market in Gifu on an autumn morning. Fabric. Grain. Lacquerware. The smell of charcoal and roasting fish. A child arguing with a fishmonger about price.",
        "The roads are open. The plan is working."
      ].join("<br>"),
      backgroundKey: "gifu_market_autumn_morning",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      nextScene: "S02"
    },
    {
      sceneRef: "S02",
      text: [
        "Mitsuhide has been managing the eastern provinces for three years. He handles the taxation disputes. The grain assessments. The local lords who need watching. He is better at this than Nobunaga, which is why Nobunaga gave it to him.",
        "Today Nobunaga calls him in.",
        "<b>Nobunaga:</b> The Sakamoto domain. On the shore of Lake Biwa. I am giving it to you.",
        "Mitsuhide is very still.",
        "<b>Mitsuhide:</b> My lord.",
        "<b>Nobunaga:</b> It is yours because you earned it and because I need someone reliable on the Omi coast. Not in that order, necessarily."
      ].join("<br>"),
      backgroundKey: "gifu_castle_map_room_day",
      bgmKey: "bgm_tension_resolve",
      choices: [],
      nextScene: "S03"
    },
    {
      sceneRef: "S03",
      text: [
        "How Nobunaga grants the domain says something about the nature of the relationship \u2014 and Mitsuhide is listening to every word of it."
      ].join("<br>"),
      backgroundKey: "gifu_castle_map_room_day",
      bgmKey: "bgm_tension_resolve",
      choices: [
        {
          text: "\"Build something there. Something that lasts. I want your name on this coast for the next hundred years.\"",
          nextScene: "S03A",
          flagDelta: { flagKey: "mitsuhide_loyalty", delta: 2 },
          flagDelta2: { flagKey: "bond_strength", delta: 1 }
        },
        {
          text: "\"Keep the Biwa route stable. That is the function. The domain is the payment.\"",
          nextScene: "S03B",
          flagDelta: { flagKey: "mitsuhide_loyalty", delta: 1 },
          flagDelta2: { flagKey: "political_power", delta: 1 }
        },
        {
          text: "\"Don't make me regret it. The domain is yours until I need it back.\"",
          nextScene: "S03C",
          flagDelta: { flagKey: "ruthlessness", delta: 1 },
          flagDelta2: { flagKey: "mitsuhide_loyalty", delta: -1 }
        }
      ]
    },
    {
      sceneRef: "S03A",
      text: [
        "<b>Mitsuhide:</b> My lord. I will.",
        "He says it quietly, the way a man says something he means completely. There is a pause in which neither of them says anything, which is, between them, the same as a great deal being said.",
        "Mitsuhide builds Sakamoto castle. He builds it beautifully \u2014 on the lake, surrounded on three sides by water, the fourth face toward the mountains. It is, by any measure, one of the finest structures in the region. He does not boast about it. He sends Nobunaga a map."
      ].join("<br>"),
      backgroundKey: "gifu_castle_map_room_day",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      nextScene: "S05"
    },
    {
      sceneRef: "S03B",
      text: [
        "<b>Mitsuhide:</b> The Biwa route will be stable, my lord.",
        "He bows and leaves. He will manage the Biwa route with the same quiet precision he has brought to everything else. The domain will be well administered. The relationship will remain exactly as it is \u2014 which is useful, and which is not quite enough."
      ].join("<br>"),
      backgroundKey: "gifu_castle_map_room_day",
      bgmKey: "bgm_intrigue",
      choices: [],
      nextScene: "S05"
    },
    {
      sceneRef: "S03C",
      text: [
        "Mitsuhide's expression does not change. This is what Nobunaga has always appreciated about him \u2014 the man does not show what costs him.",
        "<b>Mitsuhide:</b> Understood, my lord.",
        "He leaves with the papers. He will administer the domain correctly, and he will remember that it was given conditionally, and he will file that fact somewhere quiet and not return to it unless forced to."
      ].join("<br>"),
      backgroundKey: "gifu_castle_map_room_day",
      bgmKey: "bgm_tension_resolve",
      choices: [],
      nextScene: "S05"
    },
    {
      sceneRef: "S05",
      text: [
        "Autumn, 1562. Katsuie comes south from his garrison to report on the northern border. He is bigger than he used to be \u2014 not in size but in presence, the way men grow into themselves when they are given the right work.",
        "<b>Katsuie:</b> The Echizen border is stable. Asakura pulled back in the spring and hasn't tested us since. I've been rebuilding the Shirakawa post.",
        "<b>Nobunaga:</b> And the men?",
        "<b>Katsuie:</b> They hold. They complain about the cold. But they hold."
      ].join("<br>"),
      backgroundKey: "gifu_castle_inner_garden",
      bgmKey: "bgm_quiet_resolve",
      choices: [
        {
          text: "\"The Shirakawa post was the right call. Double the garrison there before winter.\"",
          nextScene: "S05A",
          flagDelta: { flagKey: "katsuie_loyalty", delta: 1 },
          flagDelta2: { flagKey: "political_power", delta: 1 }
        },
        {
          text: "\"Tell them the cold is a feature. Warm soldiers get comfortable.\"",
          nextScene: "S05B",
          flagDelta: { flagKey: "ruthlessness", delta: 1 }
        },
        {
          text: "\"The border stability is what matters. Thank you, Katsuie.\"",
          nextScene: "S05C",
          flagDelta: { flagKey: "katsuie_loyalty", delta: 1 },
          flagDelta2: { flagKey: "bond_strength", delta: 1 }
        }
      ]
    },
    {
      sceneRef: "S05A",
      text: [
        "<b>Katsuie:</b> Understood, my lord. It will be done before the first snow.",
        "He is pleased by the recognition of his judgment. He does not show it \u2014 he is Katsuie, and Katsuie does not perform satisfaction \u2014 but he stands slightly differently when he leaves. This is all it takes, sometimes."
      ].join("<br>"),
      backgroundKey: "gifu_castle_inner_garden",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      nextScene: "S06"
    },
    {
      sceneRef: "S05B",
      text: [
        "Katsuie looks at him steadily.",
        "<b>Katsuie:</b> I'll tell them that.",
        "He will. And the men will hear it as both a challenge and a compliment, which is exactly the correct interpretation. Katsuie knows how to translate Nobunaga. It is one of his most useful skills."
      ].join("<br>"),
      backgroundKey: "gifu_castle_inner_garden",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      nextScene: "S06"
    },
    {
      sceneRef: "S05C",
      text: [
        "<b>Katsuie:</b> My lord.",
        "He says it simply. He is not a man who requires extensive praise \u2014 he requires only that his work is seen. Nobunaga has seen it. That is enough.",
        "He will hold the northern border for the rest of the decade without being asked again."
      ].join("<br>"),
      backgroundKey: "gifu_castle_inner_garden",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      nextScene: "S06"
    },
    {
      sceneRef: "S06",
      text: [
        "1563. A letter from Ieyasu arrives. Not a report \u2014 a proposal. A trade route through Mikawa that would benefit both their territories. He has included detailed maps and three alternative paths with their respective cost assessments.",
        "<b>Nohime:</b> He did the work before asking. That is not how lords typically write letters.",
        "<b>Nobunaga:</b> He learned it from watching how I respond to proposals.",
        "<b>Nohime:</b> Which means he is paying attention. That is, depending on your perspective, either reassuring or alarming."
      ].join("<br>"),
      backgroundKey: "gifu_castle_tower_night",
      bgmKey: "bgm_intrigue",
      choices: [
        {
          text: "Accept the proposal as written. Write back confirming the route and including your own assessment of the third path.",
          nextScene: "S06A",
          flagDelta: { flagKey: "ieyasu_trust", delta: 1 },
          flagDelta2: { flagKey: "political_power", delta: 1 }
        },
        {
          text: "Accept but propose modifications. Show him you are an equal partner, not a patron receiving a report.",
          nextScene: "S06B",
          flagDelta: { flagKey: "ieyasu_trust", delta: 1 },
          flagDelta2: { flagKey: "bond_strength", delta: 1 }
        },
        {
          text: "File it and do nothing. Let him wait. The asymmetry is useful.",
          nextScene: "S06C",
          flagDelta: { flagKey: "ruthlessness", delta: 1 }
        }
      ]
    },
    {
      sceneRef: "S06A",
      text: [
        "Ieyasu receives the letter within a week. His reply arrives in five days \u2014 faster than the route itself could have been traveled. He has already begun preparations on his end.",
        "The Mikawa route opens the following spring. Grain moves north. Timber moves south. Both territories benefit measurably. Ieyasu, who never forgets who helped him and who didn't, files this transaction under a category he will return to years from now."
      ].join("<br>"),
      backgroundKey: "gifu_castle_map_room_day",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      nextScene: "S07"
    },
    {
      sceneRef: "S06B",
      text: [
        "Ieyasu receives the letter and the modifications. His reply is thoughtful \u2014 he accepts two of the three changes, explains why the third won't work on his end, and proposes a counter for it.",
        "It is the most substantive correspondence Nobunaga has had with another lord in years. He reads it twice.",
        "<b>Nobunaga:</b> He argues back.",
        "<b>Nohime:</b> He's worth keeping."
      ].join("<br>"),
      backgroundKey: "gifu_castle_map_room_day",
      bgmKey: "bgm_tension_resolve",
      choices: [],
      nextScene: "S07"
    },
    {
      sceneRef: "S06C",
      text: [
        "Three weeks pass. Ieyasu sends a follow-up letter, shorter, more careful \u2014 wondering if the proposal was received. Nobunaga files that one also.",
        "The route is eventually established two years later through a third party. Ieyasu notes the delay. He does not comment on it. He begins to route his most sensitive correspondence through other channels."
      ].join("<br>"),
      backgroundKey: "gifu_castle_map_room_day",
      bgmKey: "bgm_intrigue",
      choices: [],
      nextScene: "S07"
    },
    {
      sceneRef: "S07",
      text: [
        "1566. Five years of relative peace. The castle at Sakamoto is finished. The Biwa route is stable. The northern border holds. The eastern merchants travel without being taxed three times before Owari.",
        "In the Gifu market, a woman haggles over the price of salt. She wins. The fishmonger lets her win because he will see her again next week, and the week after, because the roads are open and people come back to markets that work.",
        "Nobunaga watches from the far end of the market, in plain clothes, as he sometimes does.",
        "<b>Nobunaga:</b> The roads are open.",
        "He says it to no one. He says it because it is true and because it has cost something to make it true and because the woman arguing about salt will never know that, and she doesn't need to."
      ].join("<br>"),
      backgroundKey: "gifu_market_autumn_morning",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      isChapterEnd: true
    }
  ]
};

export { chapter };
