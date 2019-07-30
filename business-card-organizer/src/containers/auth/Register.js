import { connect } from 'react-redux';
import { register } from '../../actions';
import { Register } from '../../components/auth';

const mapStateToProps = ({ error, registeringUser }) => ({
  error,
  registeringUser
});

export default connect(
  mapStateToProps,
  { register }
)(Register);
