import type { TGetReorderPayload } from './types';

export const getReorderPayload = ({
  isMovingUp,
  selectedPlaylistIndex,
  playlists,
}: TGetReorderPayload) => {
  if (isMovingUp && selectedPlaylistIndex === 1) {
    return {
      putAfterItemId: null,
    };
  }

  const neighborPlaylistIndex = isMovingUp ? selectedPlaylistIndex - 2 : selectedPlaylistIndex + 1;

  const neighborPlaylist = playlists[neighborPlaylistIndex];

  if (!neighborPlaylist) {
    return null;
  }

  return {
    putAfterItemId: neighborPlaylist.id,
  };
};
