// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7YAfaJO5878jrw6-DN-w7syQdkuKnnx8",
  authDomain: "instaclone-509f7.firebaseapp.com",
  projectId: "instaclone-509f7",
  storageBucket: "instaclone-509f7.appspot.com",
  messagingSenderId: "782175085840",
  appId: "1:782175085840:web:158503120df031774e3195"
};

// Initialize Firebase
const app = !getApps.length ?initializeApp(firebaseConfig):getApp();
const db=getFirestore();
const storage=getStorage();



export {app,db,storage}