import { connect } from 'react-redux';
import { addEvent } from '../../actions';
import { AddEvent } from '../../components/events';

const mapStateToProps = ({ userReducer }) => ({
  error: userReducer.error,
  userId: userReducer.userId,
  gettingUser: userReducer.editingUser
});

export default connect(
  mapStateToProps,
  { addEvent }
)(AddEvent);
