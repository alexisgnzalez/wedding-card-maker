// Curated font collection for luxury wedding stationery
export const FONT_PRESETS = [
  // Scripts / Calligraphy
  { id: 'alex-brush', name: 'Alex Brush', family: "'Alex Brush', cursive", category: 'script', google: 'Alex+Brush' },
  { id: 'great-vibes', name: 'Great Vibes', family: "'Great Vibes', cursive", category: 'script', google: 'Great+Vibes' },
  { id: 'pinyon-script', name: 'Pinyon Script', family: "'Pinyon Script', cursive", category: 'script', google: 'Pinyon+Script' },
  { id: 'allura', name: 'Allura', family: "'Allura', cursive", category: 'script', google: 'Allura' },
  { id: 'parisienne', name: 'Parisienne', family: "'Parisienne', cursive", category: 'script', google: 'Parisienne' },
  { id: 'dancing-script', name: 'Dancing Script', family: "'Dancing Script', cursive", category: 'script', google: 'Dancing+Script:wght@500;700' },
  { id: 'monte-carlo', name: 'MonteCarlo', family: "'MonteCarlo', cursive", category: 'script', google: 'MonteCarlo' },

  // Luxury Serifs & Editorial
  { id: 'cormorant', name: 'Cormorant Garamond', family: "'Cormorant Garamond', serif", category: 'serif', google: 'Cormorant+Garamond:ital,wght@0,400;0,600;1,400' },
  { id: 'cinzel', name: 'Cinzel', family: "'Cinzel', serif", category: 'serif', google: 'Cinzel:wght@400;600;700' },
  { id: 'playfair', name: 'Playfair Display', family: "'Playfair Display', serif", category: 'serif', google: 'Playfair+Display:ital,wght@0,400;0,600;1,400' },
  { id: 'prata', name: 'Prata', family: "'Prata', serif", category: 'serif', google: 'Prata' },
  { id: 'marcellus', name: 'Marcellus', family: "'Marcellus', serif", category: 'serif', google: 'Marcellus' },
  { id: 'italiana', name: 'Italiana', family: "'Italiana', serif", category: 'serif', google: 'Italiana' },

  // Clean Sans for dates & subtitles
  { id: 'montserrat', name: 'Montserrat', family: "'Montserrat', sans-serif", category: 'sans', google: 'Montserrat:wght@300;400;500;600' },
  { id: 'jost', name: 'Jost', family: "'Jost', sans-serif", category: 'sans', google: 'Jost:wght@300;400;500' },
];

export function getFontFamily(fontId) {
  const found = FONT_PRESETS.find(f => f.id === fontId);
  return found ? found.family : "'Alex Brush', cursive";
}

export function getGoogleFontsUrl() {
  const families = FONT_PRESETS.map(f => `family=${f.google}`).join('&');
  return `https://fonts.googleapis.com/css2?${families}&display=swap`;
}
