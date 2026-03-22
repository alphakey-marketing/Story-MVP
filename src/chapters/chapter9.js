const chapter = {
  title: "The Fall of Mino",
  subtitle: "1567 \u2014 A promise made to a dying man is still a promise.",
  number: 9,
  scenes: [
    {
      sceneRef: "S01",
      text: [
        "1567. Mino Province. Saito Dosan has been dead for thirteen years. His son Yoshitatsu is dead. The province has passed through three lords since then, each weaker than the last. Now Nobunaga stands at the border of his father-in-law's homeland with sixty thousand men and a promise he made in a garden to a dying old man.",
        "<b>Nobunaga:</b> Dosan asked me to take Mino eventually. To hold it, not burn it.",
        "<b>Mitsuhide:</b> The current lord will not surrender peacefully.",
        "<b>Nobunaga:</b> They never do."
      ].join("<br>"),
      backgroundKey: "mino_border_morning_mist",
      bgmKey: "bgm_journey",
      choices: [],
      nextScene: "S02"
    },
    {
      sceneRef: "S02",
      text: [
        "Nohime arrives at the command tent before dawn. She has not been to Mino since she left it as a young woman to marry Nobunaga. She has not mentioned this, because mentioning it would be a kind of complaint, and she does not complain.",
        "She looks at the map for a long time.",
        "<b>Nohime:</b> The eastern pass is the one my father always said was impossible to hold. He was right. Which means the defenders will assume you won't use it.",
        "<b>Nobunaga:</b> He told you that.",
        "<b>Nohime:</b> He told me everything about the province. He was thorough about it. I think he always knew it would matter eventually."
      ].join("<br>"),
      backgroundKey: "mino_command_tent_predawn",
      bgmKey: "bgm_intrigue",
      choices: [
        {
          text: "Use Nohime's knowledge. The eastern pass gives a clean approach with lower casualties.",
          nextScene: "S02A",
          flagDelta: { flagKey: "nohime_trust", delta: 1 },
          flagDelta2: { flagKey: "political_power", delta: 1 }
        },
        {
          text: "The tactical advantage is real but don't make Nohime the instrument of her own homeland's fall. Use standard siege lines.",
          nextScene: "S02B",
          flagDelta: { flagKey: "bond_strength", delta: 1 }
        },
        {
          text: "Total encirclement. Burn the supply lines from three directions. End it in a week.",
          nextScene: "S02C",
          flagDelta: { flagKey: "ruthlessness", delta: 2 }
        }
      ]
    },
    {
      sceneRef: "S02A",
      text: [
        "Nohime briefs the advance commanders herself. She is precise and impersonal about it, which is more impressive than if she were emotional. The eastern pass assault opens a gap in the defensive line before midday.",
        "<b>Mitsuhide:</b> She gave us half the campaign in one conversation.",
        "<b>Nobunaga:</b> She gave her father's province a faster ending. There is a difference.",
        "The advance continues. Casualties are lighter than any comparable campaign. Dosan would have appreciated the efficiency."
      ].join("<br>"),
      backgroundKey: "mino_eastern_pass_sunrise",
      bgmKey: "bgm_war_drums_quiet",
      flagHardWrites: [{ flagKey: "mino_resolved", flagValue: 2 }],
      choices: [],
      nextScene: "S04_BATTLE"
    },
    {
      sceneRef: "S02B",
      text: [
        "<b>Nohime:</b> You're not using the pass.",
        "<b>Nobunaga:</b> I'm using siege lines.",
        "She looks at the map again. Then at him. She understands what he is not saying \u2014 that he could have used the knowledge and chose not to, not for tactical reasons but for a different kind of reason entirely.",
        "<b>Nohime:</b> That will take three weeks longer.",
        "<b>Nobunaga:</b> I know.",
        "She does not thank him. She does not have to."
      ].join("<br>"),
      backgroundKey: "mino_command_tent_predawn",
      bgmKey: "bgm_quiet_resolve",
      flagHardWrites: [{ flagKey: "mino_resolved", flagValue: 1 }],
      choices: [],
      nextScene: "S04_BATTLE"
    },
    {
      sceneRef: "S02C",
      text: [
        "<b>Nobunaga:</b> Three directions. Cut the supply lines at the river crossings. No one moves without my order.",
        "The encirclement takes four days. The province is isolated completely. What happens inside the ring \u2014 the burned granaries, the wells choked with ash \u2014 is not discussed at the command tent. It is simply done.",
        "<b>Mitsuhide:</b> Dosan asked you to preserve it.",
        "<b>Nobunaga:</b> I am preserving it. Preservation requires control. Control requires clarity.",
        "Mitsuhide says nothing more. He files what he sees under a category that already has entries."
      ].join("<br>"),
      backgroundKey: "mino_border_morning_mist",
      bgmKey: "bgm_war_drums",
      flagHardWrites: [{ flagKey: "mino_resolved", flagValue: 0 }],
      choices: [],
      nextScene: "S04_BATTLE"
    },
    {
      sceneRef: "S04_BATTLE",
      text: [
        "The final fortifications at Inabayama castle hold for six days. Then they do not.",
        "<b>Nobunaga:</b> Open the gates."
      ].join("<br>"),
      backgroundKey: "inabayama_castle_siege",
      bgmKey: "bgm_war_drums",
      isBattleGate: true,
      battleEnemyKey: "mino_castle_garrison",
      battleWinSceneRef: "S05_WIN",
      battleLoseSceneRef: "S05_LOSE",
      choices: []
    },
    {
      sceneRef: "S05_WIN",
      text: [
        "The gates open. The Oda banner goes up over Inabayama castle before sunset. Nobunaga renames it Gifu \u2014 after the mountain from which Zhou conquered all under heaven \u2014 and issues a proclamation: the road taxes are abolished. All merchants to pass freely.",
        "The province is Oda. Dosan's request is fulfilled.",
        "{if mino_resolved == 2} The casualties were light by any measure. The markets are already reopening. In the eastern villages, a few farmers who had hidden their grain begin, cautiously, to bring it out again.",
        "{if mino_resolved == 1} The siege was clean. There will be recovery. It will take time, but the markets will reopen.",
        "{if mino_resolved == 0} The encirclement was complete. The province is taken. What it cost the people inside the lines is not something anyone tallies at a command tent."
      ].join("<br>"),
      backgroundKey: "inabayama_castle_banner_raised",
      bgmKey: "bgm_victory_somber",
      flagWrites: [{ flagKey: "battle_won", flagValue: 1 }],
      choices: [],
      nextScene: "S06"
    },
    {
      sceneRef: "S05_LOSE",
      text: [
        "The first assault fails. The castle holds for another week before a second push breaks through the northern wall. The banner goes up eventually. All things considered, a castle can only hold so long.",
        "The province is Oda. The delay cost lives on both sides.",
        "<b>Mitsuhide:</b> It is done, my lord."
      ].join("<br>"),
      backgroundKey: "inabayama_castle_banner_raised",
      bgmKey: "bgm_defeat",
      flagWrites: [{ flagKey: "battle_lost", flagValue: 1 }],
      choices: [],
      nextScene: "S06"
    },
    {
      sceneRef: "S06",
      text: [
        "Nohime stands at the castle's upper wall and looks out over the province. It is evening. The fires from the siege are mostly out. The land looks the way it always did \u2014 green, rolling hills toward the mountains she grew up looking at.",
        "Nobunaga stands beside her for a while without speaking.",
        "<b>Nohime:</b> He would have had questions about the method.",
        "<b>Nobunaga:</b> So do I.",
        "She turns to look at him. This is the first time in some years she has heard him admit to doubt. She does not make much of it. She simply notes it, the way she notes everything \u2014 without display, filed accurately.",
        "A fox moves through the tall grass at the base of the wall and disappears into the dusk."
      ].join("<br>"),
      backgroundKey: "mino_province_evening_wall",
      bgmKey: "bgm_tension_resolve",
      flagWrites: [
        { flagKey: "omen_read", flagValue: 1 },
        { flagKey: "supernatural_affinity", flagValue: 1 }
      ],
      choices: [],
      nextScene: "S07"
    },
    {
      sceneRef: "S07",
      text: [
        "<b>Mitsuhide:</b> The province needs administrators. I have a list of local men who kept their heads through the transition and know the tax rolls.",
        "<b>Nobunaga:</b> Use them. Local knowledge is worth more than loyalty I have to import.",
        "Mitsuhide begins the administration. The markets in Mino will be open within three months. Not because the war was merciful \u2014 not necessarily \u2014 but because Nobunaga understands that open markets are the proof of concept. They always have been.",
        "Dosan's garden still stands on the castle grounds. No one has touched it."
      ].join("<br>"),
      backgroundKey: "mino_command_tent_predawn",
      bgmKey: "bgm_quiet_resolve",
      choices: [],
      isChapterEnd: true
    }
  ]
};

export { chapter };
