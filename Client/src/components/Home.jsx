import React from 'react'
import Hero from './subcomponents/home/Hero'
import Discover from './subcomponents/home/Discover'
import Create from './subcomponents/home/Create'
import Engage from './subcomponents/home/Engage'
import Dashboard from './subcomponents/home/Dashboard'
import FaqsComponent from './FaqsComponent'



export default function Home() {

    return (
        <>
            {/* Hero Section */}
            <Hero />
            {/* Hero Section */}

            {/* Discover Section */}
            <Discover />
            {/* Discover Section */}

            {/* create section */}
            <Create />
            {/* create section */}

            {/* Engage Section */}
            <Engage />
            {/* Engage Section */}

            {/* Dashboard Section */}
            <Dashboard />
            {/* Dashboard Section */}

            {/* faq section */}
            <FaqsComponent />


        </>

    )
}


