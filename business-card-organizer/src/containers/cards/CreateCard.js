import { connect } from 'react-redux';
import { addCard, getCard, editCard } from '../../actions';
import { CreateCard } from '../../components/cards';

const mapStateToProps = ({ cardReducer }) => ({
  error: cardReducer.error,
  userId: cardReducer.userId,
  addingCard: cardReducer.addingCard,
  editingCard: cardReducer.editingCard,
  card: cardReducer.card
});

export default connect(
  mapStateToProps,
  { addCard, getCard, editCard }
)(CreateCard);
