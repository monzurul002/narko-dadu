import etheriam from "../../assets/ethereum-01.png"
import circle from "../../assets/circle-01.png"
import bg from "../../assets/blob-dashed.svg"
import art from "../../assets/art.jpg"
import art2 from "../../assets/art_2.jpg"
import x from "../../assets/x.png"
import bitcoin from "../../assets/bitcoin-01.png"
import hero from "../../assets/hero-cta.png"
import metamask from "../../assets/metamask.svg"
import coinbase from "../../assets/coinbase.svg"
import trust from "../../assets/trust.svg"
import exodus from "../../assets/exodus.svg"
import bitgo from "../../assets/bitgo.svg"

const Banner = () => {
    return (
        <div id="banner" className="text-white pt-20 w-11/12 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-8">
                <div className="col-span-4 space-y-6 relative">
                    <div className="flex justify-center relative">
                        <img src={etheriam} width="40px" className="my-2 animate-spin-slow" alt="" />
                        <img src={circle} className="absolute left-[-30px] top-52" alt="" />
                    </div>
                    <img src={hero} className="w-32    animate-spin-slow absolute right-[-20px] top-32" alt="" />
                    <h1 className="text-7xl font-bold px-5 ">Supercharge your NFT Adventure</h1>
                    <p className="text-xl">Find the right NFT collections to buy within the platform.</p>
                    <img src={bitcoin} className="w-16 place-items-end" alt="" />
                </div>
                <div style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat" }} className="col-span-3 relative">

                    <img src={x} className="absolute top-6 w-8 right-0" alt="" />
                    <svg className="w-2/3 pt-5 ml-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#573065" d="M49.2,-67.8C64.4,-56.7,77.9,-43.2,82.4,-27.3C86.9,-11.3,82.5,7,72.2,18.8C62,30.6,45.9,35.8,32.9,44.6C19.9,53.4,9.9,65.9,-1,67.3C-12,68.7,-24.1,59.2,-35.2,49.8C-46.3,40.3,-56.5,31,-65.3,17.9C-74.2,4.8,-81.6,-12.1,-79.4,-28C-77.3,-44,-65.5,-59,-50.7,-70.2C-35.9,-81.5,-17.9,-88.9,-0.5,-88.2C17,-87.6,34,-78.9,49.2,-67.8Z" transform="translate(100 100)" />
                    </svg>
                    <div className="flex gap-4 absolute top-20  ml-14 right-0">
                        <img src={art} className="w-72 rounded-3xl" alt="" />
                        <img src={art2} className="w-72 rounded-3xl" alt="" />
                    </div>
                </div>
            </div>

            <div className="text-center py-16 space-x-8  w-full">
                <h3 className="font-bold py-4">POWERED BY AMAZING INVESTORS:</h3>
                <div className="grid grid-cols-5 gap-8">
                    <div className="flex gap-2">
                        <img src={metamask} alt="" />

                    </div>
                    <div className="flex gap-2">
                        <img src={coinbase} alt="" />

                    </div>
                    <div className="flex gap-2">
                        <img src={trust} className="w-2/3 mt-2" alt="" />

                    </div>
                    <div className="flex gap-2">
                        <img src={exodus} className="w-2/3" alt="" />

                    </div>
                    <div className="flex gap-2">
                        <img src={bitgo} className="w-2/3" alt="" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;