import React from 'react';

import SmallCardCreator from '../cardlist/SmallCardCreator';

import styled from 'styled-components';

export default function ProfileViewRemove (props) {
    const { user, activeuser, collectionSetter } = props;

    // Not sure the easiest way here, basically trying to remove the user's id
    // From the activeuser's collection and reset the collection state on the app.
    const removeHandler = () => {
        const newcollection = activeuser.collection.map(
            (id) => id !== user.user_id ? () => {return id} : () => {return null}
        );
        collectionSetter(newcollection);
    }

    return (
        <div className="profile-container">
            <SmallCardCreator
            first_name={user.first_name}
            last_name={user.last_name}
            occupation={user.occupation}
            phone={user.phone}
            email={user.email}
            tagline={user.tagline}
            qr_code={user.qr_code} />
            <button className="remove-collection" onClick={removeHandler}>Remove from Collection</button>
        </div>
    )
}