import { Switch, Route } from 'react-router-dom';
import React from 'react';
import io from 'socket.io-client';
import Login from './pages/Login';
import { GlobalStyle } from './styles/globalStyle';
import Register from './pages/Register';
import Home from './pages/Home';

const socket = io.connect('http://localhost:3001');

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route
          exact
          path='/'
          render={(props) => <Home {...props} socket={socket} />}
        />
        <Route
          path='/login'
          render={(props) => <Login {...props} socket={socket} />}
        />
        <Route path='/register' component={Register} />
      </Switch>
    </>
  );
}

export default App;
