import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PiEyeSlashThin } from "react-icons/pi";
import { PiEyeThin } from "react-icons/pi";
import { useForm } from 'react-hook-form';
import axiosApi from '../helpers/axiosConfig';
import { useFirebase } from '../contexts/FirebaseProvider';


/**
 * Renders a signup component.
 * @returns {JSX.Element} The Signup component.
 */

export const Signup = () => {
    const { signInWithGoogle } = useFirebase();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();


    /**
     * Toggles the visibility of the password field.
     */
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Function to handle form submission
    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await axiosApi.post('/signup', data);


            if (response.status == 201) {
                console.log('Signup successful:', response.data);
                navigate('/login');
            }



        } catch (error) {
            if (error.response) {
                if (error.response.status === 400) {
                    alert("User already exists");
                } else if (error.response.status === 500) {
                    alert("Internal server error");
                } else {
                    alert(`Error: ${error.response.status}. Please try again later.`);
                }
            }

        }
    };



    return (
        <>
            {/* Signup section */}
            <section id='login' className='mt-6 xl:mt-14  lg:px-0 px-4 '>
                <div className="container mx-auto rounded-lg sm:p-14 py-10 p-10 flex justify-center lg:gap-20 xl:gap-72 lg:flex-row flex-col-reverse items-center gap-16  ">
                    <div className='flex flex-col gap-6 justify-center xl:ml-20 lg:ml-0'>
                        <div className='flex gap-10 flex-col'>
                            <h1 className="font-bold whitespace-nowrap font-poppins lg:text-center xl:text-start text-xl sm:text-3xl md:text-4xl">Sign Up</h1>
                        </div>

                        {/* signup form */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col gap-4">
                                {/* UserName input */}
                                <input type="text" placeholder="Full Name" className='input input-bordered' {...register("name", {
                                    required: "This field is required"
                                })} autoComplete='name' />
                                {errors.name && <p className='text-[#C91313] text-sm'>{errors.name.message}</p>}

                                {/* Email input */}
                                <input type="text" placeholder="Email" className='input input-bordered' {...register("email", {
                                    required: "This field is required", pattern: {
                                        value: emailRegex,
                                        message: 'Please enter a valid email'
                                    }
                                })} autoComplete='email' />
                                {errors.email && <p className='text-[#C91313] text-sm'>{errors.email.message}</p>}
                                <div className="input input-bordered flex items-center justify-between">

                                    {/* Password input */}
                                    <input type={showPassword ? 'text' : 'password'} placeholder="Password" className='w-full' {...register('password', {
                                        required: 'This field is required'
                                    })} autoComplete='current-password' />

                                    {/* Toggle password visibility */}
                                    <button type='button' onClick={handleShowPassword} className='focus:outline-none'>
                                        {showPassword ? <PiEyeSlashThin className='text-gray-500' /> : <PiEyeThin className='text-gray-500' />}
                                    </button>
                                </div>
                                {errors.password && <p className='text-[#C91313] text-sm'>{errors.password.message}</p>}
                            </div>
                            <div className="item mt-4">

                                {/* SignUP button */}
                                <button type="submit" className='btn btn-primary flex-shrink-0  h-4 rounded-md w-full tracking-wider bg-sage border-none text-brunsickGreen uppercase hover:bg-sage/80 mb-2'>Sign Up</button>

                                {/* sign up with google */}

                                <div className="px-0 max-w-sm">
                                    <button onClick={signInWithGoogle} type="button" className="text-[#fff] w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"><svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>
                                </div>

                                <hr className="border-t border-gray-100 my-4" />

                                {/* Sign up button */}
                                <Link to="/login" className='btn btn-primary flex-shrink-0  h-4 rounded-md w-full tracking-wider bg-[#d9d7cd] border-none text-brunsickGreen uppercase hover:bg-[#d9d7cd]/80 mb-2'>Login</Link>





                            </div>

                        </form>


                    </div>
                    {/* Signup image */}
                    <div className='lg:w-1/3 flex-shrink-0 xl:mt-14 lg:mt-6 w-2/3'>
                        <img src="/signup/signup.svg" alt="" className='w-full h-full' />
                    </div>
                </div>
            </section>
        </>
    )
}
