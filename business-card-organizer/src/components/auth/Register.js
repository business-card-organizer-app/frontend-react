import React, { useState } from 'react';
import Loader from 'react-loader-spinner';

import { Button, Form, Grid, Message, Icon } from 'semantic-ui-react';

const Register = props => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: ''
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const register = e => {
    e.preventDefault();
    props.register(credentials).then(() => props.history.push('/login'));
  };

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Message
          attached
          header='Register'
          content='Start using Business Card Organizer today!'
          size='large'
        />
        <Form onSubmit={register} className='attached fluid segment'>
          <Form.Group widths='equal'>
            <Form.Input
              fluid
              type='text'
              name='first_name'
              placeholder='First Name'
              // icon='envelope'
              // iconPosition='left'
              value={credentials.first_name}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              type='text'
              name='last_name'
              placeholder='Last Name'
              // icon='envelope'
              // iconPosition='left'
              value={credentials.last_name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Input
            fluid
            type='email'
            name='email'
            placeholder='Email'
            icon='envelope'
            iconPosition='left'
            value={credentials.email}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            type='password'
            name='password'
            placeholder='Password'
            icon='lock'
            iconPosition='left'
            value={credentials.password}
            onChange={handleChange}
          />
          <Button
            color='green'
            size='large'
            type='submit'
            disabled={
              !(
                credentials.email &&
                credentials.password &&
                credentials.first_name &&
                credentials.last_name
              )
            }
          >
            {props.registeringUser ? (
              <Loader type='ThreeDots' color='white' height='12' width='26' />
            ) : (
              'Register'
            )}
          </Button>
        </Form>
        <Message attached='bottom' warning>
          <Icon name='help' />
          Already have an account?
          <Button
            size='small'
            style={{ marginLeft: 20 }}
            onClick={() => props.history.push('/login')}
          >
            Login
          </Button>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Register;
