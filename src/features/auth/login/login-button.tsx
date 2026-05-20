import { useOAuthLogin } from './internal';
import { useTranslation } from 'react-i18next';

export const LoginButton = () => {
  const { t } = useTranslation();

  const { handleLogicClick } = useOAuthLogin();

  return (
    <div className="text-right">
      <button className="button-primary" onClick={handleLogicClick}>
        {t('button.login')}
      </button>
    </div>
  );
};
