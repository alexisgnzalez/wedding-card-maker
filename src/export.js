// High-Resolution Export Engine for SVG, PNG, and JPEG
import { getGoogleFontsUrl } from './fonts.js';

export async function downloadSvg(svgString, filename = 'tarjeta-boda-saray-michael.svg') {
  try {
    const finalName = filename.endsWith('.svg') ? filename : `${filename}.svg`;
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    triggerDownload(blob, finalName);
    return true;
  } catch (err) {
    console.error('downloadSvg error:', err);
    throw err;
  }
}

export async function downloadRaster(svgString, format = 'png', dpi = 300, filename = 'tarjeta-boda-saray-michael') {
  if (document.fonts) {
    try {
      await document.fonts.ready;
    } catch (e) {
      console.warn('Font ready check warning:', e);
    }
  }

  // 1500 x 1500px delivers ultra-sharp ~300+ DPI print quality for a 50mm circular tag
  const exportSize = 1500;

  return new Promise((resolve, reject) => {
    try {
      // CRITICAL FIX: Strip all external @import url(...) before rasterization
      // Browsers strictly block external HTTP/HTTPS @import in SVG images inside <img>/Image()
      const cleanSvg = svgString.replace(/@import\s+url\([^)]+\);?/gi, '');

      const blob = new Blob([cleanSvg], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const img = new Image();
      img.crossOrigin = 'anonymous';

      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = exportSize;
          canvas.height = exportSize;
          const ctx = canvas.getContext('2d', { alpha: format === 'png' });

          if (!ctx) {
            URL.revokeObjectURL(url);
            reject(new Error('No se pudo inicializar el contexto 2D del canvas'));
            return;
          }

          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';

          // Solid white background for JPEG
          if (format === 'jpeg' || format === 'jpg') {
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(0, 0, exportSize, exportSize);
          }

          ctx.drawImage(img, 0, 0, exportSize, exportSize);
          URL.revokeObjectURL(url);

          const mimeType = (format === 'jpeg' || format === 'jpg') ? 'image/jpeg' : 'image/png';
          const fileExt = (format === 'jpeg' || format === 'jpg') ? 'jpg' : 'png';
          const finalFilename = `${filename}.${fileExt}`;

          if (canvas.toBlob) {
            canvas.toBlob((exportBlob) => {
              if (!exportBlob) {
                // Fallback to dataURL
                try {
                  const dataUrl = canvas.toDataURL(mimeType, 0.96);
                  triggerDownloadDataUrl(dataUrl, finalFilename);
                  resolve();
                } catch (dataUrlErr) {
                  reject(dataUrlErr);
                }
                return;
              }
              triggerDownload(exportBlob, finalFilename);
              resolve();
            }, mimeType, 0.96);
          } else {
            const dataUrl = canvas.toDataURL(mimeType, 0.96);
            triggerDownloadDataUrl(dataUrl, finalFilename);
            resolve();
          }
        } catch (canvasErr) {
          URL.revokeObjectURL(url);
          console.error('Error drawing to canvas:', canvasErr);
          reject(canvasErr);
        }
      };

      img.onerror = (e) => {
        URL.revokeObjectURL(url);
        console.error('Error rendering SVG onto canvas for export:', e);
        reject(new Error('Error al renderizar el SVG para exportación en imagen.'));
      };

      img.src = url;
    } catch (outerErr) {
      console.error('downloadRaster outer error:', outerErr);
      reject(outerErr);
    }
  });
}

function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.style.position = 'fixed';
  a.style.left = '-9999px';
  a.style.top = '-9999px';
  a.style.opacity = '0';
  a.href = url;
  a.download = filename;
  a.setAttribute('download', filename);
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    if (a.parentNode) {
      a.parentNode.removeChild(a);
    }
    URL.revokeObjectURL(url);
  }, 60000);
}

function triggerDownloadDataUrl(dataUrl, filename) {
  const a = document.createElement('a');
  a.style.position = 'fixed';
  a.style.left = '-9999px';
  a.style.top = '-9999px';
  a.style.opacity = '0';
  a.href = dataUrl;
  a.download = filename;
  a.setAttribute('download', filename);
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    if (a.parentNode) {
      a.parentNode.removeChild(a);
    }
  }, 60000);
}
