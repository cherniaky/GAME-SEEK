import React, { useEffect, useState } from "react";
//import './App.css';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router basename="/photo_tagging_app">
            <NavBar
                inGame={true}
                // setInGame={setInGame}
                // characters={characters}
                // inLeaderboard={inLeaderboard}
                // inHome={inHome}
                // inInfo={inInfo}
            />
            
        </Router>
    );
}

export default App;
