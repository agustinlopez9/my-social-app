/**
 * Typography Constants
 *
 * This file provides font-size values with their Tailwind class name equivalents.
 * Use these constants when you need programmatic access to typography (e.g., in charts, dynamic components).
 *
 * For most cases, prefer using Tailwind classes directly in your JSX.
 * Example: <h1 className="text-display-lg">Title</h1>
 *
 * Usage:
 * ```tsx
 * import { typography } from 'theme';
 *
 * // Get CSS variable reference
 * const fontSize = typography.display.lg.css; // 'var(--font-size-display-lg)'
 *
 * // Get Tailwind class name
 * const twClass = typography.display.lg.tw; // 'text-display-lg'
 *
 * // Get size info (for documentation/debugging)
 * const sizeInfo = typography.display.lg.sizes; // { mobile: "32px", tablet: "40px", desktop: "48px" }
 * ```
 */

export const typography = {
  // Display - Hero/Landing/Brand Text
  display: {
    lg: {
      css: "var(--font-size-display-lg)",
      tw: "text-display-lg",
      sizes: { mobile: "32px", tablet: "40px", desktop: "48px" },
    },
    md: {
      css: "var(--font-size-display-md)",
      tw: "text-display-md",
      sizes: { mobile: "28px", tablet: "32px", desktop: "40px" },
    },
    sm: {
      css: "var(--font-size-display-sm)",
      tw: "text-display-sm",
      sizes: { mobile: "24px", tablet: "28px", desktop: "32px" },
    },
  },

  // Heading - Section & Page Titles
  heading: {
    lg: {
      css: "var(--font-size-heading-lg)",
      tw: "text-heading-lg",
      sizes: { mobile: "24px", tablet: "28px", desktop: "32px" },
    },
    md: {
      css: "var(--font-size-heading-md)",
      tw: "text-heading-md",
      sizes: { mobile: "20px", tablet: "24px", desktop: "28px" },
    },
    sm: {
      css: "var(--font-size-heading-sm)",
      tw: "text-heading-sm",
      sizes: { mobile: "18px", tablet: "20px", desktop: "22px" },
    },
  },

  // Body - Content/Labels/Captions/UI
  body: {
    lg: {
      css: "var(--font-size-body-lg)",
      tw: "text-body-lg",
      sizes: { mobile: "18px", tablet: "18px", desktop: "20px" },
    },
    base: {
      css: "var(--font-size-body)",
      tw: "text-body",
      sizes: { mobile: "16px", tablet: "16px", desktop: "18px" },
    },
    sm: {
      css: "var(--font-size-body-sm)",
      tw: "text-body-sm",
      sizes: { mobile: "14px", tablet: "14px", desktop: "16px" },
    },
  },
} as const;

/**
 * Helper function to get CSS variable from typography object
 * @param typo - Typography object with css, tw, and sizes properties
 * @returns CSS variable string
 */
export const getCss = (typo: {
  css: string;
  tw: string;
  sizes: { mobile: string; tablet: string; desktop: string };
}): string => typo.css;

/**
 * Helper function to get Tailwind class name from typography object
 * @param typo - Typography object with css, tw, and sizes properties
 * @returns Tailwind class name
 */
export const getTw = (typo: {
  css: string;
  tw: string;
  sizes: { mobile: string; tablet: string; desktop: string };
}): string => typo.tw;

/**
 * Helper function to get size info from typography object
 * @param typo - Typography object with css, tw, and sizes properties
 * @returns Object with mobile, tablet, and desktop sizes
 */
export const getSizes = (typo: {
  css: string;
  tw: string;
  sizes: { mobile: string; tablet: string; desktop: string };
}): { mobile: string; tablet: string; desktop: string } => typo.sizes;

/**
 * Type for accessing typography values
 */
export type TypographyValue = {
  css: string;
  tw: string;
  sizes: { mobile: string; tablet: string; desktop: string };
};
