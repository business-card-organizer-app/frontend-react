import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import EventCard from './EventCard';

const StyledDiv = styled.div`
  max-width: 375px;
  margin: 0 auto;
  @media (min-width: 375px) {
    width: 100%;
  }
  @media (min-width: 767px) {
    max-width: 767px;
  }
`;

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
    <StyledDiv>
      <h1>[{props.eventsForUser.length}] Events:</h1>

      {userEventsList.map(e => (
        <EventCard
          key={e.id}
          {...e}
          props={e}
          cardCollection={cardCollection}
        />
      ))}
    </StyledDiv>
  );
};

export default EventList;
