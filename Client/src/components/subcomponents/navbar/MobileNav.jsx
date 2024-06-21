import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

export const MobileNav = () => {
    const [isHamburger, setIsHamburger] = useState(false)

    const handleHamburger = () => {
        setIsHamburger(!isHamburger)
    }


    return (

        <div className="w-full ">
            <div>
                {isHamburger ? <RxCross2 onClick={handleHamburger} className='text-3xl text-primary-600' /> : <RxHamburgerMenu onClick={handleHamburger} className='text-3xl text-primary-600' />}
            </div>
            <div className={`${isHamburger ? 'block' : 'hidden'} `}>
                <div className='flex flex-col absolute right-0 left-0 w-full mt-4 items-center bg-[#B4B8B4] py-4'>
                    <Link className="btn btn-ghost" to="/"><span className='font-bold'>Home</span></Link>
                    <Link className="btn btn-ghost" to="/discover"><span className='font-bold'>Discover</span></Link>
                    <Link className="btn btn-ghost" to="/create"><span className='font-bold'>Create</span></Link>
                    <Link className="btn btn-ghost" to="/dashboard"><span className='font-bold'>Dashboard</span></Link>
                </div>
            </div>

        </div>

    )
}
