import React from 'react'
import { Link } from 'react-router-dom'

export default function Create() {

    return (
        <section id='create' className='mt-14 mb-10 lg:px-0 px-4 '>
            <div className="container mx-auto rounded-lg sm:p-14 py-10 p-10 flex justify-center lg:gap-20 xl:gap-72 bg-timberwolf lg:flex-row flex-col-reverse items-center gap-16  ">
                <div className='flex flex-col gap-6 justify-center xl:ml-20 lg:ml-0'>
                    <div className='flex gap-10 flex-col'>
                        <h1 className="font-bold text-orange  whitespace-nowrap font-poppins lg:text-center xl:text-start text-xl sm:text-3xl md:text-4xl">Create</h1>
                        <p className="text-justify desc text-sm sm:text-base leading-relaxed font-roboto">Unleash your inner writer, share your voice, and shape conversations as you create, publish, and promote your blog posts on Blog-E-verse. With our easy-to-use platform, you can bring your ideas to life, connect with readers, and build a community around your passion, expertise, and interests. Join us today and let your creativity flow!</p>
                    </div>

                    <div className="div flex justify-center item mt-4">

                        <Link to="/login" className='btn btn-primary flex-shrink-0 w-40 h-4 rounded-full tracking-wider bg-sage border-none text-brunsickGreen uppercase hover:bg-sage'>get started</Link>
                    </div>
                </div>
                <div className='lg:w-1/3 flex-shrink-0 xl:mt-14 lg:mt-6 w-2/3'>
                    <img src="/home/create.svg" alt="" className='w-full h-full' />
                </div>
            </div>
        </section>
    )
}
