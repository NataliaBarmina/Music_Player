import { usePlaylistsQuery } from '@/pages/playlist';
import { useMeQuery } from '@/features/auth';

export const usePlaylists = () => {
  const { data } = useMeQuery();

  return usePlaylistsQuery(data?.userId);
};
