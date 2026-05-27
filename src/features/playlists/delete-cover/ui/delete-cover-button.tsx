import { DeleteCoverIcon } from '@/shared/ui/icons';
import { useDeleteCoverMutation } from '../api/use-delete-cover-mutation';

export const DeleteCoverButton = ({ playlistId }: { playlistId: string }) => {
  const { mutate, isPending } = useDeleteCoverMutation();

  const handleDeletePlaylist = () => {
    mutate(playlistId);
  };

  return (
    <button type="button" disabled={isPending} onClick={handleDeletePlaylist} className="icon">
      <DeleteCoverIcon />
    </button>
  );
};
