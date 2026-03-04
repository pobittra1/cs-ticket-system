import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    return (
        <div>
            <div className="navbar text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 text-white rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
                            <li><a>Home</a></li>
                            <li><a>FAQ</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Dialouge</a></li>
                            <li><a>Download</a></li>
                            <li><a>Contact</a></li>
                            <a className='bg-linear-to-r from-blue-500 to-purple-400 px-3 py-2 text-white cursor-pointer'> <FontAwesomeIcon icon={faPlus} /> New Ticket</a>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl m-0">CS-Ticket System</a>
                </div>
                <div className="navbar-end hidden md:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold hidden lg:flex">
                        <li><a>Home</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Dialouge</a></li>
                        <li><a>Download</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                    <a className='bg-linear-to-r from-blue-500 to-purple-400 px-3 py-2 text-white cursor-pointer font-semibold'> <FontAwesomeIcon icon={faPlus} /> New Ticket</a>

                </div>
            </div>
        </div>
    );
};

export default Navbar;