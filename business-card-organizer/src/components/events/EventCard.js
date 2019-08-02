import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
background-color: white;
  text-align: center;
  margin: 5px;
  padding: 20px;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  @media (min-width: 767px) {
    margin-top: 15px;
  }
`;

const StyledH = styled.h1`
  text-align: center;
  margin: 0;
`;

const StyledButtonPar = styled.button`
  background-color: #aeaeae;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  width: 30%;
  text-align: center;
  @media (min-width: 767px) {
    width: 20%;
  }
  @media (min-width: 991px) {
    width: 15%;
  }
`;

const StyledLastPar = styled.p`
  border-bottom: 1px solid black;
  padding: 0 0 10px 0;
  @media (min-width: 767px) {
  }
`;

const EventCard = props => {
  console.log('props', props);
  console.log(props.cardCollection);
  return (
    <StyledDiv>
      <StyledH>{props.name_event}</StyledH>
      <p>Date: {props.event_date}</p>
      <p>Venue: {props.event_venue}</p>
      <StyledLastPar>Location: {props.event_location}</StyledLastPar>
      <StyledButtonPar>
        Cards:{' '}
        {
          props.cardCollection.filter(
            card => card.name_event === props.name_event
          ).length
        }
      </StyledButtonPar>
    </StyledDiv>
  );
};

// *** = Need to add a count of the cards collected from the event

export default EventCard;
