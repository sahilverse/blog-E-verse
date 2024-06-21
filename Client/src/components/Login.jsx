import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { PiEyeSlashThin } from "react-icons/pi";
import { PiEyeThin } from "react-icons/pi";

/**
 * Renders a login component.
 * @returns {JSX.Element} The login component.
 */
export const Login = () => {
    const passwordRef = useRef(null);
    const [showPassword, setShowPassword] = useState(false);
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    });

    /**
     * Toggles the visibility of the password field.
     */
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
        passwordRef.current.type = showPassword ? 'password' : 'text';
    }

    /**
     * Handles the input change event.
     * @param {Object} e - The event object.
     */
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    }

    /**
     * Handles the form submission event.
     * @param {Object} e - The event object.
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <>
            <section id='login' className='mt-14 mb-10 lg:px-0 px-4 '>
                <div className="container mx-auto rounded-lg sm:p-14 py-10 p-10 flex justify-center lg:gap-20 xl:gap-72 lg:flex-row flex-col-reverse items-center gap-16  ">
                    <div className='flex flex-col gap-6 justify-center xl:ml-20 lg:ml-0'>
                        <div className='flex gap-10 flex-col'>
                            <h1 className="font-bold whitespace-nowrap font-poppins lg:text-center xl:text-start text-xl sm:text-3xl md:text-4xl">Login</h1>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-4">
                                <input type="text" placeholder="Email" className='input input-bordered' value={formValues.email} onChange={handleInputChange} name='email' />
                                <div className="input input-bordered flex items-center justify-between">
                                    <input type="password" placeholder="Password" className='w-full' ref={passwordRef} value={formValues.password} onChange={handleInputChange} name='password' />
                                    <button type='button' onClick={handleShowPassword} className='focus:outline-none'>
                                        {showPassword ? <PiEyeSlashThin className='text-gray-500' /> : <PiEyeThin className='text-gray-500' />}
                                    </button>

                                </div>

                            </div>
                            <div className="item mt-4">

                                <button type="submit" className='btn btn-primary flex-shrink-0  h-4 rounded-md w-full tracking-wider bg-sage border-none text-brunsickGreen uppercase hover:bg-sage mb-2'>Login</button>
                                <Link to='/register' className='text-center  text-sm text-gray-500 hover:text-gray-700 font-roboto'>Forgot Password?</Link>

                                <hr className="border-t border-gray-100 my-4" />

                                <Link to="/signup" className='btn btn-primary flex-shrink-0  h-4 rounded-md w-full tracking-wider bg-[#d9d7cd] border-none text-brunsickGreen uppercase hover:bg-sage mb-2'>Sign Up</Link>



                            </div>

                        </form>


                    </div>
                    <div className='lg:w-1/3 flex-shrink-0 xl:mt-14 lg:mt-6 w-2/3'>
                        <img src="/login/login.svg" alt="" className='w-full h-full' />
                    </div>
                </div>
            </section>
        </>
    )
}
