import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      {/* <AuthRoutes /> */}
    </BrowserRouter>
  );
}

export default Routes;