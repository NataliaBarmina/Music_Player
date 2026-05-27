// import { Route } from '@/app/routes/playlists.$playlistId.addCover';
import { FormButton } from '@/shared/ui/buttons/form-button';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CoverPreview } from './cover-preview';
import { CoverPlaceholder } from './cover-placeholder';
import {
  containerStyle,
  coverPreviewWrapperStyle,
  coverFrameStyle,
  actionsContainerStyle,
} from './styles';

export const AddCover = () => {
  const { t } = useTranslation();

  // const { playlistId } = Route.useParams();
  const isSubmitting = false;

  const [selectedCover, setSelectedCover] = useState(false);

  return (
    <div className={containerStyle}>
      <h1>{t('cover.addCover')}</h1>

      <div className={coverPreviewWrapperStyle}>
        <div className={coverFrameStyle}>
          {selectedCover ? <CoverPreview /> : <CoverPlaceholder />}
        </div>
      </div>

      <div className={actionsContainerStyle}>
        <button type="button" className="button" onClick={() => setSelectedCover(true)}>
          {t('button.chooseCover')}
        </button>
        <FormButton isSubmitting={isSubmitting} />
      </div>
    </div>
  );
};
