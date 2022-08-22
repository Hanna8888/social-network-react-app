// actions
import { getMeThunk } from '../auth/actions';

// types
import types from './types';

export function initializedSuccess() {
    return { type: types.INITIALIZED_SUCCESS }
}

export function getInitializeThunk() {
    return async dispatch => {
        await dispatch(getMeThunk());
        dispatch(initializedSuccess());
    }
}