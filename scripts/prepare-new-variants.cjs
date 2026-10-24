const sharp = require('sharp');

async function extractCleanTemplates() {
  const card1X = 273, card1Y = 383, r1 = 220;
  const card2X = 752, card2Y = 385, r2 = 219;

  // Fresh crops
  const { data: v1Raw } = await sharp('source-material/variant-1-and-5.jpg')
    .extract({ left: Math.round(card1X - r1), top: Math.round(card1Y - r1), width: Math.round(r1 * 2), height: Math.round(r1 * 2) })
    .resize(500, 500)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { data: v5Raw } = await sharp('source-material/variant-1-and-5.jpg')
    .extract({ left: Math.round(card2X - r2), top: Math.round(card2Y - r2), width: Math.round(r2 * 2), height: Math.round(r2 * 2) })
    .resize(500, 500)
    .raw()
    .toBuffer({ resolveWithObject: true });

  // 1. Clean Variant 1:
  const v1Out = Buffer.from(v1Raw);
  const patchW = 30, patchH = 30;
  const v1PatchX = 358, v1PatchY = 202;

  const v1Box = { x1: 95, x2: 410, y1: 125, y2: 375 };
  for (let y = v1Box.y1; y <= v1Box.y2; y++) {
    for (let x = v1Box.x1; x <= v1Box.x2; x++) {
      const distL = x - v1Box.x1;
      const distR = v1Box.x2 - x;
      const distT = y - v1Box.y1;
      const distB = v1Box.y2 - y;
      const minDist = Math.min(distL, distR, distT, distB);
      const alpha = Math.min(1, minDist / 10.0);

      const idx = (y * 500 + x) * 3;
      const sx = v1PatchX + (x % patchW);
      const sy = v1PatchY + (y % patchH);
      const sidx = (sy * 500 + sx) * 3;

      v1Out[idx] = Math.round(v1Raw[idx] * (1 - alpha) + v1Raw[sidx] * alpha);
      v1Out[idx+1] = Math.round(v1Raw[idx+1] * (1 - alpha) + v1Raw[sidx+1] * alpha);
      v1Out[idx+2] = Math.round(v1Raw[idx+2] * (1 - alpha) + v1Raw[sidx+2] * alpha);
    }
  }

  const v1RGBA = Buffer.alloc(500 * 500 * 4);
  for (let y = 0; y < 500; y++) {
    for (let x = 0; x < 500; x++) {
      const idx3 = (y * 500 + x) * 3;
      const idx4 = (y * 500 + x) * 4;
      v1RGBA[idx4] = v1Out[idx3];
      v1RGBA[idx4+1] = v1Out[idx3+1];
      v1RGBA[idx4+2] = v1Out[idx3+2];
      const dist = Math.hypot(x - 250, y - 250);
      if (dist > 248) {
        v1RGBA[idx4+3] = 0;
      } else if (dist > 246) {
        v1RGBA[idx4+3] = Math.round((248 - dist) / 2 * 255);
      } else {
        v1RGBA[idx4+3] = 255;
      }
    }
  }

  await sharp(v1RGBA, { raw: { width: 500, height: 500, channels: 4 } })
    .png()
    .toFile('public/assets/variant-1-template.png');
  console.log('Saved clean public/assets/variant-1-template.png');

  // 2. Clean Variant 5:
  const v5Out = Buffer.from(v5Raw);
  const v5PatchX = 320, v5PatchY = 166;
  const v5Box = { x1: 95, x2: 415, y1: 75, y2: 375 };

  for (let y = v5Box.y1; y <= v5Box.y2; y++) {
    for (let x = v5Box.x1; x <= v5Box.x2; x++) {
      const distL = x - v5Box.x1;
      const distR = v5Box.x2 - x;
      const distT = y - v5Box.y1;
      const distB = v5Box.y2 - y;
      const minDist = Math.min(distL, distR, distT, distB);
      const alpha = Math.min(1, minDist / 10.0);

      const idx = (y * 500 + x) * 3;
      const sx = v5PatchX + (x % patchW);
      const sy = v5PatchY + (y % patchH);
      const sidx = (sy * 500 + sx) * 3;

      v5Out[idx] = Math.round(v5Raw[idx] * (1 - alpha) + v5Raw[sidx] * alpha);
      v5Out[idx+1] = Math.round(v5Raw[idx+1] * (1 - alpha) + v5Raw[sidx+1] * alpha);
      v5Out[idx+2] = Math.round(v5Raw[idx+2] * (1 - alpha) + v5Raw[sidx+2] * alpha);
    }
  }

  const v5RGBA = Buffer.alloc(500 * 500 * 4);
  for (let y = 0; y < 500; y++) {
    for (let x = 0; x < 500; x++) {
      const idx3 = (y * 500 + x) * 3;
      const idx4 = (y * 500 + x) * 4;
      v5RGBA[idx4] = v5Out[idx3];
      v5RGBA[idx4+1] = v5Out[idx3+1];
      v5RGBA[idx4+2] = v5Out[idx3+2];
      const dist = Math.hypot(x - 250, y - 250);
      if (dist > 248) {
        v5RGBA[idx4+3] = 0;
      } else if (dist > 246) {
        v5RGBA[idx4+3] = Math.round((248 - dist) / 2 * 255);
      } else {
        v5RGBA[idx4+3] = 255;
      }
    }
  }

  await sharp(v5RGBA, { raw: { width: 500, height: 500, channels: 4 } })
    .png()
    .toFile('public/assets/variant-5-template.png');
  console.log('Saved clean public/assets/variant-5-template.png');
}

extractCleanTemplates();
