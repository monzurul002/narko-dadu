import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6"
import divider from "../../assets/divider-01.svg"
import artist1 from "../../assets/gallery/01.png"
import artist2 from "../../assets/gallery/02.png"
import artist3 from "../../assets/gallery/03.png"
import artist4 from "../../assets/gallery/04.png"
import artist5 from "../../assets/gallery/05.png"
import eherium from "../../assets/ethereum-01.png"
import { Slide } from "react-reveal"
const MeetTheArtist = () => {
    return (
        <Slide bottom>
            <div>
                <div className="flex justify-center py-8 ">
                    <img src={divider} className="w-24" alt="" />
                </div>
                <div>
                    <h1 className="text-center text-6xl py-7 font-extrabold">Meet the artists</h1>
                    <img src={eherium} className="w-7 ml-10 animate-spin-slow" alt="" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-2 w-11/12 mx-auto ">
                        {/* art1 */}
                        <div className="card  mx-auto w-60 h-96 card-container rounded-3xl mt-4 shadow-xl">
                            <figure className="px-1 pt-2">
                                <img src={artist1} alt="Shoes" className="rounded-3xl mt-2 w-52 h-60  " />
                            </figure>
                            <div className="text-center my-2">
                                <h2 className="text-2xl font-bold" >Steps Jobs</h2>
                                <p className="text-slate-400 ">Artist</p>
                                <div className="flex justify-center mt-5 gap-2">
                                    <FaGithub />
                                    <FaTwitter />
                                    <FaInstagram />
                                </div>
                            </div>
                        </div>
                        {/* art2 */}
                        <div className="card mx-auto w-60 h-96 card-container rounded-3xl mt-14 shadow-xl">
                            <figure className="px-1 pt-2">
                                <img src={artist2} alt="Shoes" className="rounded-3xl mt-2 w-52 h-60  " />
                            </figure>
                            <div className="text-center my-2">
                                <h2 className="text-xl font-bold" >Dr. Shorfillah</h2>
                                <p className="text-slate-400 ">Artist</p>
                                <div className="flex justify-center mt-5 gap-2">
                                    <FaGithub />
                                    <FaTwitter />
                                    <FaInstagram />
                                </div>
                            </div>
                        </div>
                        {/* art3 */}
                        <div className="card w-60 mx-auto h-96 card-container rounded-3xl mt-4 shadow-xl">
                            <figure className="px-1 pt-2">
                                <img src={artist3} alt="Shoes" className="rounded-3xl mt-2 w-52 h-60  " />
                            </figure>
                            <div className="text-center my-2">
                                <h2 className="text-2xl font-bold" >Steps Jobs</h2>
                                <p className="text-slate-400 ">Artist</p>
                                <div className="flex justify-center mt-5 gap-2">
                                    <FaGithub />
                                    <FaTwitter />
                                    <FaInstagram />
                                </div>
                            </div>
                        </div>
                        {/* art4 */}
                        <div className="card w-60 mx-auto h-96 card-container rounded-3xl mt-14 shadow-xl">
                            <figure className="px-1 pt-2">
                                <img src={artist4} alt="Shoes" className="rounded-3xl mt-2 w-52 h-60  " />
                            </figure>
                            <div className="text-center my-2">
                                <h2 className="text-2xl font-bold" >Laila Ede</h2>
                                <p className="text-slate-400 ">Artist</p>
                                <div className="flex justify-center mt-5 gap-2">
                                    <FaGithub />
                                    <FaTwitter />
                                    <FaInstagram />
                                </div>
                            </div>
                        </div>
                        {/* art5 */}
                        <div className="card w-60  mx-auto h-96 card-container rounded-3xl mt-4 shadow-xl">
                            <figure className="px-1 pt-2">
                                <img src={artist5} alt="Shoes" className="rounded-3xl mt-2 w-52 h-60  " />
                            </figure>
                            <div className="text-center my-2">
                                <h2 className="text-2xl font-bold" >Jabed Mukhaum</h2>
                                <p className="text-slate-400 ">Artist</p>
                                <div className="flex justify-center mt-5 gap-2">
                                    <FaGithub />
                                    <FaTwitter />
                                    <FaInstagram />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Slide>
    );
};

export default MeetTheArtist;