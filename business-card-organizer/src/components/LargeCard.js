import React from 'react';
import { Card } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const editButton = (<Button onClick={<Redirect to='/INSERT EDIT URL HERE' />}>Edit</Button>)

const LargeCard = (props) => {
    const { activeuser } = props.getActiveUser();
}
return (<div><Card header={activeuser.first_name + activeuser.last_name} meta={activeuser.occupation} meta={activeuser.phone} meta={activeuser.email} description={activeuser.tagline} image={activeuser.qr_code} extra={editButton} />
</div>)
export default LargeCard;