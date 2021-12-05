import React, { useEffect, useState } from "react";
import allLevelData from '../allLevelData';


export default function Game({
    level,
    levelData = {},
    username,
    updateUsername,
    characters,
    setCharacters,
    setInLeaderboard,
    setInHome,
    setInInfo,
}) {
    const [gameId, setgameId] = useState(null);
    const [image, setImage] = useState("");
    const [gameover, setGameover] = useState(false);
    const [elapsedSeconds, setElapsedSeconds] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [coords, setCoords] = useState(null);
    const [clickLocation, setClickLocation] = useState({
        left: "0%",
        top: "0%",
    });
    const [startTime, setStartTime] = useState(Date.now());

    setInLeaderboard(false);
    setInHome(false);
    setInInfo(false);

     useEffect(() => {
         let loadedCharacters = allLevelData[level].characters;
         setImage(allLevelData[level].board);
         setCharacters(loadedCharacters);
     }, []);

    return <div></div>;
}
