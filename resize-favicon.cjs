const Jimp = require('jimp');

async function resizeFavicon() {
  try {
    const image = await Jimp.read('public/favicon.png');
    // Ensure it's a square
    image.cover(192, 192);
    await image.writeAsync('public/favicon-192x192.png');
    
    image.cover(48, 48);
    await image.writeAsync('public/favicon-48x48.png');
    
    // Also create favicon.ico equivalent by just saving as a small png and we can name it .ico (browsers handle this fine usually, but let's stick to standard names for ico or just use the pngs)
    image.cover(32, 32);
    await image.writeAsync('public/favicon.ico');
    
    console.log('Favicons resized successfully');
  } catch (err) {
    console.error('Error resizing favicon:', err);
  }
}

resizeFavicon();
