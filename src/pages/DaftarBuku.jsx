import { Helmet } from "react-helmet"
import Header from "../components/Header"
import ListBuku from "../components/DaftarBuku/ListBuku"
import Footer from "../components/Footer"

const DaftarBuku = () => {
  return (
    <>
        <Helmet>
          <title>Daftar Buku</title>
          <meta name="description" content="Daftar Buku" />
        </Helmet>
        <Header />
        <ListBuku />
        <Footer />
    </>
  )
}

export default DaftarBuku