import { connect } from 'react-redux';
import { addCard, getCard, editCard, editImage } from '../../actions';
import { CreateCard } from '../../components/cards';

const mapStateToProps = ({ cardReducer, authReducer, userReducer }) => ({
  error: cardReducer.error,
  userId: cardReducer.userId,
  addingCard: cardReducer.addingCard,
  editingCard: cardReducer.editingCard,
  card: cardReducer.card,
  loggedInUserId: authReducer.userId,
  editingUserImage: userReducer.editingUserImage
});

export default connect(
  mapStateToProps,
  { addCard, getCard, editCard, editImage }
)(CreateCard);
