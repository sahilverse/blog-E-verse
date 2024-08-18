import React, { useEffect, useState } from 'react';
import { MdPermMedia } from "react-icons/md";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { FaBlogger } from "react-icons/fa";
import axiosApi from '../../../helpers/axiosConfig';

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
    const [posts, setPosts] = useState([]);

    const handleInput = (e) => {
        setInputValue(e.target.value);
    };

    const handlePost = async () => {
        const newPost = {
            content: inputValue,
            user: user,
            visibility: visibility,
            image: null,
        };

        try {
            if (!newPost.content) {
                return;
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
    }, [posts]);

    return (
        <div className='flex flex-col gap-8 '>
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
                        <div className='cursor-pointer flex gap-3'>
                            <MdPermMedia className='text-[#4294ff] text-2xl' />
                            <span className='font-medium'>Media</span>
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
                {/* Bottom part (Below the Post Section (Feed) */}
            </div>
            <div className="bottom h-auto overflow-auto">
                {posts && posts.map((post) => (
                    <div key={post._id} className={`shadow-xl flex flex-col border border-[#3d3c39] w-[50rem] rounded-xl p-4 h-auto ${!isDarkMode && "bg-[#f9f8f8] border-none"} gap-4 pt-6 mb-3`}>
                        <div className='flex ml-14'>
                            <div className="w-12 rounded-full mt-[7px] cursor-pointer">
                                <img alt={post.user.name} src={post.user.profileImageUrl} className='rounded-full' />
                            </div>
                            <div>{post.content}</div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeMid;
