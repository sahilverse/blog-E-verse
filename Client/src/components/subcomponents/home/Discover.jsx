import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Discover() {
    const navigate = useNavigate()
    return (

        <section className='lg:mt-14 mt-5' id='discover'>
            <div className="container mx-auto lg:pr-4 2xl:pr-14 lg:p-14 md:pt-24 flex justify-center 2xl:gap-60 xl:gap-20 lg:gap-0 flex-col lg:flex-row gap-10 p-10">
                <div className='xl:w-3/6 2xl:w-2/5 flex-shrink-0 mt-14 lg:w-1/2'>
                    <img src="/home/discover.svg" alt="" className='w-full h-full' />
                </div>
                <div className='flex flex-col gap-6 justify-center lg:ml-20'>
                    <div className='flex gap-6 lg:gap-10 flex-col'>
                        <h1 className="font-bold text-orange  whitespace-nowrap lg:text-center xl:text-start text-xl sm:text-3xl md:text-4xl font-poppins">Discover</h1>
                        <p className="text-justify desc text-sm sm:text-base leading-relaxed font-roboto">Explore a world of creativity, connection, and community as you discover a diverse range of blogs, stories, and voices that inspire, entertain, and enlighten. With Blog-E-verse, every click opens the door to new ideas, perspectives, and experiences that challenge, engage, and enrich your mind and soul. Join us today and let your journey begin!</p>
                    </div>

                    <div className="div flex justify-center item mt-4">

                        <button className='btn btn-primary flex-shrink-0 w-40 h-4 rounded-full tracking-wider bg-timberwolf border-none text-brunsickGreen uppercase hover:bg-timberwolf' onClick={() => navigate("/discover")}>Discover</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
