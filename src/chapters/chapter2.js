const chapter = {
  title: "The Alliance of Wolves",
  subtitle: "1552 — Allies are enemies who haven't decided yet.",
  number: 2,
  scenes: [
    {
      sceneRef: "S01",
      text: [
        "Spring, 1552. Word of Okehazama has spread. Yoshimoto is dead and the road to the capital stands unguarded. Every lord in the country is recalculating.",
        "Three men send letters within the same week. Tokugawa Ieyasu of Mikawa — practical, patient, calculating. Shibata Katsuie — Nobunaga's own general, old guard, slightly suspicious of the new direction. And Matsudaira Nobuyasu — a boy lord with a large army and an absent father who recently pledged loyalty to Nobunaga and may or may not mean it.",
        "<b>Mitsuhide:</b> Three alliance requests in a week. After Okehazama they all want to be on your side before you decide what side means.",
        "<b>Nobunaga:</b> Which one is real?",
        "<b>Mitsuhide:</b> Ieyasu. He has been preparing for this letter since before Okehazama. The other two are opportunists.",
        "<b>Nobunaga:</b> Opportunists are honest, at least. They want something and they say so with their timing."
      ].join("<br>"),
      backgroundKey: "owari_road_morning",
      bgmKey: "bgm_journey",
      choices: [],
      nextScene: "S02"
    },
    {
      sceneRef: "S02",
      text: [
        "The Kiyosu conference. Ieyasu arrives exactly on time, which means he left Okazaki at the precise moment required to arrive neither early nor late. This is a demonstration.",
        "<b>Ieyasu:</b> Lord Nobunaga. I have proposed an alliance for the same reason you have agreed to consider one: we are both surrounded by men who will move against us individually, and who will hesitate if we are together.",
        "<b>Nobunaga:</b> Clean. No flattery.",
        "<b>Ieyasu:</b> Flattery takes time. I respect yours too much to spend it on that."
      ].join("<br>"),
      backgroundKey: "mikawa_border_meeting",
      bgmKey: "bgm_tense_court",
      choices: [],
      nextScene: "S03"
    },
    {
      sceneRef: "S03",
      text: [
        "Ieyasu presents three terms. Equal standing in joint military operations. No obligation to answer a call to war the other did not agree to. And a clause that neither party negotiates separately with Shingen or Kenshin without prior notice.",
        "It is a well-drafted alliance. The question is what Nobunaga adds or removes."
      ].join("<br>"),
      backgroundKey: "kiyosu_conference_hall",
      bgmKey: "bgm_intrigue",
      choices: [
        {
          text: "Accept all three terms as written. Ieyasu earned the respect of an unedited agreement.",
          nextScene: "S03A",
          flagDelta:  { flagKey: "ieyasu_trust",    delta: 2 },
          flagDelta2: { flagKey: "political_power", delta: 1 }
        },
        {
          text: "Accept the first two terms. Remove the Shingen clause — Nobunaga doesn't pre-notify anyone of anything.",
          nextScene: "S03B",
          flagDelta:  { flagKey: "ieyasu_trust",  delta: 1 },
          flagDelta2: { flagKey: "ruthlessness",  delta: 1 }
        },
        {
          text: "Accept everything but add a fourth term: Mikawa grain routes operate under Oda customs inspection.",
          nextScene: "S03C",
          flagDelta:  { flagKey: "political_power", delta: 2 },
          flagDelta2: { flagKey: "ieyasu_trust",    delta: -1 }
        }
      ]
    },
    {
      sceneRef: "S03A",
      text: [
        "<b>Ieyasu:</b> Agreed.",
        "They sign the Kiyosu Alliance. It will hold, with minor amendments, for the next twenty-two years. It is the most durable alliance in Sengoku history, sealed in under four minutes.",
        "<b>Mitsuhide:</b> That was the fastest diplomatic negotiation I have ever witnessed.",
        "<b>Nobunaga:</b> He drafted it well. Improving it would have been vanity."
      ].join("<br>"),
      backgroundKey: "kiyosu_conference_hall",
      bgmKey: "bgm_quiet_resolve",
      flagWrites: [
        { flagKey: "bond_strength", flagValue: 1 }
      ],
      choices: [],
      nextScene: "S04"
    },
    {
      sceneRef: "S03B",
      text: [
        "<b>Ieyasu:</b> The Shingen clause was the most important one.",
        "<b>Nobunaga:</b> Which is why I won't be bound by it. If I'm talking to Shingen, you'll know because the world will change. Not because I told you first.",
        "<b>Ieyasu:</b> ...",
        "<b>Ieyasu:</b> Agreed. Under protest.",
        "The alliance is signed. Ieyasu files the amendment under a mental category labeled 'watch carefully.' He will revisit it twice in the next decade and both times conclude it was the right call."
      ].join("<br>"),
      backgroundKey: "kiyosu_conference_hall",
      bgmKey: "bgm_intrigue",
      choices: [],
      nextScene: "S04"
    },
    {
      sceneRef: "S03C",
      text: [
        "<b>Ieyasu:</b> You are asking me to submit my trade routes to Oda oversight.",
        "<b>Nobunaga:</b> I'm asking for inspection rights. The grain still moves, the revenue stays in Mikawa, I know what passes through.",
        "<b>Ieyasu:</b> ...",
        "<b>Ieyasu:</b> Three seasons.",
        "<b>Nobunaga:</b> Five.",
        "<b>Ieyasu:</b> Four and a renegotiation clause.",
        "<b>Nobunaga:</b> Done."
      ].join("<br>"),
      backgroundKey: "kiyosu_conference_hall",
      bgmKey: "bgm_tense_court",
      choices: [],
      nextScene: "S04"
    },
    {
      sceneRef: "S04",
      text: [
        "Back at Gifu. The other two letters still sit on the table. Shibata Katsuie, Nobunaga's own general, has written demanding a formal military council with authority over campaign decisions. It is, depending on how you read it, a request for inclusion or a challenge to authority.",
        "<b>Mitsuhide:</b> Katsuie is loyal. He's also deeply uncomfortable with how quickly things are moving. He's asking to feel like he has a place in it.",
        "<b>Nobunaga:</b> Does he?",
        "<b>Mitsuhide:</b> He has held the north wall of every campaign you have run. Yes. He does."
      ].join("<br>"),
      backgroundKey: "gifu_castle_map_room_day",
      bgmKey: "bgm_intrigue",
      choices: [
        {
          text: "Grant him the council seat with real authority over northern campaign planning. He earned it.",
          nextScene: "S04A",
          flagDelta:  { flagKey: "political_power",  delta: 1 },
          flagDelta2: { flagKey: "katsuie_loyalty",  delta: 2 }
        },
        {
          text: "Create an advisory council with a seat for Katsuie. Advisory only — final decisions remain yours.",
          nextScene: "S04B",
          flagDelta:  { flagKey: "katsuie_loyalty",  delta: 1 },
          flagDelta2: { flagKey: "political_power",  delta: 1 }
        },
        {
          text: "Write back: his place is on the field, not in councils. That has always been his strength and Nobunaga respects it.",
          nextScene: "S04C",
          flagDelta:  { flagKey: "katsuie_loyalty",  delta: -1 },
          flagDelta2: { flagKey: "ruthlessness",     delta: 1 }
        }
      ]
    },
    {
      sceneRef: "S04A",
      text: [
        "Katsuie receives the appointment by return messenger. He is in Gifu within three days. He does not say thank you. He presents a campaign plan for the northern border instead, which is how Katsuie says thank you.",
        "<b>Mitsuhide:</b> The plan is good.",
        "<b>Nobunaga:</b> Of course it is. That's why I gave him the seat."
      ].join("<br>"),
      backgroundKey: "gifu_castle_map_room_day",
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
        "Katsuie is not fully satisfied but he is not dissatisfied enough to act on it. He will show his value in the field and wait to see if the advisory council becomes real authority over time.",
        "<b>Mitsuhide:</b> He'll accept it for now. But he will revisit it.",
        "<b>Nobunaga:</b> By the time he does, the campaign will be far enough along that revisiting it costs more than accepting it."
      ].join("<br>"),
      backgroundKey: "gifu_castle_map_room_day",
      bgmKey: "bgm_intrigue",
      choices: [],
      nextScene: "S05"
    },
    {
      sceneRef: "S04C",
      text: [
        "Katsuie receives the letter. He reads it twice. He does not reply. He arrives at the next campaign briefing early, takes his usual position at the northern side of the map, and does not mention the letter. He files it somewhere cold.",
        "<b>Mitsuhide:</b> He won't say anything. But he will remember.",
        "<b>Nobunaga:</b> That's his right."
      ].join("<br>"),
      backgroundKey: "gifu_castle_map_room_day",
      bgmKey: "bgm_war_drums_quiet",
      choices: [],
      nextScene: "S05"
    },
    {
      sceneRef: "S05",
      text: [
        "Three weeks later. The third letter writer — Matsudaira Nobuyasu — has not waited for a reply. He has moved his army to the Owari border and is demanding formal recognition of his territory in exchange for continued loyalty.",
        "<b>Mitsuhide:</b> He interpreted your silence as weakness. He is seventeen and his advisors are poor.",
        "<b>Nobunaga:</b> His advisors should have told him what Yoshimoto's advisors learned."
      ].join("<br>"),
      backgroundKey: "owari_border_crossroads",
      bgmKey: "bgm_war_drums",
      choices: [
        {
          // FIX: added ieyasu_trust +1 — Nobunaga's decisiveness here
          // is noted by Ieyasu through his Mikawa intelligence network
          text: "March to meet him. Not to fight — to stand in front of him personally with enough men that the number is the message.",
          nextScene: "S05A",
          flagDelta:  { flagKey: "ruthlessness",  delta: 1 },
          flagDelta2: { flagKey: "ieyasu_trust",  delta: 1 }
        },
        {
          text: "Send Ieyasu. Let the new alliance do its first work. Nobuyasu is Mikawa-adjacent — Ieyasu will read the situation correctly.",
          nextScene: "S05B",
          flagDelta:  { flagKey: "ieyasu_trust",    delta: 1 },
          flagDelta2: { flagKey: "political_power", delta: 1 }
        },
        {
          text: "Ignore him for fourteen days. Let him sit with his army on the border and count the cost.",
          nextScene: "S05C",
          flagDelta: { flagKey: "ruthlessness", delta: 1 }
        }
      ]
    },
    {
      sceneRef: "S05A",
      text: [
        "Nobunaga arrives at the border with four thousand men and no siege equipment, which communicates exactly the right thing: this is not a war. It is a correction.",
        "He is mounted. Nobuyasu's captains can see the horse from three hundred yards — a good animal, calm under the noise of four thousand men, which says something about the rider. A lord who keeps a horse like that has been somewhere horses are tested. The number of men is the message. But the horse is a sentence in the same letter.",
        "<b>Nobuyasu:</b> I — I was simply requesting — the recognition of —",
        "<b>Nobunaga:</b> Go home, Nobuyasu. Write a proper letter. I will read it. This was not a proper letter.",
        "Nobuyasu goes home. He writes a proper letter. It is granted. He becomes, on the whole, a reliable minor ally for the next six years."
      ].join("<br>"),
      backgroundKey: "owari_border_plain_morning",
      bgmKey: "bgm_war_drums_quiet",
      flagWrites: [
        { flagKey: "road_command", flagValue: 1 }
      ],
      choices: [],
      nextScene: "S06"
    },
    {
      sceneRef: "S05B",
      text: [
        "Ieyasu arrives at the border two days later. He has a private conversation with Nobuyasu that no one is permitted to record. Nobuyasu's army is home within a week.",
        "<b>Ieyasu:</b> He is young. He will not make this mistake twice.",
        "<b>Nobunaga:</b> What did you say to him?",
        "<b>Ieyasu:</b> I told him what Yoshimoto's advisors learned."
      ].join("<br>"),
      backgroundKey: "mikawa_road_afternoon",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      nextScene: "S06"
    },
    {
      sceneRef: "S05C",
      text: [
        "Nobuyasu's army sits at the border for eleven days, consuming fourteen days of their own supplies. On the twelfth day he sends a letter of withdrawal and apology. Nobunaga replies with a formal acceptance and a polite note about supply logistics.",
        "<b>Mitsuhide:</b> You did not even need to move.",
        "<b>Nobunaga:</b> Moving would have made it about me. Waiting made it about him."
      ].join("<br>"),
      backgroundKey: "owari_border_crossroads",
      bgmKey: "bgm_war_drums_quiet",
      choices: [],
      nextScene: "S06"
    },
    {
      sceneRef: "S06",
      text: [
        "That night, a different letter. No seal. Unsigned. Three words in precise calligraphy: 'The sword remembers.'",
        "<b>Mitsuhide:</b> The blade. Whoever destroyed it — or whoever didn't — this is something acknowledging its existence.",
        "<b>Nobunaga:</b> Someone is watching very closely.",
        "A second item arrives with the letter, wrapped in plain cloth. A short sword — old, well-kept, no maker's mark. Whoever sent it knew enough to send something a warlord might actually carry."
      ].join("<br>"),
      backgroundKey: "owari_castle_night",
      bgmKey: "bgm_ominous",
      choices: [
        {
          // FIX: weapon_legacy removed — mystery sword does not advance blade_legacy
          // supernatural_affinity added: keeping an unknown blade is an act of openness
          text: "Keep it. A weapon offered by someone watching this closely is worth understanding.",
          nextScene: "S06_KEEP",
          flagDelta: { flagKey: "supernatural_affinity", delta: 1 }
        },
        {
          text: "Burn it with the letter. Accept nothing from an unknown hand.",
          nextScene: "S06_BURN",
          flagDelta: { flagKey: "ruthlessness", delta: 1 }
        }
      ]
    },
    {
      sceneRef: "S06_KEEP",
      text: [
        "<b>Mitsuhide:</b> I'll begin looking into who sent it.",
        "<b>Nobunaga:</b> Don't. Not yet. Whoever sent it wanted a reaction. We give them nothing and watch who next moves.",
        "He sets the sword on the table beside the letter. They sit there together in the lamplight — a message and a weapon, both from the same unknown place. He does not touch either again that night. But he does not move them either."
      ].join("<br>"),
      backgroundKey: "owari_castle_night",
      bgmKey: "bgm_ominous",
      choices: [],
      nextScene: "S07_BATTLE"
    },
    {
      sceneRef: "S06_BURN",
      text: [
        "<b>Mitsuhide:</b> I'll begin looking into who sent it.",
        "<b>Nobunaga:</b> Don't. Not yet. Whoever sent it wanted a reaction. We give them nothing.",
        "The sword goes into the lamp flame point-first. The cloth catches first, then the hilt wrapping. The blade itself does not burn, of course — it sits in the ash afterward, still perfectly formed. He has a guard dispose of it in the river before dawn. He does not watch it go."
      ].join("<br>"),
      backgroundKey: "owari_castle_night",
      bgmKey: "bgm_tension_resolve",
      choices: [],
      nextScene: "S07_BATTLE"
    },
    {
      sceneRef: "S07_BATTLE",
      text: [
        "<b>Scout:</b> Raiders from Mino, my lord. Border crossings. Taking the northern road settlements.",
        "<b>Nobunaga:</b> The road stays open. Handle it."
      ].join("<br>"),
      backgroundKey: "mino_border_skirmish_dusk",
      bgmKey: "bgm_war_drums",
      isBattleGate: true,
      battleEnemyKey: "mino_border_raiders",
      battleWinSceneRef: "S08_WIN",
      battleLoseSceneRef: "S08_LOSE",
      choices: []
    },
    {
      sceneRef: "S08_WIN",
      text: [
        "The raiders are repelled. The road holds. Word spreads that Oda's northern roads are not easy pickings. This costs a future enemy three months of planning.",
        "<b>Mitsuhide:</b> The northern road is yours now in name and in practice. Two different things, usually. Not today.",
        "<b>Nobunaga:</b> Good. Tell Katsuie his wall held. He should know that.",
        "Katsuie receives the message in his camp. He does not reply. He does not need to. The road being open is his reply."
      ].join("<br>"),
      backgroundKey: "mino_border_morning_clear",
      bgmKey: "bgm_victory_somber",
      choices: [],
      nextScene: "S09_WIN"
    },
    {
      sceneRef: "S08_LOSE",
      text: [
        "The road is cut for six days. Two settlements are damaged. The cost is real but not fatal. Katsuie arrives to hold the northern wall and the road reopens.",
        "<b>Katsuie:</b> The north is my concern, my lord. Tell me earlier next time.",
        "The words are the same regardless of the history between you. But the weight behind them is not.",
        "<b>Katsuie:</b> I held the road you needed held. As I have always done. As I will continue to do. Whether or not that has value in councils is apparently a separate question.",
        "He does not wait for a reply. He goes back to the road. He has never needed a reply to do his job and he will not start now."
      ].join("<br>"),
      backgroundKey: "northern_road_settlement_burned",
      bgmKey: "bgm_defeat",
      choices: [],
      nextScene: "S09_LOSE"
    },
    {
      sceneRef: "S09_WIN",
      text: [
        "That night, Nobunaga puts the unsigned letter on the table in front of Mitsuhide. 'The sword remembers.'",
        "<b>Mitsuhide:</b> I'll begin looking into who sent it.",
        "<b>Nobunaga:</b> Don't. Not yet. Whoever sent it wanted a reaction. We give them nothing and watch who next moves.",
        "<b>Mitsuhide:</b> Patience.",
        "<b>Nobunaga:</b> It's what separates us from Yoshimoto."
      ].join("<br>"),
      backgroundKey: "gifu_castle_tower_night",
      bgmKey: "bgm_tension_resolve",
      choices: [],
      isChapterEnd: true
    },
    {
      sceneRef: "S09_LOSE",
      text: [
        "That night, Nobunaga puts the unsigned letter on the table in front of Mitsuhide. 'The sword remembers.'",
        "<b>Mitsuhide:</b> I'll begin looking into who sent it.",
        "<b>Nobunaga:</b> Don't. Not yet. Whoever sent it wanted a reaction. We give them nothing.",
        "<b>Mitsuhide:</b> And Katsuie?",
        "<b>Nobunaga:</b> He held the road. That's what he does. I'll write to him.",
        "A beat. The kind of pause that means what follows is not standard.",
        "<b>Nobunaga:</b> He should have been there from the start. He was right about that.",
        "Mitsuhide says nothing. He has learned that some things said aloud by Nobunaga are not for response — they are for the record. This is one of them."
      ].join("<br>"),
      backgroundKey: "gifu_castle_tower_night",
      bgmKey: "bgm_defeat",
      choices: [],
      isChapterEnd: true
    }
  ]
};

export { chapter };