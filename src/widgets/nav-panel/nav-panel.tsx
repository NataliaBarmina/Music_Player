import { Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

const containerStyle =
  'bg-green-950/40  w-[40%] flex flex-col justify-start gap-48 pt-52 items-center ';

const linkStyle = 'hover:text-pink-800  text-pink-900 text-2xl font-bold ';

export const NavPanel = () => {
  const { t } = useTranslation();

  return (
    <div className={containerStyle}>
      <Link className={linkStyle} to="/">
        {t('navigation.tracksList')}
      </Link>

      <Link className={linkStyle} to="/my-playlist-page">
        {t('navigation.myPlaylists')}
      </Link>

      <Link className={linkStyle} to="/add-play-list-page">
        {t('navigation.addPlayLists')}
      </Link>
    </div>
  );
};
