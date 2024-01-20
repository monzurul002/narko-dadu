import Navbar from "../Navbar/Navbar";
import AboutThePlatfrom from "./AboutThePlatfrom";
import ArtWorks from "./ArtWorks";
import Banner from "./Banner";
import MeetTheArtist from "./MeetTheArtist";
import Mint from "./Mint";
import QuestionStuff from "./QuestionStuff";
import Roadmap from "./Roadmap";



const Home = () => {
    return (
        <div >

            <Navbar />
            <Banner />
            <Mint />
            <AboutThePlatfrom />
            <ArtWorks />
            <Roadmap />
            <MeetTheArtist />
            <QuestionStuff />
        </div>
    );
};

export default Home;