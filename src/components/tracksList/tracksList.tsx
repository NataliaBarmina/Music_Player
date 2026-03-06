import { useTranslation } from 'react-i18next';
import { h2Styles } from '../dashboard/styles';
import {
  buttonStyle,
  trackTitleStyles,
  audioStyles,
  selectTrackStyle,
  tracksStyles,
} from './styles';
import type { TTracks } from '@common/types';
import { API_BASE_URL, API_HEADERS } from '@common/constants';
import { useEffect } from 'react';
import { SelectedTrackDetail } from '../selectedTrackDetail';

//todo: разобраться с проигрыванием треков, чтобы трек в невыбранном блоке не проигрывался
//todo: разобраться с выделением блока при клике на аудио

//todo- переименовать компоненту - контейнерная, разделить на 2, сделать роутинг и переключаться

type TTracksList = {
  selectedTrackId: number | null;
  tracks: TTracks[];
  selectedTrack: TTracks | null;
  setSelectedTrackId: (id: number | null) => void;
  setSelectedTrack: (track: TTracks | null) => void;
};

export const TracksList = ({
  selectedTrackId,
  tracks,
  setSelectedTrackId,
  setSelectedTrack,
  selectedTrack,
}: TTracksList) => {
  const { t } = useTranslation();

  // const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedTrackId) return;

    fetch(`${API_BASE_URL}/${selectedTrackId}`, {
      headers: API_HEADERS,
    })
      .then((res) => res.json())
      .then((json) => setSelectedTrack(json.data));
  }, [selectedTrackId, setSelectedTrack]);

  // const isEmpty = !selectedTrack;
  // const isLoading = selectedTrack && selectedTrack?.id !== selectedTrackId;
  // const isReady = selectedTrack?.id === selectedTrackId;

  return (
    <div>
      {/* {selectedTrackId && (
        <SelectedTrackDetail
          selectedTrack={selectedTrack}
          isEmpty={!selectedTrack}
          isLoading={selectedTrack && selectedTrack?.id !== selectedTrackId}
          isReady={selectedTrack?.id === selectedTrackId}
        />
      )} */}
      {/* {!selectedTrackId && ( */}
      <div>
        <h2 className={h2Styles}>{t('header.tracksList')}</h2>
        <button
          className={buttonStyle}
          onClick={() => {
            setSelectedTrackId(null);
            setSelectedTrack(null);
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
              }}
            >
              <li>
                <div className={trackTitleStyles}>{track.attributes.title.slice(0, 40)}</div>
                <audio controls src={track.attributes.attachments[0].url} className={audioStyles} />
              </li>
            </div>
          ))}
        </ul>
      </div>
      {/* )} */}
    </div>
  );
};
