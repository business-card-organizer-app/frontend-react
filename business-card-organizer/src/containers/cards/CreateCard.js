import { connect } from 'react-redux';
import { addCard } from '../../actions';
import { CreateCard } from '../../components/cards';

const mapStateToProps = ({ cardReducer }) => ({
  error: cardReducer.error,
  userId: cardReducer.userId,
  addingCard: cardReducer.addingCard
});

export default connect(
  mapStateToProps,
  { addCard }
)(CreateCard);
