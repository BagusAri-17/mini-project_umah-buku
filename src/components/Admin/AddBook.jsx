const AddBook = () => {
  return (
    <>
        <form className="mt-4 md:mt-8">
            <div className="mb-6 grid grid-cols-2 gap-8">
                <div>
                    <label
                        htmlFor="author"
                        className="block mb-2 text-sm font-medium text-primary"
                    >
                        Author
                    </label>
                    <input
                        type="text"
                        id="author"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg block w-full p-2.5"
                        placeholder="Tuliskan nama penulis"
                        required=""
                    />
                </div>
                <div>
                    <label
                        htmlFor="title"
                        className="block mb-2 text-sm font-medium text-primary"
                    >
                        Judul
                    </label>
                    <input
                        type="text"
                        id="title"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg block w-full p-2.5"
                        placeholder="Tuliskan judul buku"
                        required=""
                    />
                </div>
            </div>
            <div className="mb-6">
                <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-primary"
                >
                    Kategori
                </label>
                <select
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg block w-full p-2.5"
                >
                    <option selected="">Pilih kategori</option>
                    <option value="Cerita Anak">Cerita Anak</option>
                    <option value="Novel">Novel</option>
                    <option value="Cerita Pendek">Cerita Pendek</option>
                    <option value="Cerita Bersambung">Cerita Bersambung</option>
                </select>
            </div>
            <div className="mb-6">
                <label
                    htmlFor="genre"
                    className="block mb-2 text-sm font-medium text-primary"
                >
                    Genre
                </label>
                <ul className="items-center w-full text-sm font-medium text-primary bg-white border border-gray-200 rounded-lg sm:flex">
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                        <div className="flex items-center pl-3">
                            <input
                            id="fiksi"
                            type="checkbox"
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded"
                            />
                            <label
                            htmlFor="fiksi"
                            className="w-full py-3 ml-2 text-sm font-medium text-primary"
                            >
                            Fiksi
                            </label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                        <div className="flex items-center pl-3">
                            <input
                            id="non-fiksi"
                            type="checkbox"
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded"
                            />
                            <label
                            htmlFor="non-fiksi"
                            className="w-full py-3 ml-2 text-sm font-medium text-primary"
                            >
                            Non-Fiksi
                            </label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                        <div className="flex items-center pl-3">
                            <input
                            id="romansa"
                            type="checkbox"
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded"
                            />
                            <label
                            htmlFor="romansa"
                            className="w-full py-3 ml-2 text-sm font-medium text-primary"
                            >
                            Romansa
                            </label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                        <div className="flex items-center pl-3">
                            <input
                            id="misteri"
                            type="checkbox"
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded"
                            />
                            <label
                            htmlFor="misteri"
                            className="w-full py-3 ml-2 text-sm font-medium text-primary"
                            >
                            Misteri
                            </label>
                        </div>
                    </li>
                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                        <div className="flex items-center pl-3">
                            <input
                            id="komedi"
                            type="checkbox"
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded"
                            />
                            <label
                            htmlFor="komedi"
                            className="w-full py-3 ml-2 text-sm font-medium text-primary"
                            >
                            Komedi
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="mb-6">
                <label
                    htmlFor="story"
                    className="block mb-2 text-sm font-medium text-primary"
                >
                    Story
                </label>
                <textarea
                    id="story"
                    rows={6}
                    className="block p-2.5 w-full text-sm text-primary bg-gray-50 rounded-lg border border-gray-300"
                    placeholder="Tuliskan ceritamu disini..."
                    defaultValue={""}
                />
            </div>
            <div className="mb-6">
                <label
                    className="block mb-2 text-sm font-medium text-primary"
                    htmlFor="cover"
                >
                    Upload Cover
                </label>
                <input
                    className="block w-full text-sm text-primary border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                    id="cover"
                    type="file"
                />
            </div>
            <div className="mb-6">
                <button
                type="submit"
                className="text-white bg-primary hover:bg-primary/80 duration-300 transition-all font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                >
                Submit
                </button>
            </div>
        </form>
    </>
  )
}

export default AddBook;