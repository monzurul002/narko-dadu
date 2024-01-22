import { Swiper, SwiperSlide } from 'swiper/react';
import { RiCheckboxCircleLine } from "react-icons/ri";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
// import { Pagination, Navigation } from 'swiper/modules';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Fade } from 'react-reveal';


const Roadmap = () => {
    return (
        <Fade top>
            <div id='roadmap'>
                <h1 className="text-6xl font-extrabold text-center">Nerkos Roadmap</h1>
                <div className='mt-10'>
                    <>
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={100}
                            navigation={true}
                            centeredSlides={true}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                320: { slidesPerView: 1, spaceBetween: 30 },
                                480: { slidesPerView: 4, spaceBetween: 150 },


                            }}
                            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                            className="mySwiper"
                        >

                            <SwiperSlide className='' >
                                <div className="card card-compact  w-80 md:w-96    mx-5 md:mx-[-25px] card-container  shadow-xl p-6">
                                    <div className='flex justify-between '>
                                        <h4 className='bg-gradient-to-r from-indigo-700 to-pink-600 text-transparent bg-clip-text'>PHASE 01</h4>
                                        <div className='bg-gradient-to-r from-indigo-700 to-pink-600 rounded-full w-14 h-14'>

                                            <div className='font-bold   rotate-12	 w-8 h-8 ml-3 space-y-[-8px]'>
                                                <p className='text-3xl' >0</p>
                                                <p className='text-xl'>%</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-5">
                                        <h2 className="text-3xl text-left font-bold">Planning!</h2>
                                        <p className='text-xl text-left text-slate-400'>Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.</p>
                                        {/* border */}
                                        <p className='w-20 px-4 border border-slate-200'></p>
                                        {/* item point */}
                                        <div className='flex flex-col items-start'>
                                            <div className='flex gap-2 items-center'>
                                                <RiCheckboxCircleLine className='text-cyan-600' />
                                                <p>Release website and logo</p>
                                            </div>
                                            <div className='flex gap-2 items-center'>
                                                <RiCheckboxCircleLine className='text-cyan-600' />
                                                <p>Grow community</p>
                                            </div>
                                            <div className='flex gap-2 items-center'>
                                                <RiCheckboxCircleLine className='text-cyan-600' />
                                                <p>Launch the project</p>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className="card card-compact w-80 md:w-96    mx-5 md:mx-[20px] card-container  shadow-xl p-6">
                                    <div className='flex justify-between '>
                                        <h4 className='bg-gradient-to-r from-indigo-700 to-pink-600 text-transparent bg-clip-text'>PHASE 02</h4>
                                        <div className='bg-gradient-to-r from-indigo-700 to-pink-600 rounded-full w-14 h-14'>

                                            <div className='font-bold   rotate-12	 w-8 h-8 ml-3 space-y-[-8px]'>
                                                <p className='text-3xl' >75</p>
                                                <p className='text-xl'>%</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-5">
                                        <h2 className="text-3xl text-left font-bold">Production!</h2>
                                        <p className='text-xl text-left text-slate-400'>Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.</p>
                                        {/* border */}
                                        <p className='w-20 px-4 border border-slate-200'></p>
                                        {/* item point */}
                                        <div className='flex flex-col items-start'>
                                            <div className='flex gap-2 items-center'>
                                                <RiCheckboxCircleLine className='text-cyan-600' />
                                                <p>Release website and logo</p>
                                            </div>
                                            <div className='flex gap-2 items-center'>
                                                <RiCheckboxCircleLine className='text-cyan-600' />
                                                <p>Grow community</p>
                                            </div>
                                            <div className='flex gap-2 items-center'>
                                                <RiCheckboxCircleLine className='text-cyan-600' />
                                                <p>Launch the project</p>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='mx-10' >
                                <div className="card card-compact w-80 md:w-96    mx-5 md:mx-[20px] card-container  shadow-xl p-6">
                                    <div className='flex justify-between '>
                                        <h4 className='bg-gradient-to-r from-indigo-700 to-pink-600 text-transparent bg-clip-text'>PHASE 03</h4>
                                        <div className='bg-gradient-to-r from-indigo-700 to-pink-600 rounded-full w-14 h-14'>

                                            <div className='font-bold   rotate-12	 w-8 h-8 ml-3 space-y-[-8px]'>
                                                <p className='text-3xl' >25</p>
                                                <p className='text-xl'>%</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-5">
                                        <h2 className="text-3xl text-left font-bold">Launching!</h2>
                                        <p className='text-xl text-left text-slate-400'>Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.</p>
                                        {/* border */}
                                        <p className='w-20 px-4 border border-slate-200'></p>
                                        {/* item point */}
                                        <div className='flex flex-col items-start'>
                                            <div className='flex gap-2 items-center'>
                                                <RiCheckboxCircleLine className='text-cyan-600' />
                                                <p>Release website and logo</p>
                                            </div>
                                            <div className='flex gap-2 items-center'>
                                                <RiCheckboxCircleLine className='text-cyan-600' />
                                                <p>Grow community</p>
                                            </div>
                                            <div className='flex gap-2 items-center'>
                                                <RiCheckboxCircleLine className='text-cyan-600' />
                                                <p>Launch the project</p>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='' >
                                <div className="card card-compact w-80 md:w-96    mx-5 md:mx-[55px] card-container  shadow-xl p-6">
                                    <div className='flex justify-between '>
                                        <h4 className='bg-gradient-to-r from-indigo-700 to-pink-600 text-transparent bg-clip-text'>PHASE 04</h4>
                                        <div className='bg-gradient-to-r from-indigo-700 to-pink-600 rounded-full w-14 h-14'>

                                            <div className='font-bold   rotate-12	 w-8 h-8 ml-3 space-y-[-8px]'>
                                                <p className='text-3xl' >38</p>
                                                <p className='text-xl'>%</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-5">
                                        <h2 className="text-3xl text-left font-bold">Minting!</h2>
                                        <p className='text-xl text-left text-slate-400'>Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.</p>
                                        {/* border */}
                                        <p className='w-20 px-4 border border-slate-200'></p>
                                        {/* item point */}
                                        <div className='flex flex-col items-start'>
                                            <div className='flex gap-2 items-center'>
                                                <RiCheckboxCircleLine className='text-cyan-600' />
                                                <p>Release website and logo</p>
                                            </div>
                                            <div className='flex gap-2 items-center'>
                                                <RiCheckboxCircleLine className='text-cyan-600' />
                                                <p>Grow community</p>
                                            </div>
                                            <div className='flex gap-2 items-center'>
                                                <RiCheckboxCircleLine className='text-cyan-600' />
                                                <p>Launch the project</p>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='' >
                                <div className="card card-compact w-80 md:w-96    mx-5 md:mx-[90px]  card-container  shadow-xl p-6">
                                    <div className='flex justify-between '>
                                        <h4 className='bg-gradient-to-r from-indigo-700 to-pink-600 text-transparent bg-clip-text'>PHASE 05</h4>
                                        <div className='bg-gradient-to-r from-indigo-700 to-pink-600 rounded-full w-14 h-14'>

                                            <div className='font-bold   rotate-12	 w-8 h-8 ml-3 space-y-[-8px]'>
                                                <p className='text-3xl' >0</p>
                                                <p className='text-xl'>%</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-5">
                                        <h2 className="text-3xl text-left font-bold">Planning!</h2>
                                        <p className='text-xl text-left text-slate-400'>Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.</p>
                                        {/* border */}
                                        <p className='w-20 px-4 border border-slate-200'></p>
                                        {/* item point */}
                                        <div className='flex flex-col items-start'>
                                            <div className='flex gap-2 items-center'>
                                                <RiCheckboxCircleLine className='text-cyan-600' />
                                                <p>Release website and logo</p>
                                            </div>
                                            <div className='flex gap-2 items-center'>
                                                <RiCheckboxCircleLine className='text-cyan-600' />
                                                <p>Grow community</p>
                                            </div>
                                            <div className='flex gap-2 items-center'>
                                                <RiCheckboxCircleLine className='text-cyan-600' />
                                                <p>Launch the project</p>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </>
                </div>

            </div>
        </Fade>
    );
};

export default Roadmap;