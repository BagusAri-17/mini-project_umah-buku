import SampleImage from "../../assets/sample.png"

const BukuPopuler = () => {
  return (
    <>
        <section className="my-40 lg:my-80">
            <div className="container">
                <div className="flex justify-end overflow-hidden">
                    <img className="hidden md:block absolute -z-20 opacity-20 md:scale-[1.15] lg:scale-150" src={SampleImage} alt="" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4">
                    <div>
                        <div className="flex flex-col gap-2">
                            <h3 className="uppercase tracking-[2px] text-lg md:text-xl text-primary/50">Buku Terpopuler</h3>
                            <h2 className="text-primary tracking-[1px] text-3xl md:text-4xl max-w-sm">Tips and Trick Menaklukan Hati Wanita</h2>
                            <p className="text-primary/50 text-base md:text-lg">di tulis oleh <span className="uppercase text-primary">Deva Diga Dana</span></p>                            
                        </div>
                        <a
                            href="/"
                            className="mt-4 uppercase text-primary hover:text-white border border-primary hover:bg-primary rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center transition duration-300"
                            >
                            Mulai Baca
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
                    <div>
                        <img src={SampleImage} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default BukuPopuler