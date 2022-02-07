import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAsvLeMjED5AwNiJI3ntRvcO8gT7EGKAqs",
    authDomain: "fireblogs-45b04.firebaseapp.com",
    projectId: "fireblogs-45b04",
    storageBucket: "fireblogs-45b04.appspot.com",
    messagingSenderId: "538170158057",
    appId: "1:538170158057:web:d1073b1f6d5427a22d3978"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();