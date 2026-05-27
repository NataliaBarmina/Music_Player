import playlistCover from '@/assets/playlist.png';
import { placeholderBackgroundStyle, textStyle } from './styles';
import { useTranslation } from 'react-i18next';

export const CoverPlaceholder = () => {
  const { t } = useTranslation();

  return (
    <>
      <div
        className={placeholderBackgroundStyle}
        style={{ backgroundImage: `url(${playlistCover})` }}
      />

      <span className={textStyle}>{t('cover.previewPlaceholder')}</span>
    </>
  );
};
