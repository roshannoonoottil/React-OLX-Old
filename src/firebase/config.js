import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4U84N-Thf3ACsUG9lqJ9JQ-WHHy9MaNc",
  authDomain: "olx-clone-113c4.firebaseapp.com",
  projectId: "olx-clone-113c4",
  storageBucket: "olx-clone-113c4.appspot.com",
  messagingSenderId: "239373925409",
  appId: "1:239373925409:web:d19d784db3d85822c33760"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);