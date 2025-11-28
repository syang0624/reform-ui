/**
 * Reform Party Color System
 *
 * This file contains all the color definitions used in the Reform Party UI library.
 * Colors are defined as RGB values to work seamlessly with Tailwind CSS and CSS variables.
 */

export const reformColors = {
  primary: {
    50: "255 242 235",
    100: "255 228 215",
    200: "255 200 175",
    300: "255 165 125",
    400: "255 130 80",
    500: "255 114 16",  // Base #FF7210
    600: "230 102 14",
    700: "191 85 12",
    800: "153 68 10",
    900: "102 45 6",
    950: "64 28 4",
    DEFAULT: "255 114 16",
    foreground: "255 255 255",
  },
  secondary: {
    DEFAULT: "248 250 252",  // slate-50
    foreground: "15 23 42",  // slate-900
  },
  background: {
    DEFAULT: "255 255 255",
    dark: "15 23 42",  // slate-900
  },
  foreground: {
    DEFAULT: "15 23 42",  // slate-900
    dark: "248 250 252",  // slate-50
  },
  card: {
    DEFAULT: "255 255 255",
    foreground: "15 23 42",
    dark: "30 41 59",  // slate-800
    darkForeground: "248 250 252",
  },
  popover: {
    DEFAULT: "255 255 255",
    foreground: "15 23 42",
    dark: "30 41 59",
    darkForeground: "248 250 252",
  },
  muted: {
    DEFAULT: "241 245 249",  // slate-100
    foreground: "100 116 139",  // slate-500
    dark: "51 65 85",  // slate-700
    darkForeground: "148 163 184",  // slate-400
  },
  accent: {
    DEFAULT: "241 245 249",  // slate-100
    foreground: "15 23 42",
    dark: "51 65 85",
    darkForeground: "248 250 252",
  },
  destructive: {
    DEFAULT: "239 68 68",  // red-500
    foreground: "255 255 255",
    dark: "220 38 38",  // red-700
    darkForeground: "248 250 252",
  },
  border: {
    DEFAULT: "226 232 240",  // slate-200
    dark: "51 65 85",
  },
  input: {
    DEFAULT: "226 232 240",
    dark: "51 65 85",
  },
  ring: {
    DEFAULT: "255 114 16",
  },
  chart: {
    1: "255 114 16",
    2: "59 130 246",
    3: "34 197 94",
    4: "251 191 36",
    5: "239 68 68",
  },
} as const;

/**
 * Convert RGB string to hex color
 */
export function rgbToHex(rgb: string): string {
  const [r, g, b] = rgb.split(" ").map(Number);
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}

/**
 * Get color with opacity
 */
export function withOpacity(rgb: string, opacity: number): string {
  return `rgb(${rgb} / ${opacity})`;
}

/**
 * Export hex color versions for convenience
 */
export const reformColorsHex = {
  primary: {
    50: rgbToHex(reformColors.primary[50]),
    100: rgbToHex(reformColors.primary[100]),
    200: rgbToHex(reformColors.primary[200]),
    300: rgbToHex(reformColors.primary[300]),
    400: rgbToHex(reformColors.primary[400]),
    500: rgbToHex(reformColors.primary[500]),
    600: rgbToHex(reformColors.primary[600]),
    700: rgbToHex(reformColors.primary[700]),
    800: rgbToHex(reformColors.primary[800]),
    900: rgbToHex(reformColors.primary[900]),
    950: rgbToHex(reformColors.primary[950]),
    DEFAULT: "#FF7210",
  },
} as const;
