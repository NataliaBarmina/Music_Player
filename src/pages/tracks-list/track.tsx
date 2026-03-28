import { useNavigate } from '@tanstack/react-router';
import { tracksStyles, trackTitleStyles, audioStyles } from '@/pages/tracks-list/styles';
import type { TTrack } from '@/pages/tracks-list/types';

export const Track = ({ id, title, url, setSelectedTrackId }: TTrack) => {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    setSelectedTrackId(id);
    navigate({
      to: '/tracks/$trackId',
      params: { trackId: id },
    });
  };
  return (
    <>
      <li className={tracksStyles} onClick={() => handleClick?.(id)}>
        <div className={trackTitleStyles}>{title}</div>
        <audio controls src={url} className={audioStyles} />
      </li>
    </>
  );
};
