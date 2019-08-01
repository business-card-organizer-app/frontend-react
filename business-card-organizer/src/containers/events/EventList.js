import { connect } from 'react-redux';
import { getUserEvents, addEvent, getCardCollection } from '../../actions';
import { EventList } from '../../components/events';

const mapStateToProps = ({ eventReducer, collectionReducer }) => ({
  error: eventReducer.error,
  userId: eventReducer.userId,
  gettingUserEvents: eventReducer.editingUser,
  eventsForUser: eventReducer.eventsForUser,
  collection: collectionReducer.collection
});

export default connect(
  mapStateToProps,
  { getUserEvents, addEvent, getCardCollection }
)(EventList);
