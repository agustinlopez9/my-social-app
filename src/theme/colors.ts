/**
 * Color Constants
 *
 * This file provides hex color values with their Tailwind class name equivalents.
 * Use these constants when you need programmatic access to colors (e.g., in charts, toasts, etc.)
 *
 * For most cases, prefer using Tailwind classes directly in your JSX.
 * Example: <div className="bg-color-surface-primary text-color-primary">
 *
 * Usage:
 * ```tsx
 * import { colors } from 'theme';
 *
 * // Get hex value
 * const bgColor = colors.brand[600].hex; // '#ea580c'
 *
 * // Get Tailwind class name
 * const twClass = colors.brand[600].tw; // 'orange-600'
 * ```
 */

export const colors = {
  // Brand Colors (Orange)
  brand: {
    50: { hex: "#fff7ed", tw: "orange-50" },
    100: { hex: "#ffedd5", tw: "orange-100" },
    200: { hex: "#fed7aa", tw: "orange-200" },
    300: { hex: "#fdba74", tw: "orange-300" },
    400: { hex: "#fb923c", tw: "orange-400" },
    500: { hex: "#f97316", tw: "orange-500" },
    600: { hex: "#ea580c", tw: "orange-600" },
    700: { hex: "#c2410c", tw: "orange-700" },
    800: { hex: "#9a3412", tw: "orange-800" },
    900: { hex: "#7c2d12", tw: "orange-900" },
  },

  // Dark Neutral Colors (Combination of Zinc/Gray)
  neutral: {
    50: { hex: "#fafafa", tw: "zinc-50" },
    100: { hex: "#f4f4f5", tw: "zinc-100" },
    200: { hex: "#e4e4e7", tw: "zinc-200" },
    300: { hex: "#d4d4d8", tw: "zinc-300" },
    400: { hex: "#a1a1aa", tw: "zinc-400" },
    500: { hex: "#71717a", tw: "zinc-500" },
    600: { hex: "#52525b", tw: "zinc-600" },
    700: { hex: "#3f3f46", tw: "zinc-700" },
    800: { hex: "#27272a", tw: "zinc-800" },
    900: { hex: "#18181b", tw: "zinc-900" },
    950: { hex: "#09090b", tw: "zinc-950" },
  },

  // Semantic Surface Colors
  surface: {
    base: { hex: "#18181b", tw: "zinc-900" },
    primary: { hex: "#3f3f46", tw: "zinc-700" },
    secondary: { hex: "#27272a", tw: "zinc-800" },
    elevated: { hex: "#52525b", tw: "zinc-600" },
    navbar: { hex: "#1a1a1d", tw: "neutral-950" },
    input: { hex: "#52525b", tw: "zinc-600" },
  },

  // Semantic Border Colors
  border: {
    subtle: { hex: "#52525b", tw: "zinc-600" },
    default: { hex: "#71717a", tw: "zinc-500" },
    interactive: { hex: "#ea580c", tw: "orange-600" },
    interactiveHover: { hex: "#f97316", tw: "orange-500" },
    focus: { hex: "#f97316", tw: "orange-500" },
  },

  // Text Colors
  text: {
    primary: { hex: "#ffffff", tw: "white" },
    secondary: { hex: "#d4d4d8", tw: "zinc-300" },
    tertiary: { hex: "#a1a1aa", tw: "zinc-400" },
    disabled: { hex: "#71717a", tw: "zinc-500" },
    brand: { hex: "#ea580c", tw: "orange-600" },
    onBrand: { hex: "#ffffff", tw: "white" },
    placeholder: { hex: "#a1a1aa", tw: "zinc-400" },
  },

  // State Colors
  state: {
    success: { hex: "#22c55e", tw: "green-500" },
    successFg: { hex: "#ffffff", tw: "white" },
    error: { hex: "#fb2c36", tw: "red-500" },
    errorFg: { hex: "#ffffff", tw: "white" },
    warning: { hex: "#eab308", tw: "yellow-500" },
    warningFg: { hex: "#18181b", tw: "zinc-900" },
    info: { hex: "#3b82f6", tw: "blue-500" },
    infoFg: { hex: "#ffffff", tw: "white" },
  },

  // Interactive State Colors
  interactive: {
    primary: { hex: "#ea580c", tw: "orange-600" },
    primaryHover: { hex: "#c2410c", tw: "orange-700" },
    primaryActive: { hex: "#9a3412", tw: "orange-800" },
    secondary: { hex: "#3f3f46", tw: "zinc-700" },
    secondaryHover: { hex: "#ea580c", tw: "orange-600" },
    secondaryActive: { hex: "#c2410c", tw: "orange-700" },
  },
} as const;

/**
 * Helper function to get hex value from color object
 * @param color - Color object with hex and tw properties
 * @returns Hex color string
 */
export const getHex = (color: { hex: string; tw: string }): string => color.hex;

/**
 * Helper function to get Tailwind class name from color object
 * @param color - Color object with hex and tw properties
 * @returns Tailwind class name
 */
export const getTw = (color: { hex: string; tw: string }): string => color.tw;

/**
 * Type for accessing color values
 */
export type ColorValue = { hex: string; tw: string };
