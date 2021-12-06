import React, { useEffect, useState } from "react";
import allLevelData from "../allLevelData";
import OutsideClickHandler from "react-outside-click-handler";
import "../styles/Game.css";
import CharacterDropdown from "../components/CharacterDropdown";
import Modal from "../components/Modal";
import { saveScore } from "../firebase";

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

    useEffect(() => {
        setGameover(characters.every((char) => char.found));
    }, [characters]);

    useEffect(() => {
        if (gameover === true) {
            let endingTimestamp = Date.now();
            let score = (endingTimestamp - startTime) / 1000;
            let date = new Date().toString().split(" ").splice(1, 3).join(" ");
            if (score < 0.1) {
                return;
            }
            // firestore
            //     .collection("games")
            //     .add({
            //         startTime: startTime,
            //         endTime: endingTimestamp,
            //         level,
            //         characters: characters,
            //         elapsedSeconds: score,
            //         date: date,
            //     })
            //     .then((docRef) => {
            //         setgameId(docRef.id);
            //         firestore
            //             .collection("games")
            //             .doc(docRef.id)
            //             .onSnapshot((doc) => {
            //                 const data = doc.data();
            //                 setElapsedSeconds(data?.elapsedSeconds);
            //             });
            //     });
            setElapsedSeconds(score);
        }
    }, [gameover]);

    const getLocationImageClick = (e) => {
        const xCoord = Math.round(
            (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
        );
        const yCoord = Math.round(
            (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100
        );
        const coords = { xCoord, yCoord };
        return coords;
    };

    const updateClickLocation = (coords) => {
        const { xCoord, yCoord } = coords;
        const updatedCoords = { left: xCoord + "%", top: yCoord + "%" };
        setClickLocation(updatedCoords);
        setShowDropdown(true);
    };

    const imageClick = (e) => {
        const coords = getLocationImageClick(e);
        setCoords(coords);
        updateClickLocation(coords);
    };

    const hideDropdown = () => setShowDropdown(false);

    const isCoordWithinTwoDegrees = (coord1, coord2) => {
        return (
            coord1 === coord2 ||
            coord1 + 1 === coord2 ||
            coord1 + 2 === coord2 ||
            coord1 - 1 === coord2 ||
            coord1 - 2 === coord2
        );
    };

    const dropdownClick = (character) => {
        //const gameSelection = { coords, character, gameId, level };

        // check for character
        const selectedCharacter = characters.find((char) => {
            return char.name === character;
        });
        const { xCoord, yCoord } = selectedCharacter;
        const isCharacterAtCoords =
            isCoordWithinTwoDegrees(xCoord, coords.xCoord) &&
            isCoordWithinTwoDegrees(yCoord, coords.yCoord);
        if (isCharacterAtCoords) {
            const updatedCharacters = characters.map((char) =>
                char.name === character ? { ...char, found: true } : char
            );
            setCharacters(updatedCharacters);
        }

        //firestore.collection("playerSelection").add(gameSelection);
        hideDropdown();
    };

    const submitScore = async () => {
        const d = new Date();
       // d.toDateString();
        const player = { name:username, time: elapsedSeconds ,level:level,date:d.toDateString()};

        saveScore(player);

        //  const highscoreRef = await firestore
        //      .collection("games")
        //      .doc(gameId)
        //      .get();
        //  const highscoreData = highscoreRef.data();
        //  const newHighscore = {
        //      gameId,
        //      level: highscoreData.level,
        //      time: highscoreData.elapsedSeconds,
        //      name: customFilter.clean(username),
        //      date: highscoreData.date,
        //  };
        //  firestore.collection("highscores").add(newHighscore);
    };

    return (
        <div className="game-wrapper">
            <div className="relative">
                <OutsideClickHandler onOutsideClick={hideDropdown}>
                    <img
                        className="game-board-image"
                        src={image}
                        alt="Game Level"
                        onClick={imageClick}
                    />
                    <CharacterDropdown
                        show={showDropdown}
                        characters={characters}
                        clickLocation={clickLocation}
                        clicked={dropdownClick}
                    />
                </OutsideClickHandler>
            </div>
            <Modal
                showModal={gameover}
                seconds={elapsedSeconds}
                username={username}
                updateUsername={updateUsername}
                submitScore={submitScore}
            />
        </div>
    );
}
