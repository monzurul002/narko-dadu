import { Link } from "react-router-dom"
import logo from '../../assets/logo.svg'
import { FaDiscord, FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
    const navitems = <>
        <li><Link to='/'>Home</Link> </li>
        <li><a href='#minting'>Minting</a> </li>
        <li><a href='#about'>About</a> </li>
        <li><a href='#collection'>Colection</a> </li>
        <li><a href='#roadmap'>Roadmap</a> </li>
        <li><Link to='/blogs' >Blog</Link> </li>
    </>
    return (
        <div className="navbar text-white z-20 fixed top-0   font-semibold   bg-opacity-30 w-full bg-[#0F051D]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu bg-gradient-to-r from-[#120535] via-[#0f051d]	  to-[#120535]  text-white font-bold menu-sm dropdown-content mt-3 z-[1] p-2 shadow  text-xl  rounded-box w-52">
                        {navitems}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"> <img className="w-10/12" src={logo} alt="" /></a>
                <div className="flex lg:hidden place-items-end">
                    <a className="btn btn-outline ml-10 md:ml-0 mt-2 lg:mt-0 justify-end text-white rounded-2xl">Connect Wallet</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-xl px-1">
                    {navitems}
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex	  gap-3 mr-4 md:mr-14">
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