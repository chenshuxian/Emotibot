import { connect } from 'react-redux';
import HomeLayout from '../../components/HomeLayout';

export default connect(
  (state) => ({
    showSide: state.getIn(['ui', 'showSidebar']),
    miniSide: state.getIn(['ui', 'miniSidebar'])
  }),
  (dispatch) => ({
  })
)(HomeLayout);