import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './navigation';

const MainLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default MainLayout;
