import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBhBjlJYGdCEK3XoUdp1P_OykEip3y4o00",
  authDomain: "proyectbeta-d5e8d.firebaseapp.com",
  databaseURL: "https://proyectbeta-d5e8d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "proyectbeta-d5e8d",
  storageBucket: "proyectbeta-d5e8d.appspot.com",
  messagingSenderId: "536007877480",
  appId: "1:536007877480:web:fe0d6063e37d85dcb4ecdd",
  measurementId: "G-X8S5EFLQG0"
};


const appFirebase = initializeApp(firebaseConfig);

export default firebaseConfig