/**
 * Fetch bike images - run with: node scripts/fetch-images.js
 * Click Dealer may block server requests; run this from a machine that can access the URLs.
 */
const https = require('https');
const fs = require('fs');
const path = require('path');

const IMAGES = [
  { url: 'https://images.clickdealer.co.uk/vehicles/7700417/7700417_1.jpg', file: 'hero.jpg' },
  { url: 'https://images.clickdealer.co.uk/vehicles/7710804/7710804_1.jpg', file: 'workshop.jpg' },
  { url: 'https://images.clickdealer.co.uk/vehicles/7713789/7713789_1.jpg', file: 'adventure.jpg' },
  { url: 'https://images.clickdealer.co.uk/vehicles/7699355/7699355_1.jpg', file: 'sport.jpg' },
  { url: 'https://images.clickdealer.co.uk/vehicles/7657643/7657643_1.jpg', file: 'classic.jpg' },
  { url: 'https://images.clickdealer.co.uk/vehicles/7522620/7522620_1.jpg', file: 'kove.jpg' },
];

const outDir = path.join(__dirname, '../public/images/bikes');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const fetch = (url) => new Promise((resolve, reject) => {
  const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, (res) => {
    const chunks = [];
    res.on('data', c => chunks.push(c));
    res.on('end', () => resolve({ status: res.statusCode, data: Buffer.concat(chunks) }));
  });
  req.on('error', reject);
});

(async () => {
  for (const { url, file } of IMAGES) {
    try {
      const { status, data } = await fetch(url);
      if (status === 200 && data.length > 1000) {
        fs.writeFileSync(path.join(outDir, file), data);
        console.log('OK:', file);
      } else {
        console.log('SKIP:', file, status, data.length);
      }
    } catch (e) {
      console.log('FAIL:', file, e.message);
    }
  }
})();
