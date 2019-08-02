import React from 'react';
import { Link } from 'react-router-dom';

import SmallCardCreator from '../cardlist/SmallCardCreator';
import AddFromEvent from '#';

import styled from 'styled-components';

export default function ProfileViewAdd(props) {
  const { user, activeuser, collectionSetter } = props;

  // Not sure the easiest way here, basically trying to add the user's id
  // to the activeuser's collection and reset the collection state on the app.
  const collectionaddHandler = () => {
    const newcollection = activeuser.collection.map(() => {
      return [...activeuser.collection, user.user_id];
    });
    collectionSetter(newcollection);
  };

  return (
    <div className='profile-container'>
      <SmallCardCreator
        first_name={user.first_name}
        last_name={user.last_name}
        occupation={user.occupation}
        phone={user.phone}
        email={user.email}
        tagline={user.tagline}
        qr_code={user.qr_code}
      />
      <button className='add-collection' onClick={collectionaddHandler}>
        Add to Collection
      </button>
      <Link to='/:id/add-from-event/' render={AddFromEvent}>
        <button className='add-event'>Add from Event</button>
      </Link>
    </div>
  );
}
