/**
 * Environment Configuration
 * Centralized access to environment variables with validation and defaults
 */

/**
 * Get environment variable with optional default value
 * @param {string} key - Environment variable key (without REACT_APP_ prefix for app vars)
 * @param {string} defaultValue - Default value if not set
 * @returns {string} Environment variable value or default
 */
const getEnvVar = (key, defaultValue = '') => {
  const fullKey = key.startsWith('REACT_APP_') ? key : `REACT_APP_${key}`;
  return process.env[fullKey] || defaultValue;
};

/**
 * EmailJS Configuration
 * Used for contact forms across all divisions
 */
export const emailConfig = {
  serviceId: getEnvVar('EMAILJS_SERVICE_ID', 'your_service_id'),
  templateId: getEnvVar('EMAILJS_TEMPLATE_ID', 'your_template_id'),
  publicKey: getEnvVar('EMAILJS_PUBLIC_KEY', 'your_public_key'),

  /**
   * Check if EmailJS is properly configured
   * @returns {boolean} True if all EmailJS credentials are set
   */
  isConfigured() {
    return (
      this.serviceId !== 'your_service_id' &&
      this.templateId !== 'your_template_id' &&
      this.publicKey !== 'your_public_key'
    );
  },

  /**
   * Get warning message if not configured
   * @returns {string|null} Warning message or null if configured
   */
  getWarning() {
    if (!this.isConfigured()) {
      return 'EmailJS is not configured. Please set REACT_APP_EMAILJS_* environment variables.';
    }
    return null;
  }
};

/**
 * Public URL Configuration
 * Used for asset paths and routing
 */
export const publicUrl = process.env.PUBLIC_URL || '/';

/**
 * App Configuration
 * General application settings
 */
export const appConfig = {
  publicUrl,
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',
};

/**
 * Feature Flags (future use)
 * Enable/disable features based on environment
 */
export const features = {
  analytics: getEnvVar('ENABLE_ANALYTICS', 'false') === 'true',
  chat: getEnvVar('ENABLE_CHAT', 'false') === 'true',
  maintenanceMode: getEnvVar('MAINTENANCE_MODE', 'false') === 'true',
};

/**
 * API Configuration (future use)
 * Uncomment when adding API integration
 */
// export const apiConfig = {
//   baseUrl: getEnvVar('API_BASE_URL', 'https://api.ookroffice.com'),
//   timeout: parseInt(getEnvVar('API_TIMEOUT', '5000'), 10),
// };

/**
 * Firebase Configuration (future use)
 * Uncomment when adding Firebase features
 */
// export const firebaseConfig = {
//   apiKey: getEnvVar('FIREBASE_API_KEY'),
//   authDomain: getEnvVar('FIREBASE_AUTH_DOMAIN'),
//   projectId: getEnvVar('FIREBASE_PROJECT_ID'),
//   storageBucket: getEnvVar('FIREBASE_STORAGE_BUCKET'),
//   messagingSenderId: getEnvVar('FIREBASE_MESSAGING_SENDER_ID'),
//   appId: getEnvVar('FIREBASE_APP_ID'),
// };

/**
 * Development helper to log configuration warnings
 */
if (appConfig.isDevelopment) {
  const warnings = [];

  const emailWarning = emailConfig.getWarning();
  if (emailWarning) {
    warnings.push(emailWarning);
  }

  if (warnings.length > 0) {
    console.warn('⚠️ Configuration Warnings:');
    warnings.forEach(warning => console.warn(`  - ${warning}`));
    console.warn('See .env.example for configuration template');
  }
}

const config = {
  email: emailConfig,
  app: appConfig,
  features,
  publicUrl,
};

export default config;
