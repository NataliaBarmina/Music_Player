import { AddPlayList } from '@/features/playlists';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/playlists/add')({
  component: AddPlayList,
});
