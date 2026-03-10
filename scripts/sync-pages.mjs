import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve('.');
const distDir = resolve(root, 'dist');
const distAssetsDir = resolve(distDir, 'assets');
const targetAssetsDir = resolve(root, 'assets');

mkdirSync(targetAssetsDir, { recursive: true });

if (existsSync(distAssetsDir)) {
  cpSync(distAssetsDir, targetAssetsDir, { recursive: true });
}

const resumeSource = resolve(distDir, 'Cole-Richards-Resume.pdf');
const resumeTarget = resolve(root, 'Cole-Richards-Resume.pdf');

if (existsSync(resumeSource)) {
  cpSync(resumeSource, resumeTarget);
}
