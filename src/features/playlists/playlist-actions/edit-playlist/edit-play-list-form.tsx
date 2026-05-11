import { useForm } from 'react-hook-form';

type Inputs = {
  exampleRequired: string;
};

export const EditPlayListForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      exampleRequired: 'Моё дефолтное значение',
    },
  });

  // const { mutateAsync } = useUpdatePlaylistMutation();

  // const onSubmit = async (data: SchemaCreatePlaylistRequestPayload) => {
  //   await mutateAsync(data);
  // };

  const onSubmit = (data: Inputs) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto text-center mt-10">
      <h1>Редактирование плейлиста</h1>

      <input {...register('exampleRequired', { required: true })} className="input mb-14 " />

      {errors.exampleRequired && <span>This field is required</span>}

      <button type="submit" className="button">
        отправить
      </button>
    </form>
  );
};
