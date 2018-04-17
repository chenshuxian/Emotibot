import { createAction } from 'redux-actions';
import {
    SHOW_SIDEBAR,
    MINI_SIDEBAR,
    SET_SIDEBAR_STATUS,
    CONTROL_TAB
} from '../constants/actionTypes';

export const showSidebar = () => ({ type: SHOW_SIDEBAR});
export const miniSidebar = () => ({ type: MINI_SIDEBAR});
export const setSidebarStatus = () => ({ type: SET_SIDEBAR_STATUS});
export const controlTab = createAction('CONTROL_TAB');
