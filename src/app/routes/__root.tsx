import { createRootRoute, Outlet } from '@tanstack/react-router';
import { NavPanel } from '@/widgets/nav-panel/nav-panel';
import { AccountBar } from '@/widgets/account-bar/account-bar';

export const Route = createRootRoute({
  component: () => (
    <div className="w-[99vw] min-h-[99vh] ">
      <AccountBar />

      <div className="flex w-[70%] min-h-[88vh] mx-auto border-green-950/40 border-r-8 border-b-8">
        <NavPanel />
        <Outlet />
      </div>
    </div>
  ),
});
