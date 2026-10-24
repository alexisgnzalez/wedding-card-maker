// Exquisite vector illustrations and floral arrangements for wedding cards
// Optimized for 500x500 viewBox (representing 5cm x 5cm circular tag)

export const THEMES = [
  {
    id: 'crescent-blush',
    name: 'Media Luna Rosas & Eucalipto (Inspiración Original)',
    description: 'Arco botánico en acuarela blush y salvia en el lateral izquierdo, fiel al diseño de referencia con espacio central equilibrado.',
    recommendedFonts: {
      names: 'alex-brush',
      subtitle: 'cormorant',
      highlight: 'alex-brush',
      body: 'cormorant',
      date: 'montserrat',
    },
    colors: {
      bg: '#FAF8F5',
      names: '#2C2523',
      ampersand: '#C28B59',
      highlight: '#B87B4C',
      body: '#5A524D',
      date: '#7D736A',
      flourish: '#C28B59',
      borderRing: 'transparent',
    },
    layout: 'crescent'
  },
  {
    id: 'full-wreath',
    name: 'Corona Floral Completa',
    description: 'Guirnalda circular completa de 360 grados con rosas champagne, flores silvestres y hojas de eucalipto.',
    recommendedFonts: {
      names: 'great-vibes',
      subtitle: 'playfair',
      highlight: 'great-vibes',
      body: 'cormorant',
      date: 'cinzel',
    },
    colors: {
      bg: '#FCFAF7',
      names: '#231F20',
      ampersand: '#D4AF37',
      highlight: '#9B5B53',
      body: '#4A443F',
      date: '#6B635B',
      flourish: '#D4AF37',
      borderRing: '#E8DFD3',
    },
    layout: 'wreath'
  },
  {
    id: 'twin-bouquets',
    name: 'Doble Ramillete & Anillo Dorado',
    description: 'Doble aro geométrico en oro cepillado con ramilletes de rosas blush en las esquinas superior e inferior.',
    recommendedFonts: {
      names: 'pinyon-script',
      subtitle: 'cinzel',
      highlight: 'pinyon-script',
      body: 'cormorant',
      date: 'cinzel',
    },
    colors: {
      bg: '#FDFCF7',
      names: '#1F1E1D',
      ampersand: '#C59B27',
      highlight: '#A7695B',
      body: '#4F4842',
      date: '#5E564F',
      flourish: '#C59B27',
      borderRing: '#D4AF37',
    },
    layout: 'twin'
  },
  {
    id: 'arch-garden',
    name: 'Arco Botánico Superior',
    description: 'Arco frondoso de peonías y eucalipto en la parte superior con caída orgánica y detalles en oro.',
    recommendedFonts: {
      names: 'allura',
      subtitle: 'prata',
      highlight: 'allura',
      body: 'marcellus',
      date: 'montserrat',
    },
    colors: {
      bg: '#F8F9F7',
      names: '#2A2E2B',
      ampersand: '#B8860B',
      highlight: '#966159',
      body: '#484E49',
      date: '#636C65',
      flourish: '#B8860B',
      borderRing: 'transparent',
    },
    layout: 'arch'
  },
  {
    id: 'minimal-crest',
    name: 'Elegancia Minimalista & Monograma',
    description: 'Diseño sobrio y vanguardista con corona de laurel y corazón estilizado, tipografía editorial protagonista.',
    recommendedFonts: {
      names: 'cinzel',
      subtitle: 'montserrat',
      highlight: 'alex-brush',
      body: 'cormorant',
      date: 'montserrat',
    },
    colors: {
      bg: '#FFFFFF',
      names: '#1A1A1A',
      ampersand: '#C89758',
      highlight: '#8A5D3B',
      body: '#404040',
      date: '#666666',
      flourish: '#C89758',
      borderRing: '#E6D7C3',
    },
    layout: 'crest'
  }
];

