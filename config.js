 import * as firebase from 'firebase'
 require('@firebase/firestore')
 
 var firebaseConfig = {
  apiKey: "AIzaSyBjEGjaS-OCYWzzNqzeLAFdk-eFsJi1JGo",
  authDomain: "wily-app-8a616.firebaseapp.com",
  databaseURL: "https://wily-app-8a616.firebaseio.com",
  projectId: "wily-app-8a616",
  storageBucket: "wily-app-8a616.appspot.com",
  messagingSenderId: "1055709847670",
  appId: "1:1055709847670:web:48057530112d2abc26ff57"
};
  firebase.initializeApp(firebaseConfig)
  export default firebase.firestore()