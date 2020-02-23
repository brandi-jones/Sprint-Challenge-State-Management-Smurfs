import React, {useState} from 'react';
import {connect} from 'react-redux';
import {postData} from '../actions/index';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const NewSmurfForm = (props) => {

    //set up new state to hold information about new smurf from form input,
    //to eventually POST to the API
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })

    //handle any changes made to the form inputs, and update (set state) accordingly
    const handleChanges = event => {
        setNewSmurf({
            ...newSmurf,
            [event.target.name]: event.target.value
        })
    }

    //on submit of the form, to then POST data of the new Smurf to the API
    const handleSubmit = event => {
        event.preventDefault();
        props.postData(newSmurf);
        setNewSmurf({
            name: '',
            age: '',
            height: ''
        })
    }

    return (
        <div className="NewSmurfFormContainer">
            <h3>Add a new smurf to the village!</h3>

            <Form onSubmit={handleSubmit}>

                <FormGroup>
                <Label for="name">Name: </Label>
                <Input
                    type="text"
                    name="name"
                    value={newSmurf.name}
                    onChange={handleChanges}
                />
                </FormGroup>

                <FormGroup>
                <Label for="age">Age: </Label>
                <Input
                    type="text"
                    name="age"
                    value={newSmurf.age}
                    onChange={handleChanges}
                />
                </FormGroup>

                <FormGroup>
                <Label for="height">Height: </Label>
                <Input
                    type="text"
                    name="height"
                    value={newSmurf.height}
                    onChange={handleChanges}
                />
                </FormGroup>

                <Button>Add Smurf</Button>

            </Form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {postData})(NewSmurfForm)