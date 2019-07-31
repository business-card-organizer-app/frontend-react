import React from 'react';

import LargeCard from './LargeCard';
import EventShortList from './EventShortList';
import CollectionShortList from './CollectionShortList';

import styled from 'styled-components';

const StyledDashboardContainer = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
`;

export default function Dashboard (props) {

   const { activeuser, userevents, cardcollection } = props;

    return(
        <StyledDashboardContainer>
            <LargeCard
            first_name={activeuser.first_name}
            last_name={activeuser.last_name}
            occupation={activeuser.occupation}
            phone={activeuser.phone}
            email={activeuser.email}
            tagline={activeuser.tagline}
            qr_code={activeuser.qr_code} />
            <div className="list-container">
                <EventShortList userevents={userevents} />
                <CollectionShortList cardcollection={cardcollection} />
            </div>
        </StyledDashboardContainer>
    )
}