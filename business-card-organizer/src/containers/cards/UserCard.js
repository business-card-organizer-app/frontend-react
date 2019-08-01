import { connect } from 'react-redux';
import { getCard, getUser } from '../../actions';
import { UserCard } from '../../components/cards';

const mapStateToProps = ({ cardReducer, userReducer }) => ({
  cardGetError: cardReducer.error,
  userGetError: userReducer.error,
  gettingCard: cardReducer.editingUser,
  gettingUser: userReducer.gettingUser,
  userId: userReducer.userId,
  cardId: cardReducer.cardId,
  card: cardReducer.card,
  user: userReducer.user
});

export default connect(
  mapStateToProps,
  { getCard, getUser }
)(UserCard);
