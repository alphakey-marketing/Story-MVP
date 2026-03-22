const chapter = {
  title: "The Fire and the Flood",
  subtitle: "1574 \u2014 Some victories leave no room for mercy. You must decide what that means.",
  number: 11,
  scenes: [
    {
      sceneRef: "S01",
      text: [
        "1574. The Nagashima river delta. The Ikko-ikki have fortified it over four years \u2014 a network of islands, waterways, and wooden fortress walls that makes conventional assault almost impossible. Two previous Oda campaigns have failed here. The third one will not.",
        "Kennyo, the abbot-general who has led the Ikko-ikki resistance since the burning of the school in 1554, is inside the delta. He has been inside it for four years.",
        "<b>Katsuie:</b> Eighty thousand men. Three sides water. The fourth side is the only way in and it is fortified to the waterline.",
        "<b>Nobunaga:</b> Then we come from the water."
      ].join("<br>"),
      backgroundKey: "nagashima_delta_approach",
      bgmKey: "bgm_war_drums_quiet",
      choices: [],
      nextScene: "S02"
    },
    {
      sceneRef: "S02",
      text: [
        "A letter from Kennyo arrives at the camp. His third."
      ].join("<br>"),
      backgroundKey: "nagashima_command_tent",
      bgmKey: "bgm_intrigue",
      choices: [],
      nextScene: "S02_KENNYO"
    },
    {
      sceneRef: "S02_KENNYO_HIGH",
      text: [
        "The letter is written in the style of a formal curse. Kennyo has stopped making arguments. He is now invoking the names of every monk, student, and villager killed in the campaigns since 1554. He lists them. There are four hundred and twelve names.",
        "<b>Kennyo's letter:</b> 'You have made of yourself a demon in the literature of this age. The names of your dead will outlast your empire by a thousand years. The temple fires you lit have burned their way into heaven itself. Heaven does not forget.'",
        "Mitsuhide reads over Nobunaga's shoulder. He does not comment on the content. He does comment on the penmanship.",
        "<b>Mitsuhide:</b> He wrote this himself. Not a scribe. His hand is shaking."
      ].join("<br>"),
      backgroundKey: "nagashima_command_tent",
      bgmKey: "bgm_ominous",
      flagCondition: { flagKey: "kennyo_hate", operator: "gte", value: 4 },
      choices: [],
      nextScene: "S03"
    },
    {
      sceneRef: "S02_KENNYO_MED",
      text: [
        "The letter is formal but its formality is cracking at the edges. Kennyo is running out of arguments. He has started listing the names of the dead \u2014 not all of them, but the children and the elderly, the ones who had not chosen the fight.",
        "<b>Kennyo's letter:</b> 'The doctrine of heaven's mandate has not protected you from its consequences. We do not surrender. But we ask that you consider what it costs to be the man who does what you are preparing to do.'",
        "<b>Nobunaga:</b> He is asking me to consider.",
        "<b>Mitsuhide:</b> He is. That is different from threatening."
      ].join("<br>"),
      backgroundKey: "nagashima_command_tent",
      bgmKey: "bgm_tension_resolve",
      flagCondition: { flagKey: "kennyo_hate", operator: "gte", value: 2 },
      choices: [],
      nextScene: "S03"
    },
    {
      sceneRef: "S02_KENNYO",
      text: [
        "The letter is measured. Kennyo has been trained to write with precision even when what he is writing comes from rage.",
        "<b>Kennyo's letter:</b> 'We will not surrender. The Nagashima delta is sacred ground and will be defended as such. If you choose to proceed, you proceed with the full knowledge of what you are choosing. The gods of this land are watching. So is history.'",
        "<b>Nobunaga:</b> He's consistent. I'll give him that."
      ].join("<br>"),
      backgroundKey: "nagashima_command_tent",
      bgmKey: "bgm_intrigue",
      choices: [],
      nextScene: "S03"
    },
    {
      sceneRef: "S03",
      text: [
        "The fortifications are real. The delta cannot be taken by conventional assault without catastrophic losses. The question is what kind of victory Nobunaga is prepared to accept.",
        "<b>Mitsuhide:</b> Total encirclement is possible. Cut every supply line, seal every water route. Let attrition do the work. It will take months. And what happens inside the ring \u2014",
        "<b>Nobunaga:</b> I know what happens inside the ring.",
        "<b>Mitsuhide:</b> Then I am asking if that is what you want."
      ].join("<br>"),
      backgroundKey: "nagashima_delta_map",
      bgmKey: "bgm_intrigue",
      choices: [
        {
          text: "Total encirclement. Seal every route. End this completely and permanently.",
          nextScene: "S03A",
          flagDelta: { flagKey: "ruthlessness", delta: 3 },
          flagDelta2: { flagKey: "kennyo_hate", delta: 2 }
        },
        {
          text: "Naval assault from three directions simultaneously. Costly, but leaves a route for non-combatants to withdraw.",
          nextScene: "S03B",
          flagDelta: { flagKey: "ruthlessness", delta: 1 },
          flagDelta2: { flagKey: "kennyo_hate", delta: 1 }
        }
      ]
    },
    {
      sceneRef: "S03A",
      text: [
        "The encirclement is total. Every waterway blocked. Every supply route cut. The fires begin on the second week \u2014 from inside, as the defenders burn what they cannot use, and from outside, as the Oda lines move inward.",
        "What happens in the delta over the following weeks is recorded by no single chronicler completely. The monks burn the scripture halls rather than surrender them. The river runs dark.",
        "It is over in forty-three days.",
        "Mitsuhide stands at the edge of the delta when it is done and looks at the blackened waterways without speaking for a long time."
      ].join("<br>"),
      backgroundKey: "nagashima_encirclement_fire",
      bgmKey: "bgm_war_drums",
      choices: [],
      nextScene: "S04_BATTLE"
    },
    {
      sceneRef: "S03B",
      text: [
        "Three assault forces move simultaneously from the river, the southern channel, and the northern bank. The fighting is brutal \u2014 the defenders know every waterway and use them. But the assault leaves the eastern path open, and some of the non-combatants use it.",
        "Not all. But some.",
        "The delta falls in seventeen days of sustained combat. Heavier Oda casualties than encirclement would have cost. Fewer dead inside the walls.",
        "<b>Mitsuhide:</b> You left them a door.",
        "<b>Nobunaga:</b> Most of them didn't use it.",
        "<b>Mitsuhide:</b> Some did."
      ].join("<br>"),
      backgroundKey: "nagashima_delta_assault",
      bgmKey: "bgm_war_drums",
      choices: [],
      nextScene: "S04_BATTLE"
    },
    {
      sceneRef: "S04_BATTLE",
      text: [
        "The final fortress walls of the Nagashima delta. Kennyo is inside. The Ikko-ikki will fight to the last man.",
        "<b>Nobunaga:</b> End it."
      ].join("<br>"),
      backgroundKey: "nagashima_fortress_walls",
      bgmKey: "bgm_war_drums",
      isBattleGate: true,
      battleEnemyKey: "ikko_ikki_nagashima",
      battleWinSceneRef: "S05_WIN",
      battleLoseSceneRef: "S05_LOSE",
      choices: []
    },
    {
      sceneRef: "S05_WIN",
      text: [
        "The fortress falls. Kennyo is not among the dead \u2014 he escapes through a waterway that no one thought to watch, which is either a miracle or excellent preparation. He will continue to agitate from a distance for years. But Nagashima is finished as a military threat.",
        "<b>Katsuie:</b> The delta is taken.",
        "<b>Nobunaga:</b> The roads south of the river are open.",
        "{if ruthlessness >= 6} The river road is open. The cost is on the ledger. He is aware of the ledger.",
        "{if ruthlessness < 6} The river road is open. He is already thinking about what gets built here next."
      ].join("<br>"),
      backgroundKey: "nagashima_fortress_fallen",
      bgmKey: "bgm_victory_somber",
      flagWrites: [{ flagKey: "battle_won", flagValue: 1 }],
      choices: [],
      nextScene: "S06"
    },
    {
      sceneRef: "S05_LOSE",
      text: [
        "The assault stalls at the inner fortifications. The defenders hold for three more weeks before a second campaign breaks through. It is not the failure of strategy \u2014 the strategy is sound \u2014 but of the particular men at the particular wall on the particular day.",
        "Nagashima eventually falls. Everything falls eventually.",
        "<b>Mitsuhide:</b> The delta is taken, my lord. At greater cost."
      ].join("<br>"),
      backgroundKey: "nagashima_fortress_fallen",
      bgmKey: "bgm_defeat",
      flagWrites: [{ flagKey: "battle_lost", flagValue: 1 }],
      choices: [],
      nextScene: "S06"
    },
    {
      sceneRef: "S06",
      text: [
        "Three days after the delta falls, Mitsuhide requests a private meeting. He comes alone, without the ledgers or the maps. He stands in the entrance to the command tent and looks at the floor for a moment before speaking.",
        "<b>Mitsuhide:</b> In Mino, you made a choice about how to take the province. This was a different choice. I have been trying to understand whether the difference was circumstance or something else.",
        "{if mino_resolved == 2} <b>Mitsuhide:</b> In Mino you chose the careful path. Low casualties. The eastern pass. Here you chose \u2014 I am not certain what to call what happened here.",
        "{if mino_resolved == 0} <b>Mitsuhide:</b> In Mino you chose the encirclement. And here again. I want to understand the principle, not the outcome. What is the principle?",
        "{if mino_resolved == 1} <b>Mitsuhide:</b> In Mino you chose a standard approach. Here the choice was different. I am trying to find the line."
      ].join("<br>"),
      backgroundKey: "nagashima_command_tent",
      bgmKey: "bgm_intrigue",
      choices: [
        {
          text: "\"The principle is winning. The method is what the situation requires. You know this.\"",
          nextScene: "S06A",
          flagDelta: { flagKey: "mitsuhide_loyalty", delta: -2 }
        },
        {
          text: "\"You are right to ask. I don't have a good answer for you.\"",
          nextScene: "S06B",
          flagDelta: { flagKey: "mitsuhide_loyalty", delta: 1 },
          flagDelta2: { flagKey: "bond_strength", delta: 1 }
        },
        {
          text: "\"The line is this: the roads must stay open. When a force blocks the roads permanently, the response must be permanent.\"",
          nextScene: "S06C",
          flagDelta: { flagKey: "mitsuhide_loyalty", delta: -1 },
          flagDelta2: { flagKey: "political_power", delta: 1 }
        }
      ]
    },
    {
      sceneRef: "S06A",
      text: [
        "Mitsuhide nods. He does not push further.",
        "<b>Mitsuhide:</b> Yes. I know this.",
        "He leaves. What he filed that night under the category that already had too many entries is not recorded. But the category is getting heavier. He can feel it."
      ].join("<br>"),
      backgroundKey: "nagashima_command_tent",
      bgmKey: "bgm_tension_resolve",
      choices: [],
      nextScene: "S07"
    },
    {
      sceneRef: "S06B",
      text: [
        "Mitsuhide is quiet for a moment.",
        "<b>Mitsuhide:</b> That is the most honest thing you have said to me in some time, my lord.",
        "<b>Nobunaga:</b> Don't mistake honesty for weakness.",
        "<b>Mitsuhide:</b> I never do. I mistake it for something rarer, which is more valuable.",
        "He bows and leaves. The thing in the category with too many entries shifts slightly. Not gone. But shifted."
      ].join("<br>"),
      backgroundKey: "nagashima_command_tent",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      nextScene: "S07"
    },
    {
      sceneRef: "S06C",
      text: [
        "Mitsuhide considers this for a long time.",
        "<b>Mitsuhide:</b> The monks in Nagashima did not block a road.",
        "<b>Nobunaga:</b> They blocked the roads of the next twenty years. You have to see forward.",
        "He does not look convinced. He does not look unconvinced. He files it under a category that has been getting heavier, and he bows and leaves."
      ].join("<br>"),
      backgroundKey: "nagashima_command_tent",
      bgmKey: "bgm_tension_resolve",
      choices: [],
      nextScene: "S07"
    },
    {
      sceneRef: "S07",
      text: [
        "The Nagashima delta is quiet now. The river runs clear again. Oda garrison troops take their positions on the rebuilt walls.",
        "Somewhere in the Kinai region, Kennyo is alive. He has lost his fortress. He has not lost his conviction, which means this is not over. But it is, for now, contained.",
        "The roads south of the Nagashima river are open.",
        "<b>Nobunaga:</b> The roads are open.",
        "He says it the way he always says it \u2014 as a fact, as a measure, as the only judgment that, in the end, he uses."
      ].join("<br>"),
      backgroundKey: "nagashima_fortress_fallen",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      isChapterEnd: true
    }
  ]
};

export { chapter };
