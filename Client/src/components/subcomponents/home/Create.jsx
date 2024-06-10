import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Create() {
    const navigate = useNavigate()
    return (
        <section id='create' className='mt-14'>
            <div className="container mx-auto rounded-lg p-14 py-10 flex justify-center gap-72 bg-timberwolf">
                <div className='flex flex-col gap-6 justify-center ml-20'>
                    <div className='flex gap-10 flex-col'>
                        <h1 className="text-5xl font-bold text-orange  whitespace-nowrap">Create</h1>
                        <p className="text-justify desc">Unleash your inner writer, share your voice, and shape conversations as you create, publish, and promote your blog posts on Blog-E-verse. With our easy-to-use platform, you can bring your ideas to life, connect with readers, and build a community around your passion, expertise, and interests. Join us today and let your creativity flow!</p>
                    </div>

                    <div className="div flex justify-center item mt-4">

                        <button className='btn btn-primary flex-shrink-0 w-40 h-4 rounded-full tracking-wider bg-sage border-none text-brunsickGreen uppercase hover:bg-sage' onClick={() => navigate("/create")}>Create</button>
                    </div>
                </div>
                <div className='w-1/3 h-1/3 flex-shrink-0 mt-14'>
                    <img src="/home/create.svg" alt="" className='w-full h-full' />
                </div>
            </div>
        </section>
    )
}
