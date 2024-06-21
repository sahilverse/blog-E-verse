import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useTheme } from './contexts/ThemeProvider';


/**
 * Represents the navigation bar component.
 *
 * @component
 * @returns {JSX.Element} The JSX element representing the navigation bar.
 */
export default function Navbar() {

    // State for tracking scroll position
    const [isScroll, setIsScroll] = useState(false);
    // State for tracking dark mode
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Access theme controller from context
    const { themeControllerChecked } = useTheme();

    // Function to handle navbar change on scroll
    const changeNavbar = () => {
        if (window.scrollY >= 80) {
            setIsScroll(true);
        } else {
            setIsScroll(false);
        };
    };

    useEffect(() => {
        // Add event listener for scroll
        window.addEventListener('scroll', changeNavbar);

        // Update dark mode state based on theme controller
        if (themeControllerChecked) {
            setIsDarkMode(true);
        } else {
            setIsDarkMode(false);
        }

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('scroll', changeNavbar);
        };
    }, [scroll, themeControllerChecked]);

    return (
        <>
            <div className={`${isScroll ? 'scrolled' : ''} ${isDarkMode ? "bg-base-100" : "bg-background"}`}>
                <div className="navbar lg:container mx-auto flex justify-between pt-6 ">

                    <div>
                        <Link className="btn btn-ghost text-xl" to="/">blogEverse</Link>
                    </div>

                    {/* Login Button */}

                    <div>
                        <Link to='/login' className="customBtn-primary">Login</Link>
                    </div>
                    {/* Login Button ends */}

                </div>
            </div>

        </>
    )
}
