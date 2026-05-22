import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useAddPlaylistMutation } from '../api/use-add-playlist-mutation';
import type { SchemaCreatePlaylistRequestPayload } from '@/shared/api/client/schema';
import { FieldError } from '@/shared/ui/errors/fieldError';
import { FormButton } from '@/shared/ui/buttons/form-button';
import { useNavigate } from '@tanstack/react-router';

export const AddPlayList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SchemaCreatePlaylistRequestPayload>({
    defaultValues: {
      data: {
        type: 'playlists',
        attributes: {
          title: '',
          description: '',
        },
      },
    },
  });

  const { mutateAsync } = useAddPlaylistMutation();

  const onSubmit = async (data: SchemaCreatePlaylistRequestPayload) => {
    try {
      await mutateAsync(data);

      navigate({ to: '/playlist' });
    } catch (error) {
      console.warn(error);

      setError('root.server', {
        type: 'server',
        message: t('form.createError'),
      });
    }
  };
  const titleError = errors.data?.attributes?.title;
  const serverError = errors.root?.server;

  return (
    <div className="w-full">
      <h1>{t('playlists.addPlayList')}</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto text-center">
        <input
          placeholder={t('form.titlePlaceholder')}
          {...register('data.attributes.title', {
            required: t('form.titleRequired'),
          })}
          className="input mb-10"
        />
        {titleError && <FieldError message={titleError.message} />}
        {serverError && <FieldError message={serverError.message} />}

        <FormButton isSubmitting={isSubmitting} />
      </form>
    </div>
  );
};
