import React, { useState, useEffect } from 'react';

import SmallCardCreator from './SmallCardCreator';

import styled from 'styled-components';

const StyledCardList = styled.div`
  max-width: 375px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media (min-width: 375px) {
    width: 100%;
  }
  @media (min-width: 767px) {
    max-width: 767px;
  }
`;

export default function CardList(props) {
  const [cardcollection, setCardCollection] = useState([]);

  useEffect(() => {
    props.getCardCollection(props.loggedInUserId);
  }, []);

  useEffect(() => {
    setCardCollection([...props.cardcollection]);
  }, [props.cardcollection]);

  return (
    <StyledCardList>
      {cardcollection.map(card => {
        return (
          <SmallCardCreator
            first_name={card.first_name}
            last_name={card.last_name}
            occupation={card.occupation}
            phone={card.phone}
            email={card.email}
            // tagline={card.tagline}
            qr_code={card.qr_code}
          />
        );
      })}
    </StyledCardList>
  );
}
