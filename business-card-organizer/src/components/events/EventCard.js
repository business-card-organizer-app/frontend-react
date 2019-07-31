import React from 'react';

import styled from 'styled-components';

const StyledDiv = styled.div`
  text-align: left;
  margin: 5px;
  padding: 20px;
  border: 1px solid black;
`;

const StyledH = styled.h1`
  text-align: center;
  margin: 0;
`;

const StyledButtonPar = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  width: 25%;
  text-align: center;
`;

const StyledLastPar = styled.p`
  border-bottom: 1px solid black;
  padding: 0 0 10px 0;
`;

const EventCard = props => {
  return (
    <StyledDiv>
      <StyledH>{props.event_name}</StyledH>
      <p>Date: {props.event_date}</p>
      <p>Venue: {props.event_venue}</p>
      <StyledLastPar>Location: {props.event_location}</StyledLastPar>
      <StyledButtonPar>Cards: ***</StyledButtonPar>
    </StyledDiv>
  );
};

// *** = Need to add a count of the cards collected from the event

export default EventCard;
