import React from 'react'
import { useNavigate } from 'react-router-dom'
import Hero from './subcomponents/home/Hero'
import Discover from './subcomponents/home/Discover'
import Create from './subcomponents/home/Create'
import Engage from './subcomponents/home/Engage'
import Dashboard from './subcomponents/home/Dashboard'



export default function Home() {
    const navigate = useNavigate()

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


        </>

    )
}


