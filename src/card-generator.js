// Luxury Wedding Card Master Generator - Typographically Calibrated for 5cm x 5cm Print Legibility
import { getFontFamily, getGoogleFontsUrl } from './fonts.js';
import { 
  getSvgDefs, 
  renderFloralBackground, 
  renderTopHeartFlourish,
  renderDelicateHollowHeartDivider, 
  renderWatercolorLaurelDivider, 
  renderHoleGuide, 
  THEMES 
} from './floral-templates.js';

export const DEFAULT_CARD_STATE = {
  themeId: 'crescent-watercolor',
  title: 'Acuarela Rosas Blush & Eucalipto (Inspiración Original)',

  // Text Content
  name1: 'Saray',
  ampersand: '&',
  name2: 'Michael',
  greetingText: 'Gracias por',
  highlightText: 'acompañarnos',
  messageText: 'Su presencia hizo este día aún más especial',
  dateText: '19. 11. 2026',

  // Typography
  namesFont: 'alex-brush',
  ampersandFont: 'alex-brush',
  greetingFont: 'cormorant',
  highlightFont: 'alex-brush',
  messageFont: 'cormorant',
  dateFont: 'cormorant',

  // Font Sizes Calibrated for 5cm (50mm) Circular Print (Matching Canva Reference WhatsApp .52 copy)
  namesFontSize: 38,
  ampersandFontSize: 34,
  greetingFontSize: 22,
  highlightFontSize: 26,
  messageFontSize: 19,
  dateFontSize: 22,

  // Colors
  bgColor: '#FFFFFF',
  namesColor: '#24201E',
  ampersandColor: '#A47C48',
  greetingColor: '#554C46',
  highlightColor: '#24201E',
  messageColor: '#302A27',
  dateColor: '#24201E',
  flourishColor: '#A47C48',
  borderStrokeColor: '#D4AF37',
  showBorderRing: false,

  // Alignment
  textOffsetX: 40, // Optical balance (centerX = 290) between crescent flowers (left) and circle edge (right)

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

  const isCrescent = currentTheme.layout === 'crescent-authentic';
  const isMonogram = currentTheme.layout === 'monogram-gold' || currentTheme.layout === 'minimal-seal';
  const hasTopHole = s.showHole || s.showPin || s.showGuide;

  // XML safe escaper
  const esc = (txt) => {
    if (!txt) return '';
    return String(txt)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  };

  const name1Safe = esc(s.name1);
  const name2Safe = esc(s.name2);
  const ampersandSafe = esc(s.ampersand);
  const greetingSafe = esc(s.greetingText);
  const highlightSafe = esc(s.highlightText);
  const dateSafe = esc(s.dateText);

  // In crescent theme, center optically in the right opening (x=282px by default)
  const centerX = isCrescent ? (250 + (s.textOffsetX ?? 32)) : 250;

  let textGroupContent = '';

  if (isMonogram) {
    // Monogram & Gold Layout (Exact Proportions from WhatsApp Reference .51 / .52)
    const offsetY = hasTopHole ? 10 : 0;
    const greetingY = 156 + offsetY;
    const namesY = 210 + offsetY;
    const messageStartY = 258 + offsetY;
    const dateY = 364 + offsetY;

    textGroupContent = `
      <!-- Heading: "Muchas Gracias" in Gold Calligraphy -->
      <text x="${centerX}" y="${greetingY}" 
            font-family="${greetingFamily}" 
            font-size="${s.greetingFontSize}" 
            fill="url(#gold-foil)" 
            text-anchor="middle"
            font-weight="normal">
        ${greetingSafe === 'Gracias por' ? 'Muchas Gracias' : greetingSafe}
      </text>

      <!-- Names: "Saray & Michael" in High-Fashion Display Serif (Titlecase, Tracked) -->
      <text x="${centerX}" y="${namesY}" text-anchor="middle">
        <tspan font-family="${namesFamily}" font-size="${s.namesFontSize}" fill="${s.namesColor}" letter-spacing="2.5" font-weight="600">${name1Safe}</tspan>
        <tspan font-family="${ampersandFamily}" font-size="${s.ampersandFontSize}" fill="${s.ampersandColor}" font-weight="normal"> ${ampersandSafe} </tspan>
        <tspan font-family="${namesFamily}" font-size="${s.namesFontSize}" fill="${s.namesColor}" letter-spacing="2.5" font-weight="600">${name2Safe}</tspan>
      </text>

      <!-- Message: 3-line balanced gold/bronze gratitude statement in cursive -->
      <g id="message-group" text-anchor="middle">
        ${renderMonogramMessage(s.messageText, centerX, messageStartY, s.messageFontSize, messageFamily, s.messageColor)}
      </g>

      <!-- Prominent Gold Date Dividers: — 19. 11. 2026 — -->
      <g id="date-group" text-anchor="middle">
        <line x1="${centerX - 92}" y1="${dateY - 7}" x2="${centerX - 54}" y2="${dateY - 7}" stroke="url(#gold-foil)" stroke-width="1.4" stroke-linecap="round"/>
        <text x="${centerX}" y="${dateY}" font-family="${dateFamily}" font-size="${s.dateFontSize}" fill="${s.dateColor}" letter-spacing="3.5" font-weight="600">
          ${dateSafe}
        </text>
        <line x1="${centerX + 54}" y1="${dateY - 7}" x2="${centerX + 92}" y2="${dateY - 7}" stroke="url(#gold-foil)" stroke-width="1.4" stroke-linecap="round"/>
      </g>
    `;
  } else if (isCrescent) {
    // Faithful Canva Masterpiece Crescent Layout (Matching WhatsApp .52 copy exactly)
    const offsetY = hasTopHole ? 10 : 0;
    const namesY = 156 + offsetY;
    const dividerY = 192 + offsetY;
    const subtitleY = 232 + offsetY;
    const messageY = 274 + offsetY;
    const dateY = 350 + offsetY;
    const laurelY = 388 + offsetY;

    const isSplitGreeting = (s.greetingText === 'Gracias por' && s.highlightText === 'acompañarnos');
    const subtitleText = isSplitGreeting ? 'Gracias por acompañarnos' : `${greetingSafe} ${highlightSafe}`.trim();

    textGroupContent = `
      <!-- 1. Hero Names: "Saray & Michael" in signature flowing calligraphy -->
      <text x="${centerX}" y="${namesY}" text-anchor="middle">
        <tspan font-family="${namesFamily}" font-size="${s.namesFontSize}" fill="${s.namesColor}" font-weight="normal">${name1Safe}</tspan>
        <tspan font-family="${ampersandFamily}" font-size="${s.ampersandFontSize}" fill="${s.ampersandColor}" font-weight="normal"> ${ampersandSafe} </tspan>
        <tspan font-family="${namesFamily}" font-size="${s.namesFontSize}" fill="${s.namesColor}" font-weight="normal">${name2Safe}</tspan>
      </text>

      <!-- 2. Delicate Line with Hollow Heart Divider: —— ♡ —— -->
      ${renderDelicateHollowHeartDivider(centerX, dividerY, s.flourishColor, 136)}

      <!-- 3. Subtitle in Romantic Calligraphy: "Gracias por acompañarnos" -->
      <text x="${centerX}" y="${subtitleY}" 
            font-family="${highlightFamily || namesFamily}" 
            font-size="${s.highlightFontSize}" 
            fill="${s.highlightColor || s.namesColor}" 
            text-anchor="middle" 
            font-weight="normal">
        ${subtitleText}
      </text>

      <!-- 4. Emotive Body Message in 2 balanced lines of clean Cormorant Garamond -->
      ${s.messageText ? `
        <g id="message-group" text-anchor="middle">
          ${renderCrescentMessage(s.messageText, centerX, messageY, s.messageFontSize, messageFamily, s.messageColor)}
        </g>
      ` : ''}

      <!-- 5. Date in Elegant Tabular Numbers: "19. 11. 2026" -->
      <text id="date-text" 
            x="${centerX}" 
            y="${dateY}" 
            font-family="${dateFamily}" 
            font-size="${s.dateFontSize}" 
            fill="${s.dateColor}" 
            letter-spacing="2" 
            text-anchor="middle"
            font-weight="600">
        ${dateSafe}
      </text>

      <!-- 6. Authentic Watercolor Laurel Branch with Dusty Pink Heart -->
      ${renderWatercolorLaurelDivider(centerX, laurelY, 0.76)}
    `;
  } else {
    // Centered layout for Wreath & Twin Bouquets
    const offsetY = hasTopHole ? 10 : 0;
    const greetingY = 162 + offsetY;
    const namesY = 216 + offsetY;
    const dividerY = 252 + offsetY;
    const messageY = 296 + offsetY;
    const dateY = 372 + offsetY;

    textGroupContent = `
      <!-- Greeting in Flowing Script or Serif -->
      <text x="${centerX}" y="${greetingY}" 
            font-family="${greetingFamily}" 
            font-size="${s.greetingFontSize}" 
            fill="${s.greetingColor}" 
            text-anchor="middle"
            font-weight="500">
        ${greetingSafe === 'Gracias por' ? 'Muchas Gracias' : greetingSafe}
      </text>

      <!-- Names: "Saray & Michael" -->
      <text x="${centerX}" y="${namesY}" text-anchor="middle">
        <tspan font-family="${namesFamily}" font-size="${s.namesFontSize}" fill="${s.namesColor}" font-weight="600">${name1Safe}</tspan>
        <tspan font-family="${ampersandFamily}" font-size="${s.ampersandFontSize}" fill="${s.ampersandColor}" font-weight="normal"> ${ampersandSafe} </tspan>
        <tspan font-family="${namesFamily}" font-size="${s.namesFontSize}" fill="${s.namesColor}" font-weight="600">${name2Safe}</tspan>
      </text>

      <!-- Fine Line with Hollow Heart Divider -->
      ${renderDelicateHollowHeartDivider(centerX, dividerY, s.flourishColor, 160)}

      <!-- Emotive Body Message -->
      <g id="message-group" text-anchor="middle">
        ${renderCrescentMessage(s.messageText, centerX, messageY, s.messageFontSize, messageFamily, s.messageColor)}
      </g>

      <!-- Date with Flanking Rules -->
      <g id="date-group" text-anchor="middle">
        <line x1="${centerX - 95}" y1="${dateY - 7}" x2="${centerX - 55}" y2="${dateY - 7}" stroke="${s.flourishColor}" stroke-width="1.3" stroke-linecap="round"/>
        <text x="${centerX}" y="${dateY}" font-family="${dateFamily}" font-size="${s.dateFontSize}" fill="${s.dateColor}" letter-spacing="3" font-weight="600">
          ${dateSafe}
        </text>
        <line x1="${centerX + 55}" y1="${dateY - 7}" x2="${centerX + 95}" y2="${dateY - 7}" stroke="${s.flourishColor}" stroke-width="1.3" stroke-linecap="round"/>
      </g>
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
    <style type="text/css">
      <![CDATA[
        @import url('${fontUrl}');
        text { text-rendering: geometricPrecision; -webkit-font-smoothing: antialiased; }
      ]]>
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
      <circle cx="250" cy="250" r="238" fill="none" stroke="${s.borderStrokeColor}" stroke-width="1.6" opacity="0.85"/>
      <circle cx="250" cy="250" r="233" fill="none" stroke="${s.borderStrokeColor}" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.6"/>
    ` : ''}

    <!-- Botanical Floral Artwork Layer (Authentic High-Res Watercolor) -->
    ${renderFloralBackground(currentTheme.layout, { flourish: s.flourishColor })}

    <!-- Typography Layer (Print-Calibrated Hierarchy) -->
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

  <!-- Outer Die-Cut Circular Cutline -->
  <circle cx="250" cy="250" r="249" fill="none" stroke="#D8CFC4" stroke-width="0.8" opacity="0.45"/>
</svg>`;
}

// Crescent Layout message wrapper: 2 lines balanced, comfortable leading, solid weight
function renderCrescentMessage(text, x, startY, fontSize, fontFamily, color) {
  if (!text) return '';
  const words = text.split(' ');

  // Balanced split around the middle
  const mid = Math.ceil(words.length / 2);
  const line1 = words.slice(0, mid).join(' ');
  const line2 = words.slice(mid).join(' ');

  return `
    <text x="${x}" y="${startY}" font-family="${fontFamily}" font-size="${fontSize}" fill="${color}" font-weight="600" letter-spacing="0.3">
      <tspan x="${x}" dy="0">${line1}</tspan>
      <tspan x="${x}" dy="${fontSize * 1.35}">${line2}</tspan>
    </text>
  `;
}

// Monogram Layout message wrapper: 3 elegant script lines
function renderMonogramMessage(text, x, startY, fontSize, fontFamily, color) {
  if (!text) return '';

  if (text.includes('Por acompañarnos')) {
    return `
      <text x="${x}" y="${startY}" font-family="${fontFamily}" font-size="${fontSize}" fill="${color}" font-weight="500">
        <tspan x="${x}" dy="0">Por acompañarnos</tspan>
        <tspan x="${x}" dy="${fontSize * 1.35}">en nuestra boda, su presencia hizo este</tspan>
        <tspan x="${x}" dy="${fontSize * 1.35}">día especial</tspan>
      </text>
    `;
  }

  const words = text.split(' ');
  if (words.length <= 4) {
    return `<text x="${x}" y="${startY}" font-family="${fontFamily}" font-size="${fontSize}" fill="${color}" font-weight="500">${text}</text>`;
  }

  const third = Math.ceil(words.length / 3);
  const line1 = words.slice(0, third).join(' ');
  const line2 = words.slice(third, third * 2).join(' ');
  const line3 = words.slice(third * 2).join(' ');

  return `
    <text x="${x}" y="${startY}" font-family="${fontFamily}" font-size="${fontSize}" fill="${color}" font-weight="500">
      <tspan x="${x}" dy="0">${line1}</tspan>
      <tspan x="${x}" dy="${fontSize * 1.35}">${line2}</tspan>
      <tspan x="${x}" dy="${fontSize * 1.35}">${line3}</tspan>
    </text>
  `;
}
