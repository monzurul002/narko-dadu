
import divider from "../../assets/divider-01.svg"
import nerko from "../../assets/nerko.png"
import bitcoin from "../../assets/bitcoin-01.png"
import circle from "../../assets/circle-01.png"
import circle3 from "../../assets/circle-03.png"
import x from "../../assets/x.png"
import ethereum2 from "../../assets/ethereum-02.png"
import { FaArrowRight, FaGithub, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa6";

const QuestionStuff = () => {

    return (
        <div className="py-6">
            <div className="flex justify-center py-8 ">
                <img src={divider} className="w-24" alt="" />
            </div>

            <h1 className=" text-5xl md:text-6xl font-bold text-center py-14">Asked Questions</h1>
            <div className="w-2/3 mx-auto card-container ">
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item ">
                        <input type="radio" name="my-accordion-4" checked="checked" />
                        <div className="collapse-title text-2xl font-medium">
                            What is Nerkos NFT Collection?
                        </div>
                        <div className="collapse-content">
                            <p className="text-slate-300">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.

                                Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item ">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-2xl font-medium">
                            How we can buy and invest NFT?
                        </div>
                        <div className="collapse-content">
                            <p className="text-slate-300">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item ">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Why we should choose Nerkos NFT?
                        </div>
                        <div className="collapse-content">
                            <p className="text-slate-300">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item ">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Where we can buy and sell NFts?
                        </div>
                        <div className="collapse-content">
                            <p className="text-slate-300">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            What is your contract address?
                        </div>
                        <div className="collapse-content">
                            <p className="text-slate-300">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-8 ">
                <img src={divider} className="w-24" alt="" />
            </div>
            <div>
                <div className="relative">
                    <h1 className="text-5xl md:text-8xl font-extrabold text-center py-14">Lets start <br /> minting</h1>
                    <div className="text-center py-12">
                        <button className="px-6 font-bold rounded-full   py-5 bg-gradient-to-r from-indigo-600 to-pink-500">Join Our Community <FaArrowRight className="inline animate-spin-slow" />
                        </button>
                    </div>
                    <img className="absolute bottom-0 left-12 md:left-64 w-6 md:w-10" src={bitcoin} alt="" />
                    <img className="absolute top-4 md:top-20 left-60" src={circle} alt="" />
                    <img className="absolute bottom-32 md:bottom-0 right-8 md:right-36 w-10 md:w-12" src={ethereum2} alt="" />
                    <img className="absolute top-8 md:top-20 right-56 md:right-32 w-5  md:w-7" src={x} alt="" />
                </div>
                <div className="flex justify-center py-20 ">
                    <img src={divider} className="w-24" alt="" />


                </div>
                <div className=" flex justify-center items-center   py-8 relative ">
                    <img src={nerko} className="" alt="" />

                    <img className="absolute top-1  md:top-20 left-10 md:right-60" src={circle} alt="" />
                    <img className="absolute bottom-0 lg:hidden right-4 top-1 md:top-0 md:left-56 animate-spin-slow w-10" src={ethereum2} alt="" />

                </div>
                <p className=" text-xl text-center mt-[-30px]">We make it easy to Discover, Invest and manage all your NFTs at one place.</p>
                <div className="flex justify-center mt-5 text-slate-400 text-2xl gap-4">
                    <FaGithub />
                    <FaTwitter />
                    <FaInstagram />
                    <FaTelegram />
                </div>
            </div>
            {/* foooter */}
            <div className="mt-12">

                <div className="flex justify-between mt-4 text-slate-300 border-t p-4 px-10 relative">
                    <p >© 2023 Nerko. All rights reserved.</p>
                    <p>Privacy policy
                        Terms of use</p>
                    <img src={circle3} className="absolute bottom-0 left-80 top-2 w-5 md:w-8 " alt="" />
                </div>
            </div>

        </div>
    );
};

export default QuestionStuff;