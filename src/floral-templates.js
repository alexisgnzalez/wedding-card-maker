// Museum-Grade Authentic Watercolor & Gold Foil Wedding Stationery Templates
import { ASSETS } from './assets-data.js';

export const THEMES = [
  {
    id: 'crescent-watercolor',
    name: 'Acuarela Rosas Blush & Eucalipto (Canva Novia)',
    shortName: 'Rosas Blush & Eucalipto',
    badge: 'Canva Novia',
    description: 'Composición botánica nupcial idéntica a Canva con rosas blush, aro en pan de oro, divisor de hojas doradas con corazón y laurel de acuarela.',
    recommendedFonts: {
      names: 'alex-brush',
      ampersand: 'alex-brush',
      greeting: 'alex-brush',
      highlight: 'alex-brush',
      body: 'cormorant',
      date: 'cormorant',
    },
    colors: {
      bg: '#FCFAF7',
      names: '#24201E',
      ampersand: '#B5874A',
      greeting: '#24201E',
      highlight: '#24201E',
      body: '#302A27',
      date: '#24201E',
      flourish: '#B5874A',
      borderRing: 'transparent',
    },
    layout: 'crescent-authentic',
    defaultDate: '19. 11. 2026'
  },
  {
    id: 'geometric-eucalyptus',
    name: 'Marco Geométrico Dorado & Eucalipto (Variante 1)',
    shortName: 'Geométrico & Eucalipto',
    badge: 'Gemini Var 1',
    description: 'Marco poligonal geométrico en líneas de oro con ramas de eucalipto en acuarela, corazón dorado con rama de olivo y tipografía clásica serif.',
    recommendedFonts: {
      names: 'tenor-sans',
      ampersand: 'cormorant',
      greeting: 'alex-brush',
      highlight: 'alex-brush',
      body: 'cormorant',
      date: 'cormorant',
    },
    colors: {
      bg: '#F4F4EF',
      names: '#24201E',
      ampersand: '#B5874A',
      greeting: '#24201E',
      highlight: '#24201E',
      body: '#302A27',
      date: '#24201E',
      flourish: '#B5874A',
      borderRing: 'transparent',
    },
    layout: 'geometric-eucalyptus',
    defaultDate: '19. 11. 2026'
  },
  {
    id: 'wild-lavender',
    name: 'Lavanda Silvestre & Polvo de Oro (Variante 5)',
    shortName: 'Lavanda Silvestre & Oro',
    badge: 'Gemini Var 5',
    description: 'Pradera botánica en acuarela con espigas de lavanda, margaritas silvestres, lluvia de polvo de oro y corazón doodle botánico.',
    recommendedFonts: {
      names: 'parisienne',
      ampersand: 'parisienne',
      greeting: 'parisienne',
      highlight: 'parisienne',
      body: 'cormorant',
      date: 'cormorant',
    },
    colors: {
      bg: '#F7F7F2',
      names: '#221E1D',
      ampersand: '#B5874A',
      greeting: '#221E1D',
      highlight: '#221E1D',
      body: '#302A27',
      date: '#221E1D',
      flourish: '#2D2825',
      borderRing: 'transparent',
    },
    layout: 'wild-lavender',
    defaultDate: '19. 11. 2026'
  },
  {
    id: 'monogram-terracotta',
    name: 'Sello Monograma Terracota & Pan de Oro',
    shortName: 'Sello Monograma Terracota',
    badge: 'Editorial SM',
    description: 'Sello circular en terracota con monograma SM en pan de oro, doble aro dorado concéntrico y tipografía de alta costura Tenor Sans.',
    recommendedFonts: {
      names: 'tenor-sans',
      ampersand: 'tenor-sans',
      greeting: 'alex-brush',
      highlight: 'alex-brush',
      body: 'alex-brush',
      date: 'tenor-sans',
    },
    colors: {
      bg: '#FBF9F5',
      names: '#99773D',
      ampersand: '#99773D',
      greeting: '#B5874A',
      highlight: '#B5874A',
      body: '#99773D',
      date: '#99773D',
      flourish: '#C59B27',
      borderRing: '#C59B27',
    },
    layout: 'monogram-gold',
    defaultDate: '19. 11. 2026'
  },
  {
    id: 'minimal-monogram',
    name: 'Editorial Terracota & Pan de Oro Minimalista',
    shortName: 'Terracota Minimalista',
    badge: 'Minimal SM',
    description: 'Lujo sobrio contemporáneo con sello repujado en terracota, tipografía editorial Tenor Sans y aro en pan de oro.',
    recommendedFonts: {
      names: 'tenor-sans',
      ampersand: 'tenor-sans',
      greeting: 'alex-brush',
      highlight: 'alex-brush',
      body: 'forum',
      date: 'tenor-sans',
    },
    colors: {
      bg: '#FAF8F4',
      names: '#26211F',
      ampersand: '#B5874A',
      greeting: '#B5874A',
      highlight: '#B5874A',
      body: '#38312E',
      date: '#26211F',
      flourish: '#B5874A',
      borderRing: '#D4AF37',
    },
    layout: 'minimal-seal',
    defaultDate: '19. 11. 2026'
  }
];

