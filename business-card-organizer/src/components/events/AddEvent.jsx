import React, { useState } from 'react';
import Loader from 'react-loader-spinner';

import { Button, Form, Grid, Message, Icon } from 'semantic-ui-react';
const moment = require('moment');

const AddEvent = props => {
  const [eventInfo, setEventInfo] = useState({
    name_event: '',
    event_date: moment().format('YYYY-MM-DD'),
    event_venue: '',
    event_location: ''
  });

  const handleChange = e => {
    setEventInfo({
      ...eventInfo,
      [e.target.name]: e.target.value
    });
  };

  const addEvent = e => {
    e.preventDefault();
    props
      .addEvent(props.userId, eventInfo)
      .then(() => props.history.push('/events'));
  };

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Message
          attached
          header='Add Event'
          content='Enter event details below'
          size='large'
        />
        <Form onSubmit={addEvent} className='attached fluid segment'>
          <Form.Input
            fluid
            type='text'
            name='name_event'
            placeholder='Event Name'
            value={eventInfo.name_event}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            type='text'
            name='event_venue'
            placeholder='Event Venue'
            value={eventInfo.event_venue}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            type='text'
            name='event_location'
            placeholder='Event Location (San Francisco, New York, etc)'
            value={eventInfo.event_location}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            type='date'
            name='event_date'
            value={eventInfo.event_date}
            onChange={handleChange}
          />
          <Button
            color='green'
            size='large'
            type='submit'
            disabled={
              !(
                eventInfo.event_date &&
                eventInfo.event_location &&
                eventInfo.name_event &&
                eventInfo.event_venue
              )
            }
          >
            {props.addingEvent ? (
              <Loader type='ThreeDots' color='white' height='12' width='26' />
            ) : (
              'Add Event'
            )}
          </Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default AddEvent;
