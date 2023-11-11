import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <>
      <Helmet>
          <title>Not Found</title>
          <meta name="description" content="Not Found" />
      </Helmet>
      <section className="h-screen flex items-center justify-center">
        <div className="container">
          <div className="text-center">
            <h1 className="text-center mb-4 text-7xl tracking-wide lg:text-9xl text-primary">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight text-primary md:text-4xl">
              Halaman Tidak Ditemukan!
            </p>
            <button
              onClick={() => navigate(-1)}
              type="button"
              className="text-white bg-primary hover:bg-primary/80 duration-300 transition-all font-medium rounded-lg text-xl px-8 py-4"
            >
              Kembali
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default NotFound