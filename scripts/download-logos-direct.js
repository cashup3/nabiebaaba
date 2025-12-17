/**
 * Direct Logo Download Script
 * Downloads company logos from various sources
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const logosDir = path.join(__dirname, '../public/logos');

// Ensure logos directory exists
if (!fs.existsSync(logosDir)) {
  fs.mkdirSync(logosDir, { recursive: true });
}

// Logo URLs - these are common logo database URLs
// Note: Some may need to be updated with actual working URLs
const logoUrls = {
  'warner-brothers.png': 'https://logos-world.net/wp-content/uploads/2020/05/Warner-Bros-Logo.png',
  'def-jam.png': 'https://logos-world.net/wp-content/uploads/2020/04/Def-Jam-Recordings-Logo.png',
  'epic-records.png': 'https://logos-world.net/wp-content/uploads/2020/04/Epic-Records-Logo.png',
  'ovo.png': 'https://logos-world.net/wp-content/uploads/2021/02/OVO-Logo.png',
  'toronto-film-school.png': 'https://www.torontofilmschool.ca/wp-content/themes/tfs/assets/images/logo.png',
};

function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirects
        return downloadFile(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);
      
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`✅ Downloaded: ${path.basename(filepath)}`);
        resolve();
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function downloadLogos() {
  console.log('📥 Starting logo downloads...\n');
  
  for (const [filename, url] of Object.entries(logoUrls)) {
    const filepath = path.join(logosDir, filename);
    
    // Skip if already exists
    if (fs.existsSync(filepath)) {
      console.log(`⏭️  Skipped (already exists): ${filename}`);
      continue;
    }
    
    try {
      await downloadFile(url, filepath);
    } catch (error) {
      console.log(`❌ Failed to download ${filename}: ${error.message}`);
    }
  }
  
  console.log('\n✨ Download process complete!');
  console.log('\n📝 Note: Some logos may need to be downloaded manually from:');
  console.log('   - Company official websites');
  console.log('   - https://logos-world.net/');
  console.log('   - https://brandfetch.com/');
}

downloadLogos();

