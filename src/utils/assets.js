/**
 * Helper to resolve asset URLs relative to the base URL
 * (works on localhost, GitHub Pages subpaths, or custom domains).
 */
export function getAssetUrl(path) {
  if (!path) return "";
  if (/^(?:https?:|\/\/|data:)/.test(path)) {
    return path;
  }
  const clean = path.replace(/^\/+/, "");
  const base = import.meta.env.BASE_URL || "./";
  return base.endsWith("/") ? `${base}${clean}` : `${base}/${clean}`;
}
