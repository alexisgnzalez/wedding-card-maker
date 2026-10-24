// Luxury Wedding Card Master Generator
import { getFontFamily, getGoogleFontsUrl } from './fonts.js';
import { getSvgDefs, renderFloralBackground, renderDelicateHollowHeartDivider, renderWatercolorLaurelDivider, renderHoleGuide, THEMES } from './floral-templates.js';

export const DEFAULT_CARD_STATE = {
  themeId: 'crescent-watercolor',
  title: 'Acuarela Rosas & Eucalipto (Fiel a la Inspiración)',

  // Text Content
  name1: 'Saray',
  ampersand: '&',
  name2: 'Michael',
  greetingText: 'Gracias por',
  highlightText: 'acompañarnos',
  messageText: 'Tu presencia hizo este día aún más especial.',
  dateText: '19. 11. 2026',

  // Typography
  namesFont: 'alex-brush',
  ampersandFont: 'alex-brush',
  greetingFont: 'alex-brush',
  highlightFont: 'alex-brush',
  messageFont: 'cormorant',
  dateFont: 'cormorant',

  // Font Sizes
  namesFontSize: 39,
  ampersandFontSize: 32,
  greetingFontSize: 25,
  highlightFontSize: 25,
  messageFontSize: 16.5,
  dateFontSize: 18,

  // Colors
  bgColor: '#FFFFFF',
  namesColor: '#2C2523',
  ampersandColor: '#2C2523',
  greetingColor: '#2C2523',
  highlightColor: '#2C2523',
  messageColor: '#423B37',
  dateColor: '#2C2523',
  flourishColor: '#7D736A',
  borderStrokeColor: '#D4AF37',
  showBorderRing: false,

  // Alignment
  textOffsetX: 38, // horizontal offset for crescent layout to center optically on the right

  // Hole Guide Settings
  showHole: false,
  showGuide: false,
  showPin: false,
  holeY: 32,
  holeRadius: 16,
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

  const fontUrl = getGoogleFontsUrl();

  // Layout calculations
  const isCrescent = currentTheme.layout === 'crescent-authentic';
  const isMonogram = currentTheme.layout === 'monogram-gold' || currentTheme.layout === 'minimal-seal';

  const centerX = isCrescent ? (250 + (s.textOffsetX ?? 38)) : 250;

  // Render text layout depending on theme
  let textGroupContent = '';

  if (isMonogram) {
    // Monogram & Gold Layout (like WhatsApp .51)
    const greetingY = 175;
    const namesY = 226;
    const messageY = 288;
    const dateY = 376;

    textGroupContent = `
      <!-- Greeting: "Muchas Gracias" -->
      <text x="${centerX}" y="${greetingY}" 
            font-family="${greetingFamily}" 
            font-size="${s.greetingFontSize + 6}" 
            fill="${s.greetingColor}" 
            text-anchor="middle">
        ${s.greetingText === 'Gracias por' ? 'Muchas Gracias' : s.greetingText}
      </text>

      <!-- Names: "Saray & Michael" in Luxury Serif -->
      <text x="${centerX}" y="${namesY}" text-anchor="middle">
        <tspan font-family="${namesFamily}" font-size="${s.namesFontSize}" fill="${s.namesColor}" letter-spacing="1">${s.name1}</tspan>
        <tspan font-family="${ampersandFamily}" font-size="${s.ampersandFontSize}" fill="${s.ampersandColor}"> ${s.ampersand} </tspan>
        <tspan font-family="${namesFamily}" font-size="${s.namesFontSize}" fill="${s.namesColor}" letter-spacing="1">${s.name2}</tspan>
      </text>

      <!-- Message in cursive -->
      <g id="message-group" text-anchor="middle">
        ${renderWrappedMessage(s.messageText, centerX, messageY, s.messageFontSize, messageFamily, s.messageColor, 1.45)}
      </g>

      <!-- Date with fine gold divider lines: —— 19. 11. 2026 —— -->
      <g id="date-group" text-anchor="middle">
        <line x1="${centerX - 105}" y1="${dateY - 5}" x2="${centerX - 50}" y2="${dateY - 5}" stroke="${s.flourishColor}" stroke-width="0.8"/>
        <text x="${centerX}" y="${dateY}" font-family="${dateFamily}" font-size="${s.dateFontSize}" fill="${s.dateColor}" letter-spacing="2">
          ${s.dateText}
        </text>
        <line x1="${centerX + 50}" y1="${dateY - 5}" x2="${centerX + 105}" y2="${dateY - 5}" stroke="${s.flourishColor}" stroke-width="0.8"/>
      </g>
    `;
  } else {
    // Faithful Crescent Layout (like WhatsApp copy & bride inspiration)
    const hasTopHole = s.showHole || s.showPin || s.showGuide;
    const namesY = hasTopHole ? 168 : 158;
    const dividerY = hasTopHole ? 198 : 188;
    const greetingY = hasTopHole ? 244 : 234;
    const messageY = hasTopHole ? 302 : 292;
    const dateY = hasTopHole ? 376 : 368;
    const laurelY = hasTopHole ? 418 : 410;

    // Check if greeting has single or separated highlight
    const combinedGreeting = (s.greetingText === 'Gracias por' && s.highlightText === 'acompañarnos');

    textGroupContent = `
      <!-- Names: "Saray & Michael" in flowing script -->
      <text x="${centerX}" y="${namesY}" text-anchor="middle">
        <tspan font-family="${namesFamily}" font-size="${s.namesFontSize}" fill="${s.namesColor}">${s.name1}</tspan>
        <tspan font-family="${ampersandFamily}" font-size="${s.ampersandFontSize}" fill="${s.ampersandColor}"> ${s.ampersand} </tspan>
        <tspan font-family="${namesFamily}" font-size="${s.namesFontSize}" fill="${s.namesColor}">${s.name2}</tspan>
      </text>

      <!-- Fine Line with Hollow Heart Divider: — ♡ — -->
      ${renderDelicateHollowHeartDivider(centerX, dividerY, s.flourishColor, 130)}

      <!-- Subtitle: "Gracias por acompañarnos" -->
      ${combinedGreeting ? `
        <text x="${centerX}" y="${greetingY}" font-family="${highlightFamily}" font-size="${s.highlightFontSize}" fill="${s.highlightColor}" text-anchor="middle">
          Gracias por acompañarnos
        </text>
      ` : `
        <text x="${centerX}" y="${greetingY - 14}" font-family="${greetingFamily}" font-size="${s.greetingFontSize}" fill="${s.greetingColor}" text-anchor="middle">
          ${s.greetingText}
        </text>
        <text x="${centerX}" y="${greetingY + 14}" font-family="${highlightFamily}" font-size="${s.highlightFontSize}" fill="${s.highlightColor}" text-anchor="middle">
          ${s.highlightText}
        </text>
      `}

      <!-- Emotive Body Message: "Tu presencia hizo este día aún más especial" -->
      <g id="message-group" text-anchor="middle">
        ${renderWrappedMessage(s.messageText, centerX, messageY, s.messageFontSize, messageFamily, s.messageColor, 1.35)}
      </g>

      <!-- Date: "19. 11. 2026" -->
      <text id="date-text" 
            x="${centerX}" 
            y="${dateY}" 
            font-family="${dateFamily}" 
            font-size="${s.dateFontSize}" 
            fill="${s.dateColor}" 
            letter-spacing="1.8" 
            text-anchor="middle"
            font-weight="500">
        ${s.dateText}
      </text>

      <!-- Authentic Watercolor Laurel Sprig with Dusty Pink Heart -->
      ${renderWatercolorLaurelDivider(centerX, laurelY, 0.82)}
    `;
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" 
     viewBox="0 0 500 500" 
     width="50mm" 
     height="50mm"
     shape-rendering="geometricPrecision" 
     text-rendering="geometricPrecision">
  ${getSvgDefs()}
  <defs>
    <style>
      @import url('${fontUrl}');
      text { text-rendering: geometricPrecision; -webkit-font-smoothing: antialiased; }
    </style>
  </defs>

  <!-- Circular Die-cut Mask & Background Base -->
  <clipPath id="circle-cutout">
    <circle cx="250" cy="250" r="248"/>
  </clipPath>

  <g id="card-content" clip-path="url(#circle-cutout)">
    <!-- Base Background Circle -->
    <circle cx="250" cy="250" r="250" fill="${s.bgColor}"/>

    <!-- Optional Decorative Inner Border Ring -->
    ${s.showBorderRing ? `
      <circle cx="250" cy="250" r="238" fill="none" stroke="${s.borderStrokeColor}" stroke-width="1.2" opacity="0.8"/>
      <circle cx="250" cy="250" r="234" fill="none" stroke="${s.borderStrokeColor}" stroke-width="0.6" stroke-dasharray="3,3" opacity="0.6"/>
    ` : ''}

    <!-- Botanical Floral Artwork Layer (Authentic High-Res Watercolor) -->
    ${renderFloralBackground(currentTheme.layout, { flourish: s.flourishColor })}

    <!-- Typography Layer -->
    <g id="typography-layer">
      ${textGroupContent}
    </g>
  </g>

  <!-- Hole Punch Guide & Tagpin Layer -->
  ${renderHoleGuide({
    showHole: s.showHole,
    showGuide: s.showGuide,
    showPin: s.showPin,
    holeY: s.holeY,
    holeRadius: s.holeRadius
  })}

  <!-- Outer Die-Cut Circular Cutline (Subtle hairline for print guidance) -->
  <circle cx="250" cy="250" r="249" fill="none" stroke="#D8CFC4" stroke-width="0.8" opacity="0.45"/>
</svg>`;
}

// Helper to format/wrap multi-line message in SVG with fine typography
function renderWrappedMessage(text, x, startY, fontSize, fontFamily, color, lineGap = 1.35) {
  if (!text) return '';
  const words = text.split(' ');
  if (words.length <= 4) {
    return `<text x="${x}" y="${startY}" font-family="${fontFamily}" font-size="${fontSize}" fill="${color}" font-style="italic">${text}</text>`;
  }

  const mid = Math.ceil(words.length / 2);
  const line1 = words.slice(0, mid).join(' ');
  const line2 = words.slice(mid).join(' ');

  return `
    <text x="${x}" y="${startY}" font-family="${fontFamily}" font-size="${fontSize}" fill="${color}" font-style="italic">
      <tspan x="${x}" dy="0">${line1}</tspan>
      <tspan x="${x}" dy="${fontSize * lineGap}">${line2}</tspan>
    </text>
  `;
}
