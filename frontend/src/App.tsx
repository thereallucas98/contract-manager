import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import Routes from './routes/index';
import './assets/styles/global.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <Routes />
    </>
  );
}

export default App;
