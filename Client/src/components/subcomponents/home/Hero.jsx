import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {

    return (
        <section id='hero' className=' mt-8 lg:mt-20  lg:pl-6 xl:px-0 flex sm:items-center sm:justify-center '>
            <div className="container flex lg:justify-center lg:flex-row xl:mr-auto xl:ml-0 lg:gap-6 xl:p-14 xl:py-24 2xl:gap-24  lg:py-12 lg:items-start flex-col-reverse items-center gap-16 pt-10 overflow-x-hidden xl:px-20 2xl:px-0 px-6">
                <div className='flex flex-col gap-8 lg:gap-6 justify-center  lg:ml-6 lg:pl-24 xl:pl-0'>
                    <div className='flex gap-6 md:gap-10 flex-col items-center'>
                        <h1 className="text-xl sm:text-3xl  md:mr-0  md:text-4xl font-bold text-orange md:text-center whitespace-nowrap font-poppins">Welcome to Blog-E-verse</h1>
                        <p className=" leading-relaxed text-justify 2xl:ml-20 text-sm sm:text-base px-4 md:px-6 lg:p-0 font-roboto ">where words come to life and stories find their home! Dive into a world of creativity, connection, and community as you unleash your inner writer, connect with fellow bloggers, and embark on an exciting journey of self-expression and discovery. With Blog-E-verse, every keystroke brings you closer to sharing your voice, shaping conversations, and making your mark in the blogosphere. Join us today and let your story unfold!

                        </p>
                    </div>

                    <div className="div flex justify-center item mt-4">

                        <Link className='btn btn-primary flex-shrink-0 w-40 h-4 rounded-full tracking-wider bg-neutral-950 border-none text-timberwolf uppercase hover:bg-neutral-950' to='/login'>get started</Link>
                    </div>
                </div>
                <div className='w-4/5 sm:w-11/12 px-2 flex-shrink-0 sm:mt-14 lg:w-7/12 xl:w-3/5 lg:mt-0 2xl:w-3/6 lg:pr-32 xl:pr-0 2xl:pl-20'>
                    <img src="/home/blogillustration.svg" alt="" className='w-full h-full' />
                </div>
            </div>
        </section >
    )
}
