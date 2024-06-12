import React from 'react'

export default function Dashboard() {
    return (
        <section id="dashboard" className='mt-20 mb-10'>
            <div className="container ml-auto rounded-l-lg p-14 py-14 flex justify-center gap-72 bg-brunsickGreen">
                <div className='flex flex-col gap-6 justify-center ml-20'>
                    <div className='flex gap-10 flex-col'>
                        <h1 className="text-5xl font-bold text-neutral-50 whitespace-nowrap">Dashboard</h1>
                        <p className="text-justify desc text-neutral-50 ">Manage your blog, track your progress, and engage with your audience on Blog-E-verse's intuitive dashboard. With our user-friendly interface, you can monitor your performance, analyze your data, and optimize your content to reach your blogging goals. Join us today and take control of your blogging journey!</p>
                    </div>

                </div>
                <div className='w-1/3 h-1/3 flex-shrink-0 mt-14'>
                    {/* <img src="/home/dashboard.svg" alt="" className='w-full h-full' /> */}
                </div>
            </div>
        </section>
    )
}
