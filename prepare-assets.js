import fs from 'fs';

console.log('Encoding high-resolution master assets to Base64...');

// Master pristine artworks (Gemini Web & Canva 1:1)
const blushMasterPath = 'public/assets/master-crescent-blush-opt.png';
const v1MasterPath = 'public/assets/master-geometric-eucalyptus-opt.png';
const v5MasterPath = 'public/assets/master-wild-lavender-opt.png';
const sealPath = 'public/assets/monogram-sm-seal.png';

// Clean templates for custom text editing
const blushTemplatePath = 'public/assets/template-crescent-blush.png';
const v1TemplatePath = 'public/assets/template-geometric-eucalyptus.png';
const v5TemplatePath = 'public/assets/template-wild-lavender.png';

const blushMasterB64 = fs.readFileSync(blushMasterPath).toString('base64');
const v1MasterB64 = fs.readFileSync(v1MasterPath).toString('base64');
const v5MasterB64 = fs.readFileSync(v5MasterPath).toString('base64');
const sealB64 = fs.readFileSync(sealPath).toString('base64');

const blushTemplateB64 = fs.existsSync(blushTemplatePath) ? fs.readFileSync(blushTemplatePath).toString('base64') : blushMasterB64;
const v1TemplateB64 = fs.existsSync(v1TemplatePath) ? fs.readFileSync(v1TemplatePath).toString('base64') : v1MasterB64;
const v5TemplateB64 = fs.existsSync(v5TemplatePath) ? fs.readFileSync(v5TemplatePath).toString('base64') : v5MasterB64;

const assetsJs = `// High-Resolution Authentic Botanical & Monogram Assets for SVG embedding
export const ASSETS = {
  // Pristine 1:1 Master Artworks (Zero artifact, museum-grade)
  crescentBlushMasterPng: 'data:image/png;base64,${blushMasterB64}',
  geometricEucalyptusMasterPng: 'data:image/png;base64,${v1MasterB64}',
  wildLavenderMasterPng: 'data:image/png;base64,${v5MasterB64}',

  // Inpainted Templates for Custom Text Editing
  crescentBlushPng: 'data:image/png;base64,${blushTemplateB64}',
  geometricEucalyptusPng: 'data:image/png;base64,${v1TemplateB64}',
  wildLavenderPng: 'data:image/png;base64,${v5TemplateB64}',

  // Terracotta Monogram Seal
  sealPng: 'data:image/png;base64,${sealB64}'
};
`;

fs.writeFileSync('src/assets-data.js', assetsJs, 'utf-8');
console.log('src/assets-data.js generated successfully!');
console.log('Blush Master:', Math.round(blushMasterB64.length / 1024), 'KB');
console.log('V1 Geometric Master:', Math.round(v1MasterB64.length / 1024), 'KB');
console.log('V5 Lavender Master:', Math.round(v5MasterB64.length / 1024), 'KB');
