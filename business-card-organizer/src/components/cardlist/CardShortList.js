import React from 'react';
import SmallCardCreator from './SmallCardCreator';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledCardShortList = styled.div`
    border: 1px solid black;
    max-width: 500px;
    max-height: 500px;
    overflow-y: scroll;
`;

const CardShortList = (props) => {
    const { cardcollection } = props;
    console.log(props);
  
    return (
        <StyledCardShortList>
            <h1>My Cards:</h1>

            {cardcollection.map((card, i) => 
                i < 3 ?
                <SmallCardCreator
                first_name={card.first_name}
                last_name={card.last_name}
                occupation={card.occupation}
                phone={card.phone}
                email={card.email}
                tagline={card.tagline}
                qr_code={card.qr_code}
                />
                : null
            )}

            <Link className='cards-button' to='/cards'>See all</Link>
        </StyledCardShortList>
    )
}

export default CardShortList;