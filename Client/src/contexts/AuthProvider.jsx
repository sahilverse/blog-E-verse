import { createContext, useContext, useEffect, useState } from "react";
import axiosApi from '../helpers/axiosConfig';

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

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await axiosApi.get('/auth-check');
                if (res.status === 200) {
                    setUser(res.data.user);
                }
            } catch (error) {
                setUser(null);
            }
        };

        checkAuth();

    }, []);


    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}