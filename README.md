✅ Already Built (Your MVP Foundation)
Scene navigation with choice buttons

Boolean + numeric flag system (setFlag, setFlagHard, applyChoiceFlags)

Affinity bars for mitsuhide_loyalty, nohime_trust, ieyasu_trust, ruthlessness, political_power, bond_strength

Chapter menu + epilogue module

Background map per scene (bgMap.js)

localStorage save/load with replay mode lock

🔧 v1.0 — Core Experience (High Priority)
These fix the most noticeable gaps:

Dialogue box system — replace scene text blocks with attributed line-by-line dialogue arrays per speaker (speaker, text, mood)

Typewriter text effect + skip button — standard VN expectation; absence feels unfinished

Threshold-gated choices — wire your existing affinity bars to actually show/hide choices based on requires: { flagKey, min } in scene data

Affinity bar visual polish — label bars as character names with distinct colors (e.g., cold blue for Mitsuhide, warm gold for Nohime), not raw flag keys

🎮 v1.5 — Replayability & Depth
These turn a story into a game:

Ending gallery — locked grid showing discovered vs. undiscovered endings; the single strongest "one more run" driver

Hidden scenes — rare dialogue that only triggers on specific flag combinations; players share discoveries naturally

"What changed?" echo lines — when a past flag affects the current scene, show a subtle callback line (e.g., "Mitsuhide remembers you shielded him at Kanegasaki")

Chapter replay with flag carry — restart a chapter while retaining specific knowledge flags so replays feel like dramatic irony

🌸 v2.0 — Immersion Layer
These make the atmosphere feel complete:

Character sprites with mood states — portraits that swap expression based on the mood key in dialogue lines

Per-scene BGM crossfade — one audio key per scene definition; huge atmosphere boost for minimal code

Historical footnote overlays — after key scenes (Okehazama, Honnō-ji), show a brief real-history callout panel

Screen shake / flash on dramatic moments — one CSS class trigger on betrayal/battle scenes

Multiple POV chapters — experience scenes from Mitsuhide, Hideyoshi, or Ieyasu's perspective

💰 v2.5 — Monetization & Growth
