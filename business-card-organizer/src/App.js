import React, { useState } from 'react';

import { CardList } from './components/cardlist';
import { EventList } from './containers/events';
import { Route, Switch } from 'react-router-dom';

import { PrivateRoute } from './helpers';

import { Login, Register } from './containers/auth';
import './App.css';
import { ProfileCard } from './containers/profile';
import { EditUser } from './containers/edit';
import { AddEvent } from './containers/events';

const Home = () => {
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
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route
          exact
          path='/cards'
          render={props => <CardList {...props} cardcollection={cards} />}
        />
        <Route exact path='/profile' component={ProfileCard} />
        <Route exact path='/profile/:id' component={ProfileCard} />
        <Route exact path='/profile/edit' component={EditUser} />
        <Route exact path='/events' component={EventList} />
        <Route exact path='/events/add' component={AddEvent} />
        <PrivateRoute exact path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
