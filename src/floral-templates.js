// Museum-Grade Authentic Watercolor & Gold Foil Wedding Stationery Templates
import { ASSETS } from './assets-data.js';

export const THEMES = [
  {
    id: 'crescent-watercolor',
    name: 'Acuarela Rosas Blush & Eucalipto (Fiel a la Inspiración)',
    description: 'Composición botánica auténtica en acuarela con rosas de jardín, eucalipto salvia y divisor de laurel con corazón de acuarela.',
    recommendedFonts: {
      names: 'alex-brush',
      ampersand: 'alex-brush',
      greeting: 'alex-brush',
      highlight: 'alex-brush',
      body: 'cormorant',
      date: 'cormorant',
    },
    colors: {
      bg: '#FFFFFF',
      names: '#2C2523',
      ampersand: '#2C2523',
      greeting: '#2C2523',
      highlight: '#2C2523',
      body: '#423B37',
      date: '#2C2523',
      flourish: '#8A7F79',
      borderRing: 'transparent',
    },
    layout: 'crescent-authentic',
    defaultDate: '19. 11. 2026'
  },
  {
    id: 'monogram-terracotta',
    name: 'Sello Monograma Terracota & Pan de Oro',
    description: 'Sello circular en terracota con monograma SM en pan de oro repujado, doble aro dorado y tipografía editorial italiana.',
    recommendedFonts: {
      names: 'italiana',
      ampersand: 'italiana',
      greeting: 'alex-brush',
      highlight: 'alex-brush',
      body: 'alex-brush',
      date: 'italiana',
    },
    colors: {
      bg: '#F9F7F2',
      names: '#8F6546',
      ampersand: '#8F6546',
      greeting: '#A87948',
      highlight: '#A87948',
      body: '#8F6546',
      date: '#8F6546',
      flourish: '#C59B27',
      borderRing: '#C59B27',
    },
    layout: 'monogram-gold',
    defaultDate: '19. 11. 2026'
  },
  {
    id: 'full-wreath-watercolor',
    name: 'Corona Botánica 360° en Acuarela',
    description: 'Guirnalda circular completa envolvente de peonías y hojas de eucalipto en acuarela de alta definición.',
    recommendedFonts: {
      names: 'great-vibes',
      ampersand: 'great-vibes',
      greeting: 'cinzel',
      highlight: 'great-vibes',
      body: 'cormorant',
      date: 'cinzel',
    },
    colors: {
      bg: '#FCFAF7',
      names: '#231F20',
      ampersand: '#C59B27',
      greeting: '#4A443F',
      highlight: '#A45E54',
      body: '#4A443F',
      date: '#5E564F',
      flourish: '#C59B27',
      borderRing: '#EAE1D5',
    },
    layout: 'wreath-authentic',
    defaultDate: '19. 11. 2026'
  },
  {
    id: 'twin-bouquets-gold',
    name: 'Doble Ramillete & Anillo de Oro Geométrico',
    description: 'Doble anillo en pan de oro pulido con ramilletes de rosas blush en esquinas alternadas.',
    recommendedFonts: {
      names: 'pinyon-script',
      ampersand: 'pinyon-script',
      greeting: 'cinzel',
      highlight: 'pinyon-script',
      body: 'cormorant',
      date: 'cinzel',
    },
    colors: {
      bg: '#FFFFFF',
      names: '#1F1E1D',
      ampersand: '#C59B27',
      greeting: '#3D3834',
      highlight: '#9B5B53',
      body: '#4F4842',
      date: '#5E564F',
      flourish: '#C59B27',
      borderRing: '#D4AF37',
    },
    layout: 'twin-gold',
    defaultDate: '19. 11. 2026'
  },
  {
    id: 'minimal-monogram',
    name: 'Elegancia Minimalista & Sello Nupcial',
    description: 'Lujo sobrio contemporáneo con sello en pan de oro, tipografía romana imperial y divisor de laurel.',
    recommendedFonts: {
      names: 'cinzel',
      ampersand: 'alex-brush',
      greeting: 'montserrat',
      highlight: 'alex-brush',
      body: 'cormorant',
      date: 'montserrat',
    },
    colors: {
      bg: '#FAF8F5',
      names: '#1A1A1A',
      ampersand: '#C59B27',
      greeting: '#555555',
      highlight: '#8A5D3B',
      body: '#404040',
      date: '#666666',
      flourish: '#C59B27',
      borderRing: '#E6D7C3',
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

      <!-- Multi-Stop Metallic Gold Foil Gradients -->
      <linearGradient id="gold-foil" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#EED79A"/>
        <stop offset="30%" stop-color="#D4AF37"/>
        <stop offset="55%" stop-color="#FFF3CE"/>
        <stop offset="75%" stop-color="#AA7F1A"/>
        <stop offset="100%" stop-color="#F7E2B0"/>
      </linearGradient>

      <linearGradient id="rose-gold-foil" x1="0%" y1="0%" x2="100%" y2="100%">
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

// Renderers for each layout
export function renderFloralBackground(layout, customColors = {}) {
  const flourishColor = customColors.flourish || '#C28B59';

  switch (layout) {
    case 'crescent-authentic':
      // The authentic watercolor crescent from inspiration
      return `
        <!-- Authentic Watercolor Crescent Layer -->
        <g id="authentic-crescent-group">
          <image href="${ASSETS.crescentPng}" x="0" y="0" width="500" height="500" preserveAspectRatio="xMidYMid meet"/>
        </g>
      `;

    case 'monogram-gold':
      // Terracotta SM Seal + Double Gold Ring
      return `
        <!-- Double Fine Gold Foil Concentric Rings -->
        <g id="monogram-gold-rings">
          <circle cx="250" cy="250" r="236" fill="none" stroke="url(#gold-foil)" stroke-width="1.8"/>
          <circle cx="250" cy="250" r="231" fill="none" stroke="url(#gold-foil)" stroke-width="0.75" opacity="0.75"/>
          
          <!-- Authentic Terracotta SM Seal Medallion -->
          <g filter="url(#seal-shadow)">
            <image href="${ASSETS.sealPng}" x="205" y="48" width="90" height="90" preserveAspectRatio="xMidYMid meet"/>
          </g>
        </g>
      `;

    case 'wreath-authentic':
      // 360-degree watercolor wreath constructed from the authentic watercolor assets
      return `
        <g id="full-authentic-wreath">
          <!-- Left Crescent -->
          <image href="${ASSETS.crescentPng}" x="0" y="0" width="500" height="500" opacity="0.95"/>
          <!-- Mirrored Right Crescent with subtle scale and rotation -->
          <g transform="translate(500, 0) scale(-0.95, 0.95) translate(-15, 20)">
            <image href="${ASSETS.crescentPng}" x="0" y="0" width="500" height="500" opacity="0.9"/>
          </g>
        </g>
      `;

    case 'twin-gold':
      // Gold geometric circles with watercolor bouquets at corners
      return `
        <g id="twin-gold-group">
          <circle cx="250" cy="250" r="234" fill="none" stroke="url(#gold-foil)" stroke-width="1.6"/>
          <circle cx="250" cy="250" r="228" fill="none" stroke="url(#gold-foil)" stroke-width="0.8" stroke-dasharray="4,3" opacity="0.7"/>

          <!-- Top Left Bouquet Cluster -->
          <g transform="translate(-40, -40) scale(0.68)">
            <image href="${ASSETS.crescentPng}" x="0" y="0" width="500" height="500"/>
          </g>

          <!-- Bottom Right Bouquet Cluster -->
          <g transform="translate(540, 540) rotate(180) scale(0.68)">
            <image href="${ASSETS.crescentPng}" x="0" y="0" width="500" height="500"/>
          </g>
        </g>
      `;

    case 'minimal-seal':
    default:
      // Minimalist Terracotta Monogram + Fine Line Ring
      return `
        <g id="minimal-monogram-group">
          <circle cx="250" cy="250" r="236" fill="none" stroke="${flourishColor}" stroke-width="1.2" opacity="0.6"/>
          <g filter="url(#seal-shadow)">
            <image href="${ASSETS.sealPng}" x="205" y="48" width="90" height="90" preserveAspectRatio="xMidYMid meet"/>
          </g>
        </g>
      `;
  }
}

// High-end Flourish with delicate hollow heart
export function renderDelicateHollowHeartDivider(x = 250, y = 188, color = '#777777', width = 140) {
  const half = width / 2;
  return `
    <g id="delicate-heart-divider" transform="translate(${x}, ${y})">
      <!-- Left line -->
      <line x1="${-half}" y1="0" x2="-14" y2="0" stroke="${color}" stroke-width="0.75" stroke-linecap="round"/>
      <!-- Hollow romantic heart -->
      <path d="M0,4 C-1.8,0 -6,-1 -7.5,-4 C-9.2,-7.5 -5,-11 0,-6.5 C5,-11 9.2,-7.5 7.5,-4 C6,-1 1.8,0 0,4 Z" 
            transform="translate(0, -2) scale(0.85)" 
            fill="none" stroke="${color}" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round"/>
      <!-- Right line -->
      <line x1="14" y1="0" x2="${half}" y2="0" stroke="${color}" stroke-width="0.75" stroke-linecap="round"/>
    </g>
  `;
}

// Authentic Watercolor Laurel & Heart Divider
export function renderWatercolorLaurelDivider(x = 250, y = 422, scale = 0.85) {
  // laurel width 230, height 65
  const w = 230 * scale;
  const h = 65 * scale;
  return `
    <g id="watercolor-laurel-divider" transform="translate(${x - w / 2}, ${y - h / 2})">
      <image href="${ASSETS.laurelPng}" x="0" y="0" width="${w}" height="${h}" preserveAspectRatio="xMidYMid meet"/>
    </g>
  `;
}

// Hole and Tagpin renderer
export function renderHoleGuide({ showHole = false, showGuide = false, holeX = 250, holeY = 32, holeRadius = 16, showPin = false }) {
  let content = '';

  if (showGuide) {
    content += `
      <!-- Hole Safety Guide -->
      <g id="hole-guide" opacity="0.8">
        <circle cx="${holeX}" cy="${holeY}" r="${holeRadius + 14}" fill="none" stroke="#E05D58" stroke-width="1.2" stroke-dasharray="4,4"/>
        <text x="${holeX}" y="${holeY + holeRadius + 24}" font-family="'Montserrat', sans-serif" font-size="8" fill="#E05D58" text-anchor="middle" font-weight="600" letter-spacing="1">
          ZONA SEGURA (3.5mm)
        </text>
      </g>
    `;
  }

  if (showHole) {
    content += `
      <!-- Actual Punch Hole -->
      <g id="punch-hole">
        <circle cx="${holeX}" cy="${holeY}" r="${holeRadius}" fill="#222222" opacity="0.95"/>
        <circle cx="${holeX}" cy="${holeY}" r="${holeRadius}" fill="none" stroke="#C59B27" stroke-width="1.5"/>
      </g>
    `;
  }

  if (showPin) {
    content += `
      <!-- Decorative Brass Eyelet & Ribbon Preview -->
      <g id="decorative-tagpin" filter="url(#soft-shadow)">
        <circle cx="${holeX}" cy="${holeY}" r="${holeRadius + 5}" fill="url(#pin-gold)" stroke="#8C6A18" stroke-width="1"/>
        <circle cx="${holeX}" cy="${holeY}" r="${holeRadius}" fill="#181514"/>
        <ellipse cx="${holeX - 3}" cy="${holeY - 3}" rx="3.5" ry="1.8" fill="#FFFFFF" opacity="0.6"/>
        <path d="M${holeX - 2},${holeY - 1} Q${holeX - 12},-15 ${holeX - 18},-35" fill="none" stroke="#EAE5DE" stroke-width="4" stroke-linecap="round"/>
        <path d="M${holeX + 2},${holeY - 1} Q${holeX + 12},-15 ${holeX + 16},-35" fill="none" stroke="#DFD7CD" stroke-width="3.5" stroke-linecap="round"/>
      </g>
    `;
  }

  return content;
}
