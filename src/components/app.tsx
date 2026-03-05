import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div className="w-[99vw]">
      <div className=" flex gap-2 w-[70%] mx-auto">
        <div className="bg-green-950/40 text-center text-2xl w-[40%]">Navpanel</div>
        <Outlet />
      </div>
    </div>
  );
};
