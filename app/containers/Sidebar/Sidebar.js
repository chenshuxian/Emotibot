import { connect } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import { sideBarControl } from '../../common';

import {
  dbOpen
} from '../../actions';

export default connect(
  (state) => ({
  }),
  (dispatch) => ({
    miniSide: () => {
        var p = {
            index: "brand",
            class: ["brand-minimized","sidebar-minimized"]
        };
        sideBarControl(p);
    },
    onOpen: () => {
        var navDown = event.target.parentElement;
        if (navDown.className.indexOf("open") == "-1") {
            navDown.classList.add("open");
        } else {
            navDown.classList.remove("open");
        }
    }
  })
)(Sidebar);