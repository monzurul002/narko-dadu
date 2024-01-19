import Navbar from "../Navbar/Navbar";
import AboutThePlatfrom from "./AboutThePlatfrom";
import Banner from "./Banner";
import Mint from "./Mint";



const Home = () => {
    return (
        <div className='bg-gradient-to-r from-[#120535] via-[#0f051d]	  to-[#120535] text-white '>
            {/* <div className='bg-gradient-to-r from-[#1a0a49] via-[#251342]	  to-purple-950 text-white '> */}
            <Navbar />
            <Banner />
            <Mint />
            <AboutThePlatfrom />
        </div>
    );
};

export default Home;