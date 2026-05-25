import { PlaylistActions } from '@/widgets/playlist-actions/playlist-actions';
import type { TMusicGenreItem } from './types';
import { containerStyle, playlistTitleStyle } from './styles';
import playlistBanner from '@/assets/playlist.png';
import { coverStyle } from './styles';

export const MusicGenreItem = ({ title, playlistId, coverURL }: TMusicGenreItem) => {
  return (
    <div className={containerStyle}>
      <img
        src={playlistBanner || coverURL}
        alt="#"
        className={coverStyle}
        onError={(e) => {
          e.currentTarget.src = playlistBanner;
        }} // если ссылка битая
      />

      <div className={playlistTitleStyle}>
        <span>{title}</span>
      </div>

      <PlaylistActions playlistId={playlistId} />
    </div>
  );
};
