import { AddPlayListPage } from '@/pages/add-play-list/add-play-list-page';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/add-play-list-page')({
  component: AddPlayListPage,
});
