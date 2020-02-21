import React from 'react';
import {connect} from 'react-redux';
import {getData} from '../actions/index';
import NewSmurfForm from './NewSmurfForm';

const SmurfsList = (props) => {

    const handleGetData = event => {
        event.preventDefault();
        props.getData();
    }

    return (
        <div className="SmurfListContainer">
            
            

            {/*while data is fetching*/}
            {props.isFetchingData ? (
                <div> Currently fetching smurfs...</div>
            ) : (

                //if there was an error fetching data, display it. Otherwise, display the array of smurfs
                props.error ? (
                    <div className="error">{props.error}</div>
                ) : (
                    //if the smurfs array state is empty (not yet filled with data from API), then render the "take me to the village" button. 
                    //Otherwise, render nothing.
                    props.smurfs.length === 0 ? (
                        <button onClick={handleGetData}>Take me to the Village</button>
                    ) : (
                        props.smurfs.map(smurf => 
                            <div className="smurfCard">
                                <h4>Name: {smurf.name}</h4>
                                <h5>Age: {smurf.age}</h5>
                                <h6>Height: {smurf.height}</h6>
                            </div>
                        )
                        
                    )
                    
                )
            )}

                <NewSmurfForm/>
            


        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isFetchingData: state.isFetchingData,
        smurfs: state.smurfs,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    {getData}
)(SmurfsList);
