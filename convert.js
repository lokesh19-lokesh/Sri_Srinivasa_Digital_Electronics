const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = path.join(__dirname, 'ezgif-7cc40b9e8b97f621-jpg');
const outputDir = path.join(__dirname, 'public', 'assets', 'frames');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.jpg')).sort();
console.log(`Found ${files.length} frames to convert to WebP...`);

let processed = 0;

async function processAll() {
    for (const file of files) {
        const inputPath = path.join(inputDir, file);
        // Change extension to webp and zero-pad to 3 digits based on index
        const match = file.match(/ezgif-frame-(\d+)\.jpg/);
        let outName = file.replace('.jpg', '.webp');
        if (match) {
            const num = String(parseInt(match[1], 10)).padStart(3, '0');
            outName = `frame-${num}.webp`;
        }
        
        const outputPath = path.join(outputDir, outName);
        
        await sharp(inputPath)
            .webp({ quality: 80, effort: 4 })
            .toFile(outputPath);
            
        processed++;
        if (processed % 20 === 0) {
            console.log(`Processed ${processed}/${files.length}`);
        }
    }
    console.log(`Successfully converted ${files.length} frames to WebP.`);
}

processAll().catch(console.error);
