import { createFileRoute } from '@tanstack/react-router';
import { OAuthCallbackPage } from '@/features/auth/ui/login/internal/oauth-callback-page';

export const Route = createFileRoute('/oauth-callback')({
  component: OAuthCallbackPage,
});
