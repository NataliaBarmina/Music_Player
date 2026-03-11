import { Outlet } from 'react-router-dom';
import { NavPanel } from '@/components/navPanel';

export const App = () => {
  return (
    <div className="w-[99vw]">
      <div className=" flex w-[70%] mx-auto border-t-8 border-green-950/40 border-r-8 border-b-8">
        <NavPanel />
        <Outlet />
      </div>
    </div>
  );
};
