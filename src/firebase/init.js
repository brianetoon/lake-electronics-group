import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCQGNZtsV5CaCFA9rLMHN9G5XJHsM8egWA",
    authDomain: "lake-electronics-group.firebaseapp.com",
    databaseURL: "https://lake-electronics-group.firebaseio.com",
    projectId: "lake-electronics-group",
    storageBucket: "lake-electronics-group.appspot.com",
    messagingSenderId: "48358337190"
  };

  const firebaseApp = firebase.initializeApp(config);

  // export firestore database
  export default firebaseApp.firestore()
