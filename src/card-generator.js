// Core SVG Wedding Card generator
import { getFontFamily } from './fonts.js';
import { getSvgDefs, renderFloralBackground, renderTopHeartFlourish, renderBottomLaurelDivider, renderHoleGuide, THEMES } from './floral-templates.js';

export const DEFAULT_CARD_STATE = {
  // Theme & Layout
  themeId: 'crescent-blush',
  
  // Text Content
  namesText: 'Saray & Michael',
  name1: 'Saray',
  ampersand: '&',
  name2: 'Michael',
  greetingText: 'Gracias por',
  highlightText: 'acompañarnos',
  messageText: 'Tu presencia hizo este día aún más especial.',
  dateText: '24 · Noviembre · 2026',
  
  // Font Styles
  namesFont: 'alex-brush',
  ampersandFont: 'alex-brush',
  greetingFont: 'cormorant',
  highlightFont: 'alex-brush',
  messageFont: 'cormorant',
  dateFont: 'montserrat',

  // Font Sizes (in SVG units)
  namesFontSize: 46,
  ampersandFontSize: 36,
  greetingFontSize: 19,
  highlightFontSize: 32,
  messageFontSize: 14.5,
  dateFontSize: 13,

  // Colors
  bgColor: '#FAF8F5',
  namesColor: '#2C2523',
  ampersandColor: '#C28B59',
  greetingColor: '#3A3430',
  highlightColor: '#B87B4C',
  messageColor: '#524B45',
  dateColor: '#6B625A',
  flourishColor: '#C28B59',
  borderStrokeColor: '#EDE5DC',
  showBorderRing: true,

  // Layout & Alignment
  textOffsetX: 25, // default slight offset for crescent theme to balance florals
  
  // Hole & Tagpin Settings
  showHole: false,
  showGuide: false,
  showPin: false,
  holeY: 35,
  holeRadius: 16, // ~3.2mm in 50mm card
  
  // Custom Saved Title
  title: 'Variación 1 - Media Luna Acuarela'
};

