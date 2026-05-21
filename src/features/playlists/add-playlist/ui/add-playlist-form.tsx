import { useForm } from 'react-hook-form';
import { useAddPlaylistMutation } from '../api/use-add-playlist-mutation';
import type { SchemaCreatePlaylistRequestPayload } from '@/shared/api/client/schema';
import { FieldError } from '@/shared/ui/errors/fieldError';
import { useTranslation } from 'react-i18next';
import { FormButton } from '@/shared/ui/buttons/form-button';

export const AddPlayListForm = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
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

      reset();
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
    <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto text-center">
      <input
        placeholder={t('form.titlePlaceholder')}
        {...register('data.attributes.title', {
          required: t('form.titleRequired'),
        })}
        className="input mb-1"
      />
      {titleError && <FieldError message={titleError.message} />}
      {serverError && <FieldError message={serverError.message} />}

      <FormButton isSubmitting={isSubmitting} />
    </form>
  );
};
