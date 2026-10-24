// Curated font collection for luxury wedding stationery
export const FONT_PRESETS = [
  // Scripts / Calligraphy
  { id: 'alex-brush', name: 'Alex Brush (Caligrafía Clásica)', family: "'Alex Brush', cursive", category: 'script', google: 'Alex+Brush' },
  { id: 'playball', name: 'Playball (Cursiva Sólida de Imprenta)', family: "'Playball', cursive", category: 'script', google: 'Playball' },
  { id: 'great-vibes', name: 'Great Vibes (Manuscrita Fluida)', family: "'Great Vibes', cursive", category: 'script', google: 'Great+Vibes' },
  { id: 'pinyon-script', name: 'Pinyon Script (Cursiva Aristocrática)', family: "'Pinyon Script', cursive", category: 'script', google: 'Pinyon+Script' },
  { id: 'allura', name: 'Allura (Romance Suave)', family: "'Allura', cursive", category: 'script', google: 'Allura' },
  { id: 'parisienne', name: 'Parisienne (Elegancia Francesa)', family: "'Parisienne', cursive", category: 'script', google: 'Parisienne' },
  { id: 'dancing-script', name: 'Dancing Script (Orgánica)', family: "'Dancing Script', cursive", category: 'script', google: 'Dancing+Script:wght@500;700' },
  { id: 'monte-carlo', name: 'MonteCarlo (Caligrafía de Época)', family: "'MonteCarlo', cursive", category: 'script', google: 'MonteCarlo' },

  // Luxury Serifs & Editorial Display
  { id: 'forum', name: 'Forum (Romana Artesanal — Referencia Novia)', family: "'Forum', serif", category: 'serif', google: 'Forum' },
  { id: 'tenor-sans', name: 'Tenor Sans (Editorial Alta Costura)', family: "'Tenor Sans', sans-serif", category: 'serif', google: 'Tenor+Sans' },
  { id: 'cormorant', name: 'Cormorant Garamond (Serif Nupcial)', family: "'Cormorant Garamond', serif", category: 'serif', google: 'Cormorant+Garamond:ital,wght@0,400;0,600;1,400' },
  { id: 'playfair', name: 'Playfair Display (Titular de Lujo)', family: "'Playfair Display', serif", category: 'serif', google: 'Playfair+Display:ital,wght@0,400;0,600;1,400' },
  { id: 'cinzel', name: 'Cinzel (Imperial Romano)', family: "'Cinzel', serif", category: 'serif', google: 'Cinzel:wght@400;600;700' },
  { id: 'prata', name: 'Prata (Didona Elegante)', family: "'Prata', serif", category: 'serif', google: 'Prata' },
  { id: 'marcellus', name: 'Marcellus (Escultura Clásica)', family: "'Marcellus', serif", category: 'serif', google: 'Marcellus' },
  { id: 'italiana', name: 'Italiana (Moda Milanesa)', family: "'Italiana', serif", category: 'serif', google: 'Italiana' },

  // Clean Sans for dates & subtitles
  { id: 'montserrat', name: 'Montserrat (Geométrica Limpia)', family: "'Montserrat', sans-serif", category: 'sans', google: 'Montserrat:wght@400;500;600;700' },
  { id: 'jost', name: 'Jost (Moderna Proporcionada)', family: "'Jost', sans-serif", category: 'sans', google: 'Jost:wght@400;500;600' },
];

export function getFontFamily(fontId) {
  const found = FONT_PRESETS.find(f => f.id === fontId);
  return found ? found.family : "'Alex Brush', cursive";
}

export function getGoogleFontsUrl() {
  const families = FONT_PRESETS.map(f => `family=${f.google}`).join('&');
  return `https://fonts.googleapis.com/css2?${families}&display=swap`;
}

