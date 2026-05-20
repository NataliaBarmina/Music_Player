import { EditPlayListForm } from '@/features/playlists/edit-playlist/edit-play-list-form';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/playlists/$playlistId/edit')({
  component: EditPlayListForm,
});
