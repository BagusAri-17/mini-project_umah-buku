import { Helmet } from "react-helmet"
import Header from "../components/Header"
import Tentang from "../components/TentangKami/Tentang"
import Tim from "../components/TentangKami/Tim"
import Footer from "../components/Footer"

const TentangKami = () => {
  return (
    <>
        <Helmet>
          <title>Tentang Kami</title>
          <meta name="description" content="Tentang Kami" />
        </Helmet>
        <Header />
        <Tentang />
        <Tim />
        <Footer />
    </>
  )
}

export default TentangKami