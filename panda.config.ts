import { defineConfig, defineGlobalStyles } from '@pandacss/dev';

const globalCss = defineGlobalStyles({
  body: {
    fontFamily: 'Overpass',
    color: 'main',
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
        // Text
        main: { value: '#bdc6e9' },
        contentsTitle: { value: '#ffffff' },
        error: { value: '#f87171' },
        code: { value: '#f2f4ffcc' },
        // Background
        bgBase: { value: '#1a1e2e' },
        bgCodeBlock: { value: '#2b3047' },
        // Post card
        cardText: { value: '#ffffff' },
        hoverTitle: { value: '#f0abfc' },
        tagName: { value: '#f0abfc' },
        bgCard: { value: 'linear-gradient(to bottom right, #647dee, #7f53ac)' },
        // Button
        btnBase: { value: '#e879f9' },
        hoverBtn: { value: '#22d3ee' },
        // header
        activePage: { value: 'linear-gradient(to bottom, #00f1f9, #cb33f4)' },
        bgHeader: { value: '#1a1e2e4d' },
        // Avatar
        avatar: { value: '#999eef' },
        // Input
        placeholder: { value: '#475569' },
        inputBorder: { value: '#999eef' },
        focusInputBorder: { value: '#7c3aed' },
        focusInputOutline: { value: '#a5b4fc' },
        // Pagination
        paginationBorder: { value: '#c4b5fd' },
        paginationIcon: { value: '#c4b5fd' },
        // Post Detail
        divider: { value: '#2A2F40' },
        link: { value: '#f472b6' },
        // Footer
        footerBorder: { value: '#312e81' },
      },
    },
    extend: {},
  },

  // The output directory for your css system
  outdir: 'styled-system',

  // Global styles
  globalCss,
});
