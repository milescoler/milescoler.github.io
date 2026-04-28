import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve('.');
const distDir = resolve(root, 'dist');
const distAssetsDir = resolve(distDir, 'assets');
const targetAssetsDir = resolve(root, 'assets');

mkdirSync(targetAssetsDir, { recursive: true });
rmSync(targetAssetsDir, { recursive: true, force: true });
mkdirSync(targetAssetsDir, { recursive: true });

if (existsSync(distAssetsDir)) {
  cpSync(distAssetsDir, targetAssetsDir, { recursive: true });
}

const indexSource = resolve(distDir, 'index.html');
const indexTarget = resolve(root, 'index.html');

if (existsSync(indexSource)) {
  cpSync(indexSource, indexTarget);
}

for (const file of ['Cole_Richards_Resume.pdf', 'Cole_Richards_Resume_Service.pdf']) {
  const src = resolve(distDir, file);
  const tgt = resolve(root, file);
  if (existsSync(src)) {
    cpSync(src, tgt);
  }
}
