import { ReorderPlaylistIcon, DeleteCoverIcon } from '@/shared/ui/icons';
import { DeletePlaylistButton } from '@/features/playlists';
import { EditPlaylistButton } from '@/features/playlists';
import { AddCoverButton } from '@/features/playlists';

export const PlaylistActions = ({ playlistId }: { playlistId: string }) => {
  return (
    <div className=" w-[50%] flex justify-evenly items-center">
      {}
      <DeletePlaylistButton playlistId={playlistId} />

      <EditPlaylistButton playlistId={playlistId} />

      <ReorderPlaylistIcon />

      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

      <AddCoverButton playlistId={playlistId} />

      <DeleteCoverIcon />
    </div>
  );
};
