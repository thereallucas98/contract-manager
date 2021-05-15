import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';

const AuthRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/create-account" component={CreateAccount} />
    </BrowserRouter>
  );
}

export default AuthRoutes;