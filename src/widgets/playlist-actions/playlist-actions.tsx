import { DeletePlaylistButton } from '@/features/playlists';
import { EditPlaylistButton } from '@/features/playlists';
import { AddCoverButton } from '@/features/playlists';
import { DeleteCoverButton } from '@/features/playlists';
import { ReorderPlaylistButton } from '@/features/playlists';

export const PlaylistActions = ({ playlistId }: { playlistId: string }) => {
  return (
    <div className=" w-[50%] flex justify-evenly items-center">
      {}
      <DeletePlaylistButton playlistId={playlistId} />
      <EditPlaylistButton playlistId={playlistId} />

      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

      <ReorderPlaylistButton playlistId={playlistId} direction={'up'} />
      <ReorderPlaylistButton playlistId={playlistId} direction={'down'} />

      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

      <AddCoverButton playlistId={playlistId} />
      <DeleteCoverButton playlistId={playlistId} />
    </div>
  );
};
