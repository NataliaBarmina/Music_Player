import { useGetPlaylists } from '@/widgets/music-genre-list/use-get-playlist';
import { Route } from '@/app/routes/edit-play-list-form.$playlistId';
import { useMeQuery } from '@/features/auth/api/use-me-query';

export const getPlayListTitle = () => {
  const { data } = useMeQuery();
  const { playlistId } = Route.useParams();

  const { playlists } = useGetPlaylists(data?.userId!);
  const playlist = playlists.find((playlist) => playlist.id === playlistId);

  return { playlistTitle: playlist?.attributes.title, playlistId };
};
