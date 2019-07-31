import { connect } from 'react-redux';
import { getUser } from '../../actions';
import LargeCard from '../../components/LargeCard';

const mapStateToProps = ({ userReducer }) => ({
  error: userReducer.error,
  gettingUser: userReducer.editingUser,
  userId: userReducer.userId,
  user: userReducer.user
});

export default connect(
  mapStateToProps,
  { getUser }
)(LargeCard);
