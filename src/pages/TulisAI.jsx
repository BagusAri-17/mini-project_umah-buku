import { Helmet } from "react-helmet"
import Footer from "../components/Footer";
import Header from "../components/Header"
import Hero from "../components/TulisAI/Hero";
import TulisCerita from "../components/TulisAI/TulisCerita";

const TulisAI = () => {
  return (
    <>
      <Helmet>
          <title>Tulis AI</title>
          <meta name="description" content="Tulis AI" />
        </Helmet>
      <Header />
      <Hero />
      <TulisCerita />
      <Footer />
    </>
  )
}

export default TulisAI;