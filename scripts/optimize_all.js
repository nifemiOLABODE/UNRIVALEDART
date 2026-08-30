import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const optDir = path.resolve('public/opt');

let totalSaved = 0;
let totalOriginal = 0;
let fileCount = 0;

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.name.endsWith('.webp')) {
      const inputBuffer = fs.readFileSync(fullPath);
      const originalSize = inputBuffer.length;
      totalOriginal += originalSize;
      fileCount++;

      try {
        const buffer = await sharp(inputBuffer)
          .resize({
            width: 1200,
            height: 1200,
            fit: 'inside',
            withoutEnlargement: true
          })
          .webp({
            quality: 75,
            effort: 5,
            smartSubsample: true
          })
          .toBuffer();

        if (buffer.length < originalSize) {
          fs.writeFileSync(fullPath, buffer);
          const saved = originalSize - buffer.length;
          totalSaved += saved;
          console.log(`[OPTIMIZED] ${entry.name}: ${(originalSize/1024).toFixed(1)}KB -> ${(buffer.length/1024).toFixed(1)}KB (-${Math.round((saved/originalSize)*100)}%)`);
        } else {
          console.log(`[KEPT] ${entry.name}: already optimal`);
        }
      } catch (err) {
        console.error(`[ERROR] ${entry.name}:`, err.message);
      }
    }
  }
}

console.log('Starting full image library optimization...');
const start = Date.now();
await processDirectory(optDir);
console.log(`\nDONE! ${fileCount} images processed in ${((Date.now() - start)/1000).toFixed(1)}s`);
console.log(`Total Original: ${(totalOriginal/1024/1024).toFixed(2)} MB`);
console.log(`Total Saved: ${(totalSaved/1024/1024).toFixed(2)} MB`);
console.log(`New Library Size: ${((totalOriginal - totalSaved)/1024/1024).toFixed(2)} MB`);
