import { connect } from 'react-redux';
import { editUser, getUser } from '../../actions';
import { EditUser } from '../../components/edit';

const mapStateToProps = ({ userReducer }) => ({
  error: userReducer.error,
  gettingUser: userReducer.editingUser,
  userId: userReducer.userId,
  user: userReducer.user
});

export default connect(
  mapStateToProps,
  { getUser, editUser }
)(EditUser);
