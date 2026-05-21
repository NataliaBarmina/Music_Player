import { EditPlayListForm } from '@/features/playlists';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/playlists/$playlistId/edit')({
  component: EditPlayListForm,
});
