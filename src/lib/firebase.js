/* eslint-disable no-console */
// Import the functions you need from the SDKs you need
// eslint-disable-next-line import/no-extraneous-dependencies
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { GoogleAuthProvider, signInWithEmailAndPassword, getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCqXnXgZdyzwo0Q9tqHy6zA5yOOLb5c4w8',
  authDomain: 'social-network-sn7.firebaseapp.com',
  projectId: 'social-network-sn7',
  storageBucket: 'social-network-sn7.appspot.com',
  messagingSenderId: '946430069133',
  appId: '1:946430069133:web:d40924bbf30ac5743f95c4',
  measurementId: 'G-5Z7B8PV9VL',
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export async function logInGoogle() {
  try {
    const provider = new GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    // eslint-disable-next-line no-console
    console.log(result);
    return result.user;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message);
    throw error;
  }
}

export function logInWithEmail(email, password) {
  const auth = getAuth();
  const promesa = signInWithEmailAndPassword(auth, email, password);
  return promesa;
}

export async function signUpWithEmail(email, password) {
  try {
    const userCreated = await firebase.auth().createUserWithEmailAndPassword(email, password);
    return userCreated.user;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function createUser(user) {
  try {
    const collectionUser = db.collection('users');
    collectionUser.add(user).then(() => {
      console.log('usuario creado');
    });
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

const auth = getAuth(app);
export default auth;
