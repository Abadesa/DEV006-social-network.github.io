/* eslint-disable no-shadow */
/* eslint-disable max-len */
/* eslint-disable no-console */
// Import the functions you need from the SDKs you need
// eslint-disable-next-line import/no-extraneous-dependencies
import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword,
} from 'firebase/auth';
import {
  getFirestore, collection, addDoc, getDocs, doc, updateDoc, orderBy, query, deleteDoc, getDoc
} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiAoIgxvdZnD0_w2CFKSL9KtQ2Uz3hUSg",
  authDomain: "test-social-network-769f1.firebaseapp.com",
  databaseURL: "https://test-social-network-769f1-default-rtdb.firebaseio.com",
  projectId: "test-social-network-769f1",
  storageBucket: "test-social-network-769f1.appspot.com",
  messagingSenderId: "602607912276",
  appId: "1:602607912276:web:6b44b262252104d386b4c1",
  measurementId: "G-Q1609MZRZ0"
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
    const querySnapshot = await getDocs(query(postsRef, orderBy('createdAt', 'desc')));
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

export async function updatePostLikes(postId, likesData) {
  try {
    console.log(postId);
    const postRef = doc(db, 'posts', postId);
    console.log(postRef)
    const postDoc = await getDoc(postRef);
console.log("post");
    console.log(postDoc);

    if (postDoc.exists()) {
      const postData = postDoc.data();
      const currentLikes = postData.likes || [];
      const updatedLikes = [...currentLikes, likesData];
      await updateDoc(postRef, { likes: updatedLikes });
      console.log('Campo "likes" del post actualizado correctamente');
    } else {
      throw new Error('El documento del post no existe');
    }
  } catch (error) {
    console.error('Error al actualizar el campo "likes" del post:', error);
    throw error;
  }
}

export async function updatePost(postData, newPostData) {
  try {
    console.log(postData);
    const postRef = doc(db, 'posts', postData.post);
    await updateDoc(postRef, { title: newPostData.title, description: newPostData.description });
    console.log('Post actualizado correctamente');
  } catch (error) {
    console.error('Error al actualizar el post:', error);
    throw error;
  }
}

export async function deletePost(postId) {
  try {
    const postRef = doc(db, 'posts', postId);
    await deleteDoc(postRef);
    console.log('Post eliminado correctamente');
  } catch (error) {
    console.error('Error al eliminar el post:', error);
    throw error;
  }
}

export default auth;