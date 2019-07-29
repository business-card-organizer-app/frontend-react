import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    text-align: left;
    margin: 5px;
    padding: 20px;
    border: 1px solid black;
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
    
    return (
        <StyledDiv>
            <h1>Event:</h1>
            <h1>{props.data[0].event_name}</h1>
            <p>{props.data[0].event_date}</p>
            <p>{props.data[0].event_venue}</p>
            <p>{props.data[0].event_location}</p>
        </StyledDiv>
    )
}

export default EventCard;