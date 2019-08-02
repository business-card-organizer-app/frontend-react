import { connect } from 'react-redux';
import {
  getCard,
  getUser,
  getUserEvents,
  getCardCollection
} from '../../actions';
import { CardList } from '../../components/cardlist';

const mapStateToProps = ({
  cardReducer,
  userReducer,
  authReducer,
  eventReducer,
  collectionReducer
}) => ({
  cardGetError: cardReducer.error,
  userGetError: userReducer.error,
  gettingCard: cardReducer.editingUser,
  gettingUser: userReducer.gettingUser,
  userId: userReducer.userId,
  cardId: cardReducer.cardId,
  card: cardReducer.card,
  user: userReducer.user,
  loggedInUserId: authReducer.userId,
  events: eventReducer.eventsForUser,
  cardcollection: collectionReducer.collection
});

export default connect(
  mapStateToProps,
  { getCard, getUser, getUserEvents, getCardCollection }
)(CardList);
