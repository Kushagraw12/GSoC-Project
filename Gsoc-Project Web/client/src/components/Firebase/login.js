import React from "react";
import firebaseConfig from './Config';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { useAuthState } from 'react-firebase-hooks/auth';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import "./login.css";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const auth = firebase.auth();
//const firestore = firebase.firestore();



function Login() {

    const [user] = useAuthState(auth);
  
    return (
      <div className="text-center head kk">
        <header>
          <h1 className='wel'>Welcome!</h1>
          <div className='so'>
            <SignOut />
          </div>
        </header>
  
        <section>
          {user ? <Text /> : <SignIn />}
        </section>
        <Link to='/'><Button className="back">Go Back to Home Page</Button></Link>
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
        <Button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</Button>
      </>
    )
  
  }
  
  

function SignOut() {
    return auth.currentUser && (
      <Button className="sign-out" onClick={() => auth.signOut()}>Sign Out</Button>
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
