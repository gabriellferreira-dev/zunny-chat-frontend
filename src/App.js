import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import { GlobalStyle } from './styles/globalStyle';
import Register from './pages/Register';

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    </>
  );
}

export default App;
