import { connect } from 'react-redux';
import { getUserEvents, addEvent } from '../../actions';
import { EventShortList } from '../../components/events';

const mapStateToProps = ({ eventReducer }) => ({
  error: eventReducer.error,
  userId: eventReducer.userId,
  gettingUserEvents: eventReducer.editingUser,
  eventsForUser: eventReducer.eventsForUser
});

export default connect(
  mapStateToProps,
  { getUserEvents, addEvent }
)(EventShortList);
