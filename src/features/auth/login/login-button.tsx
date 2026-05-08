import { useOAuthLogin } from './internal';

export const LoginButton = () => {
  const { handleLogicClick } = useOAuthLogin();

  return (
    <div className="text-right">
      <button className="inline-block  mr-4 mt-2" onClick={handleLogicClick}>
        login
      </button>
    </div>
  );
};
