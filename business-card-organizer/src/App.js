import React, { useState } from 'react';

import CardList from './components/CardList';
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

  const [cards, setCards] = useState([{"first_name": "Levi", "last_name": "Thomas", "occupation": "WebDev", "phone": "555-5555", "email": "levi@levithomas.dev", "tagline": "YEET", "qr_code": "#"},
{"first_name": "Levi", "last_name": "Thomas", "occupation": "WebDev", "phone": "555-5555", "email": "levi@levithomas.dev", "tagline": "YEET", "qr_code": "#"}])

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/cards' render={cards => <CardList cardcollection={cards} />} />
        <PrivateRoute exact path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
