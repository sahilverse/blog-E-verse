import React from 'react'
import ThemeController from './subcomponents/ThemeController';

export const ThemecontrollerIcon = () => {
    return (
        <div className="flex gap-2 ">
            {/* Theme Controller starts */}
            <div className='mr-2 flex align-center'>

                <ThemeController />

            </div>
            {/* Theme Controller End */}

            {/* <input type="text" placeholder="Search" className="input input-bordered w-24 bg-transparent md:w-auto" /> */}
        </div>
    )
}
