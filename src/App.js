import React, { useState } from 'react';
import Login from './Login';
import Home from './Home';
import SettingContextProvider from './context/SettingsContext';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCm-s6FX-b-ynTFzyovfqkqCg8IYxfEuHY",
    authDomain: "auth-b8b14.firebaseapp.com",
    projectId: "auth-b8b14",
    storageBucket: "auth-b8b14.appspot.com",
    messagingSenderId: "852630290678",
    appId: "1:852630290678:web:9f3691261386fc82032cd7"
};
firebase.initializeApp(firebaseConfig);

const App = () => {
    const [user, setUser] = useState(null);

    firebase.auth().onAuthStateChanged((user) => {
        setUser(user);
    });

    return (
        <div>
            {user ? (
                <>
                    <SettingContextProvider>
                        <Home />
                    </SettingContextProvider>
                </>
            ) : (
                <Login />

            )}
        </div>
    );
};

export default App;
