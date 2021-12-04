import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LevelCard from '../components/LevelCard';
import '../styles/HomePage.css';

export default function HomePage({
    setLevel,
    levelData,
    setInGame,
    setInLeaderboard,
    setInHome,
    setInInfo,
}) {
    setInLeaderboard(false);
    setInHome(true);
    setInGame(false);
    setInInfo(false);


    const links = levelData.map((level) => {
        const link = level;
        const characters = link.characters;
        //const key = `level ${link.level} ${link.name}`;
        return (
            <Link to="/game">
                <LevelCard
                    img={link.board}
                    clicked={() => {
                        setLevel(link.level);
                        setInGame(true);
                    }}
                    alt={`Level ${link.level}`}
                   // {...characters}
                >
                    {link.name}
                </LevelCard>
            </Link>
        );
    });

    return <div className="home-levels-container">{links}</div>;
}
