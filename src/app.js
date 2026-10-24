// Main Application Controller
import { FONT_PRESETS } from './fonts.js';
import { THEMES } from './floral-templates.js';
import { DEFAULT_CARD_STATE, generateCardSvg } from './card-generator.js';
import { downloadSvg, downloadRaster } from './export.js';
import { getSavedDesigns, saveNewDesign, deleteDesign } from './storage.js';
import confetti from 'canvas-confetti';

class WeddingCardApp {
  constructor() {
    this.state = { ...DEFAULT_CARD_STATE };
    this.savedDesigns = getSavedDesigns();
    this.isOneToOne = false;

    this.initElements();
    this.populateSelectors();
    this.bindEvents();
    this.loadState(this.state);
    this.updateSavedBadge();
  }

  initElements() {
    this.svgContainer = document.getElementById('svg-preview-container');
    this.cardWrapper = document.getElementById('card-preview-wrapper');
    this.presetPillsBar = document.getElementById('preset-pills-bar');
    this.themeLabelBadge = document.getElementById('theme-label-badge');
    this.savedCountBadge = document.getElementById('saved-count-badge');
    this.toastContainer = document.getElementById('toast-container');

    // Modals
    this.modalInspiration = document.getElementById('modal-inspiration');
    this.modalCatalog = document.getElementById('modal-catalog');
    this.catalogCardsGrid = document.getElementById('catalog-cards-grid');

    // Inputs
    this.inputName1 = document.getElementById('input-name1');
    this.inputAmpersand = document.getElementById('input-ampersand');
    this.inputName2 = document.getElementById('input-name2');
    this.inputGreeting = document.getElementById('input-greeting');
    this.inputHighlight = document.getElementById('input-highlight');
    this.inputMessage = document.getElementById('input-message');
    this.inputDate = document.getElementById('input-date');
    this.selectTheme = document.getElementById('select-theme');
    this.inputTextOffset = document.getElementById('input-text-offset');
    this.valTextOffset = document.getElementById('val-text-offset');

    // Font Selectors
    this.fontNames = document.getElementById('font-names');
    this.fontAmpersand = document.getElementById('font-ampersand');
    this.fontGreeting = document.getElementById('font-greeting');
    this.fontHighlight = document.getElementById('font-highlight');
    this.fontMessage = document.getElementById('font-message');
    this.fontDate = document.getElementById('font-date');

    // Font Size Sliders
    this.sizeNames = document.getElementById('size-names');
    this.valNamesSize = document.getElementById('val-names-size');
    this.sizeGreeting = document.getElementById('size-greeting');
    this.valGreetingSize = document.getElementById('val-greeting-size');
    this.sizeHighlight = document.getElementById('size-highlight');
    this.valHighlightSize = document.getElementById('val-highlight-size');
    this.sizeMessage = document.getElementById('size-message');
    this.valMessageSize = document.getElementById('val-message-size');
    this.sizeDate = document.getElementById('size-date');
    this.valDateSize = document.getElementById('val-date-size');

    // Color Pickers
    this.colorBg = document.getElementById('color-bg');
    this.hexBg = document.getElementById('hex-bg');
    this.colorNames = document.getElementById('color-names');
    this.hexNames = document.getElementById('hex-names');
    this.colorAmpersand = document.getElementById('color-ampersand');
    this.hexAmpersand = document.getElementById('hex-ampersand');
    this.colorHighlight = document.getElementById('color-highlight');
    this.hexHighlight = document.getElementById('hex-highlight');
    this.colorMessage = document.getElementById('color-message');
    this.hexMessage = document.getElementById('hex-message');
    this.colorFlourish = document.getElementById('color-flourish');
    this.hexFlourish = document.getElementById('hex-flourish');
    this.checkBorderRing = document.getElementById('check-border-ring');

    // Hole and Pin
    this.checkHole = document.getElementById('check-hole');
    this.checkGuide = document.getElementById('check-guide');
    this.checkPin = document.getElementById('check-pin');
    this.rangeHoleY = document.getElementById('range-hole-y');
    this.valHoleY = document.getElementById('val-hole-y');
    this.rangeHoleRadius = document.getElementById('range-hole-radius');
    this.valHoleRadius = document.getElementById('val-hole-radius');

    // Quick toggles on stage
    this.btnToggleScale = document.getElementById('btn-toggle-scale');
    this.scaleLabel = document.getElementById('scale-label');
    this.btnToggleHole = document.getElementById('btn-toggle-hole');
    this.holeLabel = document.getElementById('hole-label');
    this.btnToggleGuide = document.getElementById('btn-toggle-guide');
    this.btnTogglePin = document.getElementById('btn-toggle-pin');
  }

