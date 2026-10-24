import fs from 'fs';
import path from 'path';

const crescentPath = 'public/assets/watercolor-crescent-masterpiece.png';
const laurelPath = 'public/assets/watercolor-bottom-laurel.png';
const sealPath = 'public/assets/monogram-sm-seal.png';

const crescentBase64 = fs.readFileSync(crescentPath).toString('base64');
const laurelBase64 = fs.readFileSync(laurelPath).toString('base64');
const sealBase64 = fs.readFileSync(sealPath).toString('base64');

const assetsJs = `// High-Resolution Authentic Botanical & Monogram Assets for SVG embedding
export const ASSETS = {
  crescentPng: 'data:image/png;base64,${crescentBase64}',
  laurelPng: 'data:image/png;base64,${laurelBase64}',
  sealPng: 'data:image/png;base64,${sealBase64}'
};
`;

fs.writeFileSync('src/assets-data.js', assetsJs, 'utf-8');
console.log('src/assets-data.js generated successfully!');
console.log('Crescent Base64 size:', Math.round(crescentBase64.length / 1024), 'KB');
console.log('Laurel Base64 size:', Math.round(laurelBase64.length / 1024), 'KB');
console.log('Seal Base64 size:', Math.round(sealBase64.length / 1024), 'KB');
