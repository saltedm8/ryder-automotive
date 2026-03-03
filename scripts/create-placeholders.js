const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Create visible placeholder - lighter gray so it shows clearly on dark background
const bg = { r: 75, g: 75, b: 90 };

async function createPlaceholders() {
  const imagesDir = path.join(__dirname, '../public/images');
  const logoDir = path.join(imagesDir, 'logo');
  const bikesDir = path.join(imagesDir, 'bikes');
  const vehiclesDir = path.join(bikesDir, 'vehicles');
  if (!fs.existsSync(logoDir)) fs.mkdirSync(logoDir, { recursive: true });
  if (!fs.existsSync(vehiclesDir)) fs.mkdirSync(vehiclesDir, { recursive: true });

  // Logo placeholder (transparent-friendly PNG, 200x60)
  await sharp({
    create: { width: 200, height: 60, channels: 3, background: bg }
  })
  .png()
  .toFile(path.join(logoDir, 'logo.png'));
  console.log('Created: logo/logo.png');

  const sectionImages = ['hero', 'workshop', 'adventure', 'sport', 'classic', 'kove'];
  for (const name of sectionImages) {
    await sharp({
      create: { width: 1200, height: 800, channels: 3, background: bg }
    })
    .jpeg({ quality: 85 })
    .toFile(path.join(bikesDir, `${name}.jpg`));
    console.log('Created:', name + '.jpg');
  }

  const vehicleIds = ['7713789','7710804','7707550','7700890','7700796','7700417','7699355','7696336','7687285','7670723','7657656','7657643','7654167','7648278','7522620','7522486','7522539','7522335'];
  const downthemallDir = path.join(imagesDir, 'downthemall');
  // Get all downthemall jpg files (exclude known non-vehicle images)
  const exclude = ['about-first', 'about-second', 'kove-about', '583498495', '583499381', '583499830'];
  const downthemallJpgs = fs.existsSync(downthemallDir)
    ? fs.readdirSync(downthemallDir)
        .filter((f) => f.endsWith('.jpg') && !exclude.some((e) => f.startsWith(e)))
        .map((f) => path.join(downthemallDir, f))
    : [];
  let usedIndex = 0;
  for (const id of vehicleIds) {
    const downthemallPath = path.join(downthemallDir, `${id}.jpg`);
    const destPath = path.join(vehiclesDir, `${id}_1.jpg`);
    let copied = false;
    if (fs.existsSync(downthemallPath)) {
      fs.copyFileSync(downthemallPath, destPath);
      console.log('Copied downthemall:', id + '.jpg -> vehicles/' + id + '_1.jpg');
      copied = true;
    } else if (downthemallJpgs[usedIndex]) {
      fs.copyFileSync(downthemallJpgs[usedIndex], destPath);
      console.log('Copied downthemall:', path.basename(downthemallJpgs[usedIndex]), '-> vehicles/' + id + '_1.jpg');
      usedIndex++;
      copied = true;
    }
    if (!copied) {
      await sharp({
        create: { width: 800, height: 600, channels: 3, background: bg }
      })
      .jpeg({ quality: 85 })
      .toFile(destPath);
    }
  }
  console.log('Processed', vehicleIds.length, 'vehicle images');
}

createPlaceholders();
