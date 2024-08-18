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

            <main className='mt-24  container mx-auto gap-40 flex '>

                <div className="left ">
                    <HomeLeft user={user} isDarkMode={isDarkMode} />
                </div>

                <div className="mid  flex justify-center ">


                    <HomeMid user={user} isDarkMode={isDarkMode} />

                </div>

                <div className="right">
                    <HomeRight user={user} isDarkMode={isDarkMode} />
                </div>

            </main>


            {/*  <main className='mt-24  container mx-auto gap-8 relative'>

                <div className="left  fixed w-[20rem] z-40">
                    <HomeLeft user={user} isDarkMode={isDarkMode} />
                </div>

                <div className="mid  flex justify-center absolute right-0 left-0 ">


                    <HomeMid user={user} isDarkMode={isDarkMode} />

                </div>

                <div className="right  fixed right-[12rem] ">
                    <HomeRight user={user} isDarkMode={isDarkMode} />
                </div>

            </main> */}


        </>


    );
}
