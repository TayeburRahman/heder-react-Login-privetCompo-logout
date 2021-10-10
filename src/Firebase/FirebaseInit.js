import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfic";


// Initialize Firebase login
const initilizeAuthentication = () =>{
    initializeApp(firebaseConfig);
};
export default initilizeAuthentication;