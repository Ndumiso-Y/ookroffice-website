/**
 * Centralized division configuration
 * Contains all division-specific settings, colors, and metadata
 */

export const DIVISIONS = {
  krf: {
    id: 'krf',
    name: 'Koketso Rakhudu Foundation',
    shortName: 'KRF',
    basePath: '/krf-website',
    logo: '/images/KRFLogo.png',
    colors: {
      primary: '#B27300', // gold
      secondary: '#1D1D1B', // charcoal
    },
    theme: {
      gradient: 'from-gold to-charcoal',
    }
  },

  tvei: {
    id: 'tvei',
    name: 'The Village Economy Indaba',
    shortName: 'TVEI',
    basePath: '/tvei-website',
    logo: '/images/TVEILogo.png',
    colors: {
      primary: '#1B5538',
      secondary: '#B27300',
    }
  },

  coffee: {
    id: 'coffee',
    name: 'Coffee with Dr. Koketso Rakhudu',
    shortName: 'Coffee',
    basePath: '/coffee-website',
    logo: '/images/CoffeeKoketsoLogo.png',
    colors: {
      primary: '#4B1D00', // deepCoffee
      secondary: '#E06A1C', // coffeeOrange
      accent: '#F5E9DA', // cream
    }
  },

  businessSchool: {
    id: 'businessschool',
    name: 'Dr. Koketso Rakhudu Business School of Leadership Excellence',
    shortName: 'Business School',
    basePath: '/businessschool-website',
    logo: '/images/BusinessSchoolOfLeadershipExcellenceLogo.png',
    colors: {
      primary: '#542a02', // primary-brown
      secondary: '#345623', // forest-green
      accent: '#009444', // leadership-green
    }
  },

  group: {
    id: 'group',
    name: 'Kgosana Koketso Rakhudu Group',
    shortName: 'KKRG',
    basePath: '/group-website',
    logo: '/images/KKRGLogo.png',
    colors: {
      primary: '#174E81', // royal-blue
      secondary: '#F4F4F4', // neutral-gray
    }
  },

  kgotla: {
    id: 'kgotla',
    name: 'Tsitsing Kgotla Ya Rakhudu',
    shortName: 'Kgotla',
    basePath: '/kgotla-website',
    logo: '/images/KgotlhaLogo.png',
    colors: {
      primary: '#1B5538', // forest
      secondary: '#c27700', // kgotla-gold
    },
    theme: {
      gradient: 'from-forest to-kgotla-gold',
    }
  },
};

/**
 * Get division configuration by ID
 * @param {string} divisionId - Division identifier
 * @returns {Object} Division configuration object
 */
export const getDivision = (divisionId) => {
  return DIVISIONS[divisionId] || null;
};

/**
 * Get all division IDs
 * @returns {Array<string>} Array of division IDs
 */
export const getAllDivisionIds = () => {
  return Object.keys(DIVISIONS);
};

/**
 * Get all divisions as array
 * @returns {Array<Object>} Array of division objects
 */
export const getAllDivisions = () => {
  return Object.values(DIVISIONS);
};
