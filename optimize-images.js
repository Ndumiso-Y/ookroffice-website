const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  quality: 72, // Aggressive but visually lossless for web
  maxWidth: 1920,
  maxHeight: 1080,
  createBackup: false, // Git is our backup
};

// Directories to optimize
const directories = [
  'public/images',
  'public/division-assets',
];

let stats = {
  processed: 0,
  skipped: 0,
  errors: 0,
  totalOriginalSize: 0,
  totalOptimizedSize: 0,
};

/**
 * Get all image files recursively
 */
function getImageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getImageFiles(filePath, fileList);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Optimize a single image
 */
async function optimizeImage(imagePath) {
  try {
    const originalSize = fs.statSync(imagePath).size;

    // Skip if already small enough (< 100KB)
    if (originalSize < 100 * 1024) {
      stats.skipped++;
      return;
    }

    // Get image metadata
    const metadata = await sharp(imagePath).metadata();

    // Determine if resize is needed
    let width = metadata.width;
    let height = metadata.height;

    if (width > config.maxWidth || height > config.maxHeight) {
      const ratio = Math.min(config.maxWidth / width, config.maxHeight / height);
      width = Math.round(width * ratio);
      height = Math.round(height * ratio);
    }

    // Optimize based on format
    let sharpInstance = sharp(imagePath);

    if (width !== metadata.width || height !== metadata.height) {
      sharpInstance = sharpInstance.resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true,
      });
    }

    if (metadata.format === 'jpeg' || metadata.format === 'jpg') {
      sharpInstance = sharpInstance.jpeg({
        quality: config.quality,
        progressive: true,
        mozjpeg: true, // Use mozjpeg for better compression
      });
    } else if (metadata.format === 'png') {
      sharpInstance = sharpInstance.png({
        quality: config.quality,
        compressionLevel: 9,
        progressive: true,
      });
    }

    // Save optimized image
    await sharpInstance.toFile(imagePath + '.tmp');

    // Check if optimized file is smaller
    const optimizedSize = fs.statSync(imagePath + '.tmp').size;

    if (optimizedSize < originalSize) {
      // Replace original with optimized
      fs.unlinkSync(imagePath);
      fs.renameSync(imagePath + '.tmp', imagePath);

      const savedBytes = originalSize - optimizedSize;
      const savedPercent = ((savedBytes / originalSize) * 100).toFixed(1);

      console.log(`✅ ${imagePath}`);
      console.log(`   ${(originalSize / 1024 / 1024).toFixed(2)} MB → ${(optimizedSize / 1024 / 1024).toFixed(2)} MB (saved ${savedPercent}%)`);

      stats.processed++;
      stats.totalOriginalSize += originalSize;
      stats.totalOptimizedSize += optimizedSize;
    } else {
      // Keep original (it's already well optimized)
      fs.unlinkSync(imagePath + '.tmp');
      console.log(`⏭️  Skipping ${imagePath} (original is smaller)`);
      stats.skipped++;
    }

  } catch (error) {
    console.error(`❌ Error optimizing ${imagePath}:`, error.message);
    stats.errors++;
  }
}

/**
 * Main optimization function
 */
async function optimizeAllImages() {
  console.log('🚀 Starting image optimization...\n');
  console.log(`Configuration:
  - Quality: ${config.quality}%
  - Max dimensions: ${config.maxWidth}x${config.maxHeight}
  - Create backups: ${config.createBackup}
  `);

  for (const dir of directories) {
    const fullPath = path.join(__dirname, dir);

    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️  Directory not found: ${dir}`);
      continue;
    }

    console.log(`\n📁 Processing ${dir}...`);
    const images = getImageFiles(fullPath);
    console.log(`   Found ${images.length} images\n`);

    for (const image of images) {
      await optimizeImage(image);
    }
  }

  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 OPTIMIZATION SUMMARY');
  console.log('='.repeat(60));
  console.log(`✅ Processed: ${stats.processed} images`);
  console.log(`⏭️  Skipped: ${stats.skipped} images`);
  console.log(`❌ Errors: ${stats.errors} images`);
  console.log('');

  if (stats.processed > 0) {
    const totalSaved = stats.totalOriginalSize - stats.totalOptimizedSize;
    const totalSavedPercent = ((totalSaved / stats.totalOriginalSize) * 100).toFixed(1);

    console.log(`💾 Total original size: ${(stats.totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`💾 Total optimized size: ${(stats.totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`💚 Total saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB (${totalSavedPercent}%)`);
  }

  console.log('='.repeat(60));
  console.log('\n✨ Optimization complete!\n');

  if (config.createBackup) {
    console.log('💡 Tip: Backup files (.backup) created. Delete them after verifying images.');
  }
}

// Run optimization
optimizeAllImages().catch(console.error);