export function getSvgDefs() {
  return `
    <defs>
      <!-- Drop shadows for realistic paper depth -->
      <filter id="soft-shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.12" flood-color="#3d2a24"/>
      </filter>

      <filter id="seal-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="3" stdDeviation="4" flood-opacity="0.25" flood-color="#542e20"/>
      </filter>

      <!-- Multi-Stop Metallic Gold Foil Gradients (userSpaceOnUse for 100% stroke & line support) -->
      <linearGradient id="gold-foil" gradientUnits="userSpaceOnUse" x1="40" y1="40" x2="460" y2="460">
        <stop offset="0%" stop-color="#EED79A"/>
        <stop offset="25%" stop-color="#D4AF37"/>
        <stop offset="50%" stop-color="#FFF3CE"/>
        <stop offset="75%" stop-color="#AA7F1A"/>
        <stop offset="100%" stop-color="#E5C158"/>
      </linearGradient>

      <linearGradient id="rose-gold-foil" gradientUnits="userSpaceOnUse" x1="40" y1="40" x2="460" y2="460">
        <stop offset="0%" stop-color="#F8D3C5"/>
        <stop offset="40%" stop-color="#D99B87"/>
        <stop offset="70%" stop-color="#FFF0EB"/>
        <stop offset="85%" stop-color="#B76E5B"/>
        <stop offset="100%" stop-color="#F3C5B5"/>
      </linearGradient>

      <!-- Metallic Tagpin Eyelet Gradient -->
      <linearGradient id="pin-gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFF1C5"/>
        <stop offset="50%" stop-color="#D4AF37"/>
        <stop offset="100%" stop-color="#8C6A18"/>
      </linearGradient>
    </defs>
  `;
}

// Renderers for each layout artwork background
export function renderFloralBackground(layout, customColors = {}, isCustomText = false) {
  switch (layout) {
    case 'crescent-authentic':
      // Pristine 1:1 Canva Novia Masterpiece OR clean template for custom text
      const blushSrc = isCustomText ? ASSETS.crescentBlushPng : (ASSETS.crescentBlushMasterPng || ASSETS.crescentBlushPng);
      return `
        <!-- Authentic Crescent Blush Rose Masterpiece Template -->
        <g id="authentic-crescent-group">
          <image href="${blushSrc}" x="0" y="0" width="500" height="500" preserveAspectRatio="xMidYMid meet"/>
        </g>
      `;

    case 'geometric-eucalyptus':
      // Pristine 1:1 Gemini Variant 1 Masterpiece OR clean template for custom text
      const v1Src = isCustomText ? ASSETS.geometricEucalyptusPng : (ASSETS.geometricEucalyptusMasterPng || ASSETS.geometricEucalyptusPng);
      return `
        <!-- Geometric Gold Frame & Eucalyptus Template (Variant 1) -->
        <g id="geometric-eucalyptus-group">
          <image href="${v1Src}" x="0" y="0" width="500" height="500" preserveAspectRatio="xMidYMid meet"/>
        </g>
      `;

    case 'wild-lavender':
      // Pristine 1:1 Gemini Variant 5 Masterpiece OR clean template for custom text
      const v5Src = isCustomText ? ASSETS.wildLavenderPng : (ASSETS.wildLavenderMasterPng || ASSETS.wildLavenderPng);
      return `
        <!-- Wild Botanical Lavender & Daisies Template (Variant 5) -->
        <g id="wild-lavender-group">
          <image href="${v5Src}" x="0" y="0" width="500" height="500" preserveAspectRatio="xMidYMid meet"/>
        </g>
      `;

    case 'monogram-gold':
      // Terracotta SM Seal + Double Gold Ring
      return `
        <!-- Double Fine Gold Foil Concentric Rings -->
        <g id="monogram-gold-rings">
          <circle cx="250" cy="250" r="236" fill="none" stroke="url(#gold-foil)" stroke-width="1.8"/>
          <circle cx="250" cy="250" r="231" fill="none" stroke="url(#gold-foil)" stroke-width="0.8" opacity="0.75"/>
          
          <!-- Authentic Terracotta SM Seal Medallion -->
          <g filter="url(#seal-shadow)">
            <image href="${ASSETS.sealPng}" x="216" y="38" width="68" height="68" preserveAspectRatio="xMidYMid meet"/>
          </g>
        </g>
      `;

    case 'minimal-seal':
    default:
      // Minimalist Terracotta Monogram + Fine Line Ring
      return `
        <g id="minimal-monogram-group">
          <circle cx="250" cy="250" r="236" fill="none" stroke="url(#gold-foil)" stroke-width="1.6" opacity="0.75"/>
          <circle cx="250" cy="250" r="231" fill="none" stroke="url(#gold-foil)" stroke-width="0.8" opacity="0.5"/>
          <g filter="url(#seal-shadow)">
            <image href="${ASSETS.sealPng}" x="216" y="44" width="68" height="68" preserveAspectRatio="xMidYMid meet"/>
          </g>
        </g>
      `;
  }
}

