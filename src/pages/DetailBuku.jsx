import { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import { useParams } from "react-router-dom"
import { db } from "../config/firebase"
import { getDoc, doc } from "firebase/firestore"

import Header from "../components/Header"
import Footer from "../components/Footer"

// Library for Timestamp
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const DetailBuku = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Fetch Data Id from Firebase
    const fetchBook = async () => {
      try {
        const bookDocRef = doc(db, "bookdata", id);
        const bookDoc = await getDoc(bookDocRef);

        if (bookDoc.exists()) {
          setBook(bookDoc.data());
        } else {
          console.log("Tidak ada Buku");
        }
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchBook();
  }, [id]);

  if (!book) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <Helmet>
          <title>Detail Buku {book.title}</title>
          <meta name="description" content="Detail Buku" />
      </Helmet>
      <Header />
      <div className="my-32">
          <div className="container">
            {/* title */}
            <div className="max-w-xl">
              <p className="book-category">{book.category}</p>
              <p className="book-genres">{book.genres.join(" ")}</p>
              <h2 className="book-title mt-4">{book.title}</h2>
              <div className="flex gap-4 mt-6 items-center">
                <p className="book-time">{dayjs(book.timestamp.toDate()).fromNow()}</p>
                <p className="text-primary/60">Ditulis Oleh <span className="book-author">{book.author}</span></p>
              </div>
            </div>

            {/* content */}
            <div className="max-w-2xl mx-auto my-10">
              <img className="mx-auto" src={book.img} alt={book.title} />
              <p className="book-description mt-8">{book.story}</p>
            </div>
          </div>
      </div>
      <Footer />
    </>
  )
}

export default DetailBuku