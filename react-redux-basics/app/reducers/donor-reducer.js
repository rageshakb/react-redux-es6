import {actionTypes} from '../actions/action-types';

const initialUserState = {
  donors: []
}

export default function donorReducer(state = initialUserState, action) {
    switch(action.type) {
        case actionTypes.addDonor:
            return Object.assign({}, state, {donors : state.donors.concat(action.donor)});
        default:
            return state;
    }
}