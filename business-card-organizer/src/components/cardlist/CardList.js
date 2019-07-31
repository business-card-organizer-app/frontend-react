import React from 'react';
import SmallCardCreator from './SmallCardCreator';

import styled from 'styled-components';

const StyledCardList = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
`;

export default function CardList(props) {
  const { cardcollection } = props;
  console.log(props);

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
            tagline={card.tagline}
            qr_code={card.qr_code}
          />
        );
      })}
    </StyledCardList>
  );
}
