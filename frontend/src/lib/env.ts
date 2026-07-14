const required = (value: string | undefined, name: string): string => {
  if (!value && import.meta.env.PROD) throw new Error(`Missing required environment variable: ${name}`);
  return value ?? '';
};

export const env = {
  appName: import.meta.env.VITE_APP_NAME ?? 'MediFlow',
  environment: import.meta.env.VITE_APP_ENV ?? 'local',
  apiBaseUrl: required(import.meta.env.VITE_API_BASE_URL, 'VITE_API_BASE_URL'),
  webSocketUrl: required(import.meta.env.VITE_WS_URL, 'VITE_WS_URL'),
};
