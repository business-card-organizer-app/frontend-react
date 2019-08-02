import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';

import { Button, Form, Grid, Message, Icon } from 'semantic-ui-react';
import ProfilePhotoUpload from '../edit/ProfilePhotoUpload';
const moment = require('moment');

const CreateCard = props => {
  const [cardInfo, setCardInfo] = useState({
    occupation: '',
    phone: '',
    qr_code: ''
  });

  const handleChange = e => {
    let value = e.target.value;
    if (e.target.name === 'phone') value = parseInt(value, 10);
    setCardInfo({
      ...cardInfo,
      [e.target.name]: value
    });
  };

  useEffect(() => {
    props.getCard(props.userId);
  }, []);

  useEffect(() => {
    setCardInfo({
      ...cardInfo,
      ...props.card,
      qr_code: `http://lvh.me/card/${props.userId}` // TODO change to final URL
    });
  }, [props.userId, props.card]);

  const addCard = e => {
    e.preventDefault();
    if (!props.card || !props.card.phone) {
      props
        .addCard(props.userId, cardInfo)
        .then(() => props.history.push(`${props.userId}`));
    } else {
      props
        // .editCard(props.userId, { ...cardInfo, qr_code: props.card.qr_code })
        .editCard(props.userId, { ...cardInfo })
        .then(() => props.history.push(`${props.userId}`));
    }
  };

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Message
          attached
          header='Create Card'
          content='Enter your details below'
          size='large'
        />
        <Form onSubmit={addCard} className='attached fluid segment'>
          <Form.Input
            fluid
            type='text'
            name='occupation'
            placeholder='Occupation'
            value={cardInfo.occupation}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            type='tel'
            name='phone'
            placeholder='Phone Number'
            value={cardInfo.phone}
            onChange={handleChange}
          />
          <ProfilePhotoUpload
            editImage={props.editImage}
            id={props.loggedInUserId}
          />
          <Button
            color='green'
            size='large'
            type='submit'
            disabled={!(cardInfo.occupation && cardInfo.phone)}
          >
            {props.addingCard ? (
              <Loader type='ThreeDots' color='white' height='12' width='26' />
            ) : (
              'Create Card'
            )}
          </Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default CreateCard;
