import firebase from "firebase";
import "firebase/storage"; 

const firebaseConfig = {
    apiKey: "AIzaSyC5oMUFXfPXkiroz8FddgJ2KBYfUH1rYXE",
    authDomain: "facebook-2-3fef6.firebaseapp.com",
    projectId: "facebook-2-3fef6",
    storageBucket: "facebook-2-3fef6.appspot.com",
    messagingSenderId: "667418232749",
    appId: "1:667418232749:web:487126877e5a5aa7f00324",
    measurementId: "G-P34VP2BBRV"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage};