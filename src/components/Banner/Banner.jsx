import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
    return (
        <div className="max-w-[1400px] mx-auto">

            <div data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "isAutoPlay": true
  }' className="relative">
                <div className="hs-carousel relative overflow-hidden w-full min-h-[600px] bg-white rounded-lg">
                    <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full  bg-[url('https://i.postimg.cc/sDnXKzhP/Adobe-Stock-245229115.jpg')]  rounded-2xl bg-no-repeat bg-cover bg-center p-6">

                                <div className="flex flex-col justify-center items-center gap-6   transition duration-700">

                                    <h1 className="text-xl md:text-2xl lg:text-4xl  font-bold text-white">Giving Back: Providing Meals
                                        <Typewriter
                                            words={['  for Those in Need...']}
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                            loop={true}
                                        />
                                    </h1>
                                    <p className="text-white text-[10px] md:text-[15px] lg:text-lg">Join our mission to nourish those in need.</p>
                                    <a href="#state" className="btn">Expore more</a>

                                </div>


                            </div>

                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-[url('https://i.postimg.cc/XqsV2KpN/hopeless-refugee-refugee-camp.jpg')]  rounded-2xl bg-no-repeat bg-cover bg-center p-6">

                                <div className="flex flex-col justify-center items-center gap-6   transition duration-700">

                                    <h1 className="text-xl md:text-2xl lg:text-4xl  font-bold text-white">Empower Change: Support
                                        <Typewriter
                                            words={['  Our Mission to End Hunger.']}
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                            loop={true}
                                        />
                                    </h1>
                                    <p className="text-white text-[10px] md:text-[15px] lg:text-lg">Join us in the fight against hunger.</p>
                                    <a href="#state" className="btn">Expore more</a>

                                </div>

                            </div>
                        </div>
                        <div className="hs-carousel-slide">
                            <div className="flex justify-center h-full bg-[url('https://i.postimg.cc/KYtmXhRH/photorealistic-kid-refugee-camp.jpg')]  rounded-2xl bg-no-repeat bg-cover bg-center p-6">

                                <div className="flex flex-col justify-center items-center gap-6   transition duration-700">

                                    <h1 className="text-xl md:text-2xl lg:text-4xl  font-bold text-white">No Child Should Know Hunger:
                                        <Typewriter
                                            words={['  Donate Today..']}
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                            loop={true}
                                        />
                                    </h1>
                                    <p className="text-white text-[10px] md:text-[15px] lg:text-lg">Ending hunger starts with you.</p>
                                    <a href="#state" className="btn">Expore more</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button type="button" className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-s-lg">
                    <span className="text-2xl" aria-hidden="true">
                        <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m15 18-6-6 6-6"></path>
                        </svg>
                    </span>
                    <span className="sr-only">Previous</span>
                </button>
                <button type="button" className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-e-lg">
                    <span className="sr-only">Next</span>
                    <span className="text-2xl" aria-hidden="true">
                        <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </span>
                </button>

                <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
                    <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                    <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                    <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                </div>
            </div>

        </div>
    );
};

export default Banner;