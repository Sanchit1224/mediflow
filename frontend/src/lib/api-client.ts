import axios from 'axios';
import { env } from '@/lib/env';

export const apiClient = axios.create({
  baseURL: env.apiBaseUrl,
  timeout: 15_000,
  headers: { Accept: 'application/json' },
});

apiClient.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('mediflow.access-token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  config.headers['X-Request-Id'] = crypto.randomUUID();
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(new Error(error.response?.data?.message ?? 'A network error occurred.')),
);
