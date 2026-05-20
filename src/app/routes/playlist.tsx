import { createFileRoute } from '@tanstack/react-router';
import { PlayListPage } from '@/pages/playlist/playlist-page';

export const Route = createFileRoute('/playlist')({
  component: PlayListPage,
});
