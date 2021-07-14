import firebase from 'firebase/app'
import 'firebase/firestore'
//import { database } from '../firebase/'

  var firebaseConfig = {
    apiKey: "AIzaSyBEiUFa5ZQiszdLdngthLtao4mFAvXbhdU",
    authDomain: "coderhose-apstore.firebaseapp.com",
    projectId: "coderhose-apstore",
    storageBucket: "coderhose-apstore.appspot.com",
    messagingSenderId: "29932284748",
    appId: "1:29932284748:web:a344906e25448738bb3de9"
  };


//Inicializa database
const fb = firebase.initializeApp(firebaseConfig)

//disponible para todos
export const database = fb.firestore()

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyBEiUFa5ZQiszdLdngthLtao4mFAvXbhdU",
//     authDomain: "coderhose-apstore.firebaseapp.com",
//     projectId: "coderhose-apstore",
//     storageBucket: "coderhose-apstore.appspot.com",
//     messagingSenderId: "29932284748",
//     appId: "1:29932284748:web:a344906e25448738bb3de9"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>