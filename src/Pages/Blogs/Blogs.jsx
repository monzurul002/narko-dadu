import Navbar from "../Navbar/Navbar";
import img1 from "../../assets/gallery/blog_post01.jpg"
import img3 from "../../assets/gallery/blog_post02.jpg"
import img2 from "../../assets/gallery/blog_post05.png"
import { FaRegComments, FaRegUser } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { IoMdSearch } from "react-icons/io";

const Blogs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="pt-20 w-11/12 mx-auto">
                <h1 className="text-7xl text-center py-12 font-extrabold">Category: Blockchain</h1>
                <div className="grid grid-cols-1 py-6 md:grid-cols-8">
                    <div className="col-span-6 px-5">
                        <div>
                            <img src={img1} className="rounded-2xl" alt="" />
                            <div className="flex justify-start gap-10 py-3">
                                <div className="flex gap-2 justify-center items-center">
                                    <FaRegUser className="inline text-indigo-800" />
                                    <p className="text-slate-400 font-semibold">Nerko</p>

                                </div>
                                <div className="flex gap-2 justify-center items-center">
                                    <SlCalender
                                        className="inline text-indigo-800" />
                                    <p className="text-slate-400 font-semibold">2 February,2024</p>

                                </div>
                                <div className="flex gap-2 justify-center items-center">
                                    <FaRegComments
                                        className="inline text-indigo-800" />
                                    <p className="text-slate-400 font-semibold">89 Comment</p>

                                </div>
                            </div>
                            <h1 className="font-bold text-3xl py-2">Delbo release NFT for Justice Charity</h1>
                            <div className="mr-10">
                                <p className="text-slate-300 text-wrap text-left ">Repellendus quasi sapiente dolorem veniam corporis cumque laboriosam nisi eaque earum, soluta ex nemo rerum velit. consequatur amet aliquam nesciunt nemo, deserunt facilis. Duis aute irure dolor voluptate velit esse cillum do <br /> -lore fugiat nulla pariatur. Repellendus quasi sapiente dolorem veniam corporis cumque laboriosa <br />-m nisi eaque earum, soluta ex nemo rerum velit. consequatur amet aliquam nesciunt […]

                                </p>
                            </div>
                        </div>
                        <div className="mt-14">
                            <img src={img2} className="rounded-2xl" alt="" />
                            <div className="flex justify-start gap-10 py-3">
                                <div className="flex gap-2 justify-center items-center">
                                    <FaRegUser className="inline text-indigo-800" />
                                    <p className="text-slate-400 font-semibold">Nerko</p>

                                </div>
                                <div className="flex gap-2 justify-center items-center">
                                    <SlCalender
                                        className="inline text-indigo-800" />
                                    <p className="text-slate-400 font-semibold">1 February,2024</p>

                                </div>
                                <div className="flex gap-2 justify-center items-center">
                                    <FaRegComments
                                        className="inline text-indigo-800" />
                                    <p className="text-slate-400 font-semibold">89 Comment</p>

                                </div>
                            </div>
                            <h1 className="font-bold text-3xl py-2">Minimal workspace for inspiration</h1>
                            <div className="mr-10">
                                <p className="text-slate-300 text-wrap text-left ">Repellendus quasi sapiente dolorem veniam corporis cumque laboriosam nisi eaque earum, soluta ex nemo rerum velit. consequatur amet aliquam nesciunt nemo, deserunt facilis. Duis aute irure dolor voluptate velit esse cillum do <br /> -lore fugiat nulla pariatur. Repellendus quasi sapiente dolorem veniam corporis cumque laboriosa <br />-m nisi eaque earum, soluta ex nemo rerum velit. consequatur amet aliquam nesciunt […]

                                </p>
                            </div>
                        </div>
                        <div className="mt-14">
                            <img src={img3} className="rounded-2xl" alt="" />
                            <div className="flex justify-start gap-10 py-3">
                                <div className="flex gap-2 justify-center items-center">
                                    <FaRegUser className="inline text-indigo-800" />
                                    <p className="text-slate-400 font-semibold">Nerko</p>

                                </div>
                                <div className="flex gap-2 justify-center items-center">
                                    <SlCalender
                                        className="inline text-indigo-800" />
                                    <p className="text-slate-400 font-semibold">2 February,2024</p>

                                </div>
                                <div className="flex gap-2 justify-center items-center">
                                    <FaRegComments
                                        className="inline text-indigo-800" />
                                    <p className="text-slate-400 font-semibold">89 Comment</p>

                                </div>
                            </div>
                            <h1 className="font-bold text-3xl py-2">How to use sticky note for problem solving</h1>
                            <div className="mr-10">
                                <p className="text-slate-300 text-wrap text-left ">Repellendus quasi sapiente dolorem veniam corporis cumque laboriosam nisi eaque earum, soluta ex nemo rerum velit. consequatur amet aliquam nesciunt nemo, deserunt facilis. Duis aute irure dolor voluptate velit esse cillum do <br /> -lore fugiat nulla pariatur. Repellendus quasi sapiente dolorem veniam corporis cumque laboriosa <br />-m nisi eaque earum, soluta ex nemo rerum velit. consequatur amet aliquam nesciunt […]

                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="col-span-2">
                        <div className="border border-slate-800 text-xl  rounded-lg p-10">
                            {/* 1st box */}
                            <p className="font-fold text-2xl py-3">Search</p>
                            <div className="flex bg-slate-400 bg-opacity-20 px-2 rounded-lg">
                                <input type="text" placeholder="Search " className="   rounded-lg w-full py-3  bg-slate-700 bg-opacity-20 px-2" name="" id="" /><IoMdSearch className="mt-5 text-xl" />
                            </div>

                        </div>
                        {/* 2nd box */}
                        <div className="border border-slate-800  mt-12  space-y-3 rounded-lg p-10">
                            <p className="font-fold text-2xl py-3">Category</p>
                            <div className="flex  p-2 text-slate-300 justify-between border border-slate-500  px-2 rounded-lg">
                                <h2>BLOCKCHAIN</h2>
                                <p>3</p>
                            </div>
                            <div className="flex  p-2 text-slate-300 justify-between border border-slate-500  px-2 rounded-lg">
                                <h2>Creative Science</h2>
                                <p>23</p>
                            </div>
                            <div className="flex  p-2 text-slate-300 justify-between border border-slate-500  px-2 rounded-lg">
                                <h2>NFT</h2>
                                <p>3</p>
                            </div>
                            <div className="flex  p-2 text-slate-300 justify-between border border-slate-500  px-2 rounded-lg">
                                <h2>UI/UX Desgin</h2>
                                <p>30</p>
                            </div>

                        </div>
                        {/* 3rd box */}
                        <div className="border my-12 border-slate-800 text-xl  rounded-lg p-2">

                            <p className="font-fold text-2xl py-2">Recent Post</p>
                            <div className="flex  px-2 gap-2 rounded-lg">
                                <img src={img1} className="w-32 rounded-md" alt="" />
                                <div className="flex gap-2 justify-center items-center">

                                    <div>
                                        <div className="flex gap-2">
                                            <SlCalender
                                                className="inline text-indigo-800" />
                                            <p className="text-slate-400 text-sm font-semibold">2 February,2024</p>
                                        </div>
                                        <h5 className="text-sm">Minimal workspace for inspiration</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="flex  px-2 gap-2 py-4 rounded-lg">
                                <img src={img3} className="w-32 rounded-md" alt="" />
                                <div className="flex gap-2 justify-center items-center">

                                    <div>
                                        <div className="flex gap-2">
                                            <SlCalender
                                                className="inline text-indigo-800" />
                                            <p className="text-slate-400 text-sm font-semibold">2 February,2024</p>
                                        </div>
                                        <h5 className="text-sm">Minimal workspace for inspiration</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="flex  px-2 gap-2 rounded-lg">
                                <img src={img2} className="w-32 rounded-md" alt="" />
                                <div className="flex gap-2 justify-center items-center">

                                    <div>
                                        <div className="flex gap-2">
                                            <SlCalender
                                                className="inline text-indigo-800" />
                                            <p className="text-slate-400 text-sm font-semibold">2 February,2024</p>
                                        </div>
                                        <h5 className="text-sm">Minimal workspace for inspiration</h5>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;