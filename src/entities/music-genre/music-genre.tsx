import { PlaylistActions } from '@/features/playlists/playlist-actions';
import type { TMusicGenreItem } from './types';
import { containerStyle, playlistStyle, playlistTitleStyle } from './styles';

export const MusicGenreItem = ({ title, position, playlistId }: TMusicGenreItem) => {
  return (
    <div className={containerStyle}>
      <div className={playlistStyle}>{position}</div>
      <div className={playlistTitleStyle}>
        <span>{title}</span>
      </div>
      <PlaylistActions playlistId={playlistId} />
    </div>
  );
};
// /10
