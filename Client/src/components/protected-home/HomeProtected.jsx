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

        <>

            <main className='mt-24  container mx-auto  flex  gap-10'>

                <div className="left flex-[0.25]">
                    <HomeLeft user={user} isDarkMode={isDarkMode} />
                </div>

                <div className="mid flex-[0.5]">


                    <HomeMid user={user} isDarkMode={isDarkMode} />

                </div>

                <div className="right flex-[0.25]">
                    <HomeRight user={user} isDarkMode={isDarkMode} />
                </div>

            </main>


        </>


    );
}
