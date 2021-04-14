// Collecter les villes ajoutées à l'application

import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAMH9VXrcw_hVVodYXWGWq9JQYRuYvfDRI",
    authDomain: "yellow-cloud-c2432.firebaseapp.com",
    projectId: "yellow-cloud-c2432",
    storageBucket: "yellow-cloud-c2432.appspot.com",
    messagingSenderId: "270385776841",
    appId: "1:270385776841:web:0c98ca7c3c37d046cde518"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();