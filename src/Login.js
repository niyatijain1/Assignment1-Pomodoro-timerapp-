import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const Login = () => {
  const handleGoogleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login with Google</h1>
        <button onClick={handleGoogleLogin} className="login-button">
          Login with Google
        </button>
      </div>

    </div>

  );
};

export default Login;
