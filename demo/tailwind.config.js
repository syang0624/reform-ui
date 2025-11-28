import reformPreset from '@reform-ui/ui/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [reformPreset],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@reform-ui/ui/dist/**/*.{js,mjs}',
  ],
};
