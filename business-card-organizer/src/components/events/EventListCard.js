import React from 'react';

import SmallCardCreator from '../cardlist/SmallCardCreator';

import styled from 'styled-components';

const EventListCard = (props) => {
    const { event, cardcollection } = props;

    return (
        <div>
            <h1>Event: {event.event_name}</h1>
            <h3>Date: {event.event_date}</h3>
            <h3>Location: {event.event_location}</h3>
            <h3>Venue: {event.event_venue}</h3>
            <div className="event-cards">
                {cardcollection.map(card => {
                    card.event_id === event.event_id ? 
                    () => {
                    return (
                    <SmallCardCreator
                        first_name={card.first_name}
                        last_name={card.last_name}
                        occupation={card.occupation}
                        phone={card.phone}
                        email={card.email}
                        tagline={card.tagline}
                        qr_code={card.qr_code} />
                    );} : 
                    () => { return null; }
                })}
            </div>
        </div>
    )
}

export default EventListCard;