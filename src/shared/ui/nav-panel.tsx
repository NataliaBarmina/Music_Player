import { Link } from '@tanstack/react-router';

const containerStyle =
  'bg-green-950/40  w-[40%] flex flex-col justify-start gap-48 pt-52 items-center ';
const linkStyle = 'hover:text-pink-800  text-pink-900 text-2xl font-bold ';

export const NavPanel = () => {
  return (
    <>
      <div className={containerStyle}>
        <Link className={linkStyle} to="/">
          СПИСОК ТРЕКОВ
        </Link>
        <Link className={linkStyle} to="/my-playlist-page">
          МОИ ПЛЕЙЛИСТЫ
        </Link>
      </div>
    </>
  );
};
