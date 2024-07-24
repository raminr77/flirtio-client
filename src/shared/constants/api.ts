import { ENV_DATA } from './environment.ts';

export const API_GLOBAL_CONFIG = {
  baseUrl: ENV_DATA.BASE_URL
} as const;

export const API_METHOD = {
  get: 'GET',
  put: 'PUT',
  post: 'POST',
  patch: 'PATCH',
  delete: 'DELETE'
} as const;