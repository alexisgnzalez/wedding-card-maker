const sharp = require('sharp');
const fs = require('fs');

async function process() {
  const { data, info } = await sharp('public/assets/variant-1-raw-circle.png').raw().toBuffer({ resolveWithObject: true });
  const points = [
    [250, 100], [250, 115], [250, 125],
    [100, 200], [105, 250], [100, 300],
    [390, 200], [400, 250], [390, 300],
    [250, 360], [250, 370]
  ];
  for (const [x, y] of points) {
    const idx = (y * 500 + x) * 3;
    console.log('Point (' + x + ',' + y + '): ' + data[idx] + ', ' + data[idx+1] + ', ' + data[idx+2]);
  }
}
process();
