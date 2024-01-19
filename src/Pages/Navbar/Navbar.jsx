import { Link } from "react-router-dom"
import logo from '../../assets/logo.svg'
import { FaDiscord, FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
    const navitems = <>
        <li><Link to='/'>Home</Link> </li>
        <li><a href='#banner'>Minting</a> </li>
        <li><a href='#banner2'>About</a> </li>
        <li><Link to='/'>Colection</Link> </li>
        <li><Link to='/'>Roadmap</Link> </li>
        <li><Link to='/' >Blog</Link> </li>
    </>
    return (
        <div className="navbar text-white z-20 fixed top-0 font-semibold   bg-opacity-30 w-full bg-[#0F051D]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  text-xl  rounded-box w-52">
                        {navitems}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"> <img className="w-10/12" src={logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-xl px-1">
                    {navitems}
                </ul>
            </div>
            <div className="navbar-end gap-3 mr-14">
                <a href="#"><FaXTwitter className="text-xl" />
                </a>
                <a href="#"> <FaDiscord className="text-xl" />
                </a>
                <a className="btn btn-outline text-white rounded-2xl">Connect Wallet</a>
            </div>
        </div>
    );
};

export default Navbar;