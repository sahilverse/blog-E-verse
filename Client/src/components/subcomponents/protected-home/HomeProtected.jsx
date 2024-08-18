import React, { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthProvider'
import HomeLeft from './sub-components/HomeLeft';
import { useTheme } from '../../contexts/ThemeProvider';
import HomeMid from './sub-components/HomeMid';
import HomeRight from './sub-components/HomeRight';


export const HomeProtected = () => {
    const { user } = useAuth();

    const [isDarkMode, setIsDarkMode] = useState(false);

    const { themeControllerChecked } = useTheme();


    useEffect(() => {
        // Update dark mode state based on theme controller
        if (themeControllerChecked) {
            setIsDarkMode(true);
        } else {
            setIsDarkMode(false);
        }

    }, [themeControllerChecked]);




    return (
        <section className='mt-5 flex container mx-auto gap-14 h-screen'>

            <div className="left overflow-hidden ">
                <HomeLeft user={user} isDarkMode={isDarkMode} />
            </div>

            <div className="mid py-2 max-h-screen overflow-auto flex-grow">
                <HomeMid user={user} isDarkMode={isDarkMode} />
            </div>

            <div className="right py-2 overflow-hidden ">
                <HomeRight user={user} isDarkMode={isDarkMode} />
            </div>

        </section>
    );
}
