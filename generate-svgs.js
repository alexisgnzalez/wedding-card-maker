// Script to generate standalone SVGs for the designs/ directory
import fs from 'fs';
import path from 'path';
import { PRESET_DESIGNS } from './src/storage.js';
import { generateCardSvg } from './src/card-generator.js';

const outDir = path.resolve('designs');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log('Generating standalone wedding card SVGs...');

PRESET_DESIGNS.forEach((preset, idx) => {
  const filename = `${String(idx + 1).padStart(2, '0')}-${preset.id.replace('preset-', '')}.svg`;
  const svgContent = generateCardSvg(preset.state);
  const filePath = path.join(outDir, filename);
  fs.writeFileSync(filePath, svgContent, 'utf-8');
  console.log(`Saved: ${filePath}`);
});

console.log('All standalone SVGs generated successfully!');
