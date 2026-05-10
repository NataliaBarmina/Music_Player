import { PlaylistActions } from '@/features/playlists/playlist-actions/playlist-actions';
import type { TMusicGenreItem } from './types';
import { containerStyle, playlistStyle, playlistTitleStyle } from './styles';

export const MusicGenreItem = ({ title, position }: TMusicGenreItem) => {
  return (
    <div className={containerStyle}>
      <div className={playlistStyle}>{position}</div>
      <div className={playlistTitleStyle}>
        <span>{title}</span>
      </div>
      <PlaylistActions />
    </div>
  );
};
// /10