// SVG Definitions for Gradients, Shadows and Filters
export function getSvgDefs() {
  return `
    <defs>
      <!-- Drop shadows for paper effect -->
      <filter id="soft-shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.12" flood-color="#3d2a24"/>
      </filter>

      <!-- Rose Petals Gradients -->
      <radialGradient id="rose-blush-center" cx="45%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#FFF0ED"/>
        <stop offset="35%" stop-color="#F7C9C2"/>
        <stop offset="70%" stop-color="#E89F95"/>
        <stop offset="100%" stop-color="#C7756B"/>
      </radialGradient>

      <linearGradient id="rose-petal-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFF5F2"/>
        <stop offset="50%" stop-color="#F5CECA"/>
        <stop offset="100%" stop-color="#D98E84"/>
      </linearGradient>

      <linearGradient id="rose-petal-grad-2" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#F2BFB8"/>
        <stop offset="60%" stop-color="#EAAFA6"/>
        <stop offset="100%" stop-color="#FFF0EB"/>
      </linearGradient>

      <!-- Cream / Ivory Rose Gradient -->
      <radialGradient id="cream-rose-grad" cx="40%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#FFFFFA"/>
        <stop offset="40%" stop-color="#F6EFE3"/>
        <stop offset="75%" stop-color="#E8DCB9"/>
        <stop offset="100%" stop-color="#CBB792"/>
      </radialGradient>

      <!-- Eucalyptus Foliage Gradients -->
      <linearGradient id="eucalyptus-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#C8D6BE"/>
        <stop offset="45%" stop-color="#93A987"/>
        <stop offset="100%" stop-color="#607755"/>
      </linearGradient>

      <linearGradient id="eucalyptus-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#B2C4A7"/>
        <stop offset="50%" stop-color="#7C9470"/>
        <stop offset="100%" stop-color="#4C6242"/>
      </linearGradient>

      <linearGradient id="olive-leaf-grad" x1="0%" y1="0%" x2="100%" y2="80%">
        <stop offset="0%" stop-color="#D0DCBC"/>
        <stop offset="50%" stop-color="#A4B38C"/>
        <stop offset="100%" stop-color="#72825B"/>
      </linearGradient>

      <!-- Gold Foil Gradient -->
      <linearGradient id="gold-foil" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#EED79A"/>
        <stop offset="35%" stop-color="#D4AF37"/>
        <stop offset="70%" stop-color="#AA7F1A"/>
        <stop offset="100%" stop-color="#F7E2B0"/>
      </linearGradient>

      <!-- Rose Gold Foil -->
      <linearGradient id="rose-gold-foil" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#F8D3C5"/>
        <stop offset="40%" stop-color="#D99B87"/>
        <stop offset="75%" stop-color="#B76E5B"/>
        <stop offset="100%" stop-color="#F3C5B5"/>
      </linearGradient>

      <!-- Metallic Tagpin Gradient -->
      <linearGradient id="pin-gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFF1C5"/>
        <stop offset="50%" stop-color="#D4AF37"/>
        <stop offset="100%" stop-color="#8C6A18"/>
      </linearGradient>
    </defs>
  `;
}

// Reusable botanical components
export function renderBlushRose(x, y, scale = 1, rotation = 0) {
  return `
    <g transform="translate(${x}, ${y}) scale(${scale}) rotate(${rotation})" filter="url(#soft-shadow)">
      <!-- Outer Petals -->
      <path d="M-35,-15 C-42,-2 0,42 22,35 C42,28 45,-15 25,-32 C5,-45 -28,-30 -35,-15 Z" fill="url(#rose-petal-grad-1)" opacity="0.95"/>
      <path d="M-28,-25 C-45,-10 -35,28 -15,38 C10,45 38,20 35,-10 C32,-35 -10,-40 -28,-25 Z" fill="url(#rose-blush-center)" opacity="0.9"/>
      <path d="M-22,12 C-32,32 12,42 28,26 C40,12 25,-25 8,-28 C-12,-32 -12,-5 -22,12 Z" fill="url(#rose-petal-grad-2)" opacity="0.92"/>
      
      <!-- Middle Cupped Petals -->
      <path d="M-18,-8 C-25,12 -5,28 15,22 C28,15 26,-12 10,-20 C-5,-25 -12,-18 -18,-8 Z" fill="url(#rose-blush-center)"/>
      <path d="M-12,-16 C-22,-4 -12,18 6,18 C20,18 20,-8 5,-15 C-5,-20 -7,-22 -12,-16 Z" fill="url(#rose-petal-grad-1)"/>
      <path d="M-8,-2 C-15,10 2,16 12,10 C18,5 15,-10 4,-12 C-4,-14 -5,-8 -8,-2 Z" fill="#D98E84" opacity="0.85"/>
      
      <!-- Core Spiral -->
      <path d="M-4,-4 C-8,4 2,8 7,4 C11,0 8,-7 2,-7 C-3,-7 -2,-6 -4,-4 Z" fill="#AA5B50"/>
      <path d="M-1,-2 C-3,2 2,4 4,2 C6,0 4,-3 1,-3 Z" fill="#84392F"/>
    </g>
  `;
}

