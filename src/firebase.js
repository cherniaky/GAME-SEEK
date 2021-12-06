// Import the functions you need from the SDKs you need
import { initializeApp ,firestore} from "firebase/app";
import  "firebase/firestore";
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

export const firestores = firestore;
//export const auth = app.auth();
export default app;