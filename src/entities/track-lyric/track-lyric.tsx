import { lyricContentStyle, lyricHeaderStyle } from './styles';
import type { TTrackLyrics } from './types';

export const TrackLyrics = ({ title, lyrics, lyricsTitle }: TTrackLyrics) => {
  return (
    <div>
      <h2>{title}</h2>
      <h3 className={lyricHeaderStyle}>{lyricsTitle}</h3>
      <div className={lyricContentStyle}>{lyrics}</div>
    </div>
  );
};
