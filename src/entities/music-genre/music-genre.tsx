import { PlaylistActions } from '@/widgets/playlist-actions/playlist-actions';
import type { TMusicGenreItem } from './types';
import { containerStyle, numberStyle, playlistTitleStyle } from './styles';

export const MusicGenreItem = ({ title, position, playlistId }: TMusicGenreItem) => {
  return (
    <div className={containerStyle}>
      <div className={numberStyle}>{position}</div>
      <div className={playlistTitleStyle}>
        <span>{title}</span>
      </div>
      <PlaylistActions playlistId={playlistId} />
    </div>
  );
};
// /10
