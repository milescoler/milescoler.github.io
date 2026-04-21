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

const resumeSource = resolve(distDir, 'Cole_Richards_Resume.pdf');
const resumeTarget = resolve(root, 'Cole_Richards_Resume.pdf');

if (existsSync(resumeSource)) {
  cpSync(resumeSource, resumeTarget);
}
