/**
 * Centralized asset path utilities
 * Provides consistent path resolution across all divisions
 * Respects PUBLIC_URL for subdirectory deployments
 */

/**
 * Get the PUBLIC_URL prefix
 * @returns {string} PUBLIC_URL prefix (empty for root, /ookr for subdirectory)
 */
const getPublicUrl = () => {
  return process.env.PUBLIC_URL || '';
};

/**
 * Get the base path for division assets
 * @param {string} division - Division name (krf, tvei, coffee, businessschool, group, kgotla)
 * @returns {string} Base path for division assets
 */
export const getDivisionAssetPath = (division) => {
  return `${getPublicUrl()}/division-assets/${division}`;
};

/**
 * Get image path for a division
 * @param {string} division - Division name
 * @param {string} imagePath - Relative path to image within division's images folder
 * @returns {string} Full path to image
 */
export const getDivisionImage = (division, imagePath) => {
  return `${getDivisionAssetPath(division)}/images/${imagePath}`;
};

/**
 * Get gallery image path for a division
 * @param {string} division - Division name
 * @param {string} galleryName - Gallery folder name
 * @param {string} imageName - Image filename
 * @returns {string} Full path to gallery image
 */
export const getGalleryImage = (division, galleryName, imageName) => {
  return `${getDivisionAssetPath(division)}/gallery/${galleryName}/${imageName}`;
};

/**
 * Get public image path (for main website assets)
 * @param {string} imagePath - Relative path to image
 * @returns {string} Full path to public image
 */
export const getPublicImage = (imagePath) => {
  return `${getPublicUrl()}/images/${imagePath}`;
};

/**
 * Generate array of sequential images for galleries
 * @param {string} division - Division name
 * @param {string} galleryName - Gallery folder name
 * @param {string} prefix - Image filename prefix
 * @param {number} start - Starting number
 * @param {number} count - Number of images
 * @param {string} extension - File extension (default: 'jpg')
 * @returns {Array} Array of image objects with src and alt
 */
export const generateGalleryImages = (
  division,
  galleryName,
  prefix,
  start,
  count,
  extension = 'jpg'
) => {
  return Array.from({ length: count }, (_, i) => {
    const num = start + i;
    const paddedNum = num < 10 ? `0${num}` : num;
    return {
      src: getGalleryImage(division, galleryName, `${prefix}${paddedNum}.${extension}`),
      alt: `${galleryName} - Image ${i + 1}`
    };
  });
};
