import { Link } from '@tanstack/react-router';

export const NavPanel = () => {
  return (
    <>
      <div className="bg-green-950/40 text-2xl w-[40%] flex flex-col justify-start gap-48 pt-52 items-center">
        <Link to="/">СПИСОК ТРЕКОВ</Link>
        <Link to="/my-playlist-page">МОИ ПЛЕЙЛИСТЫ</Link>
        <Link to="/oauth-callback-page">АВТОРИЗАЦИЯ</Link>
      </div>
    </>
  );
};
