import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const SharedLayout = () => {

  return (
    <Suspense>
      <Outlet />
    </Suspense>
  );
};

export default SharedLayout;
