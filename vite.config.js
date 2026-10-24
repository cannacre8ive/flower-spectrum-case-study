import {defineConfig} from 'vite';
import {resolve} from 'node:path';
export default defineConfig({build:{rollupOptions:{input:{main:resolve('index.html'),walkthrough:resolve('walkthrough/index.html'),method:resolve('method/index.html'),evidence:resolve('evidence/index.html')}}}});