export function generateCardSvg(state) {
  const s = { ...DEFAULT_CARD_STATE, ...state };
  const currentTheme = THEMES.find(t => t.id === s.themeId) || THEMES[0];

  const namesFamily = getFontFamily(s.namesFont);
  const ampersandFamily = getFontFamily(s.ampersandFont || s.namesFont);
  const greetingFamily = getFontFamily(s.greetingFont);
  const highlightFamily = getFontFamily(s.highlightFont);
  const messageFamily = getFontFamily(s.messageFont);
  const dateFamily = getFontFamily(s.dateFont);

  // Layout offsets: in crescent theme, shift center slightly right (+22px) to balance lush florals on left
  const centerX = currentTheme.layout === 'crescent' ? (250 + (s.textOffsetX ?? 22)) : 250;

  // Vertical balance: adjust gently if hole/pin is enabled
  const hasTopHole = s.showHole || s.showPin || s.showGuide;
  const topFlourishY = hasTopHole ? 98 : 90;
  const namesY = hasTopHole ? 150 : 144;
  const greetingY = hasTopHole ? 202 : 198;
  const highlightY = hasTopHole ? 242 : 238;
  const heartDotY = hasTopHole ? 268 : 264;
  const messageY = hasTopHole ? 302 : 298;
  const dateFlourishY = hasTopHole ? 376 : 372;
  const dateY = hasTopHole ? 404 : 400;

  // Split names if ampersand has custom styling/color
  const hasSplitNames = s.name1 && s.name2;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" 
     viewBox="0 0 500 500" 
     width="50mm" 
     height="50mm"
     shape-rendering="geometricPrecision" 
     text-rendering="geometricPrecision">
  ${getSvgDefs()}

  <!-- Circular Die-cut Mask & Background -->
  <clipPath id="circle-cutout">
    <circle cx="250" cy="250" r="248"/>
  </clipPath>

  <g id="card-content" clip-path="url(#circle-cutout)">
    <!-- Base Background Circle -->
    <circle cx="250" cy="250" r="250" fill="${s.bgColor}"/>

    <!-- Optional Decorative Inner Border Ring -->
    ${s.showBorderRing ? `
      <circle cx="250" cy="250" r="240" fill="none" stroke="${s.borderStrokeColor}" stroke-width="1.2" opacity="0.75"/>
      <circle cx="250" cy="250" r="236" fill="none" stroke="${s.borderStrokeColor}" stroke-width="0.6" stroke-dasharray="3,3" opacity="0.6"/>
    ` : ''}

    <!-- Botanical Floral Artwork Layer -->
    ${renderFloralBackground(currentTheme.layout, { flourish: s.flourishColor })}

    <!-- Top Romantic Flourish with Heart -->
    ${renderTopHeartFlourish(topFlourishY, s.flourishColor)}

    <!-- Names Section: "Saray & Michael" -->
    <g id="names-group" text-anchor="middle">
      ${hasSplitNames ? `
        <text x="${centerX}" y="${namesY}">
          <tspan font-family="${namesFamily}" font-size="${s.namesFontSize}" fill="${s.namesColor}" font-weight="normal">${s.name1}</tspan>
          <tspan font-family="${ampersandFamily}" font-size="${s.ampersandFontSize}" fill="${s.ampersandColor}" font-weight="normal"> ${s.ampersand} </tspan>
          <tspan font-family="${namesFamily}" font-size="${s.namesFontSize}" fill="${s.namesColor}" font-weight="normal">${s.name2}</tspan>
        </text>
      ` : `
        <text x="${centerX}" y="${namesY}" font-family="${namesFamily}" font-size="${s.namesFontSize}" fill="${s.namesColor}">
          ${s.namesText}
        </text>
      `}
    </g>

    <!-- Mini Accent Dot/Heart under names -->
    <circle cx="${centerX}" cy="${namesY + 18}" r="2.5" fill="${s.flourishColor}" opacity="0.85"/>
    <line x1="${centerX - 35}" y1="${namesY + 18}" x2="${centerX - 8}" y2="${namesY + 18}" stroke="${s.flourishColor}" stroke-width="0.8" opacity="0.6"/>
    <line x1="${centerX + 8}" y1="${namesY + 18}" x2="${centerX + 35}" y2="${namesY + 18}" stroke="${s.flourishColor}" stroke-width="0.8" opacity="0.6"/>

    <!-- Greeting Section: "Gracias por" -->
    <text id="greeting-text" 
          x="${centerX}" 
          y="${greetingY}" 
          font-family="${greetingFamily}" 
          font-size="${s.greetingFontSize}" 
          fill="${s.greetingColor}" 
          letter-spacing="1.5" 
          text-anchor="middle"
          font-weight="400">
      ${s.greetingText}
    </text>

    <!-- Highlighted Calligraphy: "acompañarnos" -->
    <text id="highlight-text" 
          x="${centerX}" 
          y="${highlightY}" 
          font-family="${highlightFamily}" 
          font-size="${s.highlightFontSize}" 
          fill="${s.highlightColor}" 
          text-anchor="middle"
          font-weight="normal">
      ${s.highlightText}
    </text>

    <!-- Tiny Heart under acompañarnos -->
    <path transform="translate(${centerX}, ${heartDotY}) scale(0.65)"
          d="M0,-2 C-1.8,-6.5 -7.5,-7.5 -9.5,-3 C-11.5,1.5 -5,7 0,11.5 C5,7 11.5,1.5 9.5,-3 C7.5,-7.5 1.8,-6.5 0,-2 Z" 
          fill="${s.flourishColor}" opacity="0.75"/>

    <!-- Thank you Message / Body: "Tu presencia hizo este día aún más especial." -->
    <g id="message-group" text-anchor="middle">
      ${renderWrappedMessage(s.messageText, centerX, messageY, s.messageFontSize, messageFamily, s.messageColor)}
    </g>

    <!-- Date Divider with Laurels & Heart -->
    ${renderBottomLaurelDivider(dateFlourishY, s.flourishColor)}

    <!-- Date: "24 · Noviembre · 2026" -->
    <text id="date-text" 
          x="${centerX}" 
          y="${dateY}" 
          font-family="${dateFamily}" 
          font-size="${s.dateFontSize}" 
          fill="${s.dateColor}" 
          letter-spacing="2.2" 
          text-anchor="middle"
          font-weight="500">
      ${s.dateText}
    </text>
  </g>

  <!-- Hole Punch Guide & Tagpin Layer (Can be toggled or exported) -->
  ${renderHoleGuide({
    showHole: s.showHole,
    showGuide: s.showGuide,
    showPin: s.showPin,
    holeY: s.holeY,
    holeRadius: s.holeRadius
  })}

  <!-- Outer Die-Cut Circular Cutline (Clean subtle guideline) -->
  <circle cx="250" cy="250" r="249" fill="none" stroke="#D8CFC4" stroke-width="0.8" opacity="0.5"/>
</svg>`;
}

// Helper to format/wrap multi-line message in SVG with fine typography
function renderWrappedMessage(text, x, startY, fontSize, fontFamily, color) {
  if (!text) return '';
  
  // If text already has newline or is short enough
  const words = text.split(' ');
  if (words.length <= 4) {
    return `<text x="${x}" y="${startY}" font-family="${fontFamily}" font-size="${fontSize}" fill="${color}" font-style="italic">${text}</text>`;
  }

  // Break gracefully into two balanced lines for circular aesthetic
  const mid = Math.ceil(words.length / 2);
  const line1 = words.slice(0, mid).join(' ');
  const line2 = words.slice(mid).join(' ');

  return `
    <text x="${x}" y="${startY}" font-family="${fontFamily}" font-size="${fontSize}" fill="${color}" font-style="italic">
      <tspan x="${x}" dy="0">${line1}</tspan>
      <tspan x="${x}" dy="${fontSize * 1.35}">${line2}</tspan>
    </text>
  `;
}
