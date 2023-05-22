import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// Config firebase with our WebApp
const firebaseConfig = {
    apiKey: "AIzaSyATUjnfqDvnEP_pz-5TVgMV2Q2LbMmuM9M",
    authDomain: "painting-14493.firebaseapp.com",
    projectId: "painting-14493",
    storageBucket: "painting-14493.appspot.com",
    messagingSenderId: "319938598201",
    appId: "1:319938598201:web:245c1e7993f3da094844e8",
    measurementId: "G-1KBXZE397P"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);