import { AddCoverIcon } from '@/shared/ui/icons';
import { useNavigate } from '@tanstack/react-router';

export const AddCoverButton = ({ playlistId }: { playlistId: string }) => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="icon"
      onClick={() =>
        navigate({
          to: '/playlists/$playlistId/addCover',
          params: {
            playlistId,
          },
        })
      }
    >
      <AddCoverIcon />
    </button>
  );
};
