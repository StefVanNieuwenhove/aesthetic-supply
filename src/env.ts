import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    NODE_ENV: z.string().min(1),
    CLERK_SECRET_KEY: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string().min(1).startsWith('/'),
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: z.string().min(1).startsWith('/'),
    NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL: z
      .string()
      .min(1)
      .startsWith('/'),
    NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL: z
      .string()
      .min(1)
      .startsWith('/'),
    NEXT_PUBLIC_CLERK_RESET_PASSWORD_URL: z.string().min(1).startsWith('/'),
    NEXT_PUBLIC_CLERK_RESET_PASSWORD_FORCE_REDIRECT_URL: z
      .string()
      .min(1)
      .startsWith('/'),
    NEXT_PUBLIC_CLERK_FORGOT_PASSWORD_URL: z.string().min(1).startsWith('/'),
    NEXT_PUBLIC_CLERK_FORGOT_PASSWORD_FORCE_REDIRECT_URL: z
      .string()
      .min(1)
      .startsWith('/'),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
    NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL:
      process.env.NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL,
    NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL:
      process.env.NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL,
    NEXT_PUBLIC_CLERK_RESET_PASSWORD_URL:
      process.env.NEXT_PUBLIC_CLERK_RESET_PASSWORD_URL,
    NEXT_PUBLIC_CLERK_RESET_PASSWORD_FORCE_REDIRECT_URL:
      process.env.NEXT_PUBLIC_CLERK_RESET_PASSWORD_FORCE_REDIRECT_URL,
    NEXT_PUBLIC_CLERK_FORGOT_PASSWORD_URL:
      process.env.NEXT_PUBLIC_CLERK_FORGOT_PASSWORD_URL,
    NEXT_PUBLIC_CLERK_FORGOT_PASSWORD_FORCE_REDIRECT_URL:
      process.env.NEXT_PUBLIC_CLERK_FORGOT_PASSWORD_FORCE_REDIRECT_URL,
  },
});
