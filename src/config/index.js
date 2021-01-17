import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyArHpcEMF_Xl42HaDz3bNzQIkuAJ4XJ12A",
    authDomain: "dealer-91079.firebaseapp.com",
    projectId: "dealer-91079",
    storageBucket: "dealer-91079.appspot.com",
    messagingSenderId: "985790922777",
    appId: "1:985790922777:web:ffb9a4433d3cfcb6d0ea88",
    measurementId: "G-J3N2HREFJC"
};

firebase.initializeApp(firebaseConfig);

const app = firebase;

export default app;