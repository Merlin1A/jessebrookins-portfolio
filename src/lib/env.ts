/**
 * Type-safe environment variable access.
 * Throws in production if required variables are missing.
 */
const getEnvVar = (key: string, required = true): string => {
  const value = process.env[key];
  if (required && !value) {
    if (process.env.NODE_ENV === 'production') {
      throw new Error(`Missing required environment variable: ${key}`);
    }
    console.warn(`Warning: Missing environment variable: ${key}`);
  }
  return value ?? '';
};

export const env = {
  supabase: {
    url: getEnvVar('NEXT_PUBLIC_SUPABASE_URL'),
    anonKey: getEnvVar('NEXT_PUBLIC_SUPABASE_ANON_KEY'),
    serviceRoleKey: getEnvVar('SUPABASE_SERVICE_ROLE_KEY', false),
  },
  site: {
    url: getEnvVar('NEXT_PUBLIC_SITE_URL'),
    name: getEnvVar('NEXT_PUBLIC_SITE_NAME'),
  },
  isProduction: process.env.NODE_ENV === 'production',
} as const;
