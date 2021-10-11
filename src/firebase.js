import firebase from "firebase/compat/app"
import "firebase/compat/auth"

 const app = firebase.initializeApp({
     
    apiKey: "AIzaSyCACCvvd642QMk9a2vt0M8ynQo3vY7HMd4",
    authDomain: "would-you-rather-auth-dev.firebaseapp.com",
    projectId: "would-you-rather-auth-dev",
    storageBucket: "would-you-rather-auth-dev.appspot.com",
    messagingSenderId: "439997930027",
    appId: "1:439997930027:web:18e7f4c6fa3c93f302a86e"
})

export const auth = app.auth()

export default app


/*
    apikey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
 */