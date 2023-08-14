import { defineConfig, defineGlobalStyles } from '@pandacss/dev';

const globalCss = defineGlobalStyles({
  body: {
    fontFamily: 'Overpass',
    color: '#bdc6e9',
  },
});

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens: {
      colors: {
        bgBase: { value: '#1a1e2e' },
        bgHeader: { value: '#1a1e2e4d' },
      },
    },
    extend: {},
  },

  // The output directory for your css system
  outdir: 'styled-system',

  // Global styles
  globalCss,
});