export function renderCreamRose(x, y, scale = 1, rotation = 0) {
  return `
    <g transform="translate(${x}, ${y}) scale(${scale}) rotate(${rotation})">
      <path d="M-28,-12 C-35,5 -5,35 18,28 C34,22 36,-12 20,-26 C4,-36 -22,-24 -28,-12 Z" fill="url(#cream-rose-grad)" opacity="0.95"/>
      <path d="M-20,-18 C-32,-5 -22,22 -6,28 C12,32 30,12 24,-10 C18,-26 -8,-28 -20,-18 Z" fill="#FDFBF7" opacity="0.9"/>
      <path d="M-14,-6 C-20,10 -2,22 12,16 C22,10 18,-10 6,-15 C-6,-18 -9,-12 -14,-6 Z" fill="url(#cream-rose-grad)"/>
      <path d="M-6,-3 C-10,5 2,10 8,5 C12,2 9,-6 2,-7 C-4,-8 -4,-5 -6,-3 Z" fill="#BFA77F" opacity="0.85"/>
    </g>
  `;
}

export function renderEucalyptusBranch(x, y, scale = 1, rotation = 0) {
  return `
    <g transform="translate(${x}, ${y}) scale(${scale}) rotate(${rotation})">
      <!-- Main Stem -->
      <path d="M0,0 Q18,-35 25,-85 Q30,-125 15,-160" fill="none" stroke="#68785E" stroke-width="2.2" stroke-linecap="round"/>
      
      <!-- Leaves along stem with delicate shading -->
      <g transform="translate(10, -25) rotate(-35)">
        <ellipse cx="0" cy="0" rx="14" ry="9" fill="url(#eucalyptus-grad-1)"/>
        <path d="M-14,0 L14,0" stroke="#55694B" stroke-width="0.8" opacity="0.7"/>
      </g>
      <g transform="translate(4, -45) rotate(40)">
        <ellipse cx="0" cy="0" rx="16" ry="10" fill="url(#eucalyptus-grad-2)"/>
        <path d="M-16,0 L16,0" stroke="#46583D" stroke-width="0.8" opacity="0.7"/>
      </g>
      <g transform="translate(18, -75) rotate(-28)">
        <ellipse cx="0" cy="0" rx="17" ry="11" fill="url(#eucalyptus-grad-1)"/>
        <path d="M-17,0 L17,0" stroke="#55694B" stroke-width="0.8" opacity="0.7"/>
      </g>
      <g transform="translate(14, -105) rotate(32)">
        <ellipse cx="0" cy="0" rx="15" ry="9" fill="url(#eucalyptus-grad-2)"/>
        <path d="M-15,0 L15,0" stroke="#46583D" stroke-width="0.8" opacity="0.7"/>
      </g>
      <g transform="translate(26, -135) rotate(-15)">
        <ellipse cx="0" cy="0" rx="13" ry="8" fill="url(#eucalyptus-grad-1)"/>
      </g>
      <g transform="translate(15, -160) rotate(5)">
        <ellipse cx="0" cy="0" rx="9" ry="6" fill="url(#eucalyptus-grad-2)"/>
      </g>
    </g>
  `;
}

