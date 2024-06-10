import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Discover() {
    const navigate = useNavigate()
    return (

        <section className='mt-14' id='discover'>
            <div className="container mx-auto rounded-lg p-14 py-24 flex justify-center gap-72">
                <div className='w-1/3 h-1/3 flex-shrink-0 mt-14'>
                    <img src="/home/discover.svg" alt="" className='w-full h-full' />
                </div>
                <div className='flex flex-col gap-6 justify-center ml-20'>
                    <div className='flex gap-10 flex-col'>
                        <h1 className="text-5xl font-bold text-orange  whitespace-nowrap">Discover</h1>
                        <p className="text-justify desc">Explore a world of creativity, connection, and community as you discover a diverse range of blogs, stories, and voices that inspire, entertain, and enlighten. With Blog-E-verse, every click opens the door to new ideas, perspectives, and experiences that challenge, engage, and enrich your mind and soul. Join us today and let your journey begin!</p>
                    </div>

                    <div className="div flex justify-center item mt-4">

                        <button className='btn btn-primary flex-shrink-0 w-40 h-4 rounded-full tracking-wider bg-timberwolf border-none text-brunsickGreen uppercase hover:bg-timberwolf' onClick={() => navigate("/discover")}>Discover</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
