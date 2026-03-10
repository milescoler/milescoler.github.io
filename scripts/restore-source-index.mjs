import { cpSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve('.');
const sourceIndex = resolve(root, 'index.src.html');
const workingIndex = resolve(root, 'index.html');

cpSync(sourceIndex, workingIndex);
