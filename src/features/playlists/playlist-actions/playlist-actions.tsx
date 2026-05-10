import {
  EditPlaylistIcon,
  ReorderPlaylistIcon,
  DeleteCoverIcon,
  AddCoverIcon,
} from '@/shared/ui/icons';
import { DeletePlaylist } from './delete-playlist/delete-playlist';

export const PlaylistActions = ({ playlistId }: { playlistId: string }) => {
  return (
    <div className=" w-[50%] flex justify-evenly items-center ">
      {}
      <DeletePlaylist playlistId={playlistId} />

      <EditPlaylistIcon />
      <ReorderPlaylistIcon />

      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

      <AddCoverIcon />
      <DeleteCoverIcon />
    </div>
  );
};
