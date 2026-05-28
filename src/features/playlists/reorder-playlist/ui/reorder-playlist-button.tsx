import { useReorderPlaylistMutation } from '../api/use-reorder-playlist-mutation';
import { ReorderDownIcon, ReorderUpIcon } from '@/shared/ui/icons/playlist-icon';

export type TReorderPlaylistButton = {
  playlistId: string;
  direction: 'up' | 'down';
};

//todo - получить все плейлисты - usePlaylists
//todo - сюда должен приходить еще и индекс
//todo - в зависимости от того, что приходит в direction меняем находим индекс соседнего компонента
//todo - по индексу находим айдишник соседнего компонента
//todo - найденный айдишник передаем в тело запроса

export const ReorderPlaylistButton = ({ playlistId, direction }: TReorderPlaylistButton) => {
  // const { mutate, isPending } = useReorderPlaylistMutation(playlistId);
  const isPending = false;

  const handleDeletePlaylist = () => {
    // mutate();
    alert(playlistId);
  };

  return (
    <button type="button" disabled={isPending} onClick={handleDeletePlaylist} className="icon">
      {direction === 'down' && <ReorderDownIcon />}
      {direction === 'up' && <ReorderUpIcon />}
    </button>
  );
};
