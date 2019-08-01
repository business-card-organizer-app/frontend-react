import React, { useState, useEffect } from 'react';

import { UserCard } from '../../containers/cards';
import { EventShortList } from '../../containers/events';
import CollectionList from '../CollectionList';
import { CardShortList } from '../cardlist';
import { Grid } from 'semantic-ui-react';
import NavBar from '../NavBar/NavBar';

import styled from 'styled-components';

const StyledDashboardContainer = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 10px auto;
`;

const ListContainer = styled.div`
  width: 100%;
`;

export default function Dashboard(props) {
  const [cardCollection, setCardCollection] = useState([]);

  useEffect(() => {
    props.getCardCollection(props.userId);
  }, []);

  useEffect(() => {
    setCardCollection([...props.collection]);
  }, [props.collection]);

  return (
    <StyledDashboardContainer>
      <UserCard id={props.userId} />
      <ListContainer>
        <EventShortList />
        <CardShortList cardcollection={cardCollection} />
        <button
          onClick={() =>
            props.addCardCollection(props.userId, { card_id: 1, event_id: 1 })
          }
        >
          Press
        </button>
      </ListContainer>
    </StyledDashboardContainer>
  );
}
