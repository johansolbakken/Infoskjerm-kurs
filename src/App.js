import React from 'react';
import Title from "./Title.js";
import DadJoke from "./DadJoke";
import Bikes from "./Bikes";
import logo from './logo.svg';
import './App.css';

function App() {
    console.log("Heisann");

    return (
        <div className="App">
            <Title />
            <DadJoke />
            <Bikes />
        </div>
    );
}

export default App;
