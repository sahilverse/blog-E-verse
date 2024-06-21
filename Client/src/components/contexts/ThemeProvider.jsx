import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

/**
 * Provides a theme context for the application.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {JSX.Element} The theme provider component.
 */
export const ThemeProvider = ({ children }) => {
    const systemTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const [theme, setTheme] = useState(localStorage.getItem('theme') || systemTheme || 'light');
    const [themeControllerChecked, setThemeControllerChecked] = useState(theme === 'dark');

    /**
     * Updates the theme and theme controller state when the theme changes.
     */
    useEffect(() => {
        const root = window.document.documentElement;
        root.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        localStorage.setItem('themeControllerChecked', themeControllerChecked);
    }, [theme, themeControllerChecked]);

    /**
     * Toggles the theme between light and dark.
     */
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
        setThemeControllerChecked(prevThemeControllerChecked => !prevThemeControllerChecked);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, themeControllerChecked }}>{children}</ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};