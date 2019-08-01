import { connect } from 'react-redux';
import {
  getCard,
  getUser,
  addCardCollection,
  getUserEvents
} from '../../actions';
import { UserCard } from '../../components/cards';

const mapStateToProps = ({
  cardReducer,
  userReducer,
  authReducer,
  eventReducer
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
  events: eventReducer.eventsForUser
});

export default connect(
  mapStateToProps,
  { getCard, getUser, addCardCollection, getUserEvents }
)(UserCard);