export function renderGoldenSprig(x, y, scale = 1, rotation = 0) {
  return `
    <g transform="translate(${x}, ${y}) scale(${scale}) rotate(${rotation})">
      <path d="M0,0 Q10,-20 12,-55 Q14,-80 5,-105" fill="none" stroke="url(#gold-foil)" stroke-width="1.6" stroke-linecap="round"/>
      <!-- Golden berries & mini leaves -->
      <circle cx="8" cy="-22" r="3.2" fill="url(#gold-foil)"/>
      <circle cx="3" cy="-38" r="2.8" fill="url(#gold-foil)"/>
      <circle cx="16" cy="-56" r="3.5" fill="url(#gold-foil)"/>
      <circle cx="9" cy="-78" r="3" fill="url(#gold-foil)"/>
      <circle cx="5" cy="-105" r="3.8" fill="url(#gold-foil)"/>
      <!-- Delicate gold leaflets -->
      <path d="M9,-22 Q16,-26 20,-24 Q18,-18 9,-22" fill="url(#gold-foil)"/>
      <path d="M3,-38 Q-5,-42 -8,-40 Q-6,-34 3,-38" fill="url(#gold-foil)"/>
      <path d="M16,-56 Q24,-60 27,-57 Q25,-52 16,-56" fill="url(#gold-foil)"/>
    </g>
  `;
}

// Romantic Heart and Laurels Flourishes
export function renderTopHeartFlourish(y = 96, color = '#C28B59') {
  return `
    <g id="top-heart-flourish" transform="translate(250, ${y})">
      <!-- Center Heart -->
      <path d="M0,-2 C-1.8,-6.5 -7.5,-7.5 -9.5,-3 C-11.5,1.5 -5,7 0,11.5 C5,7 11.5,1.5 9.5,-3 C7.5,-7.5 1.8,-6.5 0,-2 Z" fill="${color}"/>
      
      <!-- Left Swirl -->
      <path d="M-15,4 C-28,4 -42,10 -58,3 C-68,-2 -78,-3 -88,1 C-92,3 -94,6 -91,7 C-88,8 -83,5 -79,4 C-71,2 -64,3 -56,7 C-44,12 -30,8 -17,6" 
            fill="none" stroke="${color}" stroke-width="1.3" stroke-linecap="round"/>
      <circle cx="-92" cy="5" r="1.6" fill="${color}"/>

      <!-- Right Swirl -->
      <path d="M15,4 C28,4 42,10 58,3 C68,-2 78,-3 88,1 C92,3 94,6 91,7 C88,8 83,5 79,4 C71,2 64,3 56,7 C44,12 30,8 17,6" 
            fill="none" stroke="${color}" stroke-width="1.3" stroke-linecap="round"/>
      <circle cx="92" cy="5" r="1.6" fill="${color}"/>
    </g>
  `;
}

export function renderBottomLaurelDivider(y = 428, color = '#C28B59') {
  return `
    <g id="bottom-laurel-divider" transform="translate(250, ${y})">
      <!-- Mini Central Heart -->
      <path d="M0,-1 C-1.2,-4.5 -5,-5 -6.5,-2 C-8,1 -3.5,4.8 0,8 C3.5,4.8 8,1 6.5,-2 C5,-5 1.2,-4.5 0,-1 Z" fill="${color}"/>
      
      <!-- Left side sprig -->
      <path d="M-12,3 L-55,3" stroke="${color}" stroke-width="1" stroke-linecap="round"/>
      <path d="M-22,3 Q-28,-2 -32,0 Q-29,4 -22,3" fill="${color}"/>
      <path d="M-34,3 Q-40,-2 -44,0 Q-41,4 -34,3" fill="${color}"/>
      <circle cx="-59" cy="3" r="1.8" fill="${color}"/>
      
      <!-- Right side sprig -->
      <path d="M12,3 L55,3" stroke="${color}" stroke-width="1" stroke-linecap="round"/>
      <path d="M22,3 Q28,-2 32,0 Q29,4 22,3" fill="${color}"/>
      <path d="M34,3 Q40,-2 44,0 Q41,4 34,3" fill="${color}"/>
      <circle cx="59" cy="3" r="1.8" fill="${color}"/>
    </g>
  `;
}

