// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

//import firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpp_NJaL4rpXf5KUenNYEHJ3SUplZ3aV4",
  authDomain: "azshops-1e049.firebaseapp.com",
  databaseURL: "https://azshops-1e049-default-rtdb.firebaseio.com",
  projectId: "azshops-1e049",
  storageBucket: "azshops-1e049.appspot.com",
  messagingSenderId: "486383046466",
  appId: "1:486383046466:web:939adbf8a1c6286027c2db",
  measurementId: "G-B9GESLYZ06"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/* var query = app.database().ref('data');
    query.once("value")
      .then(function(snapshot) {
        console.log('snapshot' + snapshot.val());
    }); */

//const database = getDatabase();


