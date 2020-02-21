import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";

export const getData = () => dispatch => {
    dispatch({type: FETCH_DATA});

    //get request to send a request to pull data from server to update our state
    axios
        .get("http://localhost:3333/smurfs")
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error);
        })
}