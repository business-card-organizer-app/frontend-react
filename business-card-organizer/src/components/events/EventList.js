import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';

const EventList = props => {
  const [userEventsList, setUserEventsList] = useState([]);

  useEffect(() => {
    props.getUserEvents(props.userId);
  }, []);

  useEffect(() => setUserEventsList([...props.eventsForUser]), [
    props.eventsForUser
  ]);

  return (
    <div className='event-list'>
      <h1>
        [{props.eventsForUser.length}]
        EventList:
      </h1>

      {userEventsList.map(e =>
        <EventCard key={e.id} {...e} props={e} /> )}
    </div>
  );
};

export default EventList;
