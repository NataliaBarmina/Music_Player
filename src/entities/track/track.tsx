import { useNavigate } from '@tanstack/react-router';
import { trackTitleStyles, tracksStyles, audioStyles } from './styles';
import type { TTrack } from './types';

export const Track = ({ id, title, url }: TTrack) => {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate({
      to: '/tracks/$trackId',
      params: { trackId: id },
    });
  };
  return (
    <>
      <li className={tracksStyles} onClick={() => handleClick(id)}>
        <div className={trackTitleStyles}>{title}</div>

        <audio
          controls
          src={url}
          preload="none"
          className={audioStyles}
          onClick={(event) => event.stopPropagation()}
        />
      </li>
    </>
  );
};
