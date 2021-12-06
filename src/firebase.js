// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
// import {
//     getAuth,
//     onAuthStateChanged,
//     GoogleAuthProvider,
//     signInWithPopup,
//     signOut,
// } from "firebase/auth";
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
// import {
//     getStorage,
//     ref,
//     uploadBytesResumable,
//     getDownloadURL,
// } from "firebase/storage";
// import { getMessaging, getToken, onMessage } from "firebase/messaging";
// import { getPerformance } from "firebase/performance";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
    // Create the query to load the last 12 messages and listen for new ones.
    //let highscoresData = [];
    const querySnapshot = await getDocs(collection(db, "highscores"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        highscoresData.push(doc.data());
        //console.log(doc.data());
    });
   // return highscoresData;
    // // Start listening to the query.
    // onSnapshot(recentMessagesQuery, function (snapshot) {
    //     snapshot.docChanges().forEach(function (change) {
    //         // if (change.type === "removed") {
    //         //     deleteMessage(change.doc.id);
    //         // } else {
    //         var message = change.doc.data();

    //         // displayMessage(
    //         //     change.doc.id,
    //         //     message.timestamp,
    //         //     message.name,
    //         //     message.text,
    //         //     message.profilePicUrl,
    //         //     message.imageUrl
    //         // );

    //         const data = {
    //             name: message.name,
    //             time: message.time,
    //             date: message.timestamp
    //         };
    //         //}
    //         return data;
    //     });
    // });
}

//export const firestores = firestore;
//export const auth = app.auth();
export { saveScore, getData };
