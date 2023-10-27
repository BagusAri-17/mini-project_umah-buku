import Hero from '../components/Beranda/Hero'
import Koleksi from '../components/Beranda/Koleksi'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BukuPopuler from '../components/Beranda/BukuPopuler'

const LandingPage = () => {
  return (
    <>
        <Header />
        <Hero />
        <Koleksi />
        <BukuPopuler />
        <Footer />
    </>
  )
}

export default LandingPage