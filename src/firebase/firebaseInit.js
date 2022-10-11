import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "API-KEY",
    authDomain: "DOMAIN-NAME",
    projectId: "ID",
    storageBucket: "SB-NAME",
    messagingSenderId: "MS-SENDER-ID",
    appId: "APP-ID"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
