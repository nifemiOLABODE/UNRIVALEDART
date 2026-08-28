import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/data/artworks.js');
let code = fs.readFileSync(filePath, 'utf8');

const matches = [...code.matchAll(/image:\s*'([^']+)'/g)];
let replacedCount = 0;

for (const m of matches) {
  const oldPath = m[1];
  if (oldPath.startsWith('/opt/')) continue;
  
  const ext = path.extname(oldPath);
  const base = path.basename(oldPath, ext);
  const folder = path.dirname(oldPath).replace(/^\//, '');
  
  const optRelPath = `/opt/${folder}/${base}.webp`;
  const optFullPath = path.resolve('public', `opt/${folder}/${base}.webp`);
  
  if (fs.existsSync(optFullPath)) {
    code = code.replaceAll(`'${oldPath}'`, `'${optRelPath}'`);
    replacedCount++;
  } else {
    console.log('Opt file not found for:', oldPath, '-> looked for:', optFullPath);
  }
}

fs.writeFileSync(filePath, code, 'utf8');
console.log(`Replaced ${replacedCount} image paths with high-speed WebP paths!`);
