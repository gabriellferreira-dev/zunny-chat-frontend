import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import { GlobalStyle } from './styles/globalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
