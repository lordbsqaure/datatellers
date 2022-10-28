import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyC5zWrVikOgDcWRtHhM-3dLWPw2xTOuSLA",
    authDomain: "datatellers-1fe83.firebaseapp.com",
    projectId: "datatellers-1fe83",
    storageBucket: "datatellers-1fe83.appspot.com",
    messagingSenderId: "266776202618",
    appId: "1:266776202618:web:07a0d473012f76953e9ac3",
    measurementId: "G-R3PHCSXV30"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);