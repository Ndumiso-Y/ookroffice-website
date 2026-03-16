/**
 * Helper function to get correct asset path for both development and production
 * @param {string} path - The asset path (e.g., '/assets/image.jpg')
 * @returns {string} - The full path including base URL
 */
export const getAssetPath = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Combine with base URL
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};
