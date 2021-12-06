
import { initializeApp } from "firebase/app";
import "firebase/firestore";

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    query,
    orderBy,
    limit,
    onSnapshot,
    setDoc,
    updateDoc,
    doc,
    serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAl8yotoDFhtqnmoWgEZj0--3azjuF1gBY",
    authDomain: "gameseek-c4657.firebaseapp.com",
    projectId: "gameseek-c4657",
    storageBucket: "gameseek-c4657.appspot.com",
    messagingSenderId: "1084126589469",
    appId: "1:1084126589469:web:908f2fba2dc2b611f7ccf4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
async function saveScore(player) {
    // Add a new message entry to the Firebase database.
    try {
        await addDoc(collection(getFirestore(), "highscores"), {
            name: player.name,
            time: player.time,
            level:player.level,
            date: player.date,
        });
    } catch (error) {
        console.error("Error writing new message to Firebase Database", error);
    }
}

async function getData(highscoresData) {
    
    const querySnapshot = await getDocs(collection(db, "highscores"));
    querySnapshot.forEach((doc) => {
        highscoresData.push(doc.data());
    });
   
}

export { saveScore, getData };
