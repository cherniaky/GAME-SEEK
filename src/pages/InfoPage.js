import React, { useEffect, useState } from "react";
import githubLogo from "../assets/images/GitHub-Mark-Light-32px.png";
import '../styles/InfoPage.css'

export default function Info({
    setInGame,
    setInInfo,
    setInHome,
    setInLeaderboard,
}) {
    setInLeaderboard(false);
    setInHome(false);
    setInGame(false);
    setInInfo(true);

    return (
        <div className="info-container">
            <div className="about-p">
                This project was made by{" "}
                <a
                    href="https://github.com/CherniakYura"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link-a"
                >
                    <img
                        class="github-logo"
                        src={githubLogo}
                        alt="github"
                    ></img>
                    Yurii Cherniak
                </a>{" "}
                for The Odin Project
            </div>
            <ul className="info-ul">
                <li className="info-li">
                    Built the front end and game logic using React
                </li>
                <li className="info-li">
                    Utilized Firebase-firestore for a back end database
                </li>
                <li className="info-li">
                    Global leaderboard for 8 unique levels
                </li>
            </ul>
            <p className="about-p">
                Game console images provided by
                <a
                    href="https://www.artstation.com/pierreroussel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-link-a"
                >
                    {" "}
                    Pierre Roussel
                </a>
            </p>
            <ul className="info-ul">
                <li className="info-li">
                    <a
                        href="https://www.artstation.com/artwork/oOVVlJ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="about-link-a"
                    >
                        Full collection here at Artstation
                    </a>
                </li>
               
            </ul>
        </div>
    );
}
