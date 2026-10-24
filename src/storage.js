// Storage and design version management - Version 9 with Master Gemini & Canva Variants
import { DEFAULT_CARD_STATE } from './card-generator.js';
import { THEMES } from './floral-templates.js';

const STORAGE_KEY = 'wedding_card_designs_v9';

export const PRESET_DESIGNS = [
  {
    id: 'preset-crescent-watercolor',
    title: 'Acuarela Rosas Blush & Eucalipto (Canva Novia)',
    createdAt: new Date().toISOString(),
    isPreset: true,
    state: {
      ...DEFAULT_CARD_STATE,
      themeId: 'crescent-watercolor',
      title: 'Acuarela Rosas Blush & Eucalipto (Canva Novia)',
      isCustomText: false,
      name1: 'Saray',
      ampersand: '&',
      name2: 'Michael',
      greetingText: 'Gracias por',
      highlightText: 'acompañarnos',
      messageText: 'Su presencia hizo este día aún más especial',
      dateText: '19. 11. 2026',
      namesFont: 'alex-brush',
      ampersandFont: 'alex-brush',
      greetingFont: 'alex-brush',
      highlightFont: 'alex-brush',
      messageFont: 'cormorant',
      dateFont: 'cormorant',
      namesFontSize: 38,
      ampersandFontSize: 34,
      greetingFontSize: 22,
      highlightFontSize: 26,
      messageFontSize: 19,
      dateFontSize: 22,
      bgColor: '#FCFAF7',
      namesColor: '#24201E',
      ampersandColor: '#B5874A',
      greetingColor: '#24201E',
      highlightColor: '#24201E',
      messageColor: '#302A27',
      dateColor: '#24201E',
      flourishColor: '#B5874A',
      textOffsetX: 56,
      showHole: false,
      showGuide: false,
      showPin: false,
      showBorderRing: false,
    }
  },
  {
    id: 'preset-geometric-eucalyptus',
    title: 'Marco Geométrico Dorado & Eucalipto (Variante 1)',
    createdAt: new Date().toISOString(),
    isPreset: true,
    state: {
      ...DEFAULT_CARD_STATE,
      themeId: 'geometric-eucalyptus',
      title: 'Marco Geométrico Dorado & Eucalipto (Variante 1)',
      isCustomText: false,
      name1: 'Saray',
      ampersand: '&',
      name2: 'Michael',
      greetingText: 'Gracias por',
      highlightText: 'acompañarnos',
      messageText: 'Su presencia hizo este día aún más especial',
      dateText: '19. 11. 2026',
      namesFont: 'tenor-sans',
      ampersandFont: 'cormorant',
      greetingFont: 'alex-brush',
      highlightFont: 'alex-brush',
      messageFont: 'cormorant',
      dateFont: 'cormorant',
      namesFontSize: 32,
      ampersandFontSize: 30,
      greetingFontSize: 22,
      highlightFontSize: 28,
      messageFontSize: 19,
      dateFontSize: 21,
      bgColor: '#F4F4EF',
      namesColor: '#24201E',
      ampersandColor: '#B5874A',
      greetingColor: '#24201E',
      highlightColor: '#24201E',
      messageColor: '#302A27',
      dateColor: '#24201E',
      flourishColor: '#B5874A',
      textOffsetX: 0,
      showHole: false,
      showGuide: false,
      showPin: false,
      showBorderRing: false,
    }
  },
  {
    id: 'preset-wild-lavender',
    title: 'Lavanda Silvestre & Polvo de Oro (Variante 5)',
    createdAt: new Date().toISOString(),
    isPreset: true,
    state: {
      ...DEFAULT_CARD_STATE,
      themeId: 'wild-lavender',
      title: 'Lavanda Silvestre & Polvo de Oro (Variante 5)',
      isCustomText: false,
      name1: 'Saray',
      ampersand: '&',
      name2: 'Michael',
      greetingText: 'Gracias por',
      highlightText: 'acompañarnos',
      messageText: 'Su presencia hizo este día aún más especial',
      dateText: '19. 11. 2026',
      namesFont: 'parisienne',
      ampersandFont: 'parisienne',
      greetingFont: 'parisienne',
      highlightFont: 'parisienne',
      messageFont: 'cormorant',
      dateFont: 'cormorant',
      namesFontSize: 36,
      ampersandFontSize: 34,
      greetingFontSize: 22,
      highlightFontSize: 28,
      messageFontSize: 19,
      dateFontSize: 21,
      bgColor: '#F7F7F2',
      namesColor: '#221E1D',
      ampersandColor: '#B5874A',
      greetingColor: '#221E1D',
      highlightColor: '#221E1D',
      messageColor: '#302A27',
      dateColor: '#221E1D',
      flourishColor: '#2D2825',
      textOffsetX: 14,
      showHole: false,
      showGuide: false,
      showPin: false,
      showBorderRing: false,
    }
  },
  {
    id: 'preset-monogram-terracotta',
    title: 'Sello Monograma Terracota & Pan de Oro',
    createdAt: new Date().toISOString(),
    isPreset: true,
    state: {
      ...DEFAULT_CARD_STATE,
      themeId: 'monogram-terracotta',
      title: 'Sello Monograma Terracota & Pan de Oro',
      isCustomText: true,
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
    title: 'Editorial Terracota & Pan de Oro Minimalista',
    createdAt: new Date().toISOString(),
    isPreset: true,
    state: {
      ...DEFAULT_CARD_STATE,
      themeId: 'minimal-monogram',
      title: 'Editorial Terracota & Pan de Oro Minimalista',
      isCustomText: true,
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
  const title = customTitle || `${theme.shortName || theme.name} (Copia)`;

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
