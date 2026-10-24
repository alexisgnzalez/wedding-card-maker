const sharp = require('sharp');

async function fixV5() {
  const card2X = 752, card2Y = 385, r2 = 219;
  const { data: v5Raw } = await sharp('source-material/variant-1-and-5.jpg')
    .extract({ left: Math.round(card2X - r2), top: Math.round(card2Y - r2), width: Math.round(r2 * 2), height: Math.round(r2 * 2) })
    .resize(500, 500)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const v5Out = Buffer.from(v5Raw);
  const v5PaperR = 247, v5PaperG = 247, v5PaperB = 242;

  // Single clean region that cleanly covers all text:
  // Upper wide region: x: 95..430, y: 75..280 (names, heart, gratitude)
  // Lower center column: x: 145..375, y: 75..378 (body message and date)
  function isInTextBox(x, y) {
    if (x >= 95 && x <= 430 && y >= 75 && y <= 280) return true;
    if (x >= 145 && x <= 375 && y >= 75 && y <= 378) return true;
    return false;
  }

  for (let y = 75; y <= 378; y++) {
    for (let x = 95; x <= 430; x++) {
      if (!isInTextBox(x, y)) continue;

      // Distance to boundary of union box
      let distL = (y > 280) ? (x - 145) : (x - 95);
      let distR = (y > 280) ? (375 - x) : (430 - x);
      let distT = y - 75;
      let distB = (x < 145 || x > 375) ? (280 - y) : (378 - y);

      const minDist = Math.min(distL, distR, distT, distB);
      const alpha = Math.min(1, Math.max(0, minDist / 6.0));

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

  console.log('Saved 100% spotless public/assets/template-wild-lavender.png');
}
fixV5();
