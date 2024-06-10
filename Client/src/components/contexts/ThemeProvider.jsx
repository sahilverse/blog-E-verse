import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const systemTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const [theme, setTheme] = useState(localStorage.getItem('theme') || systemTheme || 'light');
    const [themeControllerChecked, setThemeControllerChecked] = useState(theme === 'dark');


    useEffect(() => {
        const root = window.document.documentElement;
        root.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        localStorage.setItem('themeControllerChecked', themeControllerChecked);
    }, [theme, themeControllerChecked]);

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