import React from 'react';
import {connect} from 'react-redux';
import {getData} from '../actions/index';

const SmurfsList = (props) => {

    const handleGetData = event => {
        event.preventDefault();
        props.getData();
    }

    return (
        <div className="SmurfListContainer">
            
            <button onClick={handleGetData}>Take me to the Village</button>


            {props.error ? (
                <div className="error">{props.error}</div>
            ) : (
                props.smurfs.map(smurf => 
                    <div className="smurfCard">
                        <h4>Name: {smurf.name}</h4>
                        <h5>Age: {smurf.age}</h5>
                        <h6>Height: {smurf.height}</h6>
                    </div>
                )
            )}
            

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
