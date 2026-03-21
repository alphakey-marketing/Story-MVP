const chapter = {
  title: "The Mino Gambit",
  subtitle: "1554 — Saito Dosan looked at you and saw what he made. You saw what you would become.",
  number: 3,
  scenes: [
    {
      sceneRef: "S01",
      text: [
        "Autumn, 1554. The road to Mino. Nobunaga married Dosan's daughter — Nohime — two years ago. The marriage was political. The relationship became something more complicated, which neither of them discusses.",
        "Dosan himself is dying. Not of illness — of his own son. Yoshitatsu has turned against his father and the Saito clan is splitting down the middle. Dosan has asked Nobunaga to come. Not as an ally. As the man who married his daughter.",
        "<b>Nohime:</b> He doesn't want help. He knows what's coming. He wants to see what his daughter married before he dies.",
        "<b>Nobunaga:</b> Then I should make a good impression.",
        "<b>Nohime:</b> Don't. He'll see through it. He always sees through everything. Just be what you actually are.",
        "<b>Nobunaga:</b> And if what I actually am is not what he hoped for?",
        "<b>Nohime:</b> He'll respect that more than the alternative."
      ].join("<br>"),
      backgroundKey: "mino_border_autumn_fog",
      bgmKey: "bgm_journey",
      choices: [],
      nextScene: "S02"
    },
    {
      sceneRef: "S02",
      text: [
        "Saito Dosan is not what Nobunaga expected. He is a small man now — thinner than his portraits, sitting in a garden, watching the autumn leaves with the particular patience of someone who has stopped being in a hurry.",
        "<b>Dosan:</b> The Fool of Owari. I painted you differently in my head. Larger. More foolish-looking.",
        "<b>Nobunaga:</b> I get that often.",
        "<b>Dosan:</b> Sit. I have questions and I'm too tired to stand while I ask them."
      ].join("<br>"),
      backgroundKey: "mino_dosan_manor",
      bgmKey: "bgm_tense_court",
      choices: [],
      nextScene: "S03"
    },
    {
      sceneRef: "S03",
      text: [
        "<b>Dosan:</b> I built Mino from nothing. I killed for it, lied for it, married my daughter into the future of it. And now my own blood is burning it from the inside.",
        "<b>Dosan:</b> My question is this: what do you do with a thing you built when it tries to destroy itself?"
      ].join("<br>"),
      backgroundKey: "mino_garden_autumn",
      bgmKey: "bgm_quiet_resolve",
      choices: [
        {
          text: "\"You hold it together by force if you must. The thing itself matters more than the method.\"",
          nextScene: "S03A",
          flagDelta: { flagKey: "ruthlessness", delta: 1 }
        },
        {
          text: "\"You change what you built into something that can't be destroyed from inside. New foundations.\"",
          nextScene: "S03B",
          flagDelta: { flagKey: "political_power", delta: 2 }
        },
        {
          text: "\"You hand it to someone who wants it more than it wants to die.\"",
          nextScene: "S03C",
          flagDelta: { flagKey: "nohime_trust", delta: 2 },
          flagDelta2: { flagKey: "political_power", delta: 1 }
        }
      ]
    },
    {
      sceneRef: "S03A",
      text: [
        "<b>Dosan:</b> I tried that. It's why I'm sitting in this garden instead of a campaign tent.",
        "<b>Nobunaga:</b> Perhaps you held the wrong things.",
        "<b>Dosan:</b> ...",
        "<b>Dosan:</b> My lords of Owari's children will kneel before my daughter's husband. I said that once. I am less sorry about it now than I expected to be."
      ].join("<br>"),
      backgroundKey: "mino_garden_autumn",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      nextScene: "S04"
    },
    {
      sceneRef: "S03B",
      text: [
        "<b>Dosan:</b> I spent forty years building the foundations I had. I had no time for different ones.",
        "<b>Nobunaga:</b> You did. You spent it on the wrong things.",
        "<b>Dosan:</b> You say that very easily for a man who has had nothing tested yet.",
        "<b>Nobunaga:</b> Give me ten years.",
        "<b>Dosan:</b> I wish I had them to give. My lords of Owari's children will kneel before yours. I believed it the moment I saw you and I believe it still."
      ].join("<br>"),
      backgroundKey: "mino_garden_autumn",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      nextScene: "S04"
    },
    {
      sceneRef: "S03C",
      text: [
        "<b>Dosan:</b> ...",
        "<b>Dosan:</b> That is why I gave it to you. I didn't give it to Yoshitatsu. He wanted the thing — the power, the land, the name. You — you want what the thing could become. That's different.",
        "<b>Nobunaga:</b> You gave it to Nohime.",
        "<b>Dosan:</b> I gave it to both of you. She knows what it's worth. You know what it could be worth. Together—",
        "<b>Dosan:</b> Well. I wish I had ten more years to watch."
      ].join("<br>"),
      backgroundKey: "mino_garden_autumn",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      nextScene: "S04"
    },
    {
      sceneRef: "S04",
      text: [
        "<b>Dosan:</b> Take Mino when I'm gone. Don't leave it to Yoshitatsu. He'll burn it to the water table and call it glory.",
        "<b>Nobunaga:</b> You're asking me to conquer your own province.",
        "<b>Dosan:</b> I'm asking you to preserve it. The word matters to you, I think. Not to me anymore. But to you."
      ].join("<br>"),
      backgroundKey: "mino_garden_autumn_late",
      bgmKey: "bgm_tragedy_low",
      choices: [],
      nextScene: "S05"
    },
    {
      sceneRef: "S05",
      text: [
        "Nohime sits with her father for the last hour before they leave. Nobunaga does not intrude on it.",
        "When she rejoins him at the gate, her face is exactly the same as it always is. He does not ask what was said. She does not tell him. Some things are not for the campaign."
      ].join("<br>"),
      backgroundKey: "mino_garden_sunset",
      bgmKey: "bgm_tragedy_low",
      choices: [
        {
          text: "Wait in silence beside her for the road back. Give her the quiet.",
          nextScene: "S05A",
          flagDelta: { flagKey: "nohime_trust", delta: 2 }
        },
        {
          text: "Tell her: Mino will be preserved. That was the promise. It will be kept.",
          nextScene: "S05B",
          flagDelta: { flagKey: "nohime_trust", delta: 1 },
          flagDelta2: { flagKey: "political_power", delta: 1 }
        }
      ]
    },
    {
      sceneRef: "S05A",
      text: [
        "They ride in silence for two hours. At some point on the road she moves her horse slightly closer to his. It is the only acknowledgment.",
        "A heron crosses the road low ahead of them — wrong direction for the season, wrong hour for the bird. Nohime watches it until it is out of sight. She does not name it or explain it. He notices that she noticed. He files it the same way she did: quietly, without resolution.",
        "It is enough."
      ].join("<br>"),
      backgroundKey: "mino_road_evening",
      bgmKey: "bgm_journey",
      flagWrites: [
        { flagKey: "bond_strength", flagValue: 1 },
        { flagKey: "omen_read", flagValue: 1 }
      ],
      choices: [],
      nextScene: "S06"
    },
    {
      sceneRef: "S05B",
      text: [
        "<b>Nohime:</b> I know.",
        "Two words. She means all of it. He understands all of it. They ride on. The road is quiet enough that he can hear the horses breathing."
      ].join("<br>"),
      backgroundKey: "mino_road_evening",
      bgmKey: "bgm_journey",
      choices: [],
      nextScene: "S06"
    },
    {
      sceneRef: "S06",
      text: [
        "On the road back. Yoshitatsu's scouts are watching the passes. He knows his father had a visitor. He does not know the content of the visit but he knows what it means.",
        "A blocking force of eight hundred men at the Mino-Owari border road. Yoshitatsu sending a message before Dosan is even cold.",
        "<b>Mitsuhide:</b> We have two hundred escort riders. This is a provocation, not an engagement. He wants a diplomatic incident, not a battle.",
        "<b>Nobunaga:</b> He can have the incident. The battle comes later, on our terms, on ground we choose."
      ].join("<br>"),
      backgroundKey: "mino_yoshitatsu_army_road",
      bgmKey: "bgm_war_drums",
      choices: [
        {
          text: "Ride directly at the blocking force. Not to engage — to pass through at a walk. Force them to make the first move or stand aside.",
          nextScene: "S06A",
          flagDelta: { flagKey: "ruthlessness", delta: 2 }
        },
        {
          text: "Find the alternate pass. Return to Owari without incident. The lesson comes later when you're ready.",
          nextScene: "S06B",
          flagDelta: { flagKey: "political_power", delta: 1 }
        },
        {
          text: "Send Mitsuhide ahead to negotiate passage formally. Yoshitatsu gets his incident in writing — which becomes evidence later.",
          nextScene: "S06C",
          flagDelta: { flagKey: "mitsuhide_loyalty", delta: 1 },
          flagDelta2: { flagKey: "political_power", delta: 2 }
        }
      ]
    },
    {
      sceneRef: "S06A",
      text: [
        "Nobunaga rides at the front. Two hundred men. He does not draw his sword. The blocking force holds for three hundred yards, then parts around him like water around a stone.",
        "Except one captain, who draws."
      ].join("<br>"),
      backgroundKey: "mino_border_pass_tense",
      bgmKey: "bgm_war_drums_quiet",
      choices: [],
      nextScene: "S07_BATTLE"
    },
    {
      sceneRef: "S06B",
      text: [
        "The alternate pass adds four hours to the journey. They reach Owari at midnight. Nobunaga says nothing on the road. He is planning, which looks from the outside like silence.",
        "<b>Mitsuhide:</b> We could have pushed through.",
        "<b>Nobunaga:</b> We could have. Yoshitatsu would have the story. I'd rather have the road."
      ].join("<br>"),
      backgroundKey: "mountain_pass_hidden",
      bgmKey: "bgm_journey",
      choices: [],
      nextScene: "S08_WIN"
    },
    {
      sceneRef: "S06C",
      text: [
        "Mitsuhide spends forty minutes with the blocking force captain. He returns with a written demand for Oda withdrawal from Mino territory, signed by Yoshitatsu's adjutant.",
        "<b>Mitsuhide:</b> Signed, sealed, and witnessed by three of his own captains. He gave us the evidence without knowing it.",
        "<b>Nobunaga:</b> File it carefully. We'll need it when Mino's lords ask why we came."
      ].join("<br>"),
      backgroundKey: "mino_border_negotiation",
      bgmKey: "bgm_intrigue",
      flagWrites: [
        { flagKey: "bond_strength", flagValue: 1 }
      ],
      choices: [],
      nextScene: "S08_WIN"
    },
    {
      sceneRef: "S07_BATTLE",
      text: [
        "The captain draws. The moment collapses into the only language that remains.",
        "<b>Nobunaga:</b> He made the choice for us."
      ].join("<br>"),
      backgroundKey: "mino_border_pass_skirmish",
      bgmKey: "bgm_war_drums",
      isBattleGate: true,
      battleEnemyKey: "yoshitatsu_border_captain",
      battleWinSceneRef: "S07B_WIN",
      battleLoseSceneRef: "S07B_LOSE",
      choices: []
    },
    {
      sceneRef: "S07B_WIN",
      text: [
        "The captain is disarmed. His men disperse. The road is open. Nobunaga does not take prisoners and does not pursue — he lets the survivors carry the story back to Yoshitatsu themselves.",
        "<b>Mitsuhide:</b> You let them go.",
        "<b>Nobunaga:</b> Witnesses are more useful than prisoners. Yoshitatsu will hear the exact version I want him to hear.",
        "Nohime has not spoken. She watched from the road — the whole of it, without looking away. She had known he would ride at them. She had known it from the moment he chose to."
      ].join("<br>"),
      backgroundKey: "mino_border_pass_clear",
      bgmKey: "bgm_victory_somber",
      flagWrites: [
        { flagKey: "nohime_witnessed_win", flagValue: 1 }
      ],
      choices: [],
      nextScene: "S08_WIN"
    },
    {
      sceneRef: "S07B_LOSE",
      text: [
        "The escort is pushed back. The blocking force holds the pass. You retreat south toward the alternate route with three wounded.",
        "<b>Mitsuhide:</b> We take the mountain pass. I know it well enough.",
        "<b>Nobunaga:</b> Yoshitatsu gets this story. Fine. We get Mino. That story is better.",
        "Nohime rides beside him on the mountain pass. She does not look away from the road ahead. She does not offer comfort. She does not speak. She rides beside him in silence, which is how she says she will not speak of this."
      ].join("<br>"),
      backgroundKey: "mino_border_retreat",
      bgmKey: "bgm_defeat",
      flagWrites: [
        { flagKey: "nohime_witnessed_loss", flagValue: 1 }
      ],
      choices: [],
      nextScene: "S08_LOSE"
    },
    {
      sceneRef: "S08_WIN",
      text: [
        "Gifu, two weeks later. Saito Dosan is dead. Yoshitatsu has claimed Mino and begun executing the old guard.",
        "<b>Nohime:</b> He's moving faster than expected.",
        "A beat. She is comparing speeds — Yoshitatsu burning through his inheritance, Nobunaga opening a pass at a walk with two hundred men and no sword drawn. Two kinds of fast.",
        "<b>Nobunaga:</b> Good. Fast men make fast mistakes. We wait until he makes the kind we can use.",
        "<b>Nohime:</b> And if he doesn't make them fast enough?",
        "<b>Nobunaga:</b> Then we help him make them.",
        "Somewhere in Mino, a new lord burns what his father built. The old man's voice is still in the autumn garden, steady and dry: 'I wish I had ten more years to watch.' He would have liked what he saw."
      ].join("<br>"),
      backgroundKey: "gifu_castle_tower_night",
      bgmKey: "bgm_tension_resolve",
      choices: [],
      isChapterEnd: true
    },
    {
      sceneRef: "S08_LOSE",
      text: [
        "Gifu, two weeks later. Saito Dosan is dead. Yoshitatsu has claimed Mino and begun executing the old guard.",
        "<b>Nohime:</b> He's moving faster than expected.",
        "<b>Nobunaga:</b> Good. Fast men make fast mistakes.",
        "<b>Nohime:</b> And if he doesn't make them fast enough?",
        "<b>Nobunaga:</b> Then I'll be faster. I know the pass now. I know how it feels to lose it. That is not wasted.",
        "Somewhere in Mino, a new lord burns what his father built. The old man's voice is still in the autumn garden, steady and dry: 'I wish I had ten more years to watch.' He will still get what he asked for. It will just take longer now."
      ].join("<br>"),
      backgroundKey: "gifu_castle_tower_night",
      bgmKey: "bgm_defeat",
      choices: [],
      isChapterEnd: true
    }
  ]
};

export { chapter };