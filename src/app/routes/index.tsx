import { createFileRoute } from '@tanstack/react-router';
import { TracksList } from '@/pages/public-tracks';

export const Route = createFileRoute('/')({
  component: TracksList,
});
