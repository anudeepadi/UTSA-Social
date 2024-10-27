import { initBaseAuth } from '@propelauth/react';

initBaseAuth({
  authUrl: process.env.NEXT_PUBLIC_PROPELAUTH_URL as string,
  // Optional configuration
  enableBackgroundTokenRefresh: true,
});