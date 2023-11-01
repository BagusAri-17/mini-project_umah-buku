import TentangImage from "../../assets/image/robot.png"

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center">
            <div className="container">
                
                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center mt-8 lg:mt-12 gap-4 lg:gap-20">
                    <div className="lg:col-span-7">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-xl md:text-3xl lg:text-5xl uppercase tracking-widest">Ingin Membuat Cerita Sendiri?</h1>
                            <p className="text-sm md:text-lg text-primary leading-4 tracking-widest">Ada robot kami yang siap membantu anda</p>
                            
                        </div>
                        <a
                                href="#robot-ai"
                                className="mt-4 uppercase text-primary hover:text-white border border-primary hover:bg-primary rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center transition duration-300"
                                >
                                Coba Robot
                                <svg
                                    className="w-3.5 h-3.5 ml-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </a>
                    </div>
                    <div className="lg:col-span-5">
                        <img className="hidden lg:block mx-auto w-full" src={TentangImage} alt="tentang-image" />
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Hero