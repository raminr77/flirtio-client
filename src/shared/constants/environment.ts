export const ENV = import.meta.env || {};

export const ENV_DATA = {
  NAME: ENV.VITE_APP_NAME || 'FLIRTIO',
  VERSION: ENV.VITE_APP_VERSION || '0.0.1',
  BASE_URL: ENV.VITE_API_BASE_URL || 'http://localhost:8000'
};
