'use client'
import  {initializeApp}  from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const clientCredentials={
//     apikey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain:process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId:process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket:process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId:process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId:process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// }


const firebaseConfig = {
    apiKey: "AIzaSyCcxkj1SMxLL9hOOczZQ1F305Xas8Xst04",
    authDomain: "bloggers-401fd.firebaseapp.com",
    projectId: "bloggers-401fd",
    storageBucket: "bloggers-401fd.appspot.com",
    messagingSenderId: "181821419503",
    appId: "1:181821419503:web:f188b2e32af8947e20d01a"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db 

