// High-Resolution Export Engine for SVG, PNG, and JPEG
import { getGoogleFontsUrl } from './fonts.js';

export async function downloadSvg(svgString, filename = 'tarjeta-boda-saray-michael.svg') {
  // Inject font imports into SVG for standalone fidelity
  const fontUrl = getGoogleFontsUrl();
  const styledSvg = svgString.replace(
    '</defs>',
    `<style>
      @import url('${fontUrl}');
      text { text-rendering: geometricPrecision; -webkit-font-smoothing: antialiased; }
    </style></defs>`
  );

  const blob = new Blob([styledSvg], { type: 'image/svg+xml;charset=utf-8' });
  triggerDownload(blob, filename.endsWith('.svg') ? filename : `${filename}.svg`);
}

export async function downloadRaster(svgString, format = 'png', dpi = 300, filename = 'tarjeta-boda-saray-michael') {
  // Wait for web fonts to load
  if (document.fonts) {
    await document.fonts.ready;
  }

  // Calculate resolution: 5cm x 5cm = 1.9685in x 1.9685in
  // At 300 DPI: ~591px. We export at 4x (2000x2000px) or 300 DPI (~1200-2000px) for ultra-sharp printing
  const exportSize = Math.round((5 / 2.54) * dpi * 2); // 2362px for pristine 300-600 DPI print quality

  return new Promise((resolve, reject) => {
    // Inject fonts into svg string
    const fontUrl = getGoogleFontsUrl();
    const styledSvg = svgString.replace(
      '</defs>',
      `<style>
        @import url('${fontUrl}');
        text { text-rendering: geometricPrecision; -webkit-font-smoothing: antialiased; }
      </style></defs>`
    );

    const blob = new Blob([styledSvg], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const img = new Image();

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = exportSize;
        canvas.height = exportSize;
        const ctx = canvas.getContext('2d', { alpha: format === 'png' });

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        // Background for JPEG
        if (format === 'jpeg' || format === 'jpg') {
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(0, 0, exportSize, exportSize);
        }

        ctx.drawImage(img, 0, 0, exportSize, exportSize);
        URL.revokeObjectURL(url);

        const mimeType = format === 'jpeg' || format === 'jpg' ? 'image/jpeg' : 'image/png';
        const fileExt = format === 'jpeg' || format === 'jpg' ? 'jpeg' : 'png';

        canvas.toBlob((exportBlob) => {
          if (!exportBlob) {
            reject(new Error('Failed to create canvas blob'));
            return;
          }
          triggerDownload(exportBlob, `${filename}.${fileExt}`);
          resolve();
        }, mimeType, 0.95);
      } catch (err) {
        URL.revokeObjectURL(url);
        reject(err);
      }
    };

    img.onerror = (e) => {
      URL.revokeObjectURL(url);
      reject(new Error('Error rendering SVG onto canvas for export'));
    };

    img.src = url;
  });
}

function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
