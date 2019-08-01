import { connect } from 'react-redux';
import {
  getUser,
  getCard,
  getCardCollection,
  addCardCollection
} from '../../actions';
import { Dashboard } from '../../components/dashboard';

const mapStateToProps = ({
  userReducer,
  cardReducer,
  collectionReducer,
  authReducer
}) => ({
  userGetError: userReducer.error,
  cardGetError: cardReducer.error,
  gettingCard: cardReducer.gettingCard,
  gettingUser: userReducer.gettingUser,
  userId: authReducer.userId,
  cardId: cardReducer.cardId,
  user: userReducer.user,
  card: cardReducer.card,
  collection: collectionReducer.collection,
  gettingCollection: collectionReducer.gettingCardCollection
});

export default connect(
  mapStateToProps,
  { getUser, getCard, getCardCollection, addCardCollection }
)(Dashboard);
