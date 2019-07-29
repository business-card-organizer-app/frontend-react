import React from 'react';

const EventCard = (props) => {
    return (
        <div>
            <h1>Event:</h1>
            <h1>{props.event_name}</h1>
            <p>{props.event_date}</p>
            <p>{props.event_venue}</p>
            <p>{props.event_location}</p>
        </div>
    )
}

export default EventCard;