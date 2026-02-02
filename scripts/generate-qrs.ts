import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';

async function generateQR() {
  const url = 'https://vocalist-links.vercel.app/s/1';
  const outDir = path.join(process.cwd(), 'public', 'qrs');
  
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const filePath = path.join(outDir, 'vocalist-links-1.svg');
  
  try {
    const svg = await QRCode.toString(url, {
      type: 'svg',
      color: {
        dark: '#ffffff',
        light: '#00000000' // transparent
      },
      margin: 1
    });
    
    fs.writeFileSync(filePath, svg);
    console.log(`QR code generated at: ${filePath}`);
  } catch (err) {
    console.error('Error generating QR code:', err);
  }
}

generateQR();
