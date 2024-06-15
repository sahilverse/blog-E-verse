import React from 'react'

export default function Engage() {
    return (
        <section id="engage" className='lg:mt-14 mt-5'>
            <div className="container mx-auto lg:pr-4 xl:pr-12 2xl:pr-14 lg:p-14 md:pt-24 flex justify-center 2xl:gap-60 xl:gap-16 lg:gap-12 flex-col lg:flex-row px-6 gap-14">
                <div className='xl:w-3/6 2xl:w-2/5 flex-shrink-0 mt-14 lg:w-1/2'>
                    <img src="/home/engage.png" alt="" className='w-full h-full' />
                </div>
                <div className='flex flex-col gap-6 justify-center 2xl:ml-20 lg:ml-10 xl:ml-0'>
                    <div className='flex gap-6 lg:gap-10 flex-col'>
                        <h1 className="font-bold text-orange  whitespace-nowrap lg:text-center xl:text-start text-xl sm:text-3xl md:text-4xl font-poppins">Engage</h1>
                        <p className="text-justify desc text-sm sm:text-base leading-relaxed font-roboto">Connect with fellow bloggers, readers, and writers as you engage in conversations, share feedback, and build relationships on Blog-E-verse. With our interactive platform, you can comment on posts, like content, and follow creators to stay informed, inspired, and involved in the blogging community. Join us today and let your voice be heard!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
