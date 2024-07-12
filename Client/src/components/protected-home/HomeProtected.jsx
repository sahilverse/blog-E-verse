import React, { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthProvider'
import HomeLeft from './sub-components/HomeLeft';
import { useTheme } from '../../contexts/ThemeProvider';



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

                <div className="mid flex-1  py-2">

                    <div>
                        <h1>Mid</h1>
                        <p>This is the middle of the home page</p>
                    </div>

                </div>

                <div className="right py-2 ">

                    <div>
                        <h1>Right</h1>
                        <p>This is the right side of the home page</p>
                    </div>

                </div>
            </div>

        </section>
    )
}
