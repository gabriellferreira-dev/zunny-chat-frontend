import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import { GlobalStyle } from './styles/globalStyle';
import Register from './pages/Register';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
