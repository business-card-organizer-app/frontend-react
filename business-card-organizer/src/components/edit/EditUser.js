import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';

import { Button, Form, Grid, Message } from 'semantic-ui-react';

const EditUser = props => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    first_name: '',
    last_name: ''
  });

  useEffect(() => {
    props.getUser(props.userId);
  }, []);

  useEffect(() => {
    setUserInfo({ ...userInfo, ...props.user });
  }, [props.user]);

  const handleChange = e => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };

  const updateUser = e => {
    e.preventDefault();
    props.editUser(props.userId, userInfo).then(() => props.history.push('/'));
  };

  if (!props.user) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <Grid
        textAlign='center'
        style={{ height: '100vh' }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Message
            attached
            header='Update Profile'
            // content='Update User Information'
            size='large'
          />
          <Form onSubmit={updateUser} className='attached fluid segment'>
            <Form.Group widths='equal'>
              <Form.Input
                fluid
                type='text'
                name='first_name'
                placeholder='First Name'
                value={userInfo.first_name}
                onChange={e => handleChange(e)}
              />
              <Form.Input
                fluid
                type='text'
                name='last_name'
                placeholder='Last Name'
                value={userInfo.last_name}
                onChange={e => handleChange(e)}
              />
            </Form.Group>
            <Form.Input
              fluid
              type='email'
              name='email'
              placeholder='Email'
              icon='envelope'
              iconPosition='left'
              value={userInfo.email}
              onChange={e => handleChange(e)}
            />
            <Button
              color='green'
              size='large'
              type='submit'
              disabled={
                !(userInfo.email && userInfo.first_name && userInfo.last_name)
              }
            >
              {props.registeringUser ? (
                <Loader type='ThreeDots' color='white' height='12' width='26' />
              ) : (
                'Register'
              )}
            </Button>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
};

export default EditUser;
