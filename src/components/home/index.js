import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from './Home';
import * as actions from '../../store/actions/gitActions';

const mapStateToProps = state => ({
  git: state.gitReducer,
});


const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
