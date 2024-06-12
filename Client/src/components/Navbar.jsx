import React, { useEffect, useState } from 'react'
import ThemeController from './subcomponents/ThemeController';
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
                <div className="navbar lg:container mx-auto flex justify-between pt-6">
                    <div>
                        <Link className="btn btn-ghost text-xl" to="/">blogEverse</Link>
                    </div>

                    {/* NavLinks starts */}
                    <div className="hidden lg:flex gap-4">
                        <Link className="btn btn-ghost" to="/"><span className='font-bold'>Home</span></Link>
                        <Link className="btn btn-ghost" to="/discover"><span className='font-bold'>Discover</span></Link>
                        <Link className="btn btn-ghost" to="/create"><span className='font-bold'>Create</span></Link>
                        <Link className="btn btn-ghost" to="/dashboard"><span className='font-bold'>Dashboard</span></Link>
                    </div>
                    {/* NavLinks ends */}

                    <div className="gap-2">

                        <div className="flex gap-2">
                            {/* Theme Controller starts */}
                            <div className='mr-2 flex align-center'>

                                <ThemeController />

                            </div>
                            {/* Theme Controller End */}

                            {/* <input type="text" placeholder="Search" className="input input-bordered w-24 bg-transparent md:w-auto" /> */}
                        </div>


                        {/* Profie photo and dropdown */}
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        {/* <span className="badge">New</span> */}
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
