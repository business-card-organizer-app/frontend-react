import React, { useState, useEffect } from 'react';
import { Card, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const UserCard = props => {
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
    console.log(props.id);
    console.log(handle);
    props.getUser(handle);
    props.getCard(handle);
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

  const editButton = (
    <button onClick={() => props.history.push('/card/edit')}>Edit</button>
  );

  return (
    // <div>
    //   <Card
    //     header={userInfo.first_name + userInfo.last_name}
    //     meta={cardInfo.occupation}
    //     meta={cardInfo.phone}
    //     meta={userInfo.email}
    //     description={cardInfo.tagline}
    //     image={cardInfo.qr_code}
    //     extra={editButton}
    //   />
    // </div>
    <div>
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
        <Card.Content extra>{editButton}</Card.Content>
      </Card>
    </div>
  );
};

export default UserCard;
