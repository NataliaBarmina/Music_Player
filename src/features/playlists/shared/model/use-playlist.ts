import { usePlaylistsQuery } from '@/pages/playlist';
import { useMeQuery } from '@/features/auth';

export const usePlaylists = () => {
  const { data } = useMeQuery();

  const playlists = usePlaylistsQuery(data?.userId);

  return playlists.playlists;
};
