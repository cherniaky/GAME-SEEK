import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

function NavBar({
    inHome = true,
    setInHome,
    inLeadersBoard,
    setInLeadersBoard,
    inGame,
    setInGame,
    inInfo,
    characters,
}) {
    return (
        <div className="nav-container">
            {inHome && (
                <div className="linkContainer">
                    <Link style={{ color: "#FFF" }} to="/leaderboard">
                        <button className="left-nav-button nav-button">
                            <span className="nav-button-span">Leaderboard</span>
                            <img src="https://img.icons8.com/ios/30/000000/leadership.png" />
                        </button>
                    </Link>
                </div>
                
            )}
        </div>
    );
}

export default NavBar;
