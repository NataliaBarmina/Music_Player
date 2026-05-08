import { createFileRoute } from '@tanstack/react-router';
import { TracksList } from '@/pages/public-tracks-page';

export const Route = createFileRoute('/')({
  component: TracksList,
});
