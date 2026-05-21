import { usePlaylistsQuery } from '@/pages/playlist';
import { Route } from '@/app/routes/playlists.$playlistId.edit';
import { useMeQuery } from '@/features/auth';

export const getPlayListTitle = () => {
  const { data } = useMeQuery();
  const { playlistId } = Route.useParams();

  const { playlists } = usePlaylistsQuery(data?.userId!);
  const playlist = playlists.find((playlist) => playlist.id === playlistId);

  return { playlistTitle: playlist?.attributes.title, playlistId };
};
