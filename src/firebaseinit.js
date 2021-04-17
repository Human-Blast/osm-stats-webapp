import firebase from 'firebase';
import 'firebase/database';
import FirebaseConfig from './firebaseconfig.js';
const firebaseApp = firebase.initializeApp(FirebaseConfig);
export default firebaseApp.database();