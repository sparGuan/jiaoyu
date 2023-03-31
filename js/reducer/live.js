'use strict';

const initialState = {
    data: {},
    error: '',
}

export default function LiveReducer(state = initialState, action) {
    switch ( action.type ) {
        case 'USER_LIVE':
            return { ...state
            };
        
        default:
            return state;
    }
}
