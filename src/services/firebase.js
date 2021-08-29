import firebase from 'firebase/app'

import "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB-6ksMzHaEM3geIgJicAbEddgDlJEZrAk",
  authDomain: "mercadolivreclone.firebaseapp.com",
  databaseURL: 'https://mercadolivreclone.firebaseio.com',
  projectId: "mercadolivreclone",
  storageBucket: "mercadolivreclone.appspot.com",
  messagingSenderId: "671286829587",
  appId: "1:671286829587:web:09f571b5476999342555e6",
  measurementId: "G-WJK2EYY6SE",
};

firebase.initializeApp(firebaseConfig);