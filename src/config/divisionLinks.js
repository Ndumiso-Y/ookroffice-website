/**
 * Division Website Links Configuration
 *
 * Update the URLs here when each division website is deployed.
 * Set to '#' for divisions that don't have a live website yet.
 */

export const divisionLinks = {
  // Koketso Rakhudu Foundation
  krf: {
    url: '/krf-website', // Integrated into main website
    enabled: true, // Now live as integrated subsite
  },

  // The Village Economy Indaba
  tvei: {
    url: '/tvei-website', // Integrated into main website
    enabled: true, // Now live as integrated subsite
  },

  // Coffee with Dr. Koketso Rakhudu
  coffee: {
    url: '/coffee-website', // Integrated into main website
    enabled: true, // Now live as integrated subsite
  },

  // Dr. Koketso Rakhudu Business School of Leadership Excellence
  businessSchool: {
    url: '/businessschool-website', // Integrated into main website
    enabled: true, // Now live as integrated subsite
  },

  // Kgosana Koketso Rakhudu Group
  group: {
    url: '/group-website', // Integrated into main website
    enabled: true, // Now live as integrated subsite
  },

  // Kgotla Community Engagement
  kgotla: {
    url: '/kgotla-website', // Integrated into main website
    enabled: true, // Now live as integrated subsite
  },
};

/**
 * Instructions for updating:
 *
 * 1. Deploy each division website to its hosting
 * 2. Update the corresponding URL above
 * 3. Set enabled: true for that division
 * 4. Rebuild the OOKR website: npm run build
 * 5. Deploy the updated build folder
 *
 * Example after deployment:
 * krf: {
 *   url: 'https://krfoundation.co.za',
 *   enabled: true,
 * },
 */
