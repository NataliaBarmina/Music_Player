import { buttonStyle } from '../styles';
import { useOAuthLogin } from './internal';

export const LoginButton = () => {
  const { handleLogicClick } = useOAuthLogin();

  return (
    <div className="text-right">
      <button className={buttonStyle} onClick={handleLogicClick}>
        login
      </button>
    </div>
  );
};
