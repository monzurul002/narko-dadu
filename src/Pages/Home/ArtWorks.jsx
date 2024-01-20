import { Slide } from "react-reveal"
import divider from "../../assets/divider-01.svg"
import art1 from '../../assets/gallery/art_01.jpg'
import art2 from '../../assets/gallery/art_02.jpg'
import art3 from '../../assets/gallery/art_03.jpg'
import art4 from '../../assets/gallery/art_04.jpg'
import art5 from '../../assets/gallery/art_05.jpg'
import art6 from '../../assets/gallery/art_06.jpg'
import art7 from '../../assets/gallery/art_07.jpg'
import art8 from '../../assets/gallery/art_08.jpg'
import { FaArrowRight } from "react-icons/fa";

const ArtWorks = () => {
    return (
        <Slide bottom>
            <div className="w-11/12 mx-auto py-5" id="collection">
                <div className="flex justify-center py-8 ">
                    <img src={divider} className="w-24" alt="" />
                </div>
                <div>
                    <h1 className="text-6xl text-center font-extrabold py-10">Latest artworks</h1>
                    <div className="grid grid-cols-1 md:grid-cols-4 mt-8">
                        {/* art1 */}
                        <div className="card w-72 h-96 card-container mt-4 shadow-xl">
                            <figure className="px-1 pt-7">
                                <img src={art1} alt="Shoes" className="rounded-xl w-64 h-80 pt-2" />
                            </figure>
                            <div className="text-center my-2">
                                <h2 className="text-2xl font-bold" >#Metaverse</h2>
                                <p className="text-slate-400 font-semibold">By TheSalvare</p>
                            </div>
                        </div>
                        {/* art2 */}
                        <div className="card w-72 mt-[-25px]  h-96 card-container shadow-xl">
                            <figure className="px-1 pt-7">
                                <img src={art2} alt="Shoes" className="rounded-xl w-64 h-80 pt-2" />
                            </figure>
                            <div className="text-center my-2">
                                <h2 className="text-2xl font-bold" >#Metaverse</h2>
                                <p className="text-slate-400 font-semibold">By TheSalvare</p>
                            </div>
                        </div>
                        {/* art3 */}
                        <div className="card w-72 h-96 card-container mt-4 shadow-xl">
                            <figure className="px-1 pt-7">
                                <img src={art3} alt="Shoes" className="rounded-xl w-64 h-80 pt-2" />
                            </figure>
                            <div className="text-center my-2">
                                <h2 className="text-2xl font-bold" >#Metaverse</h2>
                                <p className="text-slate-400 font-semibold">By TheSalvare</p>
                            </div>
                        </div>
                        {/* art4 */}
                        <div className="card w-72 h-96 mt-[-25px] card-container shadow-xl">
                            <figure className="px-1 pt-7">
                                <img src={art4} alt="Shoes" className="rounded-xl w-64 h-80 pt-2" />
                            </figure>
                            <div className="text-center my-2">
                                <h2 className="text-2xl font-bold" >#Toxic Poeth</h2>
                                <p className="text-slate-400 font-semibold">By Diyamila</p>
                            </div>
                        </div>
                        {/* art5 */}
                        <div className="card w-72 h-96 card-container mt-4 shadow-xl">
                            <figure className="px-1 pt-7">
                                <img src={art5} alt="Shoes" className="rounded-xl w-64 h-80 pt-2" />
                            </figure>
                            <div className="text-center my-2">
                                <h2 className="text-2xl font-bold" >#Saphyre</h2>
                                <p className="text-slate-400 font-semibold">By Crytox</p>
                            </div>
                        </div>
                        {/* art6 */}
                        <div className="card w-72 mt-[-25px] h-96 card-container  shadow-xl">
                            <figure className="px-1 pt-7">
                                <img src={art6} alt="Shoes" className="rounded-xl w-64 h-80 pt-2" />
                            </figure>
                            <div className="text-center my-2">
                                <h2 className="text-2xl font-bold" >#Charcuterie</h2>
                                <p className="text-slate-400 font-semibold">By Texira</p>
                            </div>
                        </div>
                        {/* art7 */}
                        <div className="card w-72 h-96 card-container mt-4 shadow-xl">
                            <figure className="px-1 pt-7">
                                <img src={art7} alt="Shoes" className="rounded-xl w-64 h-80 pt-2" />
                            </figure>
                            <div className="text-center my-2">
                                <h2 className="text-2xl font-bold" >##Paradise</h2>
                                <p className="text-slate-400 font-semibold">By CryptoX</p>
                            </div>
                        </div>
                        {/* art8 */}
                        <div className="card w-72 h-96 card-container  shadow-xl">
                            <figure className="px-1 pt-7">
                                <img src={art8} alt="Shoes" className="rounded-xl w-64 h-80 pt-2" />
                            </figure>
                            <div className="text-center my-2">
                                <h2 className="text-2xl font-bold" >#High Town</h2>
                                <p className="text-slate-400 font-semibold">By TheSalvare</p>
                            </div>
                        </div>

                    </div>
                    <div className="text-center py-12">
                        <button className="px-6 font-bold rounded-full   py-5 bg-gradient-to-r from-indigo-600 to-pink-500">View more in Youtube <FaArrowRight className="inline" />
                        </button>
                    </div>
                    <div className="flex justify-center py-8 ">
                        <img src={divider} className="w-24" alt="" />
                    </div>
                </div>

            </div>
        </Slide>
    );
};

export default ArtWorks;