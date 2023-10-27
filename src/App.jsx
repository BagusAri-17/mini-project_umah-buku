import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import DaftarBuku from "./pages/DaftarBuku"
import TentangKami from "./pages/TentangKami"
import TulisAI from "./pages/TulisAI"
import DetailBuku from "./pages/DetailBuku"
import Login from "./pages/Login"
import DashboardMain from "./pages/DashboardMain"
import { PrivateRoute } from "./routes/PrivateRoute"
import { ProtectRoute } from "./routes/ProtectRoute"
import NotFound from "./pages/NotFound"
import DashboardTable from "./pages/DashboardTable"
import DashboardAdd from "./pages/DashboardAdd"

const App = () => {
  return (
    <Router>
      <Routes>

        
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard/main" element={<DashboardMain />} />
          <Route path="/dashboard/table" element={<DashboardTable />} />
          <Route path="/dashboard/add" element={<DashboardAdd />} />
          <Route path="/login" element={<Login />} />
          <Route path="/daftar-buku" element={<DaftarBuku />} />
          <Route path="/tulis-ai" element={<TulisAI />} />
          <Route path="/detail-buku/:id" element={<DetailBuku />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
          <Route path="*" element={<NotFound />} />


      </Routes>
    </Router>
  )
}

export default App