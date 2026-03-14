import { useTranslation } from 'react-i18next';
import { trackTitleStyles, audioStyles, tracksStyles } from './styles';
import { useNavigate } from '@tanstack/react-router';

type TTracks = {
  id: string;
  attributes: {
    attachments: { url: string }[];
    title: string;
  };
};

type TTracksList = {
  tracks: TTracks[];
  setSelectedTrackId: (trackId: string | null) => void;
};

export const TracksList = ({ tracks, setSelectedTrackId }: TTracksList) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h1>{t('header.tracksList')}</h1>
        <ul className="text-center">
          {tracks.map((track) => (
            <div
              key={track.id}
              className={tracksStyles}
              onClick={() => {
                setSelectedTrackId(track.id);
                navigate({
                  to: '/tracks/$trackId',
                  params: { trackId: String(track.id) },
                });
              }}
            >
              <li>
                <div className={trackTitleStyles}>{track.attributes.title.slice(0, 40)}</div>
                <audio
                  controls
                  src={track.attributes.attachments[0]?.url}
                  className={audioStyles}
                />
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
