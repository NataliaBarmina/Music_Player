import { PlaylistActions } from '@/widgets/playlist-actions/playlist-actions';
import type { TMusicGenreItem } from './types';
import { containerStyle, playlistTitleStyle } from './styles';
import playlistBanner from '@/assets/reggae.png';

export const MusicGenreItem = ({ title, playlistId }: TMusicGenreItem) => {
  return (
    <div className={containerStyle}>
      <img src={playlistBanner} alt="#" className="object-contain w-20 mr-4 " />
      <div className={playlistTitleStyle}>
        <span>{title}</span>
      </div>
      <PlaylistActions playlistId={playlistId} />
    </div>
  );
};
