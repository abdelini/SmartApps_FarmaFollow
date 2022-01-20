import { initializeApp } from "firebase/app";
import { getFirestore, enableIndexedDbPersistence, CACHE_SIZE_UNLIMITED, initializeFirestore   } from "firebase/firestore"
import {getAuth } from "firebase/auth"


// eslint-disable-next-line no-unused-vars
const app = initializeApp({
  apiKey: "AIzaSyDvjEcyNwlt-cRD_xhzzgQMS-2JkiOZf-w",
  authDomain: "reactapp-f55a2.firebaseapp.com",
  projectId: "reactapp-f55a2",
  storageBucket: "reactapp-f55a2.appspot.com",
  messagingSenderId: "412130197602",
  appId: "1:412130197602:web:f7c6e91e4c78ad4174913b",
  measurementId: "G-BV9ME7JCSW"
})

export const db = getFirestore()

export const auth = getAuth(app)

export const user = auth.currentUser

// enableIndexedDbPersistence(db)
//   .catch((err) => {
//       if (err.code === 'failed-precondition') {
//           // Multiple tabs open, persistence can only be enabled
//           // in one tab at a a time.
//           // ...
//       } else if (err.code === 'unimplemented') {
//           // The current browser does not support all of the
//           // features required to enable persistence
//           // ...
//       }
//   });

  // const firestoreDb = initializeFirestore(app, {
  //   cacheSizeBytes: CACHE_SIZE_UNLIMITED
  // });
