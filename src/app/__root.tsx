import { createRootRoute, Outlet } from '@tanstack/react-router';
import { NavPanel } from '@/shared/ui/nav-panel';
import { AccountBar } from '@/pages/auth/account-bar/account-bar';

const containerStyle =
  'flex w-[70%] min-h-[88vh] mx-auto border-green-950/40 border-r-8 border-b-8';

const headerStyle = 'w-[70%] mx-auto h-24 bg-green-950/50  border-green-950/10 border-8';

export const Route = createRootRoute({
  component: () => (
    <div className="w-[99vw] min-h-[99vh] ">
      <div className={headerStyle}>
        <AccountBar />
      </div>
      <div className={containerStyle}>
        <NavPanel />
        <Outlet />
      </div>
    </div>
  ),
});
