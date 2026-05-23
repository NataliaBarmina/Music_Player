import { useTranslation } from 'react-i18next';
import { FieldError } from '@/shared/ui/errors/fieldError';
import { FormButton } from '@/shared/ui/buttons/form-button';
import { useForm } from 'react-hook-form';
import type { PlaylistFormInputs } from '../types/types';
import type { TPlaylistForm } from '../types/types';

export const PlaylistForm = ({
  pageTitle,
  defaultTitle = '',
  placeholder = '',
  onSubmit,
}: TPlaylistForm) => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<PlaylistFormInputs>({
    defaultValues: {
      playlistTitle: defaultTitle,
    },
  });

  const handleFormSubmit = async (data: PlaylistFormInputs) => {
    try {
      await onSubmit(data);
    } catch (error) {
      console.warn(error);

      setError('root.server', {
        type: 'server',
        message: t('form.createError'),
      });
    }
  };
  const titleError = errors.playlistTitle;
  const serverError = errors.root?.server;

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full mx-auto text-center">
      <h1>{pageTitle}</h1>
      <input
        {...register('playlistTitle', {
          required: t('form.titleRequired'),
        })}
        placeholder={placeholder}
        className="input mb-14"
      />
      {titleError && <FieldError message={titleError.message} />}
      {serverError && <FieldError message={serverError.message} />}

      <FormButton isSubmitting={isSubmitting} />
    </form>
  );
};