// Romantic Top Flourish: ~ ♡ ~
export function renderTopHeartFlourish(x = 250, y = 108, color = '#A47C48') {
  return `
    <g id="top-heart-flourish" transform="translate(${x}, ${y})">
      <path d="M-42,0 C-30,-7 -18,6 -8,0" fill="none" stroke="${color}" stroke-width="1.3" stroke-linecap="round"/>
      <path d="M-1.5,-4 C-3.5,-7 -7,-7 -7,-4 C-7,-1 -1.5,4 0,5.5 C1.5,4 7,-1 7,-4 C7,-7 3.5,-7 1.5,-4 Z" fill="${color}"/>
      <path d="M8,0 C18,6 30,-7 42,0" fill="none" stroke="${color}" stroke-width="1.3" stroke-linecap="round"/>
    </g>
  `;
}

// Delicate Hollow Heart Divider: — ♡ —
export function renderDelicateHollowHeartDivider(x = 250, y = 188, color = '#B5874A') {
  return `
    <g id="heart-divider-gold" transform="translate(${x}, ${y})">
      <line x1="-58" y1="0" x2="-14" y2="0" stroke="${color}" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M0,5.2 C-1.2,4 -6,-0.6 -6,-3.6 C-6,-6.2 -3,-6.2 0,-3.8 C3,-6.2 6,-6.2 6,-3.6 C6,-0.6 1.2,4 0,5.2 Z" 
            fill="none" stroke="${color}" stroke-width="1.4" stroke-linejoin="round"/>
      <line x1="14" y1="0" x2="58" y2="0" stroke="${color}" stroke-width="1.2" stroke-linecap="round"/>
    </g>
  `;
}

// Hand-Drawn Doodle Heart with Leaf Twigs for Variant 5: 🌿 ♡ 🌿
export function renderDoodleHeartFlourish(x = 264, y = 176, color = '#2D2825') {
  return `
    <g id="doodle-heart-flourish" transform="translate(${x}, ${y})">
      <!-- Left Twig -->
      <path d="M-38,0 C-26,-4 -18,2 -10,0" fill="none" stroke="${color}" stroke-width="1.2" stroke-linecap="round"/>
      <circle cx="-28" cy="-3" r="1.6" fill="${color}"/>
      <circle cx="-19" cy="2" r="1.4" fill="${color}"/>

      <!-- Whimsical Center Heart -->
      <path d="M0,6 C-1.5,4.5 -7,-0.5 -7,-4 C-7,-7 -3.5,-7 0,-4.2 C3.5,-7 7,-7 7,-4 C7,-0.5 1.5,4.5 0,6 Z" 
            fill="none" stroke="${color}" stroke-width="1.4" stroke-linejoin="round"/>

      <!-- Right Twig -->
      <path d="M10,0 C18,2 26,-4 38,0" fill="none" stroke="${color}" stroke-width="1.2" stroke-linecap="round"/>
      <circle cx="19" cy="2" r="1.4" fill="${color}"/>
      <circle cx="28" cy="-3" r="1.6" fill="${color}"/>
    </g>
  `;
}

