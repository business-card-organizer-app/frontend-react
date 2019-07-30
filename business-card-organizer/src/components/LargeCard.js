import React from 'react';
import { Card } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const editButton = (<Button onClick={<Redirect to='/INSERT EDIT URL HERE' />}>Edit</Button>)

const LargeCard = (props) => {

}
return (<div><Card header={props.first_name + props.last_name} meta={props.occupation} meta={props.phone} meta={props.email} description={props.tagline} image={props.qr_code} extra={editButton} />
</div>)
export default LargeCard;