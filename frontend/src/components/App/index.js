import { connect } from 'react-redux';
import Container from './Container';

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return {
    isLoggedIn: user.isLoggedIn,
  };
};

export default connect(mapStateToProps)(Container);