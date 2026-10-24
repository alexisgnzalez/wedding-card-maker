// Luxury Wedding Card Master Generator - Typographically Calibrated for 5cm x 5cm Print Legibility
import { getFontFamily, getGoogleFontsUrl } from './fonts.js';
import { 
  getSvgDefs, 
  renderFloralBackground, 
  renderTopHeartFlourish,
  renderDelicateHollowHeartDivider, 
  renderWatercolorLaurelDivider, 
  renderDoodleHeartFlourish,
  renderGoldHeartWithSprig,
  renderHoleGuide, 
  THEMES 
} from './floral-templates.js';

export const DEFAULT_CARD_STATE = {
  themeId: 'crescent-watercolor',
  title: 'Acuarela Rosas Blush & Eucalipto (Canva Novia)',
  isCustomText: false, // Default: 100% genuine master artwork with zero artifacts

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
  greetingFont: 'alex-brush',
  highlightFont: 'alex-brush',
  messageFont: 'cormorant',
  dateFont: 'cormorant',

  // Font Sizes Calibrated for 5cm (50mm) Circular Print
  namesFontSize: 38,
  ampersandFontSize: 34,
  greetingFontSize: 22,
  highlightFontSize: 26,
  messageFontSize: 19,
  dateFontSize: 22,

  // Colors
  bgColor: '#FCFAF7',
  namesColor: '#24201E',
  ampersandColor: '#B5874A',
  greetingColor: '#24201E',
  highlightColor: '#24201E',
  messageColor: '#302A27',
  dateColor: '#24201E',
  flourishColor: '#B5874A',
  borderStrokeColor: '#D4AF37',
  showBorderRing: false,

  // Alignment
  textOffsetX: 56, // Optical balance for crescent floral layouts

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
  const isGeometric = currentTheme.layout === 'geometric-eucalyptus';
  const isLavender = currentTheme.layout === 'wild-lavender';
  const hasTopHole = s.showHole || s.showPin || s.showGuide;
  const isCustomMode = Boolean(s.isCustomText || isMonogram);

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

  // Compute optical center X for each layout
  let centerX = 250;
  if (isCrescent) {
    centerX = 250 + (s.textOffsetX ?? 56);
  } else if (isLavender) {
    centerX = 264; // Slight right shift to balance dense lavender bouquet on left
  } else {
    centerX = 250; // Symmetrical center for Geometric, Monogram & Minimal
  }

  let textGroupContent = '';

  // In pristine master mode, typography is already flawlessly integrated in the master artwork!
  if (isCustomMode) {
    if (isMonogram) {
      // Monogram & Gold Layout (Exact Proportions from Reference)
      const offsetY = hasTopHole ? 10 : 0;
      const greetingY = 154 + offsetY;
      const namesY = 208 + offsetY;
      const messageStartY = 258 + offsetY;
      const dateY = 368 + offsetY;

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

        <!-- Flanking Gold Date Dividers: — 19. 11. 2026 — -->
        <g id="date-group" text-anchor="middle">
          <line x1="${centerX - 136}" y1="${dateY - 7}" x2="${centerX - 84}" y2="${dateY - 7}" stroke="url(#gold-foil)" stroke-width="1.3" stroke-linecap="round"/>
          <text x="${centerX}" y="${dateY}" font-family="${dateFamily}" font-size="${s.dateFontSize}" fill="${s.dateColor}" letter-spacing="2" font-weight="600">
            ${dateSafe}
          </text>
          <line x1="${centerX + 84}" y1="${dateY - 7}" x2="${centerX + 136}" y2="${dateY - 7}" stroke="url(#gold-foil)" stroke-width="1.3" stroke-linecap="round"/>
        </g>
      `;
    } else if (isCrescent) {
      // Faithful Canva Crescent Layout
      const offsetY = hasTopHole ? 10 : 0;
      const namesY = 142 + offsetY;
      const subtitleY = 236 + offsetY;
      const messageY = 286 + offsetY;
      const dateY = 366 + offsetY;

      const isSplitGreeting = (s.greetingText === 'Gracias por' && s.highlightText === 'acompañarnos');
      const subtitleText = isSplitGreeting ? 'Gracias por acompañarnos' : `${greetingSafe} ${highlightSafe}`.trim();

      textGroupContent = `
        <!-- 1. Hero Names: "Saray & Michael" in flowing calligraphy -->
        <text x="${centerX}" y="${namesY}" text-anchor="middle">
          <tspan font-family="${namesFamily}" font-size="${s.namesFontSize}" fill="${s.namesColor}" font-weight="normal">${name1Safe}</tspan>
          <tspan font-family="${ampersandFamily}" font-size="${s.ampersandFontSize}" fill="url(#gold-foil)" font-weight="normal"> ${ampersandSafe} </tspan>
          <tspan font-family="${namesFamily}" font-size="${s.namesFontSize}" fill="${s.namesColor}" font-weight="normal">${name2Safe}</tspan>
        </text>

        <!-- 2. Subtitle in Calligraphy: "Gracias por acompañarnos" -->
        <text x="${centerX}" y="${subtitleY}" 
              font-family="${highlightFamily || namesFamily}" 
              font-size="${s.highlightFontSize}" 
              fill="${s.highlightColor || s.namesColor}" 
              text-anchor="middle" 
              font-weight="normal">
          ${subtitleText}
        </text>

        <!-- 3. Emotive Body Message in 2 balanced lines of clean Cormorant Garamond -->
        ${s.messageText ? `
          <g id="message-group" text-anchor="middle">
            ${renderCrescentMessage(s.messageText, centerX, messageY, s.messageFontSize, messageFamily, s.messageColor)}
          </g>
        ` : ''}

        <!-- 4. Date in Elegant Tabular Numbers: "19. 11. 2026" -->
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
      `;
    } else if (isGeometric) {
      // Variant 1: Faceted Geometric Gold Polygon with Eucalyptus
      const offsetY = hasTopHole ? 10 : 0;
      const namesY = 162 + offsetY;
      const dividerY = 196 + offsetY;
      const subtitleY = 242 + offsetY;
      const messageY = 286 + offsetY;
      const dateY = 362 + offsetY;

      const isSplitGreeting = (s.greetingText === 'Gracias por' && s.highlightText === 'acompañarnos');
      const subtitleText = isSplitGreeting ? 'Gracias por acompañarnos' : `${greetingSafe} ${highlightSafe}`.trim();

      textGroupContent = `
        <!-- 1. Hero Names: "Saray & Michael" in Modern Classic Serif -->
        <text x="${centerX}" y="${namesY}" text-anchor="middle">
          <tspan font-family="${namesFamily}" font-size="${s.namesFontSize}" fill="${s.namesColor}" letter-spacing="2" font-weight="600">${name1Safe}</tspan>
          <tspan font-family="${ampersandFamily}" font-size="${s.ampersandFontSize}" fill="${s.ampersandColor}" font-weight="normal"> ${ampersandSafe} </tspan>
          <tspan font-family="${namesFamily}" font-size="${s.namesFontSize}" fill="${s.namesColor}" letter-spacing="2" font-weight="600">${name2Safe}</tspan>
        </text>

        <!-- 2. Gold Heart with Olive Sprig Flourish -->
        ${renderGoldHeartWithSprig(centerX, dividerY)}

        <!-- 3. Subtitle in Modern Organic Cursive: "Gracias por acompañarnos" -->
        <text x="${centerX}" y="${subtitleY}" 
              font-family="${highlightFamily || namesFamily}" 
              font-size="${s.highlightFontSize}" 
              fill="${s.highlightColor || s.namesColor}" 
              text-anchor="middle" 
              font-weight="normal">
          ${subtitleText}
        </text>

        <!-- 4. Emotive Message in Clean Serif -->
        ${s.messageText ? `
          <g id="message-group" text-anchor="middle">
            ${renderCrescentMessage(s.messageText, centerX, messageY, s.messageFontSize, messageFamily, s.messageColor)}
          </g>
        ` : ''}

        <!-- 5. Event Date -->
        <text id="date-text" 
              x="${centerX}" 
              y="${dateY}" 
              font-family="${dateFamily}" 
              font-size="${s.dateFontSize}" 
              fill="${s.dateColor}" 
              letter-spacing="2.5" 
              text-anchor="middle"
              font-weight="600">
          ${dateSafe}
        </text>
      `;
    } else if (isLavender) {
      // Variant 5: Wild Botanical Lavender & Daisies with Stardust Gold Dust
      const offsetY = hasTopHole ? 10 : 0;
      const namesY = 138 + offsetY;
      const dividerY = 176 + offsetY;
      const subtitleY = 230 + offsetY;
      const messageY = 276 + offsetY;
      const dateY = 358 + offsetY;

      const isSplitGreeting = (s.greetingText === 'Gracias por' && s.highlightText === 'acompañarnos');
      const subtitleText = isSplitGreeting ? 'Gracias por acompañarnos' : `${greetingSafe} ${highlightSafe}`.trim();

      textGroupContent = `
        <!-- 1. Hero Names: "Saray & Michael" in Whimsical Handwritten Script -->
        <text x="${centerX}" y="${namesY}" text-anchor="middle">
          <tspan font-family="${namesFamily}" font-size="${s.namesFontSize}" fill="${s.namesColor}" font-weight="normal">${name1Safe}</tspan>
          <tspan font-family="${ampersandFamily}" font-size="${s.ampersandFontSize}" fill="${s.ampersandColor}" font-weight="normal"> ${ampersandSafe} </tspan>
          <tspan font-family="${namesFamily}" font-size="${s.namesFontSize}" fill="${s.namesColor}" font-weight="normal">${name2Safe}</tspan>
        </text>

        <!-- 2. Hand-Drawn Doodle Heart with Leaf Twigs -->
        ${renderDoodleHeartFlourish(centerX, dividerY, s.flourishColor || '#2D2825')}

        <!-- 3. Subtitle in Romantic Script: "Gracias por acompañarnos" -->
        <text x="${centerX}" y="${subtitleY}" 
              font-family="${highlightFamily || namesFamily}" 
              font-size="${s.highlightFontSize}" 
              fill="${s.highlightColor || s.namesColor}" 
              text-anchor="middle" 
              font-weight="normal">
          ${subtitleText}
        </text>

        <!-- 4. Emotive Message in Serif -->
        ${s.messageText ? `
          <g id="message-group" text-anchor="middle">
            ${renderCrescentMessage(s.messageText, centerX, messageY, s.messageFontSize, messageFamily, s.messageColor)}
          </g>
        ` : ''}

        <!-- 5. Event Date -->
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
      `;
    }
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" 
     xmlns:xlink="http://www.w3.org/1999/xlink"
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

    <!-- Optional Decorative Inner Border Ring (when manually toggled or theme specific) -->
    ${s.showBorderRing ? `
      <circle cx="250" cy="250" r="236" fill="none" stroke="${s.borderStrokeColor || 'url(#gold-foil)'}" stroke-width="2.5" opacity="0.95"/>
    ` : ''}

    <!-- Botanical Floral Artwork Layer (Pristine 1:1 Masterpiece OR Clean Template) -->
    ${renderFloralBackground(currentTheme.layout, { flourish: s.flourishColor, border: s.borderStrokeColor }, isCustomMode)}

    <!-- Live Editable Typography Content Layer (rendered when in custom text mode) -->
    ${textGroupContent ? `
      <g id="card-typography">
        ${textGroupContent}
      </g>
    ` : ''}
  </g>

  <!-- Hole Punch Guide & Tagpin Layer -->
  ${renderHoleGuide({
    showHole: s.showHole,
    showGuide: s.showGuide,
    holeX: 250,
    holeY: s.holeY,
    holeRadius: s.holeRadius,
    showPin: s.showPin
  })}

  <!-- Outer Die-Cut Circular Cutline -->
  <circle cx="250" cy="250" r="249" fill="none" stroke="#D8CFC4" stroke-width="0.8" opacity="0.45"/>
</svg>`;
}

// Emotive Body Message Renderer in 2 balanced lines of clean serif
function renderCrescentMessage(text, x, startY, fontSize = 19, fontFamily = 'serif', color = '#302A27') {
  if (!text) return '';
  const clean = String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  if (clean.includes('Su presencia hizo este día aún más especial') || clean.includes('Su presencia hizo este')) {
    return `
    <text x="${x}" y="${startY}" font-family="${fontFamily}" font-size="${fontSize}" fill="${color}" font-weight="600" letter-spacing="0.3">
      <tspan x="${x}" dy="0">Su presencia hizo este</tspan>
      <tspan x="${x}" dy="${fontSize * 1.35}">día aún más especial</tspan>
    </text>
  `;
  }

  const words = clean.split(' ');
  if (words.length <= 4) {
    return `<text x="${x}" y="${startY}" font-family="${fontFamily}" font-size="${fontSize}" fill="${color}" font-weight="600">${clean}</text>`;
  }

  const mid = Math.ceil(words.length / 2);
  const line1 = words.slice(0, mid).join(' ');
  const line2 = words.slice(mid).join(' ');

  return `
    <text x="${x}" y="${startY}" font-family="${fontFamily}" font-size="${fontSize}" fill="${color}" font-weight="600">
      <tspan x="${x}" dy="0">${line1}</tspan>
      <tspan x="${x}" dy="${fontSize * 1.35}">${line2}</tspan>
    </text>
  `;
}

// Monogram 3-line message renderer in cursive italic
function renderMonogramMessage(text, x, startY, fontSize = 20, fontFamily = 'serif', color = '#99773D') {
  if (!text) return '';
  const clean = String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  if (clean.includes('Por acompañarnos en nuestra boda') || clean.includes('presencia hizo este día especial')) {
    return `
      <text x="${x}" y="${startY}" font-family="${fontFamily}" font-size="${fontSize}" fill="${color}" font-weight="normal">
        <tspan x="${x}" dy="0">Por acompañarnos</tspan>
        <tspan x="${x}" dy="25">en nuestra boda, su presencia hizo este</tspan>
        <tspan x="${x}" dy="24">día especial</tspan>
      </text>
    `;
  }

  const words = clean.split(' ');
  return `<text x="${x}" y="${startY}" font-family="${fontFamily}" font-size="${fontSize}" fill="${color}" font-weight="normal">${clean}</text>`;
}
