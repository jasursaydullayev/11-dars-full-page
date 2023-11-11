import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
import  {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBQTAiufrn_TfHW3tejRDpWRRjHEUxXEBc",
  authDomain: "my-book-79b24.firebaseapp.com",
  projectId: "my-book-79b24",
  storageBucket: "my-book-79b24.appspot.com",
  messagingSenderId: "989474484557",
  appId: "1:989474484557:web:1a5d6a9181a861aca68704"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth()
export {db , auth}