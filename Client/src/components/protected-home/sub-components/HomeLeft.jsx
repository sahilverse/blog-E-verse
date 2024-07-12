import { Link } from 'react-router-dom';
import { FaUserFriends } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { TbLayoutDashboardFilled } from "react-icons/tb";

/**
 * Renders the left side of the home page (protected Home).
 *
 * @param {Object} props - The component props.
 * @param {Object} props.user - The user object.
 * @param {boolean} props.isDarkMode - The dark mode state.
 * 
 * @returns {JSX.Element} The rendered component.
 */
const HomeLeft = ({ user, isDarkMode }) => {

    return (
        <div className="w-[30vh]">
            <div>
                <Link to={`/${user?.username}`}>
                    <div className={`profile-img flex items-center gap-4 cursor-pointer rounded-md  px-4 py-2 ${isDarkMode ? "hover:bg-hover-bg" : "hover:bg-[#c9c9cf]"}`}>
                        <div className="w-8 rounded-full ">
                            <img alt={user?.name} src={user?.profileImageUrl} className='rounded-full' />
                        </div>
                        <span className="text-md font-medium">{user.name}</span>
                    </div>
                </Link>


                <Link to={`/friends`} >
                    <div className='mt-2'>
                        <div className={`flex items-center  px-4 py-2 gap-4 ${isDarkMode ? "hover:bg-hover-bg" : "hover:bg-[#c9c9cf]"} rounded-md`}>

                            <FaUserFriends className="text-[2.25rem] text-[#4294ff]" />
                            <span className="text-md font-medium">Friends</span>


                        </div>
                    </div>
                </Link>

                <Link to={`/groups`} >
                    <div>
                        <div className={`flex items-center  px-4 py-2 gap-4 ${isDarkMode ? "hover:bg-hover-bg" : "hover:bg-[#c9c9cf]"} rounded-md`}>

                            <MdGroups className="text-[2.25rem] text-fernGreen" />
                            <span className="text-md font-medium">Groups</span>
                        </div>
                    </div>
                </Link>

                <Link to={`/dashboard`} >
                    <div className='mt-1'>
                        <div className={`flex items-center  px-4 py-2 gap-4 pl-3 ${isDarkMode ? "hover:bg-hover-bg" : "hover:bg-[#c9c9cf]"} rounded-md`}>

                            <TbLayoutDashboardFilled className="text-[2.25rem] text-sage" />
                            <span className="text-md font-medium">Dashboard</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div >
    )

}


export default HomeLeft;