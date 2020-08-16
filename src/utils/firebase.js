import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBCNp00fgJK7d1BTkqYap45MHUhRuvXyuc",
    authDomain: "posnotification-8ef3c.firebaseapp.com",
    databaseURL: "https://posnotification-8ef3c.firebaseio.com",
    projectId: "posnotification-8ef3c",
    storageBucket: "posnotification-8ef3c.appspot.com",
    messagingSenderId: "465751337738",
    appId: "1:465751337738:web:9effcc15388e93af0528f3"
};

firebase.initializeApp(config);

export default firebase;