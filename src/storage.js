// Storage and design version management - Version 4 with Print-Calibrated Typography
import { DEFAULT_CARD_STATE, generateCardSvg } from './card-generator.js';
import { THEMES } from './floral-templates.js';

const STORAGE_KEY = 'wedding_card_designs_v6';

export const PRESET_DESIGNS = [
  {
    id: 'preset-crescent-watercolor',
    title: 'Opción 1: Acuarela Rosas Blush & Eucalipto (Canva Novia Fiel)',
    createdAt: new Date().toISOString(),
    isPreset: true,
    state: {
      ...DEFAULT_CARD_STATE,
      themeId: 'crescent-watercolor',
      title: 'Acuarela Rosas Blush & Eucalipto (Canva Novia Fiel)',
      name1: 'Saray',
      ampersand: '&',
      name2: 'Michael',
      greetingText: 'Gracias por',
      highlightText: 'acompañarnos',
      messageText: 'Su presencia hizo este día aún más especial',
      dateText: '19. 11. 2026',
      namesFont: 'alex-brush',
      ampersandFont: 'alex-brush',
      greetingFont: 'cormorant',
      highlightFont: 'alex-brush',
      messageFont: 'cormorant',
      dateFont: 'cormorant',
      namesFontSize: 38,
      ampersandFontSize: 34,
      greetingFontSize: 22,
      highlightFontSize: 26,
      messageFontSize: 19,
      dateFontSize: 22,
      bgColor: '#FFFFFF',
      namesColor: '#24201E',
      ampersandColor: '#A47C48',
      greetingColor: '#554C46',
      highlightColor: '#24201E',
      messageColor: '#302A27',
      dateColor: '#24201E',
      flourishColor: '#A47C48',
      textOffsetX: 56,
      showHole: false,
      showGuide: false,
      showPin: false,
      showBorderRing: false,
    }
  },
  {
    id: 'preset-monogram-terracotta',
    title: 'Opción 2: Sello Monograma Terracota & Pan de Oro (Canva Novia Fiel)',
    createdAt: new Date().toISOString(),
    isPreset: true,
    state: {
      ...DEFAULT_CARD_STATE,
      themeId: 'monogram-terracotta',
      title: 'Sello Monograma Terracota & Pan de Oro (Canva Novia Fiel)',
      name1: 'Saray',
      ampersand: '&',
      name2: 'Michael',
      greetingText: 'Muchas Gracias',
      highlightText: 'acompañarnos',
      messageText: 'Por acompañarnos en nuestra boda, su presencia hizo este día especial',
      dateText: '19. 11. 2026',
      namesFont: 'tenor-sans',
      ampersandFont: 'tenor-sans',
      greetingFont: 'alex-brush',
      highlightFont: 'alex-brush',
      messageFont: 'alex-brush',
      dateFont: 'tenor-sans',
      namesFontSize: 36,
      ampersandFontSize: 32,
      greetingFontSize: 44,
      highlightFontSize: 38,
      messageFontSize: 21,
      dateFontSize: 24,
      bgColor: '#FBF9F5',
      namesColor: '#99773D',
      ampersandColor: '#99773D',
      greetingColor: '#B5874A',
      highlightColor: '#B5874A',
      messageColor: '#99773D',
      dateColor: '#99773D',
      flourishColor: '#C59B27',
      textOffsetX: 0,
      showHole: false,
      showGuide: false,
      showPin: false,
      showBorderRing: true,
    }
  },
  {
    id: 'preset-minimal-monogram',
    title: 'Opción 3: Editorial Terracota & Pan de Oro Minimalista',
    createdAt: new Date().toISOString(),
    isPreset: true,
    state: {
      ...DEFAULT_CARD_STATE,
      themeId: 'minimal-monogram',
      title: 'Editorial Terracota & Pan de Oro Minimalista',
      name1: 'Saray',
      ampersand: '&',
      name2: 'Michael',
      greetingText: 'Muchas Gracias',
      highlightText: 'acompañarnos',
      messageText: 'Por acompañarnos en nuestra boda, su presencia hizo este día especial',
      dateText: '19. 11. 2026',
      namesFont: 'tenor-sans',
      ampersandFont: 'tenor-sans',
      greetingFont: 'alex-brush',
      highlightFont: 'alex-brush',
      messageFont: 'forum',
      dateFont: 'tenor-sans',
      namesFontSize: 40,
      ampersandFontSize: 36,
      greetingFontSize: 44,
      highlightFontSize: 38,
      messageFontSize: 21,
      dateFontSize: 24,
      bgColor: '#FAF8F4',
      namesColor: '#26211F',
      ampersandColor: '#B5874A',
      greetingColor: '#B5874A',
      highlightColor: '#B5874A',
      messageColor: '#38312E',
      dateColor: '#26211F',
      flourishColor: '#B5874A',
      textOffsetX: 0,
      showHole: false,
      showGuide: false,
      showPin: false,
      showBorderRing: true,
    }
  },
  {
    id: 'preset-full-wreath-watercolor',
    title: 'Opción 4: Corona Botánica 360° en Acuarela',
    createdAt: new Date().toISOString(),
    isPreset: true,
    state: {
      ...DEFAULT_CARD_STATE,
      themeId: 'full-wreath-watercolor',
      title: 'Corona Botánica 360° en Acuarela',
      name1: 'Saray',
      ampersand: '&',
      name2: 'Michael',
      greetingText: 'Muchas Gracias',
      highlightText: 'acompañarnos',
      messageText: 'Su presencia hizo este día aún más especial',
      dateText: '19. 11. 2026',
      namesFont: 'great-vibes',
      ampersandFont: 'great-vibes',
      greetingFont: 'cinzel',
      highlightFont: 'great-vibes',
      messageFont: 'cormorant',
      dateFont: 'cinzel',
      namesFontSize: 42,
      ampersandFontSize: 34,
      greetingFontSize: 32,
      highlightFontSize: 34,
      messageFontSize: 20,
      dateFontSize: 22,
      bgColor: '#FCFAF7',
      namesColor: '#231F20',
      ampersandColor: '#C59B27',
      greetingColor: '#4A443F',
      highlightColor: '#A45E54',
      messageColor: '#4A443F',
      dateColor: '#5E564F',
      flourishColor: '#C59B27',
      textOffsetX: 0,
      showHole: false,
      showGuide: false,
      showPin: false,
      showBorderRing: true,
    }
  },
  {
    id: 'preset-twin-bouquets-gold',
    title: 'Opción 5: Doble Ramillete & Anillo de Oro Geométrico',
    createdAt: new Date().toISOString(),
    isPreset: true,
    state: {
      ...DEFAULT_CARD_STATE,
      themeId: 'twin-bouquets-gold',
      title: 'Doble Ramillete & Anillo de Oro',
      name1: 'Saray',
      ampersand: '&',
      name2: 'Michael',
      greetingText: 'Muchas Gracias',
      highlightText: 'acompañarnos',
      messageText: 'Su presencia hizo este día aún más especial',
      dateText: '19. 11. 2026',
      namesFont: 'pinyon-script',
      ampersandFont: 'pinyon-script',
      greetingFont: 'cinzel',
      highlightFont: 'pinyon-script',
      messageFont: 'cormorant',
      dateFont: 'cinzel',
      namesFontSize: 44,
      ampersandFontSize: 36,
      greetingFontSize: 32,
      highlightFontSize: 36,
      messageFontSize: 20,
      dateFontSize: 23,
      bgColor: '#FFFFFF',
      namesColor: '#1F1E1D',
      ampersandColor: '#C59B27',
      greetingColor: '#3D3834',
      highlightColor: '#9B5B53',
      messageColor: '#4F4842',
      dateColor: '#5E564F',
      flourishColor: '#C59B27',
      textOffsetX: 0,
      showHole: false,
      showGuide: false,
      showPin: false,
      showBorderRing: false,
    }
  }
];

export function getSavedDesigns() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(PRESET_DESIGNS));
      return PRESET_DESIGNS;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(PRESET_DESIGNS));
      return PRESET_DESIGNS;
    }
    return parsed;
  } catch (err) {
    console.error('Error reading localStorage designs:', err);
    return PRESET_DESIGNS;
  }
}

export function saveNewDesign(state, customTitle = null) {
  const designs = getSavedDesigns();
  const theme = THEMES.find(t => t.id === state.themeId) || THEMES[0];
  const title = customTitle || `${theme.name} (Copia)`;

  const newDesign = {
    id: 'design-' + Date.now(),
    title,
    createdAt: new Date().toISOString(),
    isPreset: false,
    state: { ...state }
  };

  designs.unshift(newDesign);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(designs));
  } catch (err) {
    console.error('Failed to save to localStorage:', err);
  }
  return newDesign;
}

export function deleteDesign(designId) {
  let designs = getSavedDesigns();
  designs = designs.filter(d => d.id !== designId);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(designs));
  } catch (err) {
    console.error('Failed to delete design:', err);
  }
  return designs;
}
