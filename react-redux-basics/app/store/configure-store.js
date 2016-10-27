import {createStore} from 'redux';
import rootReducer from '../reducers/root-reducer';

export function configureStore(initialState) {
    return createStore(rootReducer, initialState);
}