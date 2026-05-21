import { usePlaylistsQuery } from '@/pages/playlist';
import { Route } from '@/app/routes/playlists.$playlistId.edit';
import { useMeQuery } from '@/features/auth';

export const useEditPlaylistData = () => {
  const { data } = useMeQuery();
  const { playlists } = usePlaylistsQuery(data?.userId!); // нахожу мои плейлисты

  const { playlistId } = Route.useParams(); // Id выбранного плейлиста

  const playlist = playlists.find((playlist) => playlist.id === playlistId);

  return { playlistTitle: playlist?.attributes.title, playlistId };
};
