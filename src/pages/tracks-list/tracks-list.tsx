import { useTranslation } from 'react-i18next';
import { useNavigate } from '@tanstack/react-router';
import type { TTracksList } from './types';
import { Track } from '@/shared/ui/track';

export const TracksList = ({ tracks, setSelectedTrackId }: TTracksList) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    setSelectedTrackId(id);
    navigate({
      to: '/tracks/$trackId',
      params: { trackId: id },
    });
  };

  return (
    <div>
      <h1>{t('header.tracksList')}</h1>
      <ul className="text-center">
        {tracks.map((track) => (
          <Track
            key={track.id}
            id={track.id}
            title={track.attributes.title.slice(0, 40)}
            url={track.attributes.attachments?.[0]?.url}
            handleClick={handleClick}
          />
        ))}
      </ul>
    </div>
  );
};
