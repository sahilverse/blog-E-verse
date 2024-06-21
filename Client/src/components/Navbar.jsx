import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useTheme } from './contexts/ThemeProvider';


export default function Navbar() {

    const [isScroll, setIsScroll] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const { themeControllerChecked } = useTheme();

    const changeNavbar = () => {
        if (window.scrollY >= 80) {
            setIsScroll(true);
        } else {
            setIsScroll(false);
        };
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNavbar);

        if (themeControllerChecked) {
            setIsDarkMode(true);
        } else {
            setIsDarkMode(false);
        }

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
                        <Link to='/login' class="customBtn-primary">Login</Link>
                    </div>
                    {/* Login Button ends */}

                </div>
            </div>

        </>
    )
}
