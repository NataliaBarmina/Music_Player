import { createFileRoute } from '@tanstack/react-router';
import { SelectedTrackDetail } from '@/pages/selected-track-detail';

export const Route = createFileRoute('/tracks/$trackId')({
  component: SelectedTrackDetail,
});
