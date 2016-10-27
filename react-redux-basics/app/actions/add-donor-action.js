import {actionTypes} from './action-types';

export function addDonorAction(donor) {
    return {
        type : actionTypes.addDonor,
        donor
    };
}