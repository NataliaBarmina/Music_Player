import { buttonStyle, plusStyle, containerStyle } from './styles';
import { useTranslation } from 'react-i18next';
import { useNavigate } from '@tanstack/react-router';

export const AddPlaylistButton = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate({ to: '/playlists/add' });
  };

  return (
    <li className={containerStyle}>
      <button type="button" className={buttonStyle} onClick={handleClick}>
        <span className={plusStyle}>+</span>
        <span>{t('button.addPlayLists')}</span>
      </button>
    </li>
  );
};
