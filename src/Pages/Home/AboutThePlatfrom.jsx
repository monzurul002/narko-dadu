import divider from "../../assets/divider-01.svg"
import bitcoin from "../../assets/bitcoin-01.png"
import ethereum from "../../assets/ethereum-01.png";
import feature from "../../assets/features-03.png"
import feature2 from "../../assets/features-02.png"
import { BiWalletAlt } from "react-icons/bi";
import { GiMiddleArrow } from "react-icons/gi";

const AboutThePlatfrom = () => {
    return (
        <div >

            <div className="w-9/12 mx-auto" id="about">
                <div className="flex justify-center py-8 ">
                    <img src={divider} className="w-24" alt="" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* item1 */}
                    <div>
                        <h2 className="text-7xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500  to-pink-600  text-transparent bg-clip-text	">4000+</h2>
                        <p className="text-xl text-slate-400">Wallets Connected</p>
                        <div className="flex justify-center py-2 md:py-8">
                            <img src={bitcoin} className="w-8  animate-spin-slow" alt="" />
                        </div>
                    </div>
                    {/* item2 */}
                    <div>
                        <h2 className="text-7xl font-extrabold  bg-gradient-to-r from-indigo-500 via-purple-500  to-pink-600  text-transparent bg-clip-text">20000+</h2>
                        <p className="text-xl text-slate-400">Collections Indexed every 5 mins.</p>
                    </div>
                    {/* item1 */}

                    <div className="relative">

                        <img src={ethereum} className="w-8 absolute top-[-60px] right-0  animate-spin-slow" alt="" />

                        <h2 className="text-7xl font-extrabold  bg-gradient-to-r from-indigo-500   to-pink-600  text-transparent bg-clip-text">2.5x</h2>
                        <p className="text-xl text-slate-400">Difference in Floor & Estimated Value</p>
                    </div>

                </div>

                <div>
                    <div className="flex justify-center py-8">
                        <img src={divider} className="w-24" alt="" />
                    </div>
                    <h2 className="text-7xl font-bold text-center py-16">About the platform</h2>

                    {/* about main section */}
                    <div className="flex flex-col md:flex-row justify-between gap-16 py-10">
                        <div className=" w-full md:w-4/7 ">
                            <img src={feature} alt="" />
                        </div>
                        <div className="w-full md:w-3/7 space-y-3 md:space-y-5">
                            <h2 className="font-extrabold bg-gradient-to-r from-purple-500 to-pink-600 text-transparent bg-clip-text ">CREATE AND INVEST</h2>
                            <h1 className="text-5xl font-extrabold ">Create your own NFT</h1>
                            <p className="text-xl text-slate-400">Multiple Chains, One Home. Stack up all your NFTs from across blockchains.</p>
                            <div className="flex  flex-col md:flex-row  mt-6 justify-between gap-10 md:gap-24 space-x-2 md:space-x-10">
                                <div className="space-y-4 w-1/2">
                                    <h2 className="text-6xl font-extrabold">4,500+</h2>
                                    <p className="text-slate-500 font-bold">Collections Indexed every 5mins.</p>
                                </div>
                                <div className="space-y-2 w-full md:w-1/2">
                                    <h2 className="text-6xl font-extrabold">3x</h2>
                                    <p className="text-slate-500 font-bold">Difference in Floor & Estimated NFT Value.</p>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
            {/* about last section */}
            <div className="py-16 w-full md:w-11/12 mx-auto">
                <div className="flex flex-col-reverse md:flex-row">
                    {/* text area */}
                    <div className="w-full md:w-1/2 px-8 space-y-6">
                        <h3 className="font-bold bg-gradient-to-r from-indigo-400 to-pink-600 text-transparent bg-clip-text py-3">SYNC AND TRACK</h3>
                        <h2 className="text-6xl font-extrabold">Multiple Chains, <br /> One Home</h2>
                        <p className="text-xl text-slate-500">We make it easy to Discover, Invest and manage all your NFTs <br />    at one place, looked up one of the more obscure.Find the right NFT collections to buy within the platform.</p>
                        <div className="flex flex-col md:flex-row gap-3 justify-between items-start ">
                            <div className="flex gap-3 justify-center ">
                                <button className=" p-2 rounded-3xl bg-gradient-to-r from-indigo-600 to-pink-600"><BiWalletAlt className="text-6xl" />
                                </button>
                                <p className=" text-xl mt-2 ">Collections Indexed <br /> every 5mins.</p>
                            </div>
                            <div className="flex gap-3 ">
                                <button className=" p-2 rounded-3xl bg-gradient-to-r from-indigo-600 to-pink-600"><GiMiddleArrow className="text-6xl" />
                                </button>

                                <p className="text-xl mt-2">Difference in Floor &   <br /> Estimated Value.</p>
                            </div>
                        </div>
                    </div>
                    {/* image area */}
                    <div className="w-full md:w-1/2 px-8">
                        <img src={feature2} alt="" />

                    </div>
                </div>
            </div>
        </div>

    );
};

export default AboutThePlatfrom;