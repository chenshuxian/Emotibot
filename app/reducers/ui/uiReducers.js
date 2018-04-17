import { handleActions } from 'redux-actions';
import { UiState } from '../../constants/models';

import {
    SHOW_SIDEBAR,
    MINI_SIDEBAR,
    SET_SIDEBAR_STATUS,
    CONTROL_TAB
} from '../../constants/actionTypes';


const uiReducers = handleActions({
    SHOW_SIDEBAR: (state) => (
        state.set(
            'showSidebar',
            !state.get('showSidebar')
        )
    ),
    MINI_SIDEBAR: (state) => (
        state.set(
            'miniSidebar',
            !state.get('miniSidebar')
        )
    ),
    SET_SIDEBAR_STATUS: (state) => {
        var showSide = state.get('showSidebar'),
            miniSide = state.get('miniSidebar'),
            status = sideBarControl(showSide, miniSide);

        return state.set(
            'sidebarStatus',
            status
        )
    },
    CONTROL_TAB: (state, { payload }) => (
        state.set(
            'tabIndex',
            payload.key
        )
    )
}, UiState);

export default uiReducers;
