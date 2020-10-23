import React from "react";
import firebaseConfig from './Config';

import { useAuthState } from 'react-firebase-hooks/auth';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import "./login.css";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const auth = firebase.auth();
const firestore = firebase.firestore();



function Login() {

    const [user] = useAuthState(auth);
  
    return (
      <div className="text-center head">
        <header>
          <h1 className='wel'>Welcome!</h1>
          <div className='so'>
            <SignOut />
          </div>
          
        </header>
  
        <section>
          {user ? <Text /> : <SignIn />}
        </section>
  
      </div>
    );
  }
  
function SignIn() {
  
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    return (
      <>
        <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      </>
    )
  
  }
  
  

function SignOut() {
    return auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    )
}

function Text() {
    return (
        <div className='text-center'>
            
            <h5 className='si'>You are logged in!</h5>
            
            
        </div>
    )
}



export default Login;
