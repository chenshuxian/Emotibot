import { combineReducers } from 'redux-immutable';
import ui from './ui/uiReducers';

const rootReducer = combineReducers({
    ui
});

export default rootReducer;