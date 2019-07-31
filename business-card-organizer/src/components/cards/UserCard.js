import React, { useState, useEffect } from 'react';
import { Card } from 'semantic-ui-react';
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
    if (props.match.params.id) handle = props.match.params.id;
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
    <button onClick={() => props.history.push('/profile/edit')}>Edit</button>
  );

  return (
    <div>
      <Card
        header={userInfo.first_name + userInfo.last_name}
        meta={cardInfo.occupation}
        meta={cardInfo.phone}
        meta={userInfo.email}
        description={cardInfo.tagline}
        image={cardInfo.qr_code}
        extra={editButton}
      />
    </div>
  );
};

export default UserCard;
