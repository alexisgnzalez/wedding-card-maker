const sharp = require('sharp');

async function processAll() {
  console.log('Starting exact coordinate template cleanup...');

  // 1. MASTER TEMPLATE: CRESCENT BLUSH ROSE
  const { data: blushRaw } = await sharp('public/assets/blush-rose-raw-circle.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const blushOut = Buffer.from(blushRaw);
  const blushPaperR = 252, blushPaperG = 250, blushPaperB = 246;

  // Exact text boxes in Blush Rose:
  const blushTextBoxes = [
    { x1: 170, x2: 445, y1: 105, y2: 160 }, // "Saray & Michael"
    { x1: 175, x2: 445, y1: 210, y2: 260 }, // "Gracias por acompañarnos"
    { x1: 200, x2: 410, y1: 265, y2: 335 }, // "Su presencia hizo este día aún más especial"
    { x1: 230, x2: 380, y1: 345, y2: 385 }, // "19. 11. 2026"
  ];

  for (const box of blushTextBoxes) {
    for (let y = box.y1; y <= box.y2; y++) {
      for (let x = box.x1; x <= box.x2; x++) {
        const distL = x - box.x1, distR = box.x2 - x;
        const distT = y - box.y1, distB = box.y2 - y;
        const minDist = Math.min(distL, distR, distT, distB);
        const alpha = Math.min(1, minDist / 5.0);

        const idx = (y * 500 + x) * 3;
        const noise = ((x * 17 + y * 31) % 3) - 1;
        const targetR = blushPaperR + noise;
        const targetG = blushPaperG + noise;
        const targetB = blushPaperB + noise;

        blushOut[idx] = Math.round(blushRaw[idx] * (1 - alpha) + targetR * alpha);
        blushOut[idx+1] = Math.round(blushRaw[idx+1] * (1 - alpha) + targetG * alpha);
        blushOut[idx+2] = Math.round(blushRaw[idx+2] * (1 - alpha) + targetB * alpha);
      }
    }
  }

  const blushRGBA = Buffer.alloc(500 * 500 * 4);
  for (let y = 0; y < 500; y++) {
    for (let x = 0; x < 500; x++) {
      const idx3 = (y * 500 + x) * 3;
      const idx4 = (y * 500 + x) * 4;
      blushRGBA[idx4] = blushOut[idx3];
      blushRGBA[idx4+1] = blushOut[idx3+1];
      blushRGBA[idx4+2] = blushOut[idx3+2];
      const dist = Math.hypot(x - 250, y - 250);
      if (dist > 248) {
        blushRGBA[idx4+3] = 0;
      } else if (dist > 246) {
        blushRGBA[idx4+3] = Math.round((248 - dist) / 2 * 255);
      } else {
        blushRGBA[idx4+3] = 255;
      }
    }
  }

  await sharp(blushRGBA, { raw: { width: 500, height: 500, channels: 4 } })
    .png()
    .toFile('public/assets/template-crescent-blush.png');

  // 2. MASTER TEMPLATE: GEOMETRIC EUCALYPTUS (VARIANT 1)
  const card1X = 273, card1Y = 383, r1 = 220;
  const { data: v1Raw } = await sharp('source-material/variant-1-and-5.jpg')
    .extract({ left: Math.round(card1X - r1), top: Math.round(card1Y - r1), width: Math.round(r1 * 2), height: Math.round(r1 * 2) })
    .resize(500, 500)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const v1Out = Buffer.from(v1Raw);
  const v1PaperR = 244, v1PaperG = 244, v1PaperB = 239;

  const v1Boxes = [
    { x1: 95, x2: 430, y1: 125, y2: 365 }, // Names, heart, gratitude, body
    { x1: 190, x2: 320, y1: 365, y2: 398 }  // Date "19. 11. 2026"
  ];

  for (const box of v1Boxes) {
    for (let y = box.y1; y <= box.y2; y++) {
      for (let x = box.x1; x <= box.x2; x++) {
        const distL = x - box.x1, distR = box.x2 - x;
        const distT = y - box.y1, distB = box.y2 - y;
        const minDist = Math.min(distL, distR, distT, distB);
        const alpha = Math.min(1, minDist / 5.0);

        const idx = (y * 500 + x) * 3;
        const noise = ((x * 13 + y * 29) % 3) - 1;
        const targetR = v1PaperR + noise;
        const targetG = v1PaperG + noise;
        const targetB = v1PaperB + noise;

        v1Out[idx] = Math.round(v1Raw[idx] * (1 - alpha) + targetR * alpha);
        v1Out[idx+1] = Math.round(v1Raw[idx+1] * (1 - alpha) + targetG * alpha);
        v1Out[idx+2] = Math.round(v1Raw[idx+2] * (1 - alpha) + targetB * alpha);
      }
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
    .toFile('public/assets/template-geometric-eucalyptus.png');

  // 3. MASTER TEMPLATE: WILD LAVENDER & DAISIES (VARIANT 5)
  const card2X = 752, card2Y = 385, r2 = 219;
  const { data: v5Raw } = await sharp('source-material/variant-1-and-5.jpg')
    .extract({ left: Math.round(card2X - r2), top: Math.round(card2Y - r2), width: Math.round(r2 * 2), height: Math.round(r2 * 2) })
    .resize(500, 500)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const v5Out = Buffer.from(v5Raw);
  const v5PaperR = 247, v5PaperG = 247, v5PaperB = 242;

  const v5Boxes = [
    { x1: 95, x2: 430, y1: 75, y2: 368 }, // Names, doodle heart, gratitude, "Su presencia hizo este día"
    { x1: 185, x2: 335, y1: 340, y2: 400 } // Date "19. 11. 2026" (flanking lavender sprigs intact!)
  ];

  for (const box of v5Boxes) {
    for (let y = box.y1; y <= box.y2; y++) {
      for (let x = box.x1; x <= box.x2; x++) {
        const distL = x - box.x1, distR = box.x2 - x;
        const distT = y - box.y1, distB = box.y2 - y;
        const minDist = Math.min(distL, distR, distT, distB);
        const alpha = Math.min(1, minDist / 5.0);

        const idx = (y * 500 + x) * 3;
        const noise = ((x * 19 + y * 31) % 3) - 1;
        const targetR = v5PaperR + noise;
        const targetG = v5PaperG + noise;
        const targetB = v5PaperB + noise;

        v5Out[idx] = Math.round(v5Raw[idx] * (1 - alpha) + targetR * alpha);
        v5Out[idx+1] = Math.round(v5Raw[idx+1] * (1 - alpha) + targetG * alpha);
        v5Out[idx+2] = Math.round(v5Raw[idx+2] * (1 - alpha) + targetB * alpha);
      }
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
    .toFile('public/assets/template-wild-lavender.png');

  console.log('All 3 master templates updated with exact clean boxes!');
}

processAll();
