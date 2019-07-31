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
      <h1>EventList:</h1>
      {/* Currently set up as a dashboard component. Need to re-name and render the full component onClick of see al */}

      {userEventsList.map((e, i) =>
        i < 3 ? <EventCard key={e.id} {...e} props={e} /> : null
      )}
      <button>See all</button>
    </div>
  );
};

export default EventList;
