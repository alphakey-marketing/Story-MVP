// src/chapters/chapter1.js

// CHAPTER METADATA
const chapter = {
  title: "Prologue: Rising Shadows",
  subtitle: "Where destinies are forged",
  number: 1,
  // All scenes for this chapter
  scenes: [
    {
      sceneRef: "S01_INTRO",
      text: `Night falls on Owari. You, Nobunaga, stand atop the castle, 
            the fire signal from Inuyama barely visible.
            The echo of unrest in the province stirs you awake.`,
      choices: [
        {
          text: "Prepare for the council meeting.",
          nextScene: "S02_COUNCIL",
          // This choice increments the political_power flag
          flagDelta: { flagKey: "political_power", delta: 1 }
        },
        {
          text: "Survey the castle walls yourself.",
          nextScene: "S03_WALLS",
          // This choice increments the ruthlessness flag
          flagDelta: { flagKey: "ruthlessness", delta: 1 }
        }
      ]
    },

    {
      sceneRef: "S02_COUNCIL",
      text: `In the dim council chamber, your retainers await your orders.
            Mitsuhide bows, loyalty in his eyes.`,
      choices: [
        {
          text: "Speak bluntly about the unrest.",
          nextScene: "S04_AFTER_COUNCIL",
          flagDelta: { flagKey: "ruthlessness", delta: 1 }
        },
        {
          text: "Encourage open discussion.",
          nextScene: "S04_AFTER_COUNCIL",
          flagDelta: { flagKey: "bond_strength", delta: 1 }
        }
      ]
    },

    {
      sceneRef: "S03_WALLS",
      text: `You stride among your men on the battlements. 
            Some are fearful; a few meet your gaze with steady eyes.`,
      choices: [
        {
          text: "Inspire the men with fierce resolve.",
          nextScene: "S04_AFTER_COUNCIL",
          flagDelta: { flagKey: "ruthlessness", delta: 1 }
        },
        {
          text: "Reassure them and promise reform.",
          nextScene: "S04_AFTER_COUNCIL",
          flagDelta: { flagKey: "bond_strength", delta: 1 }
        }
      ]
    },

    {
      sceneRef: "S04_AFTER_COUNCIL",
      text: `The night deepens. Your path is set—one of power, or one of loyalty.
            <br>End of Chapter 1.`,
      choices: [
        {
          text: "Continue to Chapter 2",
          nextScene: null // End of chapter; your main logic advances chapterIdx
        }
      ]
    }
  ]
};

export { chapter };