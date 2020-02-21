import {FETCH_DATA} from '../actions/index';


const initialState = {
    smurfs: [],
    isFetchingData: false,

}

export const reducer = (state= initialState, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true,
            }

        default:
            return state;
    }
};