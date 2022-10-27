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
  const [loading, setLoading] = useState(true);

  // create user with email and password
  const signup = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signin with email and password
  const signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // on auth state changed
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
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
    setLoading(true);
    return signInWithPopup(auth, google);
  };

  // signin with github
  const githubSignin = () => {
    setLoading(true);
    return signInWithPopup(auth, github);
  };

  const signout = () => {
    return signOut(auth);
  };

  const value = {
    user,
    loading,
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
