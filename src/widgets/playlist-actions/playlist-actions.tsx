import { ReorderPlaylistIcon, DeleteCoverIcon, AddCoverIcon } from '@/shared/ui/icons';
import { DeletePlaylist } from '@/features/playlists';
import { EditPlaylistButton } from '@/features/playlists';

export const PlaylistActions = ({ playlistId }: { playlistId: string }) => {
  return (
    <div className=" w-[50%] flex justify-evenly items-center">
      {}
      <DeletePlaylist playlistId={playlistId} />
      <EditPlaylistButton playlistId={playlistId} />

      <ReorderPlaylistIcon />

      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

      <AddCoverIcon />
      <DeleteCoverIcon />
    </div>
  );
};
