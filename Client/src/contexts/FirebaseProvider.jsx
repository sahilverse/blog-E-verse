import { createContext, useContext, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Create a Firebase context
const FirebaseContext = createContext(null);

// Firebase configuration object
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "blog-e-verse.firebaseapp.com",
    projectId: "blog-e-verse",
    storageBucket: "blog-e-verse.appspot.com",
    messagingSenderId: "160792168076",
    appId: "1:160792168076:web:610babfafced7a28e49da9",
    measurementId: "G-MSHDZ29TLH"
};

// Initialize Firebase app with the configuration
const firebaseApp = initializeApp(firebaseConfig);

// Firebase authentication provider
const firebaseAuth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

// FirebaseProvider component to provide the Firebase app instance to its children
export const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signInWithGoogle = () => {
        signInWithPopup(firebaseAuth, provider)
            .then((result) => {

                const user = result.user;
                setUser(user);

            }).catch((error) => {

                console.log(error);
            });
    }

    return (
        <FirebaseContext.Provider value={{ firebaseApp, signInWithGoogle, user }}>
            {children}
        </FirebaseContext.Provider>
    );
}

// Custom hook to access the Firebase app instance from any component
export const useFirebase = () => {
    return useContext(FirebaseContext);
}
