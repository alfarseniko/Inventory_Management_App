// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyADqSao4AHgDrVyP4c65y3Q9EEP0yaxnQ8",
    authDomain: "pantry-tracker-2f534.firebaseapp.com",
    projectId: "pantry-tracker-2f534",
    storageBucket: "pantry-tracker-2f534.appspot.com",
    messagingSenderId: "218871657704",
    appId: "1:218871657704:web:c3d8edd721e1b4167f055d",
    measurementId: "G-W6T6CLC4NX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };