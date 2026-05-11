import { DeletePlaylistIcon } from '@/shared/ui/icons';
import { useDeletePlaylistMutation } from './use-delete-playlist-mutation';
import { buttonStyle } from '../styles';

export const DeletePlaylist = ({ playlistId }: { playlistId: string }) => {
  const { mutate, isPending } = useDeletePlaylistMutation();

  const handleDeletePlaylist = () => {
    mutate(playlistId);
  };

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={handleDeletePlaylist}
      className={buttonStyle}
    >
      <DeletePlaylistIcon />
    </button>
  );
};
