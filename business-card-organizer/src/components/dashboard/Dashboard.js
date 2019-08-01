import React, { useState, useEffect } from 'react';

import { UserCard } from '../../containers/cards';
import EventShortList from '../events/EventShortList';
import CollectionList from '../CollectionList';
import { CardShortList } from '../cardlist';
import NavBar from '../NavBar/NavBar';

import styled from 'styled-components';

const StyledDashboardContainer = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
`;

export default function Dashboard(props) {
  const [cardCollection, setCardCollection] = useState([]);
  const [userEvents, setUserEvents] = useState([]);

  useEffect(() => {
    props.getCardCollection(props.userId);
  }, []);

  useEffect(() => {
    setCardCollection([...props.collection]);
  }, [props.collection]);

  return (
    <StyledDashboardContainer>
      <UserCard id={props.userId} />
      <div className='list-container'>
        {/* <EventShortList userevents={userevents} /> */}
        <CardShortList cardcollection={cardCollection} />
        <button
          onClick={() =>
            props.addCardCollection(props.userId, { card_id: 1, event_id: 1 })
          }
        >
          Press
        </button>
      </div>
    </StyledDashboardContainer>
  );
}
