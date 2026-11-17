// Renderiza cada diapositiva de posts.js a salida/<post>/NN.png y su caption.txt.
// Uso: node render.mjs [id-del-post]   (sin id = todos)
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import { resolve, join } from 'node:path';

const CHROME = process.env.CHROME || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const { POSTS } = createRequire(import.meta.url)('./posts.js');
const solo = process.argv[2];
const tpl = pathToFileURL(resolve('plantilla.html')).href;

for (const p of POSTS.filter(p => !solo || p.id === solo)) {
  const dir = resolve('salida', p.id);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'caption.txt'), p.caption + '\n');
  if (p.tipo === 'reel') { console.log(p.id, 'reel →', p.video); continue; } // el vídeo se publica desde assets/
  p.slides.forEach((_, i) => {
    const out = join(dir, String(i + 1).padStart(2, '0') + '.png');
    execFileSync(CHROME, ['--headless=new', '--hide-scrollbars', '--allow-file-access-from-files', '--force-device-scale-factor=1',
      '--window-size=1080,1350', '--virtual-time-budget=3000', `--screenshot=${out}`, `${tpl}?p=${p.id}&s=${i}`], { stdio: 'ignore' });
  });
  console.log(p.id, p.slides.length, 'diapositivas');
}
