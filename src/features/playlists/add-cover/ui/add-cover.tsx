// import { Route } from '@/app/routes/playlists.$playlistId.addCover';
import playlistCover from '@/assets/folk.png';
import { FormButton } from '@/shared/ui/buttons/form-button';
import { useState } from 'react';

export const AddCover = () => {
  // const { playlistId } = Route.useParams();
  const isSubmitting = false;

  const [selectedCover, setSelectedCover] = useState(false);

  return (
    <div className=" w-full text-black text-center">
      <h1>Добавьте обложку к плейлисту</h1>

      <div className="flex justify-center mb-16">
        <div className="relative flex h-96 w-96 items-center justify-center overflow-hidden border-4 border-solid border-green-900/20 rounded-lg">
          {selectedCover ? <img src={playlistCover} alt="#" /> : <DefaultItem />}
        </div>
      </div>

      <div className="flex justify-between w-[50%] mx-auto">
        <button type="button" className="button" onClick={() => setSelectedCover(true)}>
          Выбрать обложку
        </button>
        <FormButton isSubmitting={isSubmitting} />
      </div>
    </div>
  );
};

export const DefaultItem = () => {
  return (
    <>
      <div
        className=" absolute inset-0 bg-cover opacity-20 "
        style={{ backgroundImage: `url(${playlistCover})` }}
      ></div>
      <span className=" relative z-10 font-bold text-xl leading-10 px-4">
        Здесь вы можете посмотреть выбранную обложку
      </span>
    </>
  );
};
