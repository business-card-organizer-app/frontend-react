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

const EventCard = () => {
    const props = {
        "status": 201,
        "data": [
            {
                "event_name": "Lambda Build Week",
                "event_date": "22/8/2019",
                "event_venue" : "Zoom",
                "event_location": "Online",
                "user_id" : 2,
            }
        ]
    }

    const consoleFunc = () => {
        return console.log('clicked')
    }
    
    return (
        <StyledDiv>
            <StyledH>{props.data[0].event_name}</StyledH>
            <p>Date: {props.data[0].event_date}</p>
            <p>Venue: {props.data[0].event_venue}</p>
            <StyledLastPar>Location: {props.data[0].event_location}</StyledLastPar>
            <StyledButtonPar>Cards: ***</StyledButtonPar>
        </StyledDiv>
    )
}

// *** = Need to add a count of the cards collected from the event

export default EventCard;