  populateSelectors() {
    // Populate Themes
    this.selectTheme.innerHTML = THEMES.map(t => `<option value="${t.id}">${t.name}</option>`).join('');

    // Populate Preset Pills
    this.presetPillsBar.innerHTML = THEMES.map((t, idx) => `
      <button class="preset-pill ${idx === 0 ? 'active' : ''}" data-theme="${t.id}">
        Opción ${idx + 1}: ${t.name.split('(')[0].trim()}
      </button>
    `).join('');

    // Populate Fonts
    const fontOptions = FONT_PRESETS.map(f => `
      <option value="${f.id}" style="font-family: ${f.family};">${f.name} (${f.category})</option>
    `).join('');

    [this.fontNames, this.fontAmpersand, this.fontGreeting, this.fontHighlight, this.fontMessage, this.fontDate].forEach(sel => {
      sel.innerHTML = fontOptions;
    });
  }

  bindEvents() {
    // Inspector Tabs
    document.querySelectorAll('.inspector-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.inspector-tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(p => p.style.display = 'none');
        btn.classList.add('active');
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).style.display = 'flex';
      });
    });

    // Theme switching via pills
    this.presetPillsBar.addEventListener('click', (e) => {
      const pill = e.target.closest('.preset-pill');
      if (!pill) return;
      const themeId = pill.getAttribute('data-theme');
      this.applyTheme(themeId);
    });

    // Theme switching via dropdown
    this.selectTheme.addEventListener('change', (e) => {
      this.applyTheme(e.target.value);
    });

    // Inputs: Texts
    const textHandler = () => {
      this.state.name1 = this.inputName1.value;
      this.state.ampersand = this.inputAmpersand.value;
      this.state.name2 = this.inputName2.value;
      this.state.namesText = `${this.state.name1} ${this.state.ampersand} ${this.state.name2}`;
      this.state.greetingText = this.inputGreeting.value;
      this.state.highlightText = this.inputHighlight.value;
      this.state.messageText = this.inputMessage.value;
      this.state.dateText = this.inputDate.value;
      this.render();
    };

    [this.inputName1, this.inputAmpersand, this.inputName2, this.inputGreeting, this.inputHighlight, this.inputMessage, this.inputDate].forEach(el => {
      el.addEventListener('input', textHandler);
    });

    // Horizontal text offset
    this.inputTextOffset.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      this.state.textOffsetX = val;
      this.valTextOffset.textContent = `${val}px`;
      this.render();
    });

    // Fonts
    this.fontNames.addEventListener('change', (e) => { this.state.namesFont = e.target.value; this.render(); });
    this.fontAmpersand.addEventListener('change', (e) => { this.state.ampersandFont = e.target.value; this.render(); });
    this.fontGreeting.addEventListener('change', (e) => { this.state.greetingFont = e.target.value; this.render(); });
    this.fontHighlight.addEventListener('change', (e) => { this.state.highlightFont = e.target.value; this.render(); });
    this.fontMessage.addEventListener('change', (e) => { this.state.messageFont = e.target.value; this.render(); });
    this.fontDate.addEventListener('change', (e) => { this.state.dateFont = e.target.value; this.render(); });

    // Font Sizes
    this.sizeNames.addEventListener('input', (e) => {
      this.state.namesFontSize = parseFloat(e.target.value);
      this.valNamesSize.textContent = `${e.target.value}px`;
      this.render();
    });
    this.sizeGreeting.addEventListener('input', (e) => {
      this.state.greetingFontSize = parseFloat(e.target.value);
      this.valGreetingSize.textContent = `${e.target.value}px`;
      this.render();
    });
    this.sizeHighlight.addEventListener('input', (e) => {
      this.state.highlightFontSize = parseFloat(e.target.value);
      this.valHighlightSize.textContent = `${e.target.value}px`;
      this.render();
    });
    this.sizeMessage.addEventListener('input', (e) => {
      this.state.messageFontSize = parseFloat(e.target.value);
      this.valMessageSize.textContent = `${e.target.value}px`;
      this.render();
    });
    this.sizeDate.addEventListener('input', (e) => {
      this.state.dateFontSize = parseFloat(e.target.value);
      this.valDateSize.textContent = `${e.target.value}px`;
      this.render();
    });

    // Colors
    this.bindColorPicker(this.colorBg, this.hexBg, 'bgColor');
    this.bindColorPicker(this.colorNames, this.hexNames, 'namesColor');
    this.bindColorPicker(this.colorAmpersand, this.hexAmpersand, 'ampersandColor');
    this.bindColorPicker(this.colorHighlight, this.hexHighlight, 'highlightColor');
    this.bindColorPicker(this.colorMessage, this.hexMessage, 'messageColor');
    this.bindColorPicker(this.colorFlourish, this.hexFlourish, 'flourishColor');

    this.checkBorderRing.addEventListener('change', (e) => {
      this.state.showBorderRing = e.target.checked;
      this.render();
    });

    // Hole and Pin
    this.checkHole.addEventListener('change', (e) => {
      this.state.showHole = e.target.checked;
      this.updateHoleToggles();
      this.render();
    });
    this.checkGuide.addEventListener('change', (e) => {
      this.state.showGuide = e.target.checked;
      this.updateHoleToggles();
      this.render();
    });
    this.checkPin.addEventListener('change', (e) => {
      this.state.showPin = e.target.checked;
      this.updateHoleToggles();
      this.render();
    });

    this.rangeHoleY.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      this.state.holeY = val;
      this.valHoleY.textContent = `${val}px`;
      this.render();
    });

    this.rangeHoleRadius.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      this.state.holeRadius = val;
      this.valHoleRadius.textContent = `${(val * 0.2).toFixed(1)} mm`;
      this.render();
    });

    // Stage Quick Toggles
    this.btnToggleScale.addEventListener('click', () => {
      this.isOneToOne = !this.isOneToOne;
      this.cardWrapper.classList.toggle('scale-1-to-1', this.isOneToOne);
      this.btnToggleScale.classList.toggle('active', this.isOneToOne);
      this.scaleLabel.textContent = this.isOneToOne ? 'Escala 1:1 (5cm)' : 'Zoom Completo';
    });

    this.btnToggleHole.addEventListener('click', () => {
      this.state.showHole = !this.state.showHole;
      this.checkHole.checked = this.state.showHole;
      this.updateHoleToggles();
      this.render();
    });

    this.btnToggleGuide.addEventListener('click', () => {
      this.state.showGuide = !this.state.showGuide;
      this.checkGuide.checked = this.state.showGuide;
      this.updateHoleToggles();
      this.render();
    });

    this.btnTogglePin.addEventListener('click', () => {
      this.state.showPin = !this.state.showPin;
      this.checkPin.checked = this.state.showPin;
      this.updateHoleToggles();
      this.render();
    });

    // Modals
    document.getElementById('btn-show-inspiration').addEventListener('click', () => {
      this.modalInspiration.classList.add('open');
    });

    document.getElementById('btn-open-catalog').addEventListener('click', () => {
      this.renderCatalogModal();
      this.modalCatalog.classList.add('open');
    });

    document.querySelectorAll('.btn-close-modal').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const modalId = btn.getAttribute('data-modal');
        document.getElementById(modalId).classList.remove('open');
      });
    });

    // Save variation
    document.getElementById('btn-save-variation').addEventListener('click', () => {
      const title = prompt('Nombre para esta variación de diseño:', `${this.state.name1} & ${this.state.name2} - ${this.selectTheme.options[this.selectTheme.selectedIndex].text.split('(')[0].trim()}`);
      if (title !== null) {
        saveNewDesign(this.state, title.trim());
        this.savedDesigns = getSavedDesigns();
        this.updateSavedBadge();
        this.showToast(`¡Diseño "${title}" guardado con éxito!`);
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.15 }
        });
      }
    });

    // Exports
    document.getElementById('btn-export-svg').addEventListener('click', () => {
      const svg = generateCardSvg(this.state);
      downloadSvg(svg, `tarjeta-boda-${this.state.name1.toLowerCase()}-${this.state.name2.toLowerCase()}.svg`);
      this.showToast('Descargando archivo vectorial SVG...');
      this.triggerExportCelebration();
    });

    document.getElementById('btn-export-png').addEventListener('click', async () => {
      this.showToast('Renderizando imagen PNG a 300 DPI...');
      const svg = generateCardSvg(this.state);
      await downloadRaster(svg, 'png', 300, `tarjeta-boda-${this.state.name1.toLowerCase()}-${this.state.name2.toLowerCase()}-300dpi`);
      this.showToast('¡Descarga PNG completada!');
      this.triggerExportCelebration();
    });

    document.getElementById('btn-export-jpeg').addEventListener('click', async () => {
      this.showToast('Renderizando imagen JPEG a 300 DPI...');
      const svg = generateCardSvg(this.state);
      await downloadRaster(svg, 'jpeg', 300, `tarjeta-boda-${this.state.name1.toLowerCase()}-${this.state.name2.toLowerCase()}-300dpi`);
      this.showToast('¡Descarga JPEG completada!');
      this.triggerExportCelebration();
    });
  }

  bindColorPicker(colorInput, hexLabel, stateKey) {
    colorInput.addEventListener('input', (e) => {
      this.state[stateKey] = e.target.value;
      hexLabel.textContent = e.target.value.toUpperCase();
      this.render();
    });
  }

  applyTheme(themeId) {
    const theme = THEMES.find(t => t.id === themeId);
    if (!theme) return;

    this.state.themeId = theme.id;
    this.selectTheme.value = theme.id;

    // Apply recommended theme colors & fonts
    if (theme.recommendedFonts) {
      if (theme.recommendedFonts.names) this.state.namesFont = theme.recommendedFonts.names;
      if (theme.recommendedFonts.ampersand) this.state.ampersandFont = theme.recommendedFonts.ampersand;
      if (theme.recommendedFonts.greeting) this.state.greetingFont = theme.recommendedFonts.greeting;
      if (theme.recommendedFonts.highlight) this.state.highlightFont = theme.recommendedFonts.highlight;
      if (theme.recommendedFonts.body) this.state.messageFont = theme.recommendedFonts.body;
      if (theme.recommendedFonts.date) this.state.dateFont = theme.recommendedFonts.date;
    }

    if (theme.colors) {
      if (theme.colors.bg) this.state.bgColor = theme.colors.bg;
      if (theme.colors.names) this.state.namesColor = theme.colors.names;
      if (theme.colors.ampersand) this.state.ampersandColor = theme.colors.ampersand;
      if (theme.colors.greeting) this.state.greetingColor = theme.colors.greeting;
      if (theme.colors.highlight) this.state.highlightColor = theme.colors.highlight;
      if (theme.colors.body) this.state.messageColor = theme.colors.body;
      if (theme.colors.date) this.state.dateColor = theme.colors.date;
      if (theme.colors.flourish) this.state.flourishColor = theme.colors.flourish;
    }

    if (theme.layout === 'crescent-authentic') {
      this.state.textOffsetX = 32;
      this.state.greetingText = 'Gracias por';
      this.state.highlightText = 'acompañarnos';
      this.state.messageText = 'Su presencia hizo este día aún más especial';
      this.state.dateText = '19. 11. 2026';
      this.state.namesFontSize = 44;
      this.state.greetingFontSize = 22;
      this.state.highlightFontSize = 38;
      this.state.messageFontSize = 20.5;
      this.state.dateFontSize = 23;
    } else if (theme.layout === 'monogram-gold') {
      this.state.textOffsetX = 0;
      this.state.greetingText = 'Muchas Gracias';
      this.state.highlightText = 'acompañarnos';
      this.state.messageText = 'Por acompañarnos en nuestra boda, su presencia hizo este día especial';
      this.state.dateText = '19. 11. 2026';
      this.state.namesFontSize = 38;
      this.state.greetingFontSize = 42;
      this.state.highlightFontSize = 38;
      this.state.messageFontSize = 20.5;
      this.state.dateFontSize = 24;
    } else if (theme.layout === 'minimal-seal') {
      this.state.textOffsetX = 0;
      this.state.greetingText = 'Muchas Gracias';
      this.state.highlightText = 'acompañarnos';
      this.state.messageText = 'Por acompañarnos en nuestra boda, su presencia hizo este día especial';
      this.state.dateText = '19. 11. 2026';
      this.state.namesFontSize = 40;
      this.state.greetingFontSize = 44;
      this.state.highlightFontSize = 38;
      this.state.messageFontSize = 21;
      this.state.dateFontSize = 24;
    } else {
      this.state.textOffsetX = 0;
      this.state.greetingText = 'Muchas Gracias';
      this.state.messageText = 'Su presencia hizo este día aún más especial';
      this.state.dateText = '19. 11. 2026';
      this.state.namesFontSize = 42;
      this.state.greetingFontSize = 34;
      this.state.highlightFontSize = 36;
      this.state.messageFontSize = 20;
      this.state.dateFontSize = 22;
    }

    this.loadState(this.state);
  }

  loadState(state) {
    this.state = { ...state };

    // Update input controls
    this.inputName1.value = this.state.name1 || 'Saray';
    this.inputAmpersand.value = this.state.ampersand || '&';
    this.inputName2.value = this.state.name2 || 'Michael';
    this.inputGreeting.value = this.state.greetingText || 'Gracias por';
    this.inputHighlight.value = this.state.highlightText || 'acompañarnos';
    this.inputMessage.value = this.state.messageText || 'Su presencia hizo este día aún más especial';
    this.inputDate.value = this.state.dateText || '19. 11. 2026';

    this.selectTheme.value = this.state.themeId || 'crescent-watercolor';
    this.inputTextOffset.value = this.state.textOffsetX ?? 38;
    this.valTextOffset.textContent = `${this.inputTextOffset.value}px`;

    // Fonts
    this.fontNames.value = this.state.namesFont;
    this.fontAmpersand.value = this.state.ampersandFont || this.state.namesFont;
    this.fontGreeting.value = this.state.greetingFont;
    this.fontHighlight.value = this.state.highlightFont;
    this.fontMessage.value = this.state.messageFont;
    this.fontDate.value = this.state.dateFont;

    // Font Sizes
    this.sizeNames.value = this.state.namesFontSize;
    this.valNamesSize.textContent = `${this.state.namesFontSize}px`;
    this.sizeGreeting.value = this.state.greetingFontSize;
    this.valGreetingSize.textContent = `${this.state.greetingFontSize}px`;
    this.sizeHighlight.value = this.state.highlightFontSize;
    this.valHighlightSize.textContent = `${this.state.highlightFontSize}px`;
    this.sizeMessage.value = this.state.messageFontSize;
    this.valMessageSize.textContent = `${this.state.messageFontSize}px`;
    this.sizeDate.value = this.state.dateFontSize;
    this.valDateSize.textContent = `${this.state.dateFontSize}px`;

    // Colors
    this.colorBg.value = this.state.bgColor;
    this.hexBg.textContent = this.state.bgColor.toUpperCase();
    this.colorNames.value = this.state.namesColor;
    this.hexNames.textContent = this.state.namesColor.toUpperCase();
    this.colorAmpersand.value = this.state.ampersandColor;
    this.hexAmpersand.textContent = this.state.ampersandColor.toUpperCase();
    this.colorHighlight.value = this.state.highlightColor;
    this.hexHighlight.textContent = this.state.highlightColor.toUpperCase();
    this.colorMessage.value = this.state.messageColor;
    this.hexMessage.textContent = this.state.messageColor.toUpperCase();
    this.colorFlourish.value = this.state.flourishColor;
    this.hexFlourish.textContent = this.state.flourishColor.toUpperCase();

    // Checkboxes
    this.checkBorderRing.checked = !!this.state.showBorderRing;
    this.checkHole.checked = !!this.state.showHole;
    this.checkGuide.checked = !!this.state.showGuide;
    this.checkPin.checked = !!this.state.showPin;

    this.rangeHoleY.value = this.state.holeY || 35;
    this.valHoleY.textContent = `${this.rangeHoleY.value}px`;
    this.rangeHoleRadius.value = this.state.holeRadius || 16;
    this.valHoleRadius.textContent = `${(this.rangeHoleRadius.value * 0.2).toFixed(1)} mm`;

    // Active pill highlight
    document.querySelectorAll('.preset-pill').forEach(p => {
      p.classList.toggle('active', p.getAttribute('data-theme') === this.state.themeId);
    });

    const currentTheme = THEMES.find(t => t.id === this.state.themeId);
    if (currentTheme) {
      this.themeLabelBadge.textContent = currentTheme.name.split('(')[0].trim();
    }

    this.updateHoleToggles();
    this.render();
  }

  updateHoleToggles() {
    this.btnToggleHole.classList.toggle('active', this.state.showHole);
    this.holeLabel.textContent = this.state.showHole ? 'Agujero: Visible' : 'Agujero: Oculto';
    this.btnToggleGuide.classList.toggle('active', this.state.showGuide);
    this.btnTogglePin.classList.toggle('active', this.state.showPin);
  }

  render() {
    const svgCode = generateCardSvg(this.state);
    this.svgContainer.innerHTML = svgCode;
  }

  renderCatalogModal() {
    this.savedDesigns = getSavedDesigns();
    this.updateSavedBadge();

    this.catalogCardsGrid.innerHTML = this.savedDesigns.map(design => {
      const previewSvg = generateCardSvg({ ...design.state, showGuide: false, showPin: false });
      return `
        <div class="saved-card-item">
          <div class="saved-card-thumb">
            ${previewSvg}
          </div>
          <div class="saved-card-meta">
            <h4 title="${design.title}">${design.title}</h4>
            <span>${design.isPreset ? 'Plantilla Base' : new Date(design.createdAt).toLocaleDateString()}</span>
          </div>
          <div class="saved-card-actions">
            <button class="btn btn-primary btn-load-design" data-id="${design.id}">Cargar</button>
            <button class="btn btn-secondary btn-export-card-svg" data-id="${design.id}">SVG</button>
            ${!design.isPreset ? `<button class="btn btn-secondary btn-delete-design" data-id="${design.id}" title="Eliminar">✕</button>` : ''}
          </div>
        </div>
      `;
    }).join('');

    // Bind item actions
    this.catalogCardsGrid.querySelectorAll('.btn-load-design').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const found = this.savedDesigns.find(d => d.id === id);
        if (found) {
          this.loadState(found.state);
          this.modalCatalog.classList.remove('open');
          this.showToast(`Cargada opción: ${found.title}`);
        }
      });
    });

    this.catalogCardsGrid.querySelectorAll('.btn-export-card-svg').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const found = this.savedDesigns.find(d => d.id === id);
        if (found) {
          const svg = generateCardSvg(found.state);
          downloadSvg(svg, `${found.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.svg`);
          this.showToast(`Descargando SVG de "${found.title}"`);
        }
      });
    });

    this.catalogCardsGrid.querySelectorAll('.btn-delete-design').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        if (confirm('¿Deseas eliminar esta variación guardada?')) {
          deleteDesign(id);
          this.renderCatalogModal();
          this.showToast('Variación eliminada');
        }
      });
    });
  }

  updateSavedBadge() {
    this.savedCountBadge.textContent = this.savedDesigns.length;
  }

  showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span>${message}</span>
    `;
    this.toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  triggerExportCelebration() {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#D4AF37', '#F7C9C2', '#FFFFFF', '#C8D6BE']
    });
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new WeddingCardApp();
});
