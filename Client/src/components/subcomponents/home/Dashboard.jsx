import React, { useEffect, useState } from 'react'
import { useTheme } from '../../../contexts/ThemeProvider';

/**
 * Renders the Dashboard component.
 * @returns {JSX.Element} The rendered Dashboard component.
 */
export default function Dashboard() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Access theme controller from context
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
        <section id="dashboard" className='mt-20 mb-10 px-2 lg:px-0'>
            <div className="container mr-auto rounded-r-lg lg:rounded-r-none lg:mr-0 ml-auto rounded-l-lg sm:p-14 py-10 p-10 flex justify-center lg:gap-20 xl:gap-40 lg:flex-row flex-col-reverse items-center gap-16 bg-brunsickGreen">
                <div className='flex flex-col gap-6 justify-center xl:ml-20'>
                    <div className='flex gap-10 flex-col'>
                        <h1 className={`font-bold  whitespace-nowrap lg:text-center xl:text-start text-xl sm:text-3xl md:text-4xl font-poppins text-base-100 ${isDarkMode ? "text-timberwolf" : "text-orange"}`}>Dashboard</h1>
                        <p className={`text-justify desc text-sm sm:text-base leading-relaxed font-roboto text-base-100 ${isDarkMode ? "text-timberwolf" : ""}`}>Manage your blog, track your progress, and engage with your audience on Blog-E-verse's intuitive dashboard. With our user-friendly interface, you can monitor your performance, analyze your data, and optimize your content to reach your blogging goals. Join us today and take control of your blogging journey!</p>
                    </div>

                </div>
                <div className='lg:w-1/3 flex-shrink-0 xl:mt-14 lg:mt-6 w-2/3'>
                    <img src="/home/dashboard.svg" alt="" className='w-full h-full' />
                </div>
            </div>
        </section>
    )
}
