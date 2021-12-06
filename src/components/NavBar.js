import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import logo from "../assets/images/logo.png";
import '../styles/NavBar.css'
import Character from "../Characters"

function NavBar({
    inGame,
                setInGame,
                characters,
                setInLeadersBoard,
                inLeaderboard,
                inHome,
                inInfo,
}) {
   // let gameCharacters;
//    if (!inGame && !inHome && !inInfo) {
//     setInLeadersBoard(true);
//    }

   let gameCharacters = characters.map((character) => {
        return (
            <Character
                name={character.name}
                found={character.found}
                key={character.name}
            />
        );
    });

    return (
        <div className="nav-container">
            {inLeaderboard   && (
                <>
                    <div className="linkContainer">
                        <Link style={{ color: "#FFF" }} to="/">
                            <button
                                className="left-nav-button nav-button"
                                onClick={() => setInGame(false)}
                            >
                                <span className="nav-button-span">Home</span>
                                {/* <img src="https://img.icons8.com/ios/30/000000/leadership.png" /> */}
                            </button>
                        </Link>
                    </div>
                    <h1 className="leaderHeader">Leaderboard</h1>
                    <div className="linkContainer">
                        <button className="right-nav-button nav-button">
                            <Link style={{ color: "#FFF" }} to="/info">
                                <span className="nav-button-span">Info</span>
                            </Link>
                        </button>
                    </div>
                </>
            )}
            {inHome && (
                <>
                    <div className="linkContainer">
                        <Link style={{ color: "#FFF" }} to="/leaderboard">
                            <button className="left-nav-button nav-button">
                                <span className="nav-button-span">
                                    Leaderboard
                                </span>
                                {/* <img src="https://img.icons8.com/ios/30/000000/leadership.png" /> */}
                            </button>
                        </Link>
                    </div>
                    <img className="logo" src={logo} alt="logo"></img>
                    <div className="linkContainer">
                        <button className="right-nav-button nav-button">
                            <Link style={{ color: "#FFF" }} to="/info">
                                <span className="nav-button-span">Info</span>
                            </Link>
                        </button>
                    </div>
                </>
            )}

            {inInfo && (
                <>
                    <div className="linkContainer">
                        <button className="left-nav-button nav-button">
                            <Link style={{ color: "#FFF" }} to="/">
                                <span className="nav-button-span">Home</span>
                            </Link>
                        </button>
                    </div>

                    <img className="logo" src={logo} alt="logo"></img>

                    <div className="linkContainer">
                        <Link style={{ color: "#FFF" }} to="/leaderboard">
                            <button className="right-nav-button nav-button">
                                <span className="nav-button-span">
                                    Leaderboard
                                </span>
                                {/* <img src="https://img.icons8.com/ios/30/000000/leadership.png" /> */}
                            </button>
                        </Link>
                    </div>
                </>
            )}
            {inGame && (
                <>
                    <div className="linkContainer">
                        <button className="left-nav-button nav-button">
                            <Link style={{ color: "#FFF" }} to="/">
                                <span className="nav-button-span">Home</span>
                            </Link>
                        </button>
                    </div>

                    <div className="characters-container">{gameCharacters}</div>
                </>
            )}
        </div>
    );
}

export default NavBar;
