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
            <h2>Smurf List Component</h2>
            <button onClick={handleGetData}>Take me to the Village</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isFetchingData: state.isFetchingData,
    }
}

export default connect(
    mapStateToProps,
    {getData}
)(SmurfsList);
