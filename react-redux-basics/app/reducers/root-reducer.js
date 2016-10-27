import {combineReducers} from 'redux';
import donorReducer from './donor-reducer';

const rootReducer = combineReducers({
    donor : donorReducer
});

export default rootReducer;