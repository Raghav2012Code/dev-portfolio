import type { ReactNode } from "react";
import { BRAND_ICONS } from "./brandIcons";

/**
 * Hardware and concept glyphs, drawn on a 24px grid. They have no brand mark,
 * so they share one look: yellow strokes on a dark tile, the arena's "wired"
 * colour. Keyed by the label used in STACK_ROWS.
 */
const GLYPHS: Record<string, ReactNode> = {
  DHT22: (
    <>
      <path d="M10 4.5a2 2 0 0 1 4 0v8.6a4 4 0 1 1-4 0z" />
      <path d="M12 9v6" />
    </>
  ),
  "IR sensors": (
    <>
      <circle cx="5.5" cy="18.5" r="1.6" />
      <path d="M5 11.5a7.5 7.5 0 0 1 7.5 7.5" />
      <path d="M5 5.5A13.5 13.5 0 0 1 18.5 19" />
    </>
  ),
  "Laser sensors": (
    <>
      <path d="M3 12h11" />
      <circle cx="18" cy="12" r="3" />
      <path d="M18 6.5v2M18 15.5v2" />
    </>
  ),
  Servos: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 10V5" />
      <path d="M5 12h2M17 12h2M12 17v2" />
    </>
  ),
  Solenoids: <path d="M2 12h3q1.5-7 3 0t3 0t3 0t3 0h3" />,
  LCDs: (
    <>
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M7 9h5M7 13h9" />
      <path d="M9 20h6" />
    </>
  ),
  Sensors: (
    <>
      <circle cx="12" cy="12" r="2" />
      <path d="M7.5 7.5a6.4 6.4 0 0 0 0 9" />
      <path d="M16.5 7.5a6.4 6.4 0 0 1 0 9" />
      <path d="M4.5 4.5a10.6 10.6 0 0 0 0 15" />
      <path d="M19.5 4.5a10.6 10.6 0 0 1 0 15" />
    </>
  ),
  Actuators: (
    <>
      <rect x="3" y="8" width="10" height="8" rx="1.5" />
      <path d="M13 12h8" />
      <path d="M21 9v6" />
    </>
  ),
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
