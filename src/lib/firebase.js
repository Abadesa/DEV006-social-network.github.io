/* eslint-disable max-len */
/* eslint-disable no-console */
// Import the functions you need from the SDKs you need
// eslint-disable-next-line import/no-extraneous-dependencies
// import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc } from 'firebase/firestore';

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
const app = initializeApp(firebaseConfig);
// const db = firebase.firestore();
const db = getFirestore(app);
const auth = getAuth(app);

export async function logInGoogle() {
  // try {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}

export function logInWithEmail(email, password) {
  const promesa = signInWithEmailAndPassword(auth, email, password);
  return promesa;
}

export async function signUpWithEmail(email, password) {
  try {
    const userCreated = await createUserWithEmailAndPassword(auth, email, password);
    return userCreated.user;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

export async function createUser(user) {
  try {
    const docRef = await addDoc(collection(db, 'users'), user);

    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

export async function addPostForUser(post) {
  try {
    console.log(post);
    const postsRef = collection(db, 'posts');
    const newPostRef = await addDoc(postsRef, post);
    console.log('Nuevo post agregado con ID:', newPostRef.id);
  } catch (error) {
    console.error('Error al agregar el nuevo post:', error);
    throw error;
  }
}

export async function getAllPosts() {
  try {
    const postsRef = collection(db, 'posts');
    const querySnapshot = await getDocs(postsRef);
    const userPosts = [];
    querySnapshot.forEach((doc) => {
      const postData = doc.data();
      userPosts.push({ id: doc.id, ...postData });
    });
    return userPosts;
  } catch (error) {
    console.error('Error al obtener los posts del usuario:', error);
    throw error;
  }
}

export async function updatePostLikes(postId, likesNumer) {
  try {
    const postRef = doc(db, 'posts', postId);
    console.log("referencia al post que te gusta");
    console.log(postRef);
    await updateDoc(postRef, { likes: likesNumer });
    console.log('Campo "likes" del post actualizado correctamente');
  } catch (error) {
    console.error('Error al actualizar el campo "likes" del post:', error);
    throw error;
  }
}


export default auth;