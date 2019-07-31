import React from 'react';

import CardList from './CardList';

import styled from 'styled-components';

const StyledCollectionList = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export default function CollectionList (props) {
    const { cardcollection } = props;

    return (
        <StyledCollectionList>
            <h1>My Collection:</h1>

            <CardList cardcollection={cardcollection} />
        </StyledCollectionList>
    )
}