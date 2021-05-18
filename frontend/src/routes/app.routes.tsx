import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { useAuth } from '../contexts/auth';
import CreateClient from '../pages/CreateClient';
import Customers from '../pages/Customers';
import Dashboard from '../pages/Dashboard';
import Loading from '../components/Loading';
import Profile from '../pages/Profile';
import CreateContract from '../pages/CreateContract';

const AuthRoutes: React.FC = () => {
  const { loading } = useAuth();
  if (loading) {
    return <Loading />
  } else {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Dashboard} />
        <Route path="/customers" exact component={Customers} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/create-client" exact component={CreateClient} />
        <Route path="/create-contract" exact component={CreateContract} />
      </BrowserRouter>
    );
  }
}

export default AuthRoutes;