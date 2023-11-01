import { useState, useEffect } from "react";
import { db, storage } from "../../config/firebase"
import { collection, doc, deleteDoc, onSnapshot, updateDoc, serverTimestamp } from "firebase/firestore"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

const Table = () => {
    const [data, setData] = useState([]);
    const [image, setImage] = useState(null);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedId, setSelectedId] = useState("");
    const [progressing, setProgressing] = useState(null);
    const [error, setError] = useState("");
    const [isEditModalVisible, setEditModalVisible] = useState(false);
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);

    const [editedBook, setEditedBook] = useState({
        author: "",
        title: "",
        category: "",
        story: "",
        img: "",
    });
    
    useEffect(() => {
        // Fetch data from Firebase Database
        const unsub = onSnapshot(collection(db, "bookdata"), (snapShot) => {
            let list = [];
            snapShot.docs.forEach((doc) => {
                list.push({ id: doc.id, ...doc.data() });
            });
            setData(list);
        }, (err) => {
            console.log(err)
        }
        );

        return () => {
            unsub();
        };
    }, []);

    // Handle Checkbox
    const handleCheckboxChange = (e, genre) => {
        const { checked } = e.target;
        setSelectedGenres((prevGenres) =>
            checked ? [...prevGenres, genre] : prevGenres.filter((g) => g !== genre)
        );
    };

    // Show Edit Modal
    const showEditModals = (id) => {
        const bookToEdit = data.find((book) => book.id === id);
        setEditedBook(bookToEdit);
        setEditModalVisible(true);
    };

    // Handle Edit Data 
    const handleSave = async () => {
        const regex = /^[A-Za-z\s]+$/;

        if (!editedBook.author || !editedBook.title || !editedBook.category || !editedBook.story || !image) {
            setError("Semua input harus diisi.");
            return;
        }
        if (editedBook.author && !regex.test(editedBook.author)){
            setError("Nama penulis hanya boleh mengandung huruf dan spasi.");
            return;
        }

        setError("");

        try {
            let imgUrl = editedBook.img;

            if (image) {
                const storageRef = ref(storage, image.name);
                const uploadTask = uploadBytesResumable(storageRef, image);

                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        setProgressing(progress);
                    },
                    (error) => {
                        console.log(error);
                    },
                    () => {
                        // Get URL from upload image
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            imgUrl = downloadURL;

                            // Update Data
                            updateDoc(doc(db, "bookdata", editedBook.id), {
                                ...editedBook,
                                img: imgUrl,
                                genres: selectedGenres,
                                timestamp: serverTimestamp()
                            });

                            setData((prevData) =>
                                prevData.map((book) =>
                                    book.id === editedBook.id ? { ...editedBook, img: imgUrl, genres: selectedGenres } : book
                                )
                            );

                            setEditModalVisible(false);
                        });
                    }
                );
            } else {
                await updateDoc(doc(db, "bookdata", editedBook.id), {
                    ...editedBook,
                    img: imgUrl,
                    genres: selectedGenres,
                    timestamp: serverTimestamp()
                });

                setData((prevData) =>
                    prevData.map((book) =>
                        book.id === editedBook.id ? { ...editedBook, img: imgUrl, genres: selectedGenres } : book
                    )
                );

                setEditModalVisible(false);
            }
        } catch (err) {
            console.error("Error updating document: ", err);
        }
    };

    // Show Delete Data
    const showDeleteModals = (id) => {
        setDeleteModalVisible(true);
        setSelectedId(id);
    }

    // Handle Delete Data from Firebase Database
    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "bookdata", id));
            setData(data.filter((item) => item.id !== id));
            setDeleteModalVisible(false);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div className="relative overflow-x-auto mt-4 md:mt-8 rounded-md shadow">

                {/* Table Content */}
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-white uppercase bg-primary">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                No.
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Author
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Genre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((items, index) => (
                            <tr key={items.id} className="bg-white border-b">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                >
                                    {index + 1}
                                </th>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                >
                                    <img className="w-20" src={items.img} alt="" />
                                </th>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                >
                                    {items.author}
                                </th>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                >
                                    {items.title}
                                </th>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                >
                                    {items.category}
                                </th>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                >
                                    {items.genres.join(", ")}
                                </th>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 space-x-2 space-y-2"
                                >
                                    <button type="button" onClick={() => showDeleteModals(items.id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
                                    <button type="button" onClick={() => showEditModals(items.id)} className="px-2 py-1 bg-green-500 text-white rounded">Edit</button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Edit Modal */}
                {isEditModalVisible && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto overflow-x-hidden h-[calc(100%-4rem)] max-h-full mt-10">
                        <div className="fixed inset-0 bg-black opacity-30"></div>
                        <div className="relative z-10 bg-white rounded-lg shadow-lg px-6 py-4 max-w-xl w-full">
                            <form className="mt-4 md:mt-8">
                                <h2 className="text-xl font-semibold mb-4">Edit Details Book</h2>
                                <div className="mb-4 grid grid-cols-2 gap-4 md:gap-8">
                                    <div>
                                        <label
                                            htmlFor="author"
                                            className="block mb-2 text-sm font-medium text-primary"
                                        >
                                            Author
                                        </label>
                                        <input
                                            onChange={(e) => setEditedBook({ ...editedBook, author: e.target.value })}
                                            value={editedBook.author}
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
                                            onChange={(e) => setEditedBook({ ...editedBook, title: e.target.value })}
                                            value={editedBook.title}
                                            type="text"
                                            id="title"
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg block w-full p-2.5"
                                            placeholder="Tuliskan judul buku"
                                            required=""
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="category"
                                        className="block mb-2 text-sm font-medium text-primary"
                                    >
                                        Kategori
                                    </label>
                                    <select
                                        onChange={(e) => setEditedBook({ ...editedBook, category: e.target.value })}
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
                                <div className="mb-4">
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
                                                    onChange={(e) => handleCheckboxChange(e, "Fiksi")}
                                                    checked={selectedGenres.includes("Fiksi")}
                                                    defaultValue="Fiksi"
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
                                                    onChange={(e) => handleCheckboxChange(e, "Non-Fiksi")}
                                                    checked={selectedGenres.includes("Non-Fiksi")}
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
                                                    onChange={(e) => handleCheckboxChange(e, "Romansa")}
                                                    checked={selectedGenres.includes("Romansa")}
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
                                                    onChange={(e) => handleCheckboxChange(e, "Misteri")}
                                                    checked={selectedGenres.includes("Misteri")}
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
                                                    onChange={(e) => handleCheckboxChange(e, "Komedi")}
                                                    checked={selectedGenres.includes("Komedi")}
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
                                <div className="mb-4">
                                    <label
                                        htmlFor="story"
                                        className="block mb-2 text-sm font-medium text-primary"
                                    >
                                        Story
                                    </label>
                                    <textarea
                                        onChange={(e) => setEditedBook({ ...editedBook, story: e.target.value })}
                                        value={editedBook.story}
                                        id="story"
                                        rows={4}
                                        className="block p-2.5 w-full text-sm text-primary bg-gray-50 rounded-lg border border-gray-300"
                                        placeholder="Tuliskan ceritamu disini..."
                                    />
                                </div>
                                <div className="mb-4">
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
                                                setError("");
                                            } else {
                                                setError("Pilih file gambar dengan tipe yang valid.");
                                            }
                                        }}
                                        className="block w-full text-sm text-primary border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                                        id="cover"
                                        type="file"
                                    />
                                    <label className="mb-2 mt-4 text-sm font-medium text-primary block">Preview Image</label>
                                    <img className="w-20" src={image ? URL.createObjectURL(image) : "https://placehold.co/256x256"} alt="" />
                                </div>
                                <div className="space-x-2">
                                    <button
                                        disabled={progressing !== null && progressing < 100}
                                        onClick={() => handleSave()}
                                        type="button"
                                        className="text-white bg-primary hover:bg-primary/80 duration-300 transition-all font-medium rounded-lg text-sm px-5 py-2.5 disabled:bg-primary/60"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={() => setEditModalVisible(false)}
                                        type="button"
                                        className="text-white bg-red-500 hover:bg-red-500/80 duration-300 transition-all font-medium rounded-lg text-sm px-5 py-2.5"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                            {error && <div className="bg-red-500 rounded-lg w-full text-white p-2 text-sm mt-2">{error}</div>}
                        </div>
                    </div>
                )}

                {/* Delete Modal */}
                {isDeleteModalVisible && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="fixed inset-0 bg-black opacity-30"></div>
                        <div className="relative z-10 bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                            <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
                            <p className="text-gray-700 mb-4">
                                Are you sure you want to delete this product?
                            </p>
                            <div className="flex justify-end">
                                <button onClick={() => handleDelete(selectedId)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mr-2">Yes</button>
                                <button onClick={() => isDeleteModalVisible(false)} className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">No</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Table