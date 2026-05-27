import playlistCover from '@/assets/folk.png';
import { coverImageStyle } from './styles';
import { useTranslation } from 'react-i18next';

export const CoverPreview = () => {
  const { t } = useTranslation();

  return <img src={playlistCover} alt={t('cover.coverPreviewAlt')} className={coverImageStyle} />;
};
