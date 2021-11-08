import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import { GlobalStyle } from './styles/globalStyle';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    </>
  );
}

export default App;
