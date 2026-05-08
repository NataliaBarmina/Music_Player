import { createFileRoute } from '@tanstack/react-router';
import { TracksList } from '@/pages/general-tracks-list';

export const Route = createFileRoute('/')({
  component: TracksList,
});
