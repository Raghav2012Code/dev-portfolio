import type { ReactNode } from "react";
import { BRAND_ICONS, RASTER_ICONS } from "./brandIcons";

/**
 * Concept glyphs, drawn on a 24px grid, for items with no brand mark. They
 * share one look: yellow strokes on a dark tile, the arena's "wired" colour.
 * Keyed by the label used in STACK_ROWS.
 */
const GLYPHS: Record<string, ReactNode> = {
  "REST APIs": (
    <>
      <path d="M9 4C6.5 4 6 5.5 6 7v2c0 1.5-1 3-3 3 2 0 3 1.5 3 3v2c0 1.5.5 3 3 3" />
      <path d="M15 4c2.5 0 3 1.5 3 3v2c0 1.5 1 3 3 3-2 0-3 1.5-3 3v2c0 1.5-.5 3-3 3" />
    </>
  ),
  "SHA-256": <path d="M9.5 3.5l-2 17M16.5 3.5l-2 17M4 9h16.5M3.5 15H20" />,
};

/** Used for any label without a mark, so a new stack item still gets a badge. */
const FALLBACK: ReactNode = (
  <>
    <rect x="5" y="5" width="14" height="14" rx="3" />
    <path d="M9 9h6v6H9z" />
  </>
);

/**
 * A square badge for one stack item: the brand mark where one exists, a
 * drawn glyph otherwise. Decorative; the label beside it names the item.
 */
export function StackIcon({ label }: { label: string }) {
  const raster = RASTER_ICONS[label];
  if (raster) {
    return (
      <svg className="stack-icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <image href={raster} width="32" height="32" />
      </svg>
    );
  }
  const brand = BRAND_ICONS[label];
  if (brand?.full) {
    return (
      <svg className="stack-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect width="24" height="24" fill={brand.under} />
        <path d={brand.d} fill={brand.bg} />
      </svg>
    );
  }
  if (brand) {
    return (
      <svg className="stack-icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <rect width="32" height="32" fill={brand.bg} />
        <path transform="translate(6 6) scale(0.8333)" d={brand.d} fill={brand.fg} />
      </svg>
    );
  }
  return (
    <svg className="stack-icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect width="32" height="32" fill="#22252D" />
      <g
        transform="translate(6 6) scale(0.8333)"
        fill="none"
        stroke="#FFD60A"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {GLYPHS[label] ?? FALLBACK}
      </g>
    </svg>
  );
}
