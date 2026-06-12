import sharp from 'sharp';

async function resizeFavicon() {
  try {
    const img = sharp('public/favicon.png');
    
    // Create 192x192
    await img.resize(192, 192, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } }).toFile('public/favicon-192x192.png');
    
    // Create 48x48
    await img.resize(48, 48, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } }).toFile('public/favicon-48x48.png');
    
    // Create an .ico equivalent (saving as 32x32 png, which can be named .ico or linked as png)
    await img.resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } }).toFile('public/favicon.ico');
    
    // Replace original favicon.png with the 48x48 version to ensure Google bot reads it properly from the standard link
    await sharp('public/favicon-48x48.png').toFile('public/favicon-small.png');
    
    console.log('Favicons generated successfully using sharp.');
  } catch (err) {
    console.error('Error generating favicons:', err);
  }
}

resizeFavicon();
