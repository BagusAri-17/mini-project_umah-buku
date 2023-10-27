import HeroImage from '../../assets/HeroImage.png'
const Hero = () => {
  return (
    <>
        <section className="h-screen flex justify-center items-center">
            <div className="container">
                <div className="">
                    <div className="relative">
                        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary text-xl md:text-3xl lg:text-5xl text-center uppercase tracking-widest">Selamat Datang di Umah Buku</h1>
                        <img className="rounded-2xl md:rounded-[24px] w-full -z-20" src={HeroImage} alt="image-novel" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero