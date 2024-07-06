import React from 'react'
import { useAuth } from '../../contexts/AuthProvider'

export const HomeProtected = () => {
    const { user } = useAuth();
    return (
        <section>
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center mt-8">Welcome, {user?.name}!</h1>
                <p className="text-center mt-4">You are now logged in and can access the protected content.</p>
            </div>
        </section>
    )
}
