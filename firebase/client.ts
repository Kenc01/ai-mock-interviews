import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDUvq6XnVbqciAVa3aWW5s5c82pMmsF-AU',
  authDomain: 'keithdev-dcd37.firebaseapp.com',
  projectId: 'keithdev-dcd37',
  storageBucket: 'keithdev-dcd37.firebasestorage.app',
  messagingSenderId: '421369686821',
  appId: '1:421369686821:web:61019b14d36780858608cc',
  measurementId: 'G-QG9PB7QC1M',
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