// Gold Heart with Olive Sprig for Variant 1
export function renderGoldHeartWithSprig(x = 250, y = 196) {
  return `
    <g id="gold-heart-sprig" transform="translate(${x}, ${y})">
      <!-- Small Gold Heart -->
      <path d="M-6,3.5 C-7,2.5 -11,-1 -11,-3.5 C-11,-5.5 -8.5,-5.5 -6,-3.5 C-3.5,-5.5 -1,-5.5 -1,-3.5 C-1,-1 -5,2.5 -6,3.5 Z" 
            fill="url(#gold-foil)"/>
      <!-- Right Olive Leaves -->
      <path d="M0,0 C6,-3 14,-2 22,-1" fill="none" stroke="#7A8F76" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M6,-1 C8,-4 13,-4 13,-1 C13,2 8,2 6,-1 Z" fill="#7A8F76"/>
      <path d="M14,-1.5 C16,-5 20,-4 19,-1 C18,2 15,1 14,-1.5 Z" fill="#95A68F"/>
      <path d="M21,-1 C23,-3 26,-2 25,0 C24,2 22,1 21,-1 Z" fill="#84997E"/>
    </g>
  `;
}

// Watercolor Laurel Bottom Divider with Pink Heart
export function renderWatercolorLaurelDivider(x = 250, y = 410) {
  return `
    <g id="watercolor-laurel-bottom" transform="translate(${x}, ${y})">
      <!-- Subtle Watercolor Leaflets (Left) -->
      <path d="M-52,0 C-36,5 -20,-3 -8,0" fill="none" stroke="#8A9E88" stroke-width="1.1" stroke-linecap="round"/>
      <ellipse cx="-38" cy="2" rx="4.5" ry="2.2" transform="rotate(-25, -38, 2)" fill="#8A9E88" opacity="0.85"/>
      <ellipse cx="-25" cy="-1.5" rx="4" ry="2" transform="rotate(20, -25, -1.5)" fill="#688466" opacity="0.85"/>
      <ellipse cx="-13" cy="1" rx="3.5" ry="1.8" transform="rotate(-15, -13, 1)" fill="#8A9E88" opacity="0.85"/>

      <!-- Center Dusty Rose Watercolor Heart -->
      <path d="M0,5 C-1.2,3.8 -6,-0.5 -6,-3.5 C-6,-6 -3,-6 0,-3.5 C3,-6 6,-6 6,-3.5 C6,-0.5 1.2,3.8 0,5 Z" 
            fill="#B57277" opacity="0.9"/>

      <!-- Subtle Watercolor Leaflets (Right) -->
      <path d="M8,0 C20,-3 36,5 52,0" fill="none" stroke="#8A9E88" stroke-width="1.1" stroke-linecap="round"/>
      <ellipse cx="13" cy="1" rx="3.5" ry="1.8" transform="rotate(15, 13, 1)" fill="#8A9E88" opacity="0.85"/>
      <ellipse cx="25" cy="-1.5" rx="4" ry="2" transform="rotate(-20, 25, -1.5)" fill="#688466" opacity="0.85"/>
      <ellipse cx="38" cy="2" rx="4.5" ry="2.2" transform="rotate(25, 38, 2)" fill="#8A9E88" opacity="0.85"/>
    </g>
  `;
}

// Hole Punch Guide and Pin
export function renderHoleGuide(options = {}) {
  const {
    showHole = false,
    showGuide = false,
    holeX = 250,
    holeY = 32,
    holeRadius = 16,
    showPin = false
  } = options;

  if (!showHole && !showGuide && !showPin) return '';

  return `
    <g id="hole-punch-layer">
      <!-- Top Hole Guide (Dotted Cutline for Print Shop) -->
      ${showGuide ? `
        <circle cx="${holeX}" cy="${holeY}" r="${holeRadius}" 
                fill="none" stroke="#B08D57" stroke-width="1" stroke-dasharray="3,3" opacity="0.75"/>
      ` : ''}

      <!-- Clean Die-Cut Hole (Simulating physical punch cutout) -->
      ${showHole ? `
        <circle cx="${holeX}" cy="${holeY}" r="${holeRadius}" fill="#2D2A28" opacity="0.95"/>
        <circle cx="${holeX}" cy="${holeY}" r="${holeRadius + 1.2}" fill="none" stroke="#E6C875" stroke-width="1" opacity="0.85"/>
      ` : ''}

      <!-- Luxury Metallic Ribbon Pin (Pasador dorado decorativo) -->
      ${showPin ? `
        <g id="ribbon-pin-group">
          <circle cx="${holeX}" cy="${holeY}" r="${holeRadius + 4}" fill="url(#pin-gold)" filter="url(#soft-shadow)"/>
          <circle cx="${holeX}" cy="${holeY}" r="${holeRadius - 2}" fill="#26211E"/>
          <circle cx="${holeX}" cy="${holeY}" r="${holeRadius - 4}" fill="none" stroke="#FFF0D0" stroke-width="0.8" opacity="0.6"/>
        </g>
      ` : ''}
    </g>
  `;
}
