// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcS01QYS6Pyfw7yvFZ-FzlJE9oDS_ggGM",
  authDomain: "netflix-clone-625e6.firebaseapp.com",
  projectId: "netflix-clone-625e6",
  storageBucket: "netflix-clone-625e6.appspot.com",
  messagingSenderId: "165806637168",
  appId: "1:165806637168:web:99f87ff990e730ee01f4b5",
  measurementId: "G-NEEXVKJP77",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
