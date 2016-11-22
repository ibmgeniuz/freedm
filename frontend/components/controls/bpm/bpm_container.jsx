import { connect } from 'react-redux';
import Bpm from './bpm';
// Actions
import { updateBpm } from '../../../actions/bpm_actions';

const mapStateToProps = state => ({
  bpms: state.bpm
});

const mapDispatchToProps = dispatch => ({
  updateBpm: (bpm) => dispatch(updateBpm(bpm)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bpm);
