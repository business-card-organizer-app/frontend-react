import React, { useState, useEffect } from 'react';
import { Form, Card, Image, Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const UserCard = props => {
  const [eventsToSelect, setEventsToSelect] = useState([]);
  const [selectedEventId, setSelectedEventId] = useState(0);

  const [userInfo, setUserInfo] = useState({
    first_name: '',
    last_name: '',
    email: ''
  });

  const [cardInfo, setCardInfo] = useState({
    occupation: '',
    phone: '',
    tagline: '',
    qr_code: ''
  });

  useEffect(() => {
    let handle = props.userId;
    if (props.id) handle = props.id;
    else if (props.match) {
      if (props.match.params.id) handle = props.match.params.id;
    }
    props.getUser(handle);
    props.getCard(handle);
    props.getUserEvents(props.loggedInUserId);
  }, []);

  useEffect(() => {
    setUserInfo({
      ...userInfo,
      ...props.user
    });
  }, [props.user]);

  useEffect(() => {
    setCardInfo({
      ...cardInfo,
      ...props.card
    });
  }, [props.card]);

  useEffect(() => {
    const eventsArray = props.events.map(event => {
      return {
        key: event.id,
        text: event.name_event,
        value: event.id
      };
    });
    setEventsToSelect(eventsArray);
    console.log(eventsArray);
  }, [props.events]);

  const editButton = (
    <button onClick={() => props.history.push('/card/edit')}>Edit</button>
  );

  const handleChange = (event, { value }) => {
    console.log(value);
    setSelectedEventId(value);
  };

  const addToCollectionButton = (
    <Form
      onSubmit={() =>
        props.addCardCollection(props.userId, {
          card_id: props.card.id,
          event_id: selectedEventId
        })
      }
    >
      <Dropdown
        placeholder='Select Event'
        onChange={handleChange}
        fluid
        selection
        options={eventsToSelect}
      />
      <button>Add to Collection</button>
    </Form>
  );

  return (
    <Card>
      <Image src={cardInfo.qr_code} wrapped ui={false} />
      <Card.Content>
        <Card.Header>
          {`${userInfo.first_name} ${userInfo.last_name}`}
        </Card.Header>
        <Card.Meta>
          <span className='email'>{userInfo.email}</span>
        </Card.Meta>
        <Card.Meta>
          <span className='tel'>{cardInfo.phone}</span>
        </Card.Meta>
        <Card.Description>{cardInfo.occupation}</Card.Description>
      </Card.Content>

      {props.loggedInUserId === props.userId ? (
        <Card.Content extra> {editButton}</Card.Content>
      ) : (
        <Card.Content extra> {addToCollectionButton}</Card.Content>
      )}
    </Card>
  );
};

export default UserCard;
