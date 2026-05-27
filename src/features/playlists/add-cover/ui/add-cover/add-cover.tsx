import { Route } from '@/app/routes/playlists.$playlistId.addCover';
import { FormButton } from '@/shared/ui/buttons/form-button';
import { useTranslation } from 'react-i18next';
import { CoverPreview } from './cover-preview';
import { CoverPlaceholder } from './cover-placeholder';
import { useSelectedCover } from './use-selected-cover';
import {
  containerStyle,
  coverPreviewWrapperStyle,
  coverFrameStyle,
  actionsContainerStyle,
} from './styles';
import { useAddCoverMutation } from '../../api/use-add-cover-mutation';
import { useNavigate } from '@tanstack/react-router';

export const AddCover = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { playlistId } = Route.useParams();

  const { selectedCover, fileInputRef, selectedFile, handleCoverChange } = useSelectedCover();

  const { mutateAsync, isPending } = useAddCoverMutation(playlistId);

  const handleSubmit = async () => {
    if (!selectedFile || isPending) return;

    await mutateAsync(selectedFile);

    navigate({ to: '/playlist' });
  };

  return (
    <div className={containerStyle}>
      <h1>{t('cover.addCover')}</h1>

      <div className={coverPreviewWrapperStyle}>
        <div className={coverFrameStyle}>
          {selectedCover ? <CoverPreview selectedCover={selectedCover} /> : <CoverPlaceholder />}
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleCoverChange}
        className="hidden"
      />

      <div className={actionsContainerStyle}>
        <button type="button" className="button" onClick={() => fileInputRef.current?.click()}>
          {t('button.chooseCover')}
        </button>

        <FormButton isSubmitting={isPending} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};
