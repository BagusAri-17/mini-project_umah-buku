import IconLily from '../../assets/icon-lily-flower.svg'
import IconDiamond from '../../assets/icon-diamond.svg'
import Novel from '../../assets/image/koleksi-buku_novel.png'
import Cerpen from '../../assets/image/koleksi-buku_cerpen.png'
import Cerak from '../../assets/image/koleksi-buku_cerak.png'

const Koleksi = () => {
  return (
    <section className="mt-0 lg:mt-40">
        <div className="container">
            {/* Title */}
            <div>
                <div>
                    <img className="mx-auto w-6 lg:w-9" src={IconLily} alt="icon-flower" />
                </div>
                <div className="mt-2 md:mt-4">
                    <div className="flex items-center gap-2 md:gap-4 justify-center">
                        <img src={IconDiamond} alt="icon-diamond" />
                        <h2 className="section-title">Berbagai Koleksi Buku</h2>
                        <img src={IconDiamond} alt="icon-diamond" />
                    </div>
                    <p className="section-description">Temukan dan baca bacaan favorite mu di Umah Buku</p>
                </div>
            </div>


            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 mt-4 md:mt-8">
                <div className="">
                    <div className="relative">
                        <img className="rounded-2xl md:rounded-[24px]" src={Novel} alt="image-novel" />
                        <div className="absolute p-6 ml-0 lg:ml-2 bottom-0 lg:bottom-2">
                            <h3 className="text-3xl lg:text-4xl text-white">Novel</h3>
                            <p className="mt-2 text-white text-base lg:text-lg max-w-sm">Cerita yang menceritakan asal-usul, legenda, atau kepercayaan yang diyakini oleh suatu kelompok masyarakat.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between gap-4 md:gap-0">
                    <div className="relative">
                        <img className="rounded-2xl md:rounded-[24px]" src={Cerpen} alt="image-cerpen" />
                         <div className="absolute p-6 bottom-0 lg:bottom-2">
                            <h3 className="text-xl lg:text-2xl text-white">Cerita Pendek</h3>
                            <p className="mt-2 text-white text-sm lg:text-base max-w-xs md:max-w-sm">Cerita yang mencakup elemen-elemen mitos dan sejarah yang dianggap bermakna penting dalam budaya suatu masyarakat.</p>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="rounded-2xl lg:rounded-[24px]" src={Cerak} alt="image-cerak" />
                        <div className="absolute p-6 bottom-0 lg:bottom-2">
                            <h3 className="text-xl lg:text-2xl text-white">Cerita Panjang</h3>
                            <p className="mt-2 text-white text-sm lg:text-base max-w-xs md:max-w-sm">Cerita yang mencakup elemen-elemen mitos dan sejarah yang dianggap bermakna penting dalam budaya suatu masyarakat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Koleksi