import { connect } from 'react-redux';
import { register } from '../../actions';
import { Register } from '../../components/auth';

const mapStateToProps = ({ authReducer }) => ({
  error: authReducer.error,
  registeringUser: authReducer.registeringUser
});

export default connect(
  mapStateToProps,
  { register }
)(Register);
