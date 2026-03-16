/**
 * Helper function to get correct asset path for Group division assets
 * For assets in public folder, use this helper
 * CRA uses process.env.PUBLIC_URL instead of Vite's import.meta.env.BASE_URL
 */
export const getAssetPath = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Use CRA's PUBLIC_URL and point to division-specific assets
  const publicUrl = process.env.PUBLIC_URL || '';
  return `${publicUrl}/division-assets/group/${cleanPath}`;
};
