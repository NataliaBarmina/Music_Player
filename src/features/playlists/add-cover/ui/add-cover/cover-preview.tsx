import { coverImageStyle } from './styles';
import { useTranslation } from 'react-i18next';

export const CoverPreview = ({ selectedCover }: { selectedCover: string }) => {
  const { t } = useTranslation();

  return <img src={selectedCover} alt={t('cover.coverPreviewAlt')} className={coverImageStyle} />;
};
