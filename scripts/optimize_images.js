import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.resolve('public');
const outBaseDir = path.resolve('public/opt');

const folders = [
  'Illustrations',
  'Character design',
  'Comic pages',
  'Cover arts',
  'Concept arts and story boards',
  'nsfw-vault',
  'logo'
];

async function optimizeAll() {
  console.log('Starting ultra-fast WebP optimization...');
  let totalSaved = 0;
  let count = 0;

  for (const folder of folders) {
    const srcDir = path.join(publicDir, folder);
    const dstDir = path.join(outBaseDir, folder);

    if (!fs.existsSync(srcDir)) continue;
    fs.mkdirSync(dstDir, { recursive: true });

    const files = fs.readdirSync(srcDir);

    for (const file of files) {
      const srcPath = path.join(srcDir, file);
      const stat = fs.statSync(srcPath);

      if (!stat.isFile() || stat.size === 0) continue;
      if (file.endsWith('.mp4')) continue; // skip videos

      const ext = path.extname(file);
      const baseName = path.basename(file, ext);
      const dstPath = path.join(dstDir, `${baseName}.webp`);

      try {
        const origSize = stat.size;
        await sharp(srcPath)
          .rotate() // preserve EXIF orientation
          .resize({ width: 1800, height: 1800, fit: 'inside', withoutEnlargement: true })
          .webp({ quality: 84, effort: 4 })
          .toFile(dstPath);

        const newSize = fs.statSync(dstPath).size;
        totalSaved += (origSize - newSize);
        count++;
        console.log(`[${count}] ${folder}/${file}: ${(origSize/1024/1024).toFixed(2)}MB -> ${(newSize/1024).toFixed(1)}KB (-${(((origSize-newSize)/origSize)*100).toFixed(0)}%)`);
      } catch (err) {
        console.error(`Failed to optimize ${folder}/${file}:`, err.message);
      }
    }
  }

  console.log(`\nDONE! Successfully created ${count} ultra-fast WebP images. Bandwidth saved: ${(totalSaved/1024/1024).toFixed(1)}MB!`);
}

optimizeAll();
