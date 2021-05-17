import React from 'react';
import { useAuth } from '../contexts/auth';
import { Route, BrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Loading from '../components/Loading';

const AuthRoutes: React.FC = () => {
  const { loading } = useAuth();

  if (loading) {
    return <Loading />
  } else {
    return (
      <BrowserRouter>
        <Route path="/" component={Login} />
      </BrowserRouter>
    );
  }
}

export default AuthRoutes;