import { createRootRoute, Outlet } from '@tanstack/react-router';
import { NavPanel } from '@/shared/ui/nav-panel';
import { Header } from '@/shared/ui/header';

const containerStyle = ' flex w-[70%] mx-auto  border-green-950/40 border-r-8 border-b-8';

export const Route = createRootRoute({
  component: () => (
    <div className="w-[99vw]">
      <Header />
      <div className={containerStyle}>
        <NavPanel />
        <Outlet />
      </div>
    </div>
  ),
});