// Layout Renderers based on selected theme
export function renderFloralBackground(layout, customColors = {}) {
  const flourishColor = customColors.flourish || '#C28B59';

  switch (layout) {
    case 'crescent':
      // Faithfully captures the left floral crescent of the inspiration photo
      return `
        <!-- Crescent Floral Composition (Left side organic arc) -->
        <g id="crescent-floral-group">
          <!-- Background sprigs curving up -->
          ${renderEucalyptusBranch(85, 230, 0.95, -25)}
          ${renderGoldenSprig(115, 175, 0.85, -15)}
          ${renderEucalyptusBranch(65, 330, 0.9, -65)}
          
          <!-- Lower left foliage arc -->
          ${renderGoldenSprig(140, 395, 0.8, -120)}
          ${renderEucalyptusBranch(125, 410, 0.85, -100)}

          <!-- Main Blossom Cluster (Mid-Left) -->
          ${renderBlushRose(95, 275, 1.25, 15)}
          ${renderCreamRose(128, 215, 0.9, -10)}
          ${renderBlushRose(142, 325, 0.85, 45)}
          ${renderCreamRose(82, 345, 0.75, 80)}

          <!-- Small Accent Buds and Leaves -->
          <circle cx="70" cy="195" r="5" fill="#F7C9C2"/>
          <circle cx="150" cy="180" r="4.5" fill="#C8D6BE"/>
          <circle cx="170" cy="365" r="4.5" fill="#F5CECA"/>
          
          <!-- Delicate branch extending to bottom right -->
          ${renderGoldenSprig(180, 435, 0.65, -110)}
        </g>
      `;

    case 'wreath':
      // 360-degree delicate wreath
      return `
        <g id="full-wreath-group">
          <!-- Top Left Arc -->
          ${renderEucalyptusBranch(110, 140, 0.7, -45)}
          ${renderGoldenSprig(180, 85, 0.6, -70)}
          ${renderBlushRose(140, 110, 0.7, -30)}

          <!-- Top Right Arc -->
          ${renderEucalyptusBranch(390, 140, 0.7, 45)}
          ${renderGoldenSprig(320, 85, 0.6, 70)}
          ${renderCreamRose(360, 110, 0.7, 30)}

          <!-- Bottom Left Arc -->
          ${renderEucalyptusBranch(110, 360, 0.7, -135)}
          ${renderGoldenSprig(170, 415, 0.6, -110)}
          ${renderCreamRose(140, 390, 0.75, 150)}

          <!-- Bottom Right Arc -->
          ${renderEucalyptusBranch(390, 360, 0.7, 135)}
          ${renderGoldenSprig(330, 415, 0.6, 110)}
          ${renderBlushRose(360, 390, 0.75, -150)}

          <!-- Side Anchors -->
          ${renderBlushRose(65, 250, 0.75, 0)}
          ${renderCreamRose(435, 250, 0.75, 180)}
        </g>
      `;

    case 'twin':
      // Modern twin bouquets with geometric circle
      return `
        <g id="twin-bouquets-group">
          <!-- Geometric Rings -->
          <circle cx="250" cy="250" r="215" fill="none" stroke="url(#gold-foil)" stroke-width="1.4" opacity="0.85"/>
          <circle cx="250" cy="250" r="208" fill="none" stroke="url(#gold-foil)" stroke-width="0.7" opacity="0.6" stroke-dasharray="3,3"/>

          <!-- Top-Left Bouquet Cluster -->
          ${renderEucalyptusBranch(110, 120, 0.85, -35)}
          ${renderGoldenSprig(140, 80, 0.7, -75)}
          ${renderBlushRose(100, 105, 0.9, -15)}
          ${renderCreamRose(135, 75, 0.7, 25)}

          <!-- Bottom-Right Bouquet Cluster -->
          ${renderEucalyptusBranch(390, 380, 0.85, 145)}
          ${renderGoldenSprig(360, 420, 0.7, 105)}
          ${renderBlushRose(400, 395, 0.9, 165)}
          ${renderCreamRose(365, 425, 0.7, -155)}
        </g>
      `;

    case 'arch':
      // Archway at top
      return `
        <g id="arch-garden-group">
          ${renderEucalyptusBranch(210, 85, 0.9, -80)}
          ${renderEucalyptusBranch(290, 85, 0.9, 80)}
          ${renderGoldenSprig(170, 75, 0.75, -70)}
          ${renderGoldenSprig(330, 75, 0.75, 70)}
          ${renderBlushRose(250, 65, 1.05, 0)}
          ${renderCreamRose(195, 75, 0.8, -25)}
          ${renderCreamRose(305, 75, 0.8, 25)}
          ${renderBlushRose(145, 95, 0.65, -50)}
          ${renderBlushRose(355, 95, 0.65, 50)}
        </g>
      `;

    case 'crest':
    default:
      // Minimalist crest with delicate laurels
      return `
        <g id="minimal-crest-group">
          <circle cx="250" cy="250" r="222" fill="none" stroke="${flourishColor}" stroke-width="1.2" opacity="0.4"/>
          <!-- Top Laurel Arch -->
          ${renderGoldenSprig(230, 75, 0.6, -75)}
          ${renderGoldenSprig(270, 75, 0.6, 75)}
          <!-- Bottom Laurel Arch -->
          ${renderGoldenSprig(230, 435, 0.6, -105)}
          ${renderGoldenSprig(270, 435, 0.6, 105)}
        </g>
      `;
  }
}

