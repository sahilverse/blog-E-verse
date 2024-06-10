import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Hero() {
    const navigate = useNavigate()
    return (
        <section id='hero' className=' mt-20'>
            <div className="container mr-auto rounded-r-lg p-14 py-24 flex justify-center gap-72 bg-sage ">
                <div className='flex flex-col gap-6 justify-center ml-20'>
                    <div className='flex gap-10 flex-col'>
                        <h1 className="text-5xl font-bold text-orange  whitespace-nowrap">Welcome to Blog-E-verse</h1>
                        <p className="text-justify desc">where words come to life and stories find their home! Dive into a world of creativity, connection, and community as you unleash your inner writer, connect with fellow bloggers, and embark on an exciting journey of self-expression and discovery. With Blog-E-verse, every keystroke brings you closer to sharing your voice, shaping conversations, and making your mark in the blogosphere. Join us today and let your story unfold!

                        </p>
                    </div>

                    <div className="div flex justify-center item mt-4">

                        <button className='btn btn-primary flex-shrink-0 w-40 h-4 rounded-full tracking-wider bg-timberwolf border-none text-brunsickGreen uppercase hover:bg-timberwolf' onClick={() => navigate("/create")}>Create</button>
                    </div>
                </div>
                <div className='w-1/3 h-1/3 flex-shrink-0 mt-14'>
                    <img src="/home/blogillustration.svg" alt="" className='w-full h-full' />
                </div>
            </div>
        </section >
    )
}
