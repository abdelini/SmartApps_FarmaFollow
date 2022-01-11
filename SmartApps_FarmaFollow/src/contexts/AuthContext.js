import React, { useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  async function signup(email, password) {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredentials.user;

      await setDoc(doc(db, "Users", `${user.uid}`), {
        Email: user.email,
      });
      console.log(user);
    } catch (err) {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.log(`Code: ${errorCode} message ${errorMessage}`);
    }
  }

  async function login(email, password) {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      console.log(user);
    } catch (err) {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.log(`Code: ${errorCode} message ${errorMessage}`);
    }
  }

    function logout() {
    try {
     signOut(auth)
      console.log("User signed out")
    } catch (error) {
      console.log(error.code)
    }
    
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (user) => {
       setCurrentUser(user)
    });

    return unsubscribe
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
