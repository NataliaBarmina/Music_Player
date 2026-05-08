import { createFileRoute } from '@tanstack/react-router';
import { OAuthCallbackPage } from '@/features/auth/login/internal/oauth-callback-page';

export const Route = createFileRoute('/oauth-callback-page')({
  component: OAuthCallbackPage,
});
