import { useOAuthLogin } from './internal';

export const LoginButton = () => {
  const { handleLogicClick } = useOAuthLogin();

  return (
    <div className="text-right">
      <button className="button-primary" onClick={handleLogicClick}>
        login
      </button>
    </div>
  );
};
