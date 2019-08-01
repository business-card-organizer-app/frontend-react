import { connect } from 'react-redux';
import {
  getUser,
  getCard,
  getCardCollection,
  addCardCollection,
  getUserEvents
} from '../../actions';
import { Dashboard } from '../../components/dashboard';

const mapStateToProps = ({
  userReducer,
  cardReducer,
  collectionReducer,
  authReducer,
  eventReducer
}) => ({
  userGetError: userReducer.error,
  cardGetError: cardReducer.error,
  eventsGetError: eventReducer.error,
  gettingCard: cardReducer.gettingCard,
  gettingUser: userReducer.gettingUser,
  gettingUserEvents: eventReducer.gettingUserEvents,
  gettingCollection: collectionReducer.gettingCardCollection,
  userId: authReducer.userId,
  cardId: cardReducer.cardId,
  user: userReducer.user,
  card: cardReducer.card,
  collection: collectionReducer.collection,
  eventsForUser: eventReducer.eventsForUser
});

export default connect(
  mapStateToProps,
  { getUser, getCard, getCardCollection, addCardCollection, getUserEvents }
)(Dashboard);
