import { Link } from 'react-router-dom';

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
            <Link to={`/${user?.username}`} onClick={() => console.log(user)}>

                <div className={`profile-img flex items-center gap-4 cursor-pointer rounded-md  px-4 py-2 ${isDarkMode ? "hover:bg-hover-bg" : "hover:bg-[#c9c9cf]"}`}>
                    <div className="w-10 rounded-full ">
                        <img alt={user?.name} src={user?.profileImageUrl} className='rounded-full' />
                    </div>
                    <span className="text-lg font-medium">{user.name}</span>
                </div>
            </Link>
        </div>
    )

}


export default HomeLeft;