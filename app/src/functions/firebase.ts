import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAeGeJY8OIs1ghrvlgFATbudKZe2UkVZME",
  authDomain: "lynk-458ed.firebaseapp.com",
  projectId: "lynk-458ed",
  storageBucket: "lynk-458ed.appspot.com",
  messagingSenderId: "377641272290",
  appId: "1:377641272290:web:4a744d85c9a9bbe395afbb",
  measurementId: "G-1Q11KGNQQK"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
