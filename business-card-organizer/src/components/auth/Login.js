import React, { useState } from 'react';
import Loader from 'react-loader-spinner';

import { Button, Form, Grid, Message, Icon } from 'semantic-ui-react';

const Login = props => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    let from = '/';
    // if (props.location.state) from = props.location.state.from || '/';
    props.login(credentials).then(() => props.history.push(from));
  };

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Message attached header='Welcome Back' size='large' />
        <Form onSubmit={login} className='attached fluid segment'>
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
            disabled={!(credentials.email && credentials.password)}
          >
            {props.loggingIn ? (
              <Loader type='ThreeDots' color='white' height='12' width='26' />
            ) : (
              'Login'
            )}
          </Button>
        </Form>
        <Message attached='bottom' warning>
          <Icon name='help' />
          Don't have an account yet?
          <Button
            size='small'
            style={{ marginLeft: 20 }}
            onClick={() => props.history.push('/register')}
          >
            Join
          </Button>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
