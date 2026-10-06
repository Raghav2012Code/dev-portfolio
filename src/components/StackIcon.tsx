import { BRAND_ICONS, RASTER_ICONS } from "./brandIcons";

/**
 * A square badge for one stack item, from its brand mark. Decorative; the
 * label beside it names the item. A label with no mark gets no badge.
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
  return null;
}
