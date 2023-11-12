import{initializeApp} from  "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyDX_ElMnF9OlhBu-P0Zm0BToakdKSYcY5E",
    authDomain: "pruebayl.firebaseapp.com",
    databaseURL: "https://pruebayl-default-rtdb.firebaseio.com",
    projectId: "pruebayl",
    storageBucket: "pruebayl.appspot.com",
    messagingSenderId: "280133511179",
    appId: "1:280133511179:web:0953a7afbda0baf7b0bf0e",
    measurementId: "G-HDPWXR5C5M"
  };

  export const app = initializeApp(firebaseConfig);