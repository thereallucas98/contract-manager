import React from 'react';
import { AuthProvider } from './contexts/auth';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Router } from 'react-router-dom';
import history from './contexts/history';
import Routes from './routes/index';
import './assets/styles/global.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router history={history}>
          <ToastContainer autoClose={3000} />
          <Routes />
        </Router>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
