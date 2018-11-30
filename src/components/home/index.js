import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from './Home';
import * as actions from '../../store/actions/gitActions';

const mapStateToProps = state => ({
  user: state.user
});


const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
