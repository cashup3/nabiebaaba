/**
 * Logo Fetcher - Downloads logos from multiple sources
 * Uses Clearbit Logo API and other sources
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const logosDir = path.join(__dirname, '../public/logos');

if (!fs.existsSync(logosDir)) {
  fs.mkdirSync(logosDir, { recursive: true });
}

// Company domains for Clearbit API
const companies = {
  'warner-brothers.png': { domain: 'warnerbros.com', name: 'Warner Brothers' },
  'def-jam.png': { domain: 'defjam.com', name: 'Def Jam' },
  'epic-records.png': { domain: 'epicrecords.com', name: 'Epic Records' },
  'ovo.png': { domain: 'octobersveryown.com', name: 'OVO' },
  'toronto-film-school.png': { domain: 'torontofilmschool.ca', name: 'Toronto Film School' },
};

// Clearbit Logo API (free, no API key needed for basic use)
function downloadFromClearbit(domain, filename) {
  return new Promise((resolve, reject) => {
    const url = `https://logo.clearbit.com/${domain}`;
    const filepath = path.join(logosDir, filename);
    
    if (fs.existsSync(filepath)) {
      console.log(`⏭️  ${filename} already exists`);
      resolve();
      return;
    }

    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✅ Downloaded: ${filename}`);
          resolve();
        });
      } else {
        console.log(`❌ Failed: ${filename} (Status: ${response.statusCode})`);
        reject(new Error(`Status ${response.statusCode}`));
      }
    }).on('error', (err) => {
      console.log(`❌ Error downloading ${filename}: ${err.message}`);
      reject(err);
    });
  });
}

async function downloadAll() {
  console.log('📥 Downloading logos from Clearbit API...\n');
  
  for (const [filename, info] of Object.entries(companies)) {
    try {
      await downloadFromClearbit(info.domain, filename);
      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      // Continue with next logo
    }
  }
  
  console.log('\n✨ Download complete!');
  console.log('\n📝 Remaining logos to download manually:');
  console.log('   - canada-film-equipment.png');
  console.log('   - ontario-camera.png');
  console.log('   - strada-xr.png');
  console.log('   - b-camera.png');
  console.log('   - location-a.png');
  console.log('   - rumiversal.png');
  console.log('   - 97-collective.png');
  console.log('\n💡 Sources for remaining logos:');
  console.log('   - Company websites');
  console.log('   - https://seeklogo.com/');
  console.log('   - https://logos-world.net/');
}

downloadAll();

