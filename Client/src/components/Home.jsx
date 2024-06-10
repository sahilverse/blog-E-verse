import React from 'react'
import { useNavigate } from 'react-router-dom'



export default function Home() {
    const navigate = useNavigate()

    return (
        <>
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

            <section id="engage" className='mt-14'>
                <div className="container mx-auto rounded-lg p-14 py-24 flex justify-center gap-72">
                    <div className='w-1/3 h-1/3 flex-shrink-0 mt-14'>
                        <img src="/home/engage.png" alt="" className='w-full h-full' />
                    </div>
                    <div className='flex flex-col gap-6 justify-center ml-20 mt-20'>
                        <div className='flex gap-10 flex-col'>
                            <h1 className="text-5xl font-bold text-orange  whitespace-nowrap">Engage</h1>
                            <p className="text-justify desc">Connect with fellow bloggers, readers, and writers as you engage in conversations, share feedback, and build relationships on Blog-E-verse. With our interactive platform, you can comment on posts, like content, and follow creators to stay informed, inspired, and involved in the blogging community. Join us today and let your voice be heard!</p>
                        </div>


                    </div>
                </div>
            </section>

            <section id="dashboard" className='mt-20 mb-10'>
                <div className="container ml-auto rounded-l-lg p-14 py-14 flex justify-center gap-72 bg-brunsickGreen">
                    <div className='flex flex-col gap-6 justify-center ml-20'>
                        <div className='flex gap-10 flex-col'>
                            <h1 className="text-5xl font-bold text-neutral-50 whitespace-nowrap">Dashboard</h1>
                            <p className="text-justify desc text-neutral-50 ">Manage your blog, track your progress, and engage with your audience on Blog-E-verse's intuitive dashboard. With our user-friendly interface, you can monitor your performance, analyze your data, and optimize your content to reach your blogging goals. Join us today and take control of your blogging journey!</p>
                        </div>

                    </div>
                    <div className='w-1/3 h-1/3 flex-shrink-0 mt-14'>
                        <img src="/home/dashboard.svg" alt="" className='w-full h-full' />
                    </div>
                </div>
            </section>


        </>

    )
}


