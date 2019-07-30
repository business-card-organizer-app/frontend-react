import { connect } from 'react-redux';
import { login } from '../../actions';
import { Login } from '../../components/auth';

const mapStateToProps = ({ error, loggingIn }) => ({
  error,
  loggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
