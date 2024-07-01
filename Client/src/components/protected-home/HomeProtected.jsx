import React from 'react'
import { useAuth } from '../../contexts/AuthProvider'

export const HomeProtected = () => {
    const { user } = useAuth();
    return (
        <div className='container mx-auto bg-base-100'>Welcome Home {user.name}</div>
    )
}
