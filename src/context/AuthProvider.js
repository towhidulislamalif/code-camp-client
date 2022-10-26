import React, { createContext } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';

import app from '../config/firebaseConfig';
import { useState } from 'react';
import { useEffect } from 'react';

const auth = getAuth(app);

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const google = new GoogleAuthProvider();
  const github = new GithubAuthProvider();
  const [user, setUser] = useState({});

  // create user with email and password
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signin with email and password
  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // on auth state changed
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // update a user's profile
  const profile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // signin with google
  const googleSignin = () => {
    return signInWithPopup(auth, google);
  };

  // signin with github
  const githubSignin = () => {
    return signInWithPopup(auth, github);
  };

  const signout = () => {
    return signOut(auth);
  };

  const value = {
    user,
    signup,
    signin,
    profile,
    googleSignin,
    githubSignin,
    signout,
  };

  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  );
}

export default AuthProvider;
