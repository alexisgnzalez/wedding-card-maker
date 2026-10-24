// Storage and design version management
import { DEFAULT_CARD_STATE, generateCardSvg } from './card-generator.js';
import { THEMES } from './floral-templates.js';

const STORAGE_KEY = 'wedding_card_designs_v2';

export const PRESET_DESIGNS = [
  {
    id: 'preset-crescent-watercolor',
    title: 'Opción 1: Acuarela Rosas & Eucalipto (Fiel a la Inspiración)',
    createdAt: new Date().toISOString(),
    isPreset: true,
    state: {
      ...DEFAULT_CARD_STATE,
      themeId: 'crescent-watercolor',
      title: 'Acuarela Rosas & Eucalipto (Inspiración Original)',
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
      namesFontSize: 39,
      ampersandFontSize: 32,
      greetingFontSize: 25,
      highlightFontSize: 25,
      messageFontSize: 16.5,
      dateFontSize: 18,
      bgColor: '#FFFFFF',
      namesColor: '#2C2523',
      ampersandColor: '#2C2523',
      greetingColor: '#2C2523',
      highlightColor: '#2C2523',
      messageColor: '#423B37',
      dateColor: '#2C2523',
      flourishColor: '#7D736A',
      textOffsetX: 38,
      showHole: false,
      showGuide: false,
      showPin: false,
      showBorderRing: false,
    }
  },
  {
    id: 'preset-monogram-terracotta',
    title: 'Opción 2: Sello Monograma Terracota & Pan de Oro',
    createdAt: new Date().toISOString(),
    isPreset: true,
    state: {
      ...DEFAULT_CARD_STATE,
      themeId: 'monogram-terracotta',
      title: 'Sello Monograma Terracota & Pan de Oro',
      name1: 'Saray',
      ampersand: '&',
      name2: 'Michael',
      greetingText: 'Muchas Gracias',
      highlightText: 'acompañarnos',
      messageText: 'Por acompañarnos en nuestra boda, su presencia hizo este día especial',
      dateText: '19. 11. 2026',
      namesFont: 'italiana',
      ampersandFont: 'italiana',
      greetingFont: 'alex-brush',
      highlightFont: 'alex-brush',
      messageFont: 'alex-brush',
      dateFont: 'italiana',
      namesFontSize: 33,
      ampersandFontSize: 26,
      greetingFontSize: 28,
      highlightFontSize: 25,
      messageFontSize: 16,
      dateFontSize: 17,
      bgColor: '#FDFBF7',
      namesColor: '#8F6546',
      ampersandColor: '#8F6546',
      greetingColor: '#A87948',
      highlightColor: '#A87948',
      messageColor: '#8F6546',
      dateColor: '#8F6546',
      flourishColor: '#C59B27',
      textOffsetX: 0,
      showHole: false,
      showGuide: false,
      showPin: false,
      showBorderRing: false,
    }
  },
  {
    id: 'preset-full-wreath-watercolor',
    title: 'Opción 3: Corona Botánica 360° en Acuarela',
    createdAt: new Date().toISOString(),
    isPreset: true,
    state: {
      ...DEFAULT_CARD_STATE,
      themeId: 'full-wreath-watercolor',
      title: 'Corona Botánica 360° en Acuarela',
      name1: 'Saray',
      ampersand: '&',
      name2: 'Michael',
      greetingText: 'Gracias por',
      highlightText: 'acompañarnos',
      messageText: 'Tu presencia hizo este día aún más especial.',
      dateText: '19. 11. 2026',
      namesFont: 'great-vibes',
      ampersandFont: 'great-vibes',
      greetingFont: 'cinzel',
      highlightFont: 'great-vibes',
      messageFont: 'cormorant',
      dateFont: 'cinzel',
      namesFontSize: 40,
      ampersandFontSize: 30,
      greetingFontSize: 18,
      highlightFontSize: 27,
      messageFontSize: 14.5,
      dateFontSize: 15,
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
    title: 'Opción 4: Doble Ramillete & Anillo de Oro Geométrico',
    createdAt: new Date().toISOString(),
    isPreset: true,
    state: {
      ...DEFAULT_CARD_STATE,
      themeId: 'twin-bouquets-gold',
      title: 'Doble Ramillete & Anillo de Oro',
      name1: 'Saray',
      ampersand: '&',
      name2: 'Michael',
      greetingText: 'Gracias por',
      highlightText: 'acompañarnos',
      messageText: 'Tu presencia hizo este día aún más especial.',
      dateText: '19. 11. 2026',
      namesFont: 'pinyon-script',
      ampersandFont: 'pinyon-script',
      greetingFont: 'cinzel',
      highlightFont: 'pinyon-script',
      messageFont: 'cormorant',
      dateFont: 'cinzel',
      namesFontSize: 44,
      ampersandFontSize: 32,
      greetingFontSize: 17,
      highlightFontSize: 28,
      messageFontSize: 14,
      dateFontSize: 14,
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
  },
  {
    id: 'preset-minimal-monogram',
    title: 'Opción 5: Lujo Minimalista & Sello Nupcial',
    createdAt: new Date().toISOString(),
    isPreset: true,
    state: {
      ...DEFAULT_CARD_STATE,
      themeId: 'minimal-monogram',
      title: 'Lujo Minimalista & Sello Nupcial',
      name1: 'Saray',
      ampersand: '&',
      name2: 'Michael',
      greetingText: 'Muchas Gracias',
      highlightText: 'acompañarnos',
      messageText: 'Tu presencia hizo este día aún más especial.',
      dateText: '19. 11. 2026',
      namesFont: 'cinzel',
      ampersandFont: 'alex-brush',
      greetingFont: 'montserrat',
      highlightFont: 'alex-brush',
      messageFont: 'cormorant',
      dateFont: 'montserrat',
      namesFontSize: 34,
      ampersandFontSize: 36,
      greetingFontSize: 16,
      highlightFontSize: 28,
      messageFontSize: 14,
      dateFontSize: 13,
      bgColor: '#FAF8F5',
      namesColor: '#1A1A1A',
      ampersandColor: '#C59B27',
      greetingColor: '#555555',
      highlightColor: '#8A5D3B',
      messageColor: '#404040',
      dateColor: '#666666',
      flourishColor: '#C59B27',
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
