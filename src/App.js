import React, { useEffect, useState } from "react";
import './styles/App.css';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InfoPage from "./pages/InfoPage";
import allLevelData from "./allLevelData";
import HomePage from "./pages/HomePage";
import Game from './pages/Game';

function App() {
    const [inGame, setInGame] = useState(false);
    const [inLeaderboard, setInLeaderboard] = useState(false);
    const [inHome, setInHome] = useState(false);
    const [inInfo, setInInfo] = useState(false);
    const [level, setLevel] = useState(0);
    const [levelData, setLevelData] = useState(allLevelData);
    const [characters, setCharacters] = useState([]);
    const [username, setUsername] = useState("");
    const handleUpdateUsername = (e) => {
        setUsername(e.target.value);
    };

    return (
        <Router basename="/photo_tagging_app">
            <NavBar
                inGame={inGame}
                setInGame={setInGame}
                characters={characters}
                inLeaderboard={inLeaderboard}
                inHome={inHome}
                inInfo={inInfo}
            />
            <div className="pagesContainer">
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <HomePage
                                setLevel={setLevel}
                                levelData={levelData}
                                setInGame={setInGame}
                                setInLeaderboard={setInLeaderboard}
                                setInHome={setInHome}
                                setInInfo={setInInfo}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/game"
                        element={
                            <Game
                                level={level}
                                username={username}
                                updateUsername={handleUpdateUsername}
                                levelData={levelData}
                                characters={characters}
                                setCharacters={setCharacters}
                                setInLeaderboard={setInLeaderboard}
                                setInHome={setInHome}
                                setInInfo={setInInfo}
                            />
                        }
                    />

                    <Route
                        exact
                        path="/info"
                        element={
                            <InfoPage
                                setInGame={setInGame}
                                setInLeaderboard={setInLeaderboard}
                                setInHome={setInHome}
                                setInInfo={setInInfo}
                            />
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
