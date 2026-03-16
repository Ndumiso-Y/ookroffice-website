/**
 * Get the correct asset path accounting for Vite's base URL
 * For assets in public folder, use this helper
 */
export const getAssetPath = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // In dev mode with base path, we need the full base URL
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};
