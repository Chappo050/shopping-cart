// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-PyCcW7uHXgeNugRVvt8jnifwO1IbcAY",
  authDomain: "shoppingcart-99402.firebaseapp.com",
  projectId: "shoppingcart-99402",
  storageBucket: "shoppingcart-99402.appspot.com",
  messagingSenderId: "46709322517",
  appId: "1:46709322517:web:71b045d747d569aa81ef1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();