import { EditPlaylistIcon } from '@/shared/ui/icons';
import { useNavigate } from '@tanstack/react-router';

export const EditPlaylist = ({ playlistId }: { playlistId: string }) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() =>
        navigate({
          to: '/playlists/$playlistId/edit',
          params: {
            playlistId,
          },
        })
      }
    >
      <EditPlaylistIcon />
    </button>
  );
};
