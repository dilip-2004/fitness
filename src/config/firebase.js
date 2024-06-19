import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCpDKO1PiEVEWhQBSLrWQ0KHBnI45ylneY",
  authDomain: "my-project-11da5.firebaseapp.com",
  projectId: "my-project-11da5",
  storageBucket: "my-project-11da5.appspot.com",
  messagingSenderId: "773256193097",
  appId: "1:773256193097:web:3a07108c8793e736e1cb98"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app);