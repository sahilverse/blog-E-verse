import { createContext, useContext, useState } from "react";

// Create the AuthContext
const AuthContext = createContext();

/** 
 * Custom hook to use the AuthContext
 * @returns {Object} The context value
 */

export const useAuth = () => {
    return useContext(AuthContext);
}

/**
 * Provider for the AuthContext
 * @param {Object} props The properties of the component
 * @returns {JSX.Element} The AuthProvider component
 */

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}