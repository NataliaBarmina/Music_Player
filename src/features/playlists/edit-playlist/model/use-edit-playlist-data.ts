import { Route } from '@/app/routes/playlists.$playlistId.edit';
import { usePlaylists } from '../../shared/model/use-playlist';

export const useEditPlaylistData = () => {
  const { playlists } = usePlaylists();

  const { playlistId } = Route.useParams(); // Id выбранного плейлиста

  const playlist = playlists.find((playlist) => playlist.id === playlistId);

  return { playlistTitle: playlist?.attributes.title, playlistId };
};
