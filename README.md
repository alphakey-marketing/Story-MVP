# Story-MVP — Product Requirements (MVP)

Repository: alphakey-marketing/Story-MVP  
Description: An interactive story MVP version

Language composition:
- JavaScript: 38.5%
- HTML: 36.8%
- CSS: 24.7%

## Overview
This tiny PRD defines the minimum viable product for an interactive story: a single playable chapter that demonstrates scene navigation, a simple flag system, and progress persistence. The interface will be a small single-page app using plain JavaScript, minimal HTML, and simple CSS.

## MVP goals
- One playable chapter of your story (10–15 scenes).
- Scene navigation: current scene → render text/choices → click → next scene.
- Flag system: simple boolean flags (e.g. `visited_dojo: true`).
- Save progress: `localStorage` or URL fragments.
- Styling: minimal CSS (no component library needed).

## Acceptance criteria
- Player can play through a chapter of 10–15 scenes from start to finish.
- Each scene displays narrative text and 1–3 choice buttons that navigate to other scenes.
- Choosing a choice can set or check boolean flags.
- Flags are persisted during the session and saved/loaded from `localStorage` (or encoded in the URL fragment).
- Player progress can be restored after a page reload.
- Styling is clean and minimal; layout works on desktop and mobile.

## Technical approach
- Single HTML page (index.html) with a small JS bundle (plain ES module or single script).
- Scene data stored in a JSON file or JS object:
```
{
  "start": {
    "id": "start",
    "text": "You arrive at the dojo. What do you do?",
    "choices": [
      { "text": "Enter", "next": "dojo_enter", "set": { "visited_dojo": true } },
      { "text": "Walk away", "next": "walk_away" }
    ]
  },
  "dojo_enter": {
    "id": "dojo_enter",
    "text": "A teacher greets you.",
    "choices": [
      { "text": "Bow", "next": "bow_scene" }
    ]
  }
}
```
- State model:
  - currentSceneId: string
  - flags: Record<string, boolean>
- Persistence:
  - Primary: `localStorage` key (e.g., `story-mvp:save`) storing JSON { currentSceneId, flags }.
  - Alternative/optional: encode currentSceneId and flags in the URL fragment for shareable state.
- UI:
  - Render scene text and choices; each choice triggers state updates (set/unset flags) and navigates to the next scene.
  - Minimal transitions (fade/slide) optional but not required.

## Suggested file structure
- index.html
- src/
  - main.js
  - scenes.js (or scenes.json)
  - state.js (persistence & flag helpers)
  - ui.js (rendering)
- styles/
  - base.css
- README.md (this document)

## Non-goals (for MVP)
- No server/backend required.
- No user accounts or remote saves.
- No complex rule engine — just boolean flags and direct conditional branching.
- No third-party UI libraries.

## Testing & validation
- Manual playthroughs to verify navigation, flag setting, and persistence.
- Test reload and reopening the page to ensure saved progress is restored.
- Validate scene graph does not contain dead ends unless intentional.

## Metrics / Success criteria
- A tester can start the chapter and finish it without errors.
- Save/load functions reliably across browser sessions.
- Story structure and flags are easy to author/modify.

## Next steps
1. Draft 10–15 scene content and small scene graph.
2. Implement core renderer, flag logic, and persistence.
3. Apply minimal CSS and test on desktop/mobile.
4. Iterate on UX and edge cases (invalid scene ids, corrupted saves).