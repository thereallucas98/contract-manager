import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Customers from '../pages/Customers';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

const AuthRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/customers" component={Customers} />
      <Route path="/profile" component={Profile} />
    </BrowserRouter>
  );
}

export default AuthRoutes;