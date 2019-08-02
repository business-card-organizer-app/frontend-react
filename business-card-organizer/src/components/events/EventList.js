import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';

const EventList = props => {
  const [userEventsList, setUserEventsList] = useState([]);
  const [cardCollection, setCardCollection] = useState([]);

  useEffect(() => {
    props.getUserEvents(props.userId);
    props.getCardCollection(props.userId);
  }, []);

  useEffect(() => setUserEventsList([...props.eventsForUser]), [
    props.eventsForUser
  ]);

  useEffect(() => setCardCollection([...props.collection]), [props.collection]);

  console.log(props);

  return (
    <div className='event-list'>
      <h1>[{props.eventsForUser.length}] EventList:</h1>

      {userEventsList.map(e => (
        <EventCard
          key={e.id}
          {...e}
          props={e}
          cardCollection={cardCollection}
        />
      ))}
    </div>
  );
};

export default EventList;
