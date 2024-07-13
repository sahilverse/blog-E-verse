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
        <section className='mt-5'>
            <div className="container mx-auto flex gap-14">
                <div className="left ">
                    <HomeLeft user={user} isDarkMode={isDarkMode} />
                </div>

                <div className="mid w-[50%] py-2">

                    <HomeMid user={user} isDarkMode={isDarkMode} />
                </div>

                <div className="right py-2">

                    <HomeRight user={user} isDarkMode={isDarkMode} />

                </div>
            </div>

        </section>
    )
}
