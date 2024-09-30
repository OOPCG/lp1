/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "m3-schemes-on-primary": "var(--m3-schemes-on-primary)",
        "m3-schemes-on-surface-variant": "var(--m3-schemes-on-surface-variant)",
        "m3-schemes-primary": "var(--m3-schemes-primary)",
        "m3-schemes-surface-container-high": "var(--m3-schemes-surface-container-high)",
        "m3-state-layers-on-primary-opacity-08": "var(--m3-state-layers-on-primary-opacity-08)",
        "m3-state-layers-on-primary-opacity-12": "var(--m3-state-layers-on-primary-opacity-12)",
        "m3-state-layers-on-surface-variant-opacity-08": "var(--m3-state-layers-on-surface-variant-opacity-08)",
        "m3-state-layers-on-surface-variant-opacity-12": "var(--m3-state-layers-on-surface-variant-opacity-12)",
        "system-colors-colors-brown": "var(--system-colors-colors-brown)",
      },
      fontFamily: {
        "m3-body-large": "var(--m3-body-large-font-family)",
        "m3-headline-large": "var(--m3-headline-large-font-family)",
        "m3-headline-medium": "var(--m3-headline-medium-font-family)",
        "m3-label-large": "var(--m3-label-large-font-family)",
      },
      boxShadow: {
        "m3-elevation-light-1": "var(--m3-elevation-light-1)",
      },
    },
  },
  plugins: [],
};
