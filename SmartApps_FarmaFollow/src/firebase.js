import { initializeApp } from "firebase/app";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore"
import {getAuth } from "firebase/auth"


// eslint-disable-next-line no-unused-vars
const app = initializeApp({
  apiKey: "AIzaSyAQmOgu41B7Nme2BxjtJhoTg7M6WnoExk8",
  authDomain: "farmafollow-f3003.firebaseapp.com",
  projectId: "farmafollow-f3003",
  storageBucket: "farmafollow-f3003.appspot.com",
  messagingSenderId: "18105215388",
  appId: "1:18105215388:web:2881c9d4633bc034870059"
})

export const db = getFirestore()

export const auth = getAuth(app)

export const user = auth.currentUser

enableIndexedDbPersistence(db)
  .catch((err) => {
      if (err.code === 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code === 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });

