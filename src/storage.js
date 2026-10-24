// Storage and design version management
import { DEFAULT_CARD_STATE, generateCardSvg } from './card-generator.js';
import { THEMES } from './floral-templates.js';

const STORAGE_KEY = 'wedding_card_designs_v1';

// Initial preloaded design variations based on inspiration
export const PRESET_DESIGNS = [
  {
    id: 'preset-crescent-blush',
    title: 'Opción 1: Media Luna Acuarela (Inspiración Original)',
    createdAt: new Date().toISOString(),
    isPreset: true,
    state: {
      ...DEFAULT_CARD_STATE,
      themeId: 'crescent-blush',
      title: 'Media Luna Acuarela (Inspiración)',
      namesText: 'Saray & Michael',
      name1: 'Saray',
      ampersand: '&',
      name2: 'Michael',
      greetingText: 'Gracias por',
      highlightText: 'acompañarnos',
      messageText: 'Tu presencia hizo este día aún más especial.',
      dateText: '24 · Noviembre · 2026',
      namesFont: 'alex-brush',
      ampersandFont: 'alex-brush',
      greetingFont: 'cormorant',
      highlightFont: 'alex-brush',
      messageFont: 'cormorant',
      dateFont: 'montserrat',
      namesFontSize: 46,
      ampersandFontSize: 36,
      greetingFontSize: 19,
      highlightFontSize: 32,
      messageFontSize: 14.5,
      dateFontSize: 13,
      bgColor: '#FAF8F5',
      namesColor: '#2C2523',
      ampersandColor: '#C28B59',
      highlightColor: '#B87B4C',
      dateColor: '#7D736A',
      flourishColor: '#C28B59',
      textOffsetX: 24,
      showHole: false,
      showGuide: false,
      showPin: false,
      showBorderRing: true,
    }
  },
  {
    id: 'preset-full-wreath',
    title: 'Opción 2: Corona Botánica Completa',
    createdAt: new Date().toISOString(),
    isPreset: true,
    state: {
      ...DEFAULT_CARD_STATE,
      themeId: 'full-wreath',
      title: 'Corona Botánica Completa',
      name1: 'Saray',
      ampersand: '&',
      name2: 'Michael',
      greetingText: 'Gracias por',
      highlightText: 'acompañarnos',
      messageText: 'Tu presencia hizo este día aún más especial.',
      dateText: '24 · Noviembre · 2026',
      namesFont: 'great-vibes',
      ampersandFont: 'great-vibes',
      greetingFont: 'playfair',
      highlightFont: 'great-vibes',
      messageFont: 'cormorant',
      dateFont: 'cinzel',
      namesFontSize: 44,
      ampersandFontSize: 34,
      greetingFontSize: 18,
      highlightFontSize: 30,
      messageFontSize: 14,
      dateFontSize: 12.5,
      bgColor: '#FCFAF7',
      namesColor: '#231F20',
      ampersandColor: '#D4AF37',
      highlightColor: '#9B5B53',
      flourishColor: '#D4AF37',
      textOffsetX: 0,
      showHole: false,
      showGuide: false,
      showPin: false,
      showBorderRing: true,
    }
  },
  {
    id: 'preset-twin-bouquets',
    title: 'Opción 3: Doble Ramillete & Anillo Dorado',
    createdAt: new Date().toISOString(),
    isPreset: true,
    state: {
      ...DEFAULT_CARD_STATE,
      themeId: 'twin-bouquets',
      title: 'Doble Ramillete & Oro',
      name1: 'Saray',
      ampersand: '&',
      name2: 'Michael',
      greetingText: 'Gracias por',
      highlightText: 'acompañarnos',
      messageText: 'Tu presencia hizo este día aún más especial.',
      dateText: '24 · Noviembre · 2026',
      namesFont: 'pinyon-script',
      ampersandFont: 'pinyon-script',
      greetingFont: 'cinzel',
      highlightFont: 'pinyon-script',
      messageFont: 'cormorant',
      dateFont: 'cinzel',
      namesFontSize: 48,
      ampersandFontSize: 36,
      greetingFontSize: 18,
      highlightFontSize: 32,
      messageFontSize: 14,
      dateFontSize: 12.5,
      bgColor: '#FDFCF8',
      namesColor: '#1F1E1D',
      ampersandColor: '#C59B27',
      highlightColor: '#A7695B',
      flourishColor: '#C59B27',
      textOffsetX: 0,
      showHole: false,
      showGuide: false,
      showPin: false,
      showBorderRing: false,
    }
  },
  {
    id: 'preset-arch-garden',
    title: 'Opción 4: Arco Floral Superior',
    createdAt: new Date().toISOString(),
    isPreset: true,
    state: {
      ...DEFAULT_CARD_STATE,
      themeId: 'arch-garden',
      title: 'Arco Floral Superior',
      name1: 'Saray',
      ampersand: '&',
      name2: 'Michael',
      greetingText: 'Gracias por',
      highlightText: 'acompañarnos',
      messageText: 'Tu presencia hizo este día aún más especial.',
      dateText: '24 · Noviembre · 2026',
      namesFont: 'allura',
      ampersandFont: 'allura',
      greetingFont: 'prata',
      highlightFont: 'allura',
      messageFont: 'marcellus',
      dateFont: 'montserrat',
      namesFontSize: 46,
      ampersandFontSize: 34,
      greetingFontSize: 18,
      highlightFontSize: 32,
      messageFontSize: 14,
      dateFontSize: 12.5,
      bgColor: '#F9FBF8',
      namesColor: '#272B28',
      ampersandColor: '#B8860B',
      highlightColor: '#966159',
      flourishColor: '#B8860B',
      textOffsetX: 0,
      showHole: false,
      showGuide: false,
      showPin: false,
      showBorderRing: true,
    }
  },
  {
    id: 'preset-minimal-crest',
    title: 'Opción 5: Minimalismo Editorial & Monograma',
    createdAt: new Date().toISOString(),
    isPreset: true,
    state: {
      ...DEFAULT_CARD_STATE,
      themeId: 'minimal-crest',
      title: 'Minimalismo Editorial',
      name1: 'Saray',
      ampersand: '&',
      name2: 'Michael',
      greetingText: 'Gracias por',
      highlightText: 'acompañarnos',
      messageText: 'Tu presencia hizo este día aún más especial.',
      dateText: '24 · Noviembre · 2026',
      namesFont: 'cinzel',
      ampersandFont: 'alex-brush',
      greetingFont: 'montserrat',
      highlightFont: 'alex-brush',
      messageFont: 'cormorant',
      dateFont: 'montserrat',
      namesFontSize: 36,
      ampersandFontSize: 38,
      greetingFontSize: 16,
      highlightFontSize: 30,
      messageFontSize: 14,
      dateFontSize: 12,
      bgColor: '#FFFFFF',
      namesColor: '#1A1A1A',
      ampersandColor: '#C89758',
      highlightColor: '#8A5D3B',
      flourishColor: '#C89758',
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
      saveAllDesigns(PRESET_DESIGNS);
      return PRESET_DESIGNS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : PRESET_DESIGNS;
  } catch (e) {
    console.error('Error loading designs from storage', e);
    return PRESET_DESIGNS;
  }
}

export function saveAllDesigns(designs) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(designs));
  } catch (e) {
    console.error('Error saving designs to storage', e);
  }
}

export function saveNewDesign(state, customTitle) {
  const current = getSavedDesigns();
  const count = current.length + 1;
  const newDesign = {
    id: `design-${Date.now()}`,
    title: customTitle || `Variación ${count} - ${state.title || 'Personalizada'}`,
    createdAt: new Date().toISOString(),
    isPreset: false,
    state: { ...state }
  };

  const updated = [newDesign, ...current];
  saveAllDesigns(updated);
  return newDesign;
}

export function deleteDesign(id) {
  const current = getSavedDesigns();
  const updated = current.filter(d => d.id !== id);
  saveAllDesigns(updated);
  return updated;
}
