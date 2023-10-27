import IconLily from '../../assets/icon-lily-flower.svg'
import IconDiamond from '../../assets/icon-diamond.svg'
import TentangImage from '../../assets/image/tentang-kami.png'

const Tentang = () => {
  return (
    <>
        <section className="h-screen flex items-center justify-center">
            <div className="container">
                {/* Title */}
                <div>
                    <div>
                        <img className="mx-auto w-6 lg:w-9" src={IconLily} alt="Flower Icon" />
                    </div>
                    <div className="mt-2 md:mt-4">
                        <div className="flex items-center gap-4 justify-center">
                            <img src={IconDiamond} alt="Diamond Icon" />
                            <h2 className="section-title">Tentang Kami</h2>
                            <img src={IconDiamond} alt="Diamond Icon" />
                        </div>
                        <p className="section-description">Profil Umah Buku</p>
                    </div>
                </div>

                <div className="mt-4 lg:mt-8">
                    <p className="text-center text-primary text-lg lg:text-xl max-w-xl mx-auto">“Selamat datang di Umah Buku, rumah digital bagi para pencinta literasi! kami memahami bahwa buku-buku adalah jendela ke dunia pengetahuan”</p>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center mt-8 lg:mt-12 gap-4 lg:gap-8">
                    <div className="lg:col-span-5">
                        <img className="hidden lg:block mx-auto" src={TentangImage} alt="tentang-image" />
                    </div>
                    <div className="lg:col-span-7">
                        <div className="flex flex-col gap-4 text-sm lg:text-base text-primary/60 text-justify">
                            <p>Umah Buku adalah sebuah perpustakaan digital yang didedikasikan untuk menghadirkan dunia bacaan pilihan langsung ke perangkat Anda. Kami menyediakan akses tak terbatas ke koleksi buku yang luas dan beragam, mencakup berbagai genre, topik, dan penulis terkenal. Di sini, Anda dapat menjelajahi kisah-kisah mendalam, memperluas wawasan Anda, dan mengejar hasrat literasi Anda.</p>
                            <p>Kami juga memahami bahwa setiap pembaca memiliki preferensi unik mereka sendiri. Itulah mengapa Umah Buku menawarkan beragam fitur untuk meningkatkan pengalaman membaca Anda. Anda dapat menyelami halaman-halaman buku dalam mode malam yang nyaman, membuat penandaan pribadi, dan berbagi kesan Anda dengan komunitas pembaca kami.</p>
                            <p>Pada Umah Buku, kami juga mendukung para penulis dan penerbit. Kami memberi mereka platform untuk menjangkau lebih banyak pembaca, mempromosikan karya-karya mereka, dan merayakan keragaman literasi.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Tentang