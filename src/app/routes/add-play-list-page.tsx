import { AddPlayListPage } from '@/features/playlists/add-play-list';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/add-play-list-page')({
  component: AddPlayListPage,
});
