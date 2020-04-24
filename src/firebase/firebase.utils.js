import firebase, { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    
    apiKey: "AIzaSyDQR1iT7mChBKtViInWoVIyen0SsN8hik8",
    authDomain: "crwn-db-9d1c9.firebaseapp.com",
    databaseURL: "https://crwn-db-9d1c9.firebaseio.com",
    projectId: "crwn-db-9d1c9",
    storageBucket: "crwn-db-9d1c9.appspot.com",
    messagingSenderId: "195386074187",
    appId: "1:195386074187:web:070d887bc8ec2ae6ca59ce",
    measurementId: "G-DYH9CVE5WZ"

}
firebase.initializeApp(config);

export const auth =firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;





