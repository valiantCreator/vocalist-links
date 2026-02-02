import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';
import { SONGS } from '../src/config/songs';

async function generateQRs() {
  const outDir = path.join(process.cwd(), 'output', 'qrs');
  
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  for (const song of SONGS) {
    const url = `https://vocalist-links.vercel.app/s/${song.id}`;
    const filePath = path.join(outDir, `vocalist-links-${song.id}.svg`);
    
    try {
      const svg = await QRCode.toString(url, {
        type: 'svg',
        color: {
          dark: '#ffffff',
          light: '#000000' // pure black
        },
        margin: 1
      });
      
      fs.writeFileSync(filePath, svg);
      console.log(`QR code generated for ${song.name} at: ${filePath}`);
    } catch (err) {
      console.error(`Error generating QR code for ${song.name}:`, err);
    }
  }
}

generateQRs();
