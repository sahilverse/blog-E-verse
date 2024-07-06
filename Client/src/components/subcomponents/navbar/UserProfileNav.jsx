import React from 'react'
import { useAuth } from '../../../contexts/AuthProvider'
import { useFirebase } from '../../../contexts/FirebaseProvider';

export const UserProfileNav = () => {
    const { user } = useAuth();
    const { logout } = useFirebase();
    return (

        <>
            {/* Profie photo and dropdown */}
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt={user?.name} src={user?.profileImageUrl} />
                    </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        <a className="justify-between">
                            Profile
                            {/* <span className="badge">New</span> */}
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a onClick={logout}>Logout</a></li>
                </ul>
            </div>
        </>
    )
}
