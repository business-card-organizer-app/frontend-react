import { connect } from 'react-redux';
import { login } from '../../actions';
import { Login } from '../../components/auth';

const mapStateToProps = ({ authReducer }) => ({
  error: authReducer.error,
  loggingIn: authReducer.loggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
