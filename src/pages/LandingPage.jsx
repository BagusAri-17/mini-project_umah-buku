import { Helmet } from "react-helmet"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Beranda/Hero"
import Koleksi from "../components/Beranda/Koleksi"
import BukuPopuler from "../components/Beranda/BukuPopuler"

const LandingPage = () => {
  return (
    <>
        <Helmet>
          <title>Umah Buku</title>
          <meta name="description" content="Beranda" />
        </Helmet>
        <Header />
        <Hero />
        <Koleksi />
        <BukuPopuler />
        <Footer />
    </>
  )
}

export default LandingPage