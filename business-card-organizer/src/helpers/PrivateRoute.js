import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, token, error, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        // token && !error ? <Component {...props} /> : <Redirect to='/login' />
        token && !error ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location.pathname }
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = ({ authReducer }) => ({
  error: authReducer.error,
  token: authReducer.token
});

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(PrivateRoute)
);
