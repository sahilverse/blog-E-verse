import { Link } from 'react-router-dom';
import { FaUserFriends } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { RiMessage3Fill } from "react-icons/ri";

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

        <div>
            {/* Profile */}
            <Link to={`/${user?.username}`}>
                <div className={`profile-img flex items-center gap-4 cursor-pointer rounded-md  px-4 py-2 ${isDarkMode ? "hover:bg-hover-bg" : "hover:bg-[#c9c9cf]"}`}>
                    <div className="w-8 rounded-full ">
                        <img alt={user?.name} src={user?.profileImageUrl} className='rounded-full' />
                    </div>
                    <span className="text-md font-medium">{user.name}</span>
                </div>
            </Link>

            {/* Friends */}
            <Link to={`/friends`} >
                <div className='mt-2'>
                    <div className={`flex items-center  px-4 py-2 gap-4 ${isDarkMode ? "hover:bg-hover-bg" : "hover:bg-[#c9c9cf]"} rounded-md`}>
                        <FaUserFriends className="text-[2.25rem] text-[#4294ff]" />
                        <span className="text-md font-medium">Friends</span>
                    </div>
                </div>
            </Link>

            {/* Messages */}
            <Link to={`/messages`} >
                <div className='mt-2'>
                    <div className={`flex items-center relative  px-4 py-2  gap-4 ${isDarkMode ? "hover:bg-hover-bg" : "hover:bg-[#c9c9cf]"} rounded-md`}>
                        <RiMessage3Fill className="text-[2.1rem] text-[#6ab4c3]" />
                        <span className={`absolute top-0 left-2 bg-[#E61133] rounded-full w-6 h-6 flex items-center justify-center text-xs ${!isDarkMode && "text-[#fff]"}`}>10</span>
                        <span className="text-md font-medium">Messages</span>
                    </div>
                </div>
            </Link>

            {/* Groups */}
            <Link to={`/groups`} >
                <div>
                    <div className={`flex items-center  px-4 py-2 gap-4 ${isDarkMode ? "hover:bg-hover-bg" : "hover:bg-[#c9c9cf]"} rounded-md`}>
                        <MdGroups className="text-[2.3rem] text-fernGreen" />
                        <span className="text-md font-medium">Groups</span>
                    </div>
                </div>
            </Link>

            {/* Dashboard */}
            <Link to={`/dashboard`} >
                <div className='mt-1'>
                    <div className={`flex items-center  px-4 py-2 gap-4 pl-3 ${isDarkMode ? "hover:bg-hover-bg" : "hover:bg-[#c9c9cf]"} rounded-md`}>
                        <TbLayoutDashboardFilled className="text-[2.25rem] text-sage" />
                        <span className="text-md font-medium">Dashboard</span>
                    </div>
                </div>
            </Link>
        </div>

    )

}


export default HomeLeft;