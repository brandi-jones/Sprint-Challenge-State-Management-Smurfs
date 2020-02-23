import {FETCH_DATA, UPDATE_CHARACTERS, SET_ERROR, POST_DATA} from '../actions/index';


const initialState = {
    smurfs: [],
    isFetchingData: false,
    error: ""
}

export const reducer = (state= initialState, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true,
            };
        case UPDATE_CHARACTERS:
            return {
                ...state,
                isFetchingData: false,
                smurfs: action.payload
            };

        case SET_ERROR: 
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            }

        case POST_DATA:
            return {
                ...state, 
                smurfs: [
                    ...state.smurfs,
                    action.payload
                ]
            }

        default:
            return state;
    }
};