// Hole and Tagpin renderer
export function renderHoleGuide({ showHole = false, showGuide = false, holeX = 250, holeY = 35, holeRadius = 17.5, showPin = false }) {
  let content = '';

  if (showGuide) {
    // 3.5mm hole (radius 17.5 in 500x500 = 1.75mm radius = 3.5mm diameter)
    // Safety margin 4mm around it
    content += `
      <!-- Hole Safety Guide -->
      <g id="hole-guide" opacity="0.75">
        <!-- Safe margin ring (dashed) -->
        <circle cx="${holeX}" cy="${holeY}" r="${holeRadius + 15}" fill="none" stroke="#D16D6A" stroke-width="1.2" stroke-dasharray="4,4"/>
        <text x="${holeX}" y="${holeY + holeRadius + 26}" font-family="'Montserrat', sans-serif" font-size="8" fill="#D16D6A" text-anchor="middle" font-weight="600" letter-spacing="1">
          ZONA DE CORTE (3.5mm)
        </text>
      </g>
    `;
  }

  if (showHole) {
    content += `
      <!-- Actual Punch Hole -->
      <g id="punch-hole">
        <!-- Hole Cutout (Transparent / White with inner shadow) -->
        <circle cx="${holeX}" cy="${holeY}" r="${holeRadius}" fill="#222222" opacity="0.95"/>
        <circle cx="${holeX}" cy="${holeY}" r="${holeRadius}" fill="none" stroke="#C59B27" stroke-width="1.5"/>
      </g>
    `;
  }

  if (showPin) {
    content += `
      <!-- Decorative Tagpin / Brass Eyelet Preview -->
      <g id="decorative-tagpin" filter="url(#soft-shadow)">
        <circle cx="${holeX}" cy="${holeY}" r="${holeRadius + 6}" fill="url(#pin-gold)" stroke="#8C6A18" stroke-width="1"/>
        <circle cx="${holeX}" cy="${holeY}" r="${holeRadius}" fill="#1F1815"/>
        <!-- Eyelet metallic highlight -->
        <ellipse cx="${holeX - 3}" cy="${holeY - 3}" rx="4" ry="2" fill="#FFFFFF" opacity="0.5"/>
        <!-- Ribbon thread illusion -->
        <path d="M${holeX - 2},${holeY - 1} Q${holeX - 15},-25 ${holeX - 25},-50" fill="none" stroke="#E6DDD4" stroke-width="4.5" stroke-linecap="round"/>
        <path d="M${holeX + 2},${holeY - 1} Q${holeX + 15},-25 ${holeX + 20},-50" fill="none" stroke="#D8CEBF" stroke-width="4" stroke-linecap="round"/>
      </g>
    `;
  }

  return content;
}
