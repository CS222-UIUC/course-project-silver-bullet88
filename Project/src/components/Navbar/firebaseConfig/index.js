import { initializeApp } from "firebase/app";
import { getDataBase } from "firebase/app";

function StartFirebase() {
    // AskMe's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyDpMuUuVx6Dzs3gFnM6no1e4DRFkdYzS_w",
        authDomain: "cs222-cf66b.firebaseapp.com",
        databaseURL: "https://cs222-cf66b-default-rtdb.firebaseio.com",
        projectId: "cs222-cf66b",
        storageBucket: "cs222-cf66b.appspot.com",
        messagingSenderId: "625820938844",
        appId: "1:625820938844:web:7c9133778ca554d4172c99"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    return getDataBase(app);
}

export default StartFirebase;
