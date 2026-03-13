import { useTranslation } from 'react-i18next';
import { h2Styles } from '@/pages/dashboard';
import {
  buttonStyle,
  trackTitleStyles,
  audioStyles,
  selectTrackStyle,
  tracksStyles,
} from './styles';
import { useNavigate } from 'react-router-dom';
import type { TTracksList } from './tracksListRoute';

export const TracksList = ({ selectedTrackId, tracks, setSelectedTrackId }: TTracksList) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h2 className={h2Styles}>{t('header.tracksList')}</h2>
        <button
          className={buttonStyle}
          onClick={() => {
            setSelectedTrackId(null);
          }}
        >
          {t('button.resetSelection')}
        </button>
        <ul className="text-center">
          {tracks.map((track) => (
            <div
              key={track.id}
              className={`${track.id === selectedTrackId ? selectTrackStyle : tracksStyles}`}
              onClick={() => {
                setSelectedTrackId(track.id);
                navigate('/selectedTrackDetail');
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
