import { createFileRoute } from '@tanstack/react-router';
import { PlayListPage } from '@/pages/playlist';

export const Route = createFileRoute('/my-playlist-page')({
  component: PlayListPage,
});
