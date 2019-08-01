import React, { useState, useEffect } from 'react';

import { CardList } from './components/cardlist';
import { UserCard, CreateCard } from './containers/cards';
import { EventList } from './containers/events';
import { Route, Switch } from 'react-router-dom';

import { PrivateRoute } from './helpers';

import { Login, Register } from './containers/auth';
import './App.css';
import { ProfileCard } from './containers/profile';
import { EditUser } from './containers/edit';
import { AddEvent } from './containers/events';
import { Dashboard } from './containers/dashboard';
import NavBar from './components/NavBar/NavBar';

const wat = () => {
  return <h1>lol</h1>;
};

const NotFound = props => {
  return <h1>404!!!</h1>;
};

function App() {
  const [cards, setCards] = useState([
    {
      first_name: 'Levi',
      last_name: 'Thomas',
      occupation: 'WebDev',
      phone: '555-5555',
      email: 'levi@levithomas.dev',
      tagline: 'YEET',
      qr_code: '#'
    },
    {
      first_name: 'Levi',
      last_name: 'Thomas',
      occupation: 'WebDev',
      phone: '555-5555',
      email: 'levi@levithomas.dev',
      tagline: 'YEET',
      qr_code: '#'
    }
  ]);

  return (
    <div className='App'>
      {/* <NavBar /> */}
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <PrivateRoute
          exact
          path='/cards'
          render={props => <CardList {...props} cardcollection={cards} />}
        />
        <PrivateRoute exact path='/profile' component={UserCard} />
        <PrivateRoute exact path='/profile/edit' component={EditUser} />
        <PrivateRoute exact path='/profile/:id' component={UserCard} />
        <PrivateRoute exact path='/events' component={EventList} />
        <PrivateRoute exact path='/events/add' component={AddEvent} />
        <PrivateRoute exact path='/card' component={UserCard} />
        <PrivateRoute exact path='/card/add' component={CreateCard} />
        <PrivateRoute exact path='/card/edit' component={CreateCard} />
        <PrivateRoute exact path='/card/:id' component={UserCard} />
        <PrivateRoute exact path='/' component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
