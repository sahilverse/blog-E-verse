import React from 'react'
import { Link } from 'react-router-dom'
import { MobileNav } from './MobileNav'

export const Navlinks = () => {
    return (
        <>
            {/* NavLinks starts */}
            <div className="hidden md:flex gap-4 ">
                <Link className="btn btn-ghost" to="/"><span className='font-bold'>Home</span></Link>
                <Link className="btn btn-ghost" to="/discover"><span className='font-bold'>Discover</span></Link>
                <Link className="btn btn-ghost" to="/create"><span className='font-bold'>Create</span></Link>
                <Link className="btn btn-ghost" to="/dashboard"><span className='font-bold'>Dashboard</span></Link>
            </div>
            {/* NavLinks ends */}

            {/* Mobile Navlink */}
            <div className='md:hidden pr-6'>

                <MobileNav />
            </div>
        </>
    )
}
