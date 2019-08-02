// This is the shortlist for the homepage view.
// This will link to the full EventList at '/events'
// Will need to render as ```<EventShortList {...props} props={props} />```

import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';
import { Link } from 'react-router-dom';

const EventShortList = props => {
  // const [userEventsList, setUserEventsList] = useState([]);
  // const [cardCollection, setCardCollection] = useState([]);

  // useEffect(() => {
  //   props.getUserEvents(props.userId);
  // }, []);

  // useEffect(() => setUserEventsList([...props.eventsForUser]), [
  //   props.eventsForUser
  // ]);

  return (
    <div className='event-short-list'>
      <h1>My Recent Events</h1>

      {props.eventsForUser.map((e, i) =>
        i < 3 ? (
          <EventCard
            key={e.id}
            {...e}
            props={e}
            cardCollection={props.cardCollection}
          />
        ) : null
      )}

      <Link className='event-button' to='/events'>
        See all
      </Link>
    </div>
  );
};

export default EventShortList;
