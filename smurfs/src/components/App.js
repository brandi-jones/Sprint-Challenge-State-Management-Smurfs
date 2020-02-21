import React from "react";
import "./App.css";
import {createStore, applyMiddleware} from 'redux';
import {reducer} from '../reducers/reducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import SmurfsList from './SmurfsList';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="AppContainer">
       <h1>Smurf Village</h1>
       <SmurfsList/>
    </div>
  );
}

export default App;
