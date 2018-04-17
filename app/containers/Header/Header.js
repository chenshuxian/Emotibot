import { connect } from 'react-redux';
import Header from '../../components/Header';
import { sideBarControl } from '../../common';

import {
  showSidebar,
  setSidebarStatus 
} from '../../actions';

export default connect(
  (state) => ({
    
  }),
  (dispatch) => ({
    showSide: () => {
      var p = {
          index: "sidebar-lg-show",
          class: ["sidebar-lg-show"]
      };
      sideBarControl(p);
    }
  })
)(Header);