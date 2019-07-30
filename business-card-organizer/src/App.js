import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PrivateRoute } from './helpers';

import { Login, Register } from './containers/auth';
import './App.css';

const Home = () => {
  return <h1>lol</h1>;
};

const NotFound = props => {
  return <h1>404!!!</h1>;
};

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <PrivateRoute exact path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
