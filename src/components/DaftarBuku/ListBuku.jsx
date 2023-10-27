import IconLily from '../../assets/icon-lily-flower.svg'
import IconDiamond from '../../assets/icon-diamond.svg'
import SampleImage from "../../assets/sample.png"
import ListBook from '../../data/listBook.json'
import {BiSearch} from 'react-icons/bi'

const ListBuku = () => {
  return (
    <>
        <section className="mt-40">
            <div className="container">
                {/* Title */}
                <div>
                    <div>
                        <img className="mx-auto w-6 lg:w-9" src={IconLily} alt="Flower Icon" />
                    </div>
                    <div className="mt-2 md:mt-4">
                        <div className="flex items-center gap-4 justify-center">
                            <img src={IconDiamond} alt="Diamond Icon" />
                            <h2 className="section-title">Daftar Buku</h2>
                            <img src={IconDiamond} alt="Diamond Icon" />
                        </div>
                        <p className="section-description">Berikut daftar buku yang tersedia di Umah Buku</p>
                    </div>
                </div>

                <div className="mt-4 md:mt-8">
                    <form>
                        {/* Search Bar */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                <BiSearch color='#89827D' size={20} />
                            </div>
                            <input
                            type="search"
                            id="default-search"
                            className="searching block w-full p-4 pl-12 pr-24 text-base text-primary border border-primary"
                            placeholder="CARI BUKU KESUKAANMU ..."
                            required=""
                            />
                            <button
                            type="submit"
                            className="hidden md:block text-white absolute right-2.5 bottom-2.5 bg-primary hover:bg-primary/80 rounded-lg text-base px-4 py-2"
                            >
                            Search
                            </button>
                        </div>
                        
                        {/* Selection: Category, Genre, Urutkan */}
                        <div className="grid grid-cols-3 mt-2 md:mt-4 gap-4 md:gap-8">

                            {/* Category */}
                            <div>
                                <select className="w-full p-2 text-base text-primary uppercase border border-primary">
                                    <option selected>Pilih Category</option>
                                    <option defaultValue="cerita-anak">Cerita Anak</option>
                                    <option defaultValue="novel">Novel</option>
                                    <option defaultValue="cerpen">Cerpen</option>
                                </select>
                            </div>

                            {/* Genre */}
                            <div>
                                <select className="w-full p-2 text-base text-primary uppercase border border-primary">
                                    <option selected>Pilih Genre</option>
                                    <option defaultValue="cerita-anak">Cerita Anak</option>
                                </select>
                            </div>

                            {/* Urutkan */}
                            <div>
                                <select className="w-full p-2 text-base text-primary uppercase border border-primary">
                                    <option selected>Urutkan Berdasarkan</option>
                                    <option defaultValue="a-z">A - Z</option>
                                    <option defaultValue="z-a">Z - A</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
                
                {/* Content */}
                <div className="mt-4 md:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-[40px]">
                    {ListBook.map((items) => (
                        <div key={items.id}>
                            <img className="mx-auto w-full" src={SampleImage} alt="" />
                            <div className="mt-4">
                                <p className="book-author">{items.author}</p>
                                <h2 className="book-title mt-2">{items.title}</h2>
                                <p className="book-time">{items.time}</p>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </section>
    </>
  )
}

export default ListBuku