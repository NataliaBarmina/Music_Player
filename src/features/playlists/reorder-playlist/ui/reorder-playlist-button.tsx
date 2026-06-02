import { useReorderPlaylistMutation } from '../api/use-reorder-playlist-mutation';
import { ReorderDownIcon, ReorderUpIcon } from '@/shared/ui/icons/playlist-icon';
import type { TReorderPlaylistButton } from '../model/types';
import { getReorderPayload } from '../model/get-reorder-payload';
import { usePlaylists } from '../../shared/model/use-playlist';

export const ReorderPlaylistButton = ({ playlistId, direction }: TReorderPlaylistButton) => {
  const { mutate, isPending } = useReorderPlaylistMutation(playlistId);

  const playlists = usePlaylists();

  const selectedPlaylistIndex = playlists.findIndex((item) => item.id === playlistId);
  if (selectedPlaylistIndex === -1) return;

  const isMovingUp = direction === 'up';
  const isMovingDown = direction === 'down';

  const isDisabled =
    isPending ||
    (isMovingUp && selectedPlaylistIndex === 0) ||
    (isMovingDown && selectedPlaylistIndex === playlists.length - 1);

  const handleReorderPlaylist = () => {
    const payload = getReorderPayload({ isMovingUp, selectedPlaylistIndex, playlists });

    if (!payload) return;

    mutate(payload);
  };

  return (
    <button type="button" disabled={isDisabled} onClick={handleReorderPlaylist} className="icon">
      {isMovingUp ? <ReorderUpIcon /> : <ReorderDownIcon />}
    </button>
  );
};
