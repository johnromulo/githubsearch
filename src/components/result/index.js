import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Resul from './Result';
import * as actions from '../../store/actions/gitActions';

const mapStateToProps = state => ({
  store: state.gitReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Resul);
