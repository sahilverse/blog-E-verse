import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Hero() {
    const navigate = useNavigate()
    return (
        <section id='hero' className=' mt-16 lg:mt-20 xl:pr-10 lg:px-6 xl:px-0 flex items-center'>
            <div className="lg:container flex lg:justify-center lg:flex-row xl:mr-auto xl:ml-0 xl:rounded-r-lg xl:p-14 xl:py-24 2xl:gap-60 xl:gap-28 lg:py-12 lg:gap-14 md:rounded-lg xl:rounded-l-none   lg:px-20 lg:items-start flex-col-reverse items-center gap-16 py-10 ">
                <div className='flex flex-col gap-8 lg:gap-6 justify-center ml-20 lg:ml-6'>
                    <div className='flex gap-10 flex-col'>
                        <h1 className="text-5xl font-bold text-orange text-center whitespace-nowrap lg:text-4xl">Welcome to Blog-E-verse</h1>
                        <p className="text-justify desc pr-10 lg:p-0">where words come to life and stories find their home! Dive into a world of creativity, connection, and community as you unleash your inner writer, connect with fellow bloggers, and embark on an exciting journey of self-expression and discovery. With Blog-E-verse, every keystroke brings you closer to sharing your voice, shaping conversations, and making your mark in the blogosphere. Join us today and let your story unfold!

                        </p>
                    </div>

                    <div className="div flex justify-center item mt-4">

                        <button className='btn btn-primary flex-shrink-0 w-40 h-4 rounded-full tracking-wider bg-neutral-950 border-none text-timberwolf uppercase hover:bg-neutral-950' onClick={() => navigate("/create")}>get started</button>
                    </div>
                </div>
                <div className='md:w-11/12 flex-shrink-0 mt-14 xl:w-2/5 lg:w-3/5 lg:mt-20 xl:mt-14'>
                    <img src="/home/blogillustration.svg" alt="" className='w-full h-full' />
                </div>
            </div>
        </section >
    )
}
