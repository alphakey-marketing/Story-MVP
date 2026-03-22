const chapter = {
  title: "Honnoji",
  subtitle: "1582 \u2014 Every ending was always this one.",
  number: 13,
  scenes: [
    // S01 is the entry point. S01_OMEN is shown when omen_read >= 2.
    {
      sceneRef: "S01",
      text: [
        "June 1, 1582. Honnoji temple, Kyoto. Nobunaga travels with a small escort \u2014 thirty men. He is resting here before the western campaign, which he expects to resolve Japan inside of two years.",
        "The temple is quiet. The city is asleep. Mitsuhide is in the west, commanding the advance force. He is three days away.",
        "Except that he is not."
      ].join("<br>"),
      backgroundKey: "honnoji_temple_night_arrival",
      bgmKey: "bgm_ominous",
      choices: [],
      nextScene: "S02"
    },
    {
      sceneRef: "S01_OMEN",
      text: [
        "June 1, 1582. Honnoji temple, Kyoto. Nobunaga travels with a small escort \u2014 thirty men. He is resting here before the western campaign, which he expects to resolve Japan inside of two years.",
        "The temple is quiet. The city is asleep. There is something in the air tonight, a pressure he has felt before \u2014 at the mountain inn, at the Mino wall, in the Azuchi garden. He notes it without naming it. He has learned not to name it.",
        "Mitsuhide is in the west, commanding the advance force. He is three days away.",
        "Except that he is not."
      ].join("<br>"),
      backgroundKey: "honnoji_temple_night_arrival",
      bgmKey: "bgm_ominous",
      flagCondition: { flagKey: "omen_read", operator: "gte", value: 2 },
      choices: [],
      nextScene: "S02"
    },

    // S02 branches to 4 endings via flagCondition on ending_route.
    // evaluateEnding() is called by render.js when entering this chapter.
    {
      sceneRef: "S02_BAD",
      text: [
        "<b>Ranmaru:</b> My lord \u2014 torches. The outer wall. Thousands of them.",
        "<b>Nobunaga:</b> Whose banner?",
        "<b>Ranmaru:</b> Akechi, my lord.",
        "Nobunaga nods. No surprise at the name. No pause before the number. The tool reached its tolerance and broke, as tools do.",
        "{if kennyo_hate >= 5} Among the torches, he can see the distinctive white robes of Ikko-ikki monks. Kennyo found his opening at last. He did not come alone to this betrayal.",
        "<b>Nobunaga:</b> It cannot be helped.",
        "He says it flatly. There is no weight in it. It is a logistical observation."
      ].join("<br>"),
      backgroundKey: "honnoji_temple_courtyard_torches",
      bgmKey: "bgm_war_drums",
      flagCondition: { flagKey: "ending_route", operator: "eq", value: 0 },
      choices: [],
      nextScene: "S03_BAD"
    },
    {
      sceneRef: "S02_IF",
      text: [
        "Before the torches appear, a rider arrives at the temple gate. Nohime's network. A message: Akechi forces have turned. Twelve thousand men. Six hours.",
        "Six hours.",
        "<b>Nobunaga:</b> Ranmaru. Send riders. One to Ieyasu. One to Katsuie.",
        "He says it calmly. He is already working. He has six hours."
      ].join("<br>"),
      backgroundKey: "honnoji_temple_gate_night",
      bgmKey: "bgm_tension_resolve",
      flagCondition: { flagKey: "ending_route", operator: "eq", value: 1 },
      choices: [],
      nextScene: "S03_IF"
    },
    {
      sceneRef: "S02_MYTHIC",
      text: [
        "<b>Ranmaru:</b> My lord \u2014 torches. The outer wall. Thousands of them.",
        "<b>Nobunaga:</b> Whose banner?",
        "<b>Ranmaru:</b> Akechi, my lord.",
        "He does not speak immediately. The reforged blade is at his side \u2014 the one with the visible seam, the one the monk called a completed thing. He puts his hand on it.",
        "The temple garden is very still. Somewhere in it, at the edge of the lamplight, something moves.",
        "<b>Nobunaga:</b> Is this the realm, then. \u2026 It cannot be helped."
      ].join("<br>"),
      backgroundKey: "honnoji_temple_courtyard_torches",
      bgmKey: "bgm_ominous",
      flagCondition: { flagKey: "ending_route", operator: "eq", value: 2 },
      choices: [],
      nextScene: "S03_MYTHIC"
    },
    {
      sceneRef: "S02",
      text: [
        "<b>Ranmaru:</b> My lord \u2014 torches. The outer wall. Thousands of them.",
        "<b>Nobunaga:</b> Whose banner?",
        "<b>Ranmaru:</b> \u2026",
        "<b>Ranmaru:</b> Akechi, my lord.",
        "Akechi Mitsuhide. His most capable general. His longest-serving advisor. The man he asked, in the map room years ago, to tell him if he was treating people as tools.",
        "{if mitsuhide_loyalty >= 3} <b>Nobunaga:</b> \u2026Mitsuhide.",
        "{if mitsuhide_loyalty >= 3} He says only the name. It takes a moment \u2014 personal before tactical, weight before calculation.",
        "<b>Nobunaga:</b> Is this the realm, then. \u2026 It cannot be helped."
      ].join("<br>"),
      backgroundKey: "honnoji_temple_courtyard_torches",
      bgmKey: "bgm_war_drums",
      choices: [],
      nextScene: "S03_STD"
    },

    // BAD ENDING
    {
      sceneRef: "S03_BAD",
      text: [
        "The temple is breached within the first hour. The escort is thirty men against thirteen thousand. There is no calculation that makes this survivable.",
        "Nohime's network never sent a warning \u2014 it had nothing to send. Ieyasu is too far. Katsuie is too far. The roads between them and here are open, but no one is on them.",
        "He fights in the inner hall until the fire reaches the roof beams. Then the roof falls.",
        "No final order is written. No name is sent to Hideyoshi on a cloth. There is simply the fight and then the absence of the fight."
      ].join("<br>"),
      backgroundKey: "honnoji_burning_inner_hall",
      bgmKey: "bgm_war_drums",
      choices: [],
      nextScene: "S04_BAD"
    },
    {
      sceneRef: "S04_BAD",
      text: [
        "What follows Honnoji is the active erasure of Oda Nobunaga.",
        "Toyotomi Hideyoshi defeats Mitsuhide at Yamazaki. He then spends fifteen years carefully rewriting the record. The story he tells is this: Nobunaga was a demon of war whose excesses necessitated his own removal. His cruelties, which were real, are made into the whole story. The markets he opened are credited to Hideyoshi's subsequent administration. The roads he built are renamed.",
        "{if kennyo_hate >= 5} The monks of the Ikko-ikki, who had assisted the coup at Honnoji, are granted a ceremonial pardon by Hideyoshi. Kennyo is allowed to rebuild one temple. He never publicly confirms his role in that June night. He doesn't need to.",
        "In a century, the name Oda Nobunaga means: a monster whose death was necessary. The cautionary tale. The lesson about what happens when power is not balanced by mercy.",
        "The markets stay open. The roads stay open. Japan does not stop.",
        "He just doesn't get credit for it."
      ].join("<br>"),
      backgroundKey: "japan_map_painted_scroll",
      bgmKey: "bgm_tragedy_low",
      choices: [],
      nextScene: "S_END"
    },

    // IF ENDING
    {
      sceneRef: "S03_IF",
      text: [
        "In six hours, Ieyasu's riders cover ground that should take twelve. Katsuie, already half-staged at Omi with a force in readiness, moves before the sun rises. Nohime's intelligence has been moving since the first rider left \u2014 she had been watching the Akechi troop movements for three days and had not yet had enough certainty to send a warning. She sends it now.",
        "When Mitsuhide's thirteen thousand arrive at Honnoji, Katsuie's men are on the outer wall."
      ].join("<br>"),
      backgroundKey: "honnoji_temple_gate_dawn",
      bgmKey: "bgm_tension_resolve",
      choices: [],
      nextScene: "S04_IF"
    },
    {
      sceneRef: "S04_IF",
      text: [
        "At the temple gate, in the hour before dawn, Mitsuhide and Nobunaga face each other.",
        "There is an army behind Mitsuhide. There is a wall and a defiant garrison behind Nobunaga. Between them: thirty years.",
        "Mitsuhide looks at the wall. At Katsuie's banner. At Ieyasu's riders visible on the eastern road. He looks, finally, at Nobunaga.",
        "He sheathes his sword.",
        "<b>Mitsuhide:</b> \u2026It cannot be helped.",
        "He uses the exact words. He has always been precise.",
        "The coup dissolves without a battle. Mitsuhide's officers, seeing their commander sheathe his weapon, follow. Thirteen thousand men stand down in the grey dawn of a June morning."
      ].join("<br>"),
      backgroundKey: "honnoji_temple_gate_dawn",
      bgmKey: "bgm_victory_somber",
      choices: [],
      nextScene: "S05_IF"
    },
    {
      sceneRef: "S05_IF",
      text: [
        "Nobunaga walks out of Honnoji as the sun rises over Kyoto.",
        "He looks at the city. The market stalls are beginning to open \u2014 the same ones that were not there fifteen years ago, when the roads were closed and the merchants did not move. A woman is arguing about the price of salt. A child is arguing with a fishmonger.",
        "The western campaign resumes within a month. Hideyoshi does not need to turn his army around. The unification proceeds.",
        "History does not end here because history does not end. But this particular morning \u2014 a man walking out of a burning temple into a city that is, unmistakably, more alive than it was when he found it \u2014 this particular morning is enough."
      ].join("<br>"),
      backgroundKey: "kyoto_street_market_dawn",
      bgmKey: "bgm_ending_theme",
      choices: [],
      nextScene: "S_END"
    },

    // MYTHIC ENDING
    {
      sceneRef: "S03_MYTHIC",
      text: [
        "The battle happens as history records it. Thirty men against thirteen thousand. The inner hall. The fire.",
        "But inside the inner hall, in the moment before the roof falls, Nobunaga does something that no chronicler present can later agree on.",
        "He draws the reforged blade \u2014 the one with the seam, the one the monk called completed \u2014 and he does not fight with it. He simply holds it, point down, in the center of the burning room.",
        "A shadow moves at the garden wall. At the edge of the firelight. Then it is gone."
      ].join("<br>"),
      backgroundKey: "honnoji_burning_inner_hall",
      bgmKey: "bgm_ominous",
      choices: [],
      nextScene: "S04_MYTHIC"
    },
    {
      sceneRef: "S04_MYTHIC",
      text: [
        "The body is never conclusively identified.",
        "This is recorded as a practical matter \u2014 the fire was thorough, the identification difficult. Historians argue the point for decades. Some conclude that the identification was simply delayed. Some conclude something else and do not publish their conclusions.",
        "The blade is never found.",
        "Mitsuhide, defeated twelve days later at Yamazaki, says nothing in his final hours about what he saw in the inner hall. He says only that it was not what he expected.",
        "Fox sightings are recorded at Gifu castle for the next decade. A guard's log, discovered in the nineteenth century, notes eleven separate sightings over nine years. The entries are matter-of-fact. They read like weather records."
      ].join("<br>"),
      backgroundKey: "gifu_castle_garden_evening",
      bgmKey: "bgm_ominous",
      choices: [],
      nextScene: "S05_MYTHIC"
    },
    {
      sceneRef: "S05_MYTHIC",
      text: [
        "The markets stay open. The roads stay open. Japan does not stop.",
        "These facts are not in dispute.",
        "Everything else is."
      ].join("<br>"),
      backgroundKey: "gifu_castle_garden_evening",
      bgmKey: "bgm_ending_theme",
      choices: [],
      nextScene: "S_END"
    },

    // STANDARD ENDING
    {
      sceneRef: "S03_STD",
      text: [
        "The temple walls are breached within the first half-hour. There are perhaps twenty defenders left. The fire has reached the east wing.",
        "This is the moment. The last true choice of the lord of Owari."
      ].join("<br>"),
      backgroundKey: "honnoji_inner_hall_smoke",
      bgmKey: "bgm_war_drums",
      choices: [
        {
          text: "Fight. Hold the inner hall as long as possible. Let them come and make them pay for every inch.",
          nextScene: "S04_BATTLE",
          flagDelta: { flagKey: "ruthlessness", delta: 1 }
        },
        {
          text: "Send Ranmaru out with a message. One name. One destination. The future has to survive even if you don't.",
          nextScene: "S03A_STD",
          flagDelta: { flagKey: "political_power", delta: 2 }
        },
        {
          text: "Write the final order. Three lines. The markets stay open. The roads stay open. Japan does not stop.",
          nextScene: "S03B_STD",
          flagDelta: { flagKey: "nohime_trust", delta: 1 },
          flagDelta2: { flagKey: "political_power", delta: 1 }
        }
      ]
    },
    {
      sceneRef: "S03A_STD",
      text: [
        "Nobunaga writes a single name on a strip of cloth and presses it into Ranmaru's hand. The boy is fifteen and trying very hard not to shake.",
        "<b>Nobunaga:</b> Go. Don't look back. The work continues.",
        "Ranmaru goes. The name on the cloth is Toyotomi Hideyoshi. In twelve days, Hideyoshi will turn his army around and destroy Mitsuhide at Yamazaki. The work continues. Nobunaga was right about that."
      ].join("<br>"),
      backgroundKey: "honnoji_inner_hall_smoke",
      bgmKey: "bgm_tragedy_low",
      choices: [],
      nextScene: "S04_BATTLE"
    },
    {
      sceneRef: "S03B_STD",
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
        "{if ruthlessness >= 4} He has burned temples, drowned armies, made mercy a foreign word. He knows what the ledger says. He does not regret it.",
        "{if political_power >= 4} He built the structures \u2014 the alliances, the legitimacy, the roads that outlasted every decision about how to build them. Some of it will survive him. That was always the point.",
        "{if mitsuhide_loyalty >= 3} The man outside was his best general and the one he asked the most of and the one who, in the end, reached his limit. He understands, in this room, exactly what that cost.",
        "<b>Nobunaga:</b> Come, then."
      ].join("<br>"),
      backgroundKey: "honnoji_burning_inner_hall",
      bgmKey: "bgm_war_drums",
      isBattleGate: true,
      battleEnemyKey: "akechi_vanguard_honnoji",
      battleWinSceneRef: "S05_WIN_STD",
      battleLoseSceneRef: "S05_LOSE_STD",
      choices: []
    },
    {
      sceneRef: "S05_WIN_STD",
      text: [
        "Against everything, the inner hall holds until dawn. Mitsuhide's forces, seeing Nobunaga alive, falter. The coup collapses. History does not remember this version because history runs on probability, not will.",
        "But in this version, Nobunaga walks out of Honnoji at dawn. He is bleeding. He looks at the sky for a long time. Then he begins making plans for the western campaign. He does not stop.",
        "<b>Nobunaga:</b> The roads are still open."
      ].join("<br>"),
      backgroundKey: "honnoji_dawn_aftermath",
      bgmKey: "bgm_victory_somber",
      choices: [],
      nextScene: "S06_STD"
    },
    {
      sceneRef: "S05_LOSE_STD",
      text: [
        "The hall falls. The fire is everywhere. Nobunaga retreats to the inner sanctum, wounded, alone. He can hear the army outside. He knows exactly what this is.",
        "He thinks of the merchant in Kyoto who only wanted the roads open. He thinks of Nohime with the blue silk. He thinks of Mitsuhide in the map room, in the lamp light, that first year.",
        "<b>Nobunaga:</b> The work continues.",
        "He is right about that. In twelve days, Toyotomi Hideyoshi turns his army around and destroys Mitsuhide at Yamazaki. The markets stay open. The roads stay open. Japan does not stop."
      ].join("<br>"),
      backgroundKey: "honnoji_burning_final",
      bgmKey: "bgm_defeat",
      choices: [],
      nextScene: "S06_STD"
    },
    {
      sceneRef: "S06_STD",
      text: [
        "History writes many things about Oda Nobunaga. That he was a monster. That he was a visionary. That he burned temples and opened markets and understood gunpowder at a time when everyone else was still thinking about swords.",
        "All of these things are true. None of them are the whole answer.",
        "The whole answer is this: he was a man who decided, one way or another, what Japan was worth. And then he spent himself entirely on the answer.",
        "{if mitsuhide_loyalty >= 3} The man who ended him was also one of the finest minds in his service. That is recorded as a curiosity by historians. It was not a curiosity. It was the cost of the method.",
        "{if kenshin_verdict >= 3} Uesugi Kenshin's posthumous praise \u2014 recorded in his final letter and cited in every major historical treatment of the period for four hundred years \u2014 is this: 'The roads. Open. For everyone. A correct answer at great personal cost.' The God of War's honest assessment outlasts the war.",
        "{if mino_resolved == 2} In Dosan's garden at Inabayama castle, which has been maintained without formal order by the castle staff since the province was taken, Nohime sits for one hour on the morning of her husband's death. She does not speak. She does not weep. She sits the way her father sat in that same garden thirteen years before, looking at the mountains. Then she returns to the work."
      ].join("<br>"),
      backgroundKey: "japan_map_painted_scroll",
      bgmKey: "bgm_ending_theme",
      choices: [],
      nextScene: "S_END"
    },

    // Shared final scene for all endings
    {
      sceneRef: "S_END",
      text: [
        "The markets stay open. The roads stay open. Japan does not stop.",
        "Your choices shaped the man. The loyalties you built or burned, the cruelties you chose or refused, the questions you answered or deferred \u2014 these are the record.",
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
