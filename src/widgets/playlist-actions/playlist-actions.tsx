import { ReorderPlaylistIcon, DeleteCoverIcon, AddCoverIcon } from '@/shared/ui/icons';
import { DeletePlaylist } from '@/features/playlists/delete-playlist/delete-playlist';
import { EditPlaylist } from '@/features/playlists/edit-playlist/edit-playlist';

export const PlaylistActions = ({ playlistId }: { playlistId: string }) => {
  return (
    <div className=" w-[50%] flex justify-evenly items-center">
      {}
      <DeletePlaylist playlistId={playlistId} />
      <EditPlaylist playlistId={playlistId} />

      <ReorderPlaylistIcon />

      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

      <AddCoverIcon />
      <DeleteCoverIcon />
    </div>
  );
};
