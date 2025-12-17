/**
 * Creates placeholder logos as SVG files
 * These can be replaced with actual logos later
 */

const fs = require('fs');
const path = require('path');

const logosDir = path.join(__dirname, '../public/logos');

if (!fs.existsSync(logosDir)) {
  fs.mkdirSync(logosDir, { recursive: true });
}

const companies = [
  { name: "Canada Film Equipment", filename: "canada-film-equipment.png", initial: "CFE" },
  { name: "Ontario Camera", filename: "ontario-camera.png", initial: "OC" },
  { name: "Strada XR", filename: "strada-xr.png", initial: "SX" },
  { name: "B Camera", filename: "b-camera.png", initial: "BC" },
  { name: "Location A", filename: "location-a.png", initial: "LA" },
  { name: "Rumiversal", filename: "rumiversal.png", initial: "RU" },
  { name: "Warner Brothers", filename: "warner-brothers.png", initial: "WB" },
  { name: "Def Jam", filename: "def-jam.png", initial: "DJ" },
  { name: "Epic Records", filename: "epic-records.png", initial: "ER" },
  { name: "97 Collective", filename: "97-collective.png", initial: "97" },
  { name: "Toronto Film School", filename: "toronto-film-school.png", initial: "TFS" },
  { name: "OVO", filename: "ovo.png", initial: "OVO" },
];

// Create SVG placeholder for each company
companies.forEach(company => {
  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="400" fill="#ffffff"/>
  <text x="200" y="200" font-family="Arial, sans-serif" font-size="80" font-weight="bold" text-anchor="middle" dominant-baseline="central" fill="#000000">${company.initial}</text>
</svg>`;
  
  // Save as SVG (can be converted to PNG later)
  const svgPath = path.join(logosDir, company.filename.replace('.png', '.svg'));
  fs.writeFileSync(svgPath, svgContent);
  console.log(`✅ Created placeholder: ${company.filename.replace('.png', '.svg')}`);
});

console.log('\n✨ Placeholder logos created!');
console.log('\n📝 Next steps:');
console.log('   1. Replace these SVG files with actual company logos');
console.log('   2. Convert to PNG if needed (or keep as SVG)');
console.log('   3. Update filenames in MovingLogos.jsx if using different names');
console.log('\n💡 The component will work with these placeholders until real logos are added.\n');

