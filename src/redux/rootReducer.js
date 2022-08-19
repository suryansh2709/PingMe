import {combineReducers} from 'redux';
import {userDataReducer} from './auth/reducer';

const rootReducer = combineReducers({userDataReducer});
export {rootReducer};
