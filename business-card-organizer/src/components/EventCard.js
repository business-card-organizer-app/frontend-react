import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const StyledLastPar = styled.p`
    border-bottom: 1px solid black;
    padding: 0 0 10px 0;
`;

const EventCard = (props) => {

    console.log(props)
    
    return (
        <StyledDiv>
            <StyledH>{props.event_name}</StyledH>
            <p>Date: {props.event_date}</p>
            <p>Venue: {props.event_venue}</p>
            <StyledLastPar>Location: {props.event_location}</StyledLastPar>
            <Link to='#' className='event-button'>Cards: ***</Link>
        </StyledDiv>
    )
}

// *** = Need to add a count of the cards collected from the event
// Need to create path for link to display all cards from a particular event

export default EventCard;