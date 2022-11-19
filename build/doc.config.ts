import baseConfig from './base.config';
import { defineConfig } from 'vite';

export default defineConfig({
  ...baseConfig,
  base: '/vue-slider-vertify',
  build: {
    outDir: 'docs',
  },
});
