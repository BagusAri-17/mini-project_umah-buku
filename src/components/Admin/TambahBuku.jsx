import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { db, storage } from "../../config/firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

const TambahBuku = () => {
    const [data, setData] = useState({});
    const [image, setImage] = useState("");
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [progressing, setProgressing] = useState(null);
    const [error, setError] = useState("");
    const [isImageUploaded, setIsImageUploaded] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        // Upload Image to Firebase Storage
        const uploadImage = () => {
            const storageRef = ref(storage, image.name)
            const uploadTask = uploadBytesResumable(storageRef, image)
            uploadTask.on("state_changed",
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setProgressing(progress);
                }, (error) => {
                    console.log(error);
                }, () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        // setData Image URL
                        setData((prev) => ({ ...prev, img: downloadURL }));
                    })
                }
            )
        }
        image && uploadImage();
    }, [image])

    

    // Handle Checkbox
    const handleCheckboxChange = (e) => {
        const { value } = e.target;
        if (selectedGenres.includes(value)) {
            setSelectedGenres((prev) => prev.filter((genre) => genre !== value));
        } else {
            setSelectedGenres((prev) => [...prev, value]);
        }
    };

    // Handle Input Field
    const handleInput = (e) => {
        const { id, value } = e.target;
        setData({ ...data, [id]: value});
    }

    // Handle Adding Data to Firebase Database
    const handleAdd = async (e) => {
        e.preventDefault();
        const regex = /^[A-Za-z\s]+$/;

        // Validation for Input Field
        if (!data.author && !data.title && !data.category && !data.story && selectedGenres.length === 0) {
            setError("Semua input harus diisi.");
            return;
        }
        if(data.author && !regex.test(data.author)) {
            setError("Nama penulis hanya boleh mengandung huruf dan spasi.");
            return;
        }
        if (!isImageUploaded) {
            setError("Pilih file gambar terlebih dahulu.");
            return;
        }
        try {
            await addDoc(collection(db, "bookdata"), {
                ...data,
                genres: selectedGenres,
                timestamp: serverTimestamp()
            });
            setData({});
            setSelectedGenres([]);
            setIsImageUploaded(false);
            return navigate("/dashboard/table");
        } catch (err) {
            console.log(err);
            setError("Terjadi kesalahan. Silakan coba lagi.");
        }
    }

    return (
        <>
            <form className="mt-4 md:mt-8" onSubmit={handleAdd}>
                <div className="mb-6 grid grid-cols-2 gap-4 md:gap-8">
                    {/* Author Field */}
                    <div>
                        <label
                            htmlFor="author"
                            className="block mb-2 text-sm font-medium text-primary"
                        >
                            Author
                        </label>
                        <input
                            onChange={handleInput}
                            type="text"
                            id="author"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg block w-full p-2.5"
                            placeholder="Tuliskan nama penulis"
                            required=""
                        />
                    </div>

                    {/* Title Field */}
                    <div>
                        <label
                            htmlFor="title"
                            className="block mb-2 text-sm font-medium text-primary"
                        >
                            Judul
                        </label>
                        <input
                            onChange={handleInput}
                            type="text"
                            id="title"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg block w-full p-2.5"
                            placeholder="Tuliskan judul buku"
                            required=""
                        />
                    </div>
                </div>

                {/* Category Select */}
                <div className="mb-6">
                    <label
                        htmlFor="category"
                        className="block mb-2 text-sm font-medium text-primary"
                    >
                        Kategori
                    </label>
                    <select
                        onChange={handleInput}
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

                {/* Genre Checkbox */}
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
                                    onChange={handleCheckboxChange}
                                    defaultValue="Fiksi"
                                    // checked={selectedGenres.includes("Fiksi")}
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
                                    onChange={handleCheckboxChange}
                                    // checked={selectedGenres.includes("Non-Fiksi")}
                                    defaultValue="Non-Fiksi"
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
                                    onChange={handleCheckboxChange}
                                    // checked={selectedGenres.includes("Romansa")}
                                    defaultValue="Romansa"
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
                                    onChange={handleCheckboxChange}
                                    // checked={selectedGenres.includes("Misteri")}
                                    defaultValue="Misteri"
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
                                    onChange={handleCheckboxChange}
                                    // checked={selectedGenres.includes("Komedi")}
                                    defaultValue="Komedi"
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

                {/* Story Field */}
                <div className="mb-6">
                    <label
                        htmlFor="story"
                        className="block mb-2 text-sm font-medium text-primary"
                    >
                        Cerita
                    </label>
                    <textarea
                        onChange={handleInput}
                        id="story"
                        rows={6}
                        className="block p-2.5 w-full text-sm text-primary bg-gray-50 rounded-lg border border-gray-300"
                        placeholder="Tuliskan ceritamu disini..."
                    />
                </div>

                {/* Upload Cover Book */}
                <div className="mb-6">
                    <label
                        className="block mb-2 text-sm font-medium text-primary"
                        htmlFor="cover"
                    >
                        Upload Cover
                    </label>
                    <input
                        onChange={(e) => {
                            const file = e.target.files[0];
                            if (file && file.type.startsWith("image/")) {
                                setImage(file);
                                setIsImageUploaded(true);
                                setError("");
                            } else {
                                setIsImageUploaded(false);
                                setError("Pilih file gambar dengan tipe yang valid.");
                            }
                        }}
                        className="block w-full text-sm text-primary border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                        id="cover"
                        type="file"
                    />
                    <label className="mb-2 mt-4 text-sm font-medium text-primary block">Preview Image</label>
                    <img className="w-64" src={image ? URL.createObjectURL(image) : "https://placehold.co/256x256"} alt="" />
                </div>

                {/* Button Submit */}
                <div className="mb-6">
                    <button
                        disabled={progressing !== null && progressing < 100}
                        type="submit"
                        className="text-white bg-primary hover:bg-primary/80 duration-300 transition-all font-medium rounded-lg text-sm px-5 py-2.5 disabled:bg-primary/60"
                    >
                        Submit
                    </button>
                </div>
            </form>
            {error && <div className="bg-red-500 rounded-lg w-full text-white p-4 text-sm mb-4">{error}</div>}
        </>
    )
}

export default TambahBuku;