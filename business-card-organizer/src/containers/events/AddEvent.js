import { connect } from 'react-redux';
import { addEvent } from '../../actions';
import { AddEvent } from '../../components/events';

const mapStateToProps = ({ eventReducer }) => ({
  error: eventReducer.error,
  userId: eventReducer.userId,
  addingEvent: eventReducer.editingUser
});

export default connect(
  mapStateToProps,
  { addEvent }
)(AddEvent);
