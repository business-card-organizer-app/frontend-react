import React from 'react';

import SmallCardCreator from '../cardlist/SmallCardCreator';

import styled from 'styled-components';

export default function ProfileViewAdd (props) {
    const { user } = props;

    return (
        <div className="profile-container">
            <SmallCardCreator
            first_name={user.first_name}
            last_name={user.last_name}
            occupation={user.occupation}
            phone={user.phone}
            email={user.email}
            tagline={user.tagline} />
            <button className="add-collection">Add to Collection</button>
            <button className="add-event">Add from Event</button>
        </div>
    )
}