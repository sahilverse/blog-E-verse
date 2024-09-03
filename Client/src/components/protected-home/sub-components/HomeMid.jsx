import React, { useEffect, useState } from 'react';
import { MdPermMedia } from "react-icons/md";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { FaBlogger } from "react-icons/fa";
import axiosApi from '../../../helpers/axiosConfig';
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa6";
import { BiComment } from "react-icons/bi";
import { PiShareFatBold } from "react-icons/pi";
import { PiDotsThreeVerticalBold } from "react-icons/pi";



/**
 * Renders the middle section of the home page.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.user - The user object.
 * @param {boolean} props.isDarkMode - Indicates whether the dark mode is enabled.
 * @returns {JSX.Element} The rendered component.
 */
const HomeMid = ({ user, isDarkMode }) => {
    const [inputValue, setInputValue] = useState('');
    const [visibility, setVisibility] = useState('public');
    const [uploadImage, setUploadImage] = useState(null);
    const [posts, setPosts] = useState([]);


    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
        console.log(e.target.files[0]);
    }

    const formatCount = (number) => {
        if (number >= 1000000) {
            return (number / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        if (number >= 1000) {
            return (number / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return number.toString();
    };


    const formatTime = (createdAt) => {
        const now = new Date();
        const postDate = new Date(createdAt);
        const timeDifference = Math.abs(now - postDate);
        const secondsDifference = Math.floor(timeDifference / 1000);
        const minutesDifference = Math.floor(secondsDifference / 60);
        const hoursDifference = Math.floor(minutesDifference / 60);
        const daysDifference = Math.floor(hoursDifference / 24);

        if (secondsDifference < 60) {
            return `${secondsDifference}s ago`;
        } else if (minutesDifference < 60) {
            return `${minutesDifference}m ago`;
        } else if (hoursDifference < 24) {
            return `${hoursDifference}h ago`;
        } else if (daysDifference === 1) {
            return '1d ago';
        } else if (daysDifference > 1) {
            return postDate.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            });
        }
    };

    const handleLikePost = async (postId) => {



        try {

            const response = await axiosApi.post(`/posts/${postId}/like`, { userId: user._id });


            const updatedPosts = posts.map((post) => {
                if (post._id === postId) {
                    return response.data.post;
                }
                return post;
            }
            );


            setPosts(updatedPosts);

        } catch (error) {
            console.error('Error liking post:', error);
        }



    };



    const handleInput = (e) => {
        setInputValue(e.target.value);
    };

    const handlePost = async () => {
        const newPost = {
            content: inputValue || null,
            user: user._id,
            visibility: visibility,
            image: uploadImage || null,
        };

        try {
            if (!newPost.content && !newPost.image) {
                return new Error('Post content or image is required');
            }
            const response = await axiosApi.post('/posts', newPost);
            setPosts([response.data.post, ...posts]);
            setInputValue('');
        } catch (error) {
            console.error('Error posting:', error);
        }
    };

    const getPosts = async () => {
        try {
            const response = await axiosApi.get('/posts');
            setPosts(response.data.posts);


        } catch (error) {
            console.error('Error getting posts:', error);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className='flex flex-col gap-4 '>
            <div className="top flex flex-col justify-center ">
                <div className={` flex flex-col border border-[#3d3c39] w-[50rem] rounded-xl p-4 h-auto ${!isDarkMode && "bg-[#f9f8f8] border-none shadow-xl"} gap-4 pt-6`}>
                    <div className='flex ml-14'>
                        <div className="w-12 rounded-full mt-[7px] cursor-pointer">
                            <img alt={user?.name} src={user?.profileImageUrl} className='rounded-full' />
                        </div>
                        <div className="textarea bg-transparent">
                            <input
                                type='text'
                                className={`w-[30rem] h-[3rem] bg-transparent px-4 pt-[7px] outline-none resize-none border ${isDarkMode ? "border-[#3d3c39]" : "border-[#b4b0a4]"} rounded-3xl placeholder:text-lg text-lg`}
                                placeholder="What's on your mind?"
                                value={inputValue}
                                onChange={handleInput}
                            />
                        </div>
                        <button className='cursor-pointer bg-[#69b4c3] h-[40px] relative top-[0.69rem] w-[90px] rounded-3xl text-[#fff] font-medium hover:bg-[#5b939e]' onClick={handlePost}>
                            Post
                        </button>
                    </div>
                    <div className='ml-[8.7rem] flex gap-[5.7rem] mb-2'>
                        <div className='cursor-pointer flex gap-3 items-center'>
                            <label htmlFor='image' className='flex gap-3 items-center cursor-pointer'>
                                <MdPermMedia className='text-[#4294ff] text-2xl' />
                                <span className='font-medium'>Media</span>
                            </label>
                            <input id='image' name='image' type='file' accept='image/*' className='hidden' onChange={handleImageChange} />
                        </div>

                        <div className='cursor-pointer flex gap-3'>
                            <RiCalendarScheduleFill className='text-[#c5801f] text-2xl' />
                            <span className='font-medium'>Schedule</span>
                        </div>
                        <div className='cursor-pointer flex gap-3'>
                            <FaBlogger className='text-[#a3b18a] text-2xl' />
                            <span className='font-medium'>Blog</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom mb-4">
                {posts && posts.map((post) => (
                    <div key={post._id} className={`flex flex-col border border-[#3d3c39] w-[50rem] rounded-xl p-4 h-auto ${!isDarkMode && "bg-[#f9f8f8] border-none shadow-xl"} gap-4 pt-6 mb-2 bg-[#1d232a]`}>
                        <div className='px-14'>
                            <div className='flex justify-between'>
                                <div className="w-10 rounded-full mt-[7px] cursor-pointer flex items-center gap-3">
                                    <img alt={post.user.name} src={post.user.profileImageUrl} className='rounded-full' />
                                    <div className='flex flex-col'>
                                        <span className='whitespace-nowrap font-normal'>{post.user.name}</span>
                                        <p className='text-[#a3a4a6] text-xs whitespace-nowrap'>
                                            {formatTime(post.createdAt)}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <PiDotsThreeVerticalBold className='text-[#d6d8dc] cursor-pointer text-3xl rounded-full hover:bg-[#6c758656] p-1 mt-1' />

                                </div>

                            </div>
                            <div className="content flex flex-col gap-3">
                                <p className='mt-4 text-base  ml-2 text-justify'>{post.content}</p>
                                <div className='w-full'>

                                    {/* <img src="demo.jpg" alt='post' className='cursor-pointer rounded-lg w-full h-full' /> */}
                                </div>
                            </div>
                            <div className='flex gap-4 mt-4 justify-around pt-3' style={{ borderTop: "1px solid #424242" }}>
                                <span className='text-[#a3a4a6] cursor-pointer flex gap-2 items-center' onClick={() => handleLikePost(post._id)}>
                                    {
                                        post.likes.includes(user._id) ? <FaThumbsUp className='text-[#a3a4a6] text-lg' /> : <FaRegThumbsUp className='text-[#a3a4a6] text-lg' />}
                                    <span className='text-[#a3a4a6]'>{formatCount(post.likes.length)}</span>
                                </span>
                                <span className='text-[#a3a4a6] cursor-pointer flex gap-2 items-center'>
                                    <BiComment className='text-[#a3a4a6] text-xl mt-1' />
                                    <span className='text-[#a3a4a6]'>{formatCount(post.comments.length)}</span>
                                </span>
                                <span className='text-[#a3a4a6] cursor-pointer flex gap-2 items-center'>
                                    <PiShareFatBold className='text-[#a3a4a6] text-xl mt-1' />
                                    <span className='text-[#a3a4a6]'>{formatCount(post.shares?.length)}</span>

                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeMid;
