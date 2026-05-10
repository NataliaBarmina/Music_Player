import {
  EditPlaylistIcon,
  DeletePlaylistIcon,
  ReorderPlaylistIcon,
  DeleteCoverIcon,
  AddCoverIcon,
} from '@/shared/ui/icons';

export const PlaylistActions = () => {
  return (
    <div className=" w-[50%] flex justify-evenly items-center ">
      {}
      <DeletePlaylistIcon />
      <EditPlaylistIcon />
      <ReorderPlaylistIcon />

      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

      <AddCoverIcon />
      <DeleteCoverIcon />
    </div>
  );
};
