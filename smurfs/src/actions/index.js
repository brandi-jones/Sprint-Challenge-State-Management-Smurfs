import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_CHARACTERS = "UPDATE_CHARACTERS";
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch => {
    dispatch({type: FETCH_DATA});

    //get request to send a request to pull data from server to update our state
    axios
        .get("http://localhost:3333/smurfs")
        .then(response => {
            console.log(response)
            dispatch({type: UPDATE_CHARACTERS, payload: response.data})
        })
        .catch(error => {
            console.log(error);
            dispatch({type: SET_ERROR, payload: "Error fetching smurfs!"})
        })
}