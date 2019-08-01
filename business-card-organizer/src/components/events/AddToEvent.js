import React from 'react';
import AddEvent from './AddEvent';
import EventList from './EventList';

import { Segment, Grid, Divider, Header, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
const AddToEvent = (props) => {

    return (<Segment placeholder>
        <Grid columns={2} stackable textAlign='center'>
            <Divider vertical>Or</Divider>

            <Grid.Row verticalAlign='middle'>
                <Grid.Column>
                    <Header icon>
                        <Icon name='add circle' />
                        Add To Event
          </Header>

                    <AddEvent />
                </Grid.Column>

                <Grid.Column>
                    <Header icon>
                        <Icon name='connectdevelop' />
                        Events
          </Header>
                    <EventList userevents={props.userevents} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
    )
}

export default AddToEvent