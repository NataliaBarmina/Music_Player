import { Link } from 'react-router-dom';

export const NavPanel = () => {
  return (
    <>
      <div className="bg-green-950/40 text-2xl w-[40%] flex flex-col justify-around items-center">
        <div>
          <Link to="/">ГЛАВНАЯ СТРАНИЦА</Link>
        </div>
        <div>
          <Link to="/test">TEST</Link>
        </div>
      </div>
    </>
  );
};
