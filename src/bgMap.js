export const BG_MAP = {
  // --- Owari / Early Game (Ch1) ---
  owari_plains_dusk:               'bg-field',
  owari_province_dawn:             'bg-dawn',
  owari_armory_night:              'bg-night',
  owari_castle_interior:           'bg-court',
  owari_castle_exterior:           'bg-field',
  owari_road_afternoon:            'bg-field',
  owari_border_storm:              'bg-battle',
  owari_castle_night:              'bg-night',
  owari_castle_night_rain:         'bg-night',
  owari_castle_armory_night:       'bg-night',

  // --- Nagashino (Ch1) ---
  nagashino_ruins_dusk:            'bg-night',
  nagashino_ruins_ash:             'bg-field',
  nagashino_river_low:             'bg-water',

  // --- Okehazama (Ch1) ---
  okehazama_gorge_storm:           'bg-battle',
  okehazama_aftermath_dawn:        'bg-dawn',
  okehazama_battlefield:           'bg-battle',
  okehazama_aftermath:             'bg-dawn',

  // --- Mino Campaign (Ch2–4, Ch9) ---
  mino_border_morning_mist:        'bg-field',
  mino_command_tent_predawn:       'bg-night',
  mino_eastern_pass_sunrise:       'bg-dawn',
  mino_province_evening_wall:      'bg-field',
  mino_border_autumn_fog:          'bg-field',
  mino_dosan_manor:                'bg-court',
  mino_garden_autumn:              'bg-field',
  mino_garden_autumn_late:         'bg-field',
  mino_garden_sunset:              'bg-field',
  mino_road_evening:               'bg-field',
  mino_border_pass_tense:          'bg-field',
  mino_border_pass_skirmish:       'bg-battle',
  mino_border_pass_clear:          'bg-dawn',
  mino_border_retreat:             'bg-field',
  mino_border_negotiation:         'bg-field',
  mino_yoshitatsu_army_road:       'bg-battle',

  // --- Inabayama / Gifu (Ch9) ---
  inabayama_castle_siege:          'bg-battle',
  inabayama_castle_banner_raised:  'bg-dawn',

  // --- Kyoto / Court (Ch5–8) ---
  kyoto_road_arrival:              'bg-court',
  kyoto_imperial_gate:             'bg-court',
  kyoto_streets_market:            'bg-court',
  kyoto_approach_road_summer:      'bg-field',
  shogunate_audience_hall:         'bg-court',

  // --- Mountain / Hidden (Ch7–8) ---
  mountain_pass_hidden:            'bg-night',

  // --- Azuchi Castle (Ch12) ---
  azuchi_castle_summit_dawn:       'bg-dawn',
  azuchi_castle_audience_hall:     'bg-court',
  azuchi_castle_map_room:          'bg-court',
  azuchi_castle_lake_night:        'bg-night',
  azuchi_castle_garden_autumn:     'bg-field',
  gifu_castle_tower_night:         'bg-night',

  // --- Honnoji / Ch13 ---
  honnoji_temple_night_arrival:    'bg-temple',
  honnoji_temple_courtyard_torches:'bg-battle',
  honnoji_inner_hall_smoke:        'bg-battle',
  honnoji_inner_hall_desk:         'bg-battle',
  honnoji_burning_inner_hall:      'bg-battle',
  honnoji_burning_final:           'bg-battle',
  honnoji_dawn_aftermath:          'bg-dawn',
  honnoji_temple_gate_night:       'bg-temple',
  honnoji_temple_gate_dawn:        'bg-dawn',

  // --- Endings (Ch13) ---
  kyoto_street_market_dawn:        'bg-court',
  gifu_castle_garden_evening:      'bg-night',

  // --- Maps / Scrolls ---
  japan_map_painted_scroll:        'bg-map',

  default:                         'bg-default',
};

export const BG_CLASSES = [...new Set(Object.values(BG_MAP))];