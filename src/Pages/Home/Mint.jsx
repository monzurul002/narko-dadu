import divider from "../../assets/divider-01.svg"
import mint1 from "../../assets/mint-01.png"
import mint2 from "../../assets/mint-02.png"
import mint3 from "../../assets/mint-03.png"
import mint4 from "../../assets/mint-04.png"
import circle from "../../assets/circle-01.png"

const Mint = () => {
    return (

        <div className="text-center py-8 relative">
            <div className="flex justify-center py-8">
                <img src={divider} className="w-24" alt="" />
            </div>
            <div >
                <h1 className="text-6xl font-extrabold py-4">How To Mint</h1>
                <img src={circle} className="absolute w-5 top-52 left-48" alt="" />
                <div className="w-4/5 mx-auto  mt-10 grid md:grid-cols-2 grid-cols-1 gap-6">
                    {/* card-1 */}
                    <div className="flex justify-center space-x-5 mt-4 items-center px-8 py-10 card-container rounded-2xl">
                        <div>
                            <img src={mint1} className="w-24" alt="" />
                        </div>
                        <div className="text-left mt-5">
                            <h2 className="font-bold text-2xl">Connect your wallet</h2>
                            <p className="text-slate-400 font-bold">Use Trust Wallet, Metamask or any wallet to connect to the app.</p>
                        </div>
                    </div>
                    {/* card-2 */}
                    <div className="flex justify-center space-x-5 mt-4 items-center px-8 py-10 card-container rounded-2xl">
                        <div>
                            <img src={mint2} className="w-24" alt="" />
                        </div>
                        <div className="text-left mt-5">
                            <h2 className="font-bold text-2xl">Select your quantity
                            </h2>
                            <p className="text-slate-400 font-bold">Use Trust Wallet, Metamask or any wallet to connect to the app.</p>
                        </div>
                    </div>
                    {/* card-3 */}
                    <div className="flex justify-center space-x-5 mt-4 items-center px-8 py-10 card-container rounded-2xl">
                        <div>
                            <img src={mint3} className="w-24" alt="" />
                        </div>
                        <div className="text-left mt-5">
                            <h2 className="font-bold text-2xl">Confirm transaction
                            </h2>
                            <p className="text-slate-400 font-bold">Earn ETH and BIT for all your NFTs that you sell on our marketplace.</p>
                        </div>
                    </div>
                    {/* card-4 */}
                    <div className="flex justify-center space-x-5 mt-4 items-center px-8 py-10 card-container rounded-2xl">
                        <div>
                            <img src={mint4} className="w-24" alt="" />
                        </div>
                        <div className="text-left mt-5">
                            <h2 className="font-bold text-2xl">Receive your NFTs</h2>
                            <p className="text-slate-400 font-bold">Latin professor at Hampden-Sydney College in Virginia.</p>
                        </div>
                    </div>

                </div>

            </div>



        </div>



    );
};

export default Mint;