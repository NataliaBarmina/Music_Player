import { createFileRoute } from '@tanstack/react-router';
import { OAuthCallbackPage } from '@/features/auth/login/ui/oauth-callback-page';

export const Route = createFileRoute('/oauth-callback')({
  component: OAuthCallbackPage,
});
