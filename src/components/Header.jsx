import { useState } from "react"
import { Link } from "react-router-dom"
import Logo from "../assets/logo/logo-black.png"
import { Divide as Hamburger } from "hamburger-react"

const Header = () => {
    // Handling NavToggle
    const [isOpen, setOpen] = useState(false)

    // Window on Scroll
    window.onscroll = () => {
        const header = document.querySelector("nav");
        const fixedNav = header.offsetTop;
    
        if (window.scrollY > fixedNav) {
          header.classList.add("border-b");
        } else {
          header.classList.remove("border-b");
        }
    };

    return (
        <>
            <nav className="bg-white fixed w-full z-20 top-0 left-0 border-gray-200">
                <div className="container flex flex-wrap items-center justify-between mx-auto py-4">
                    <Link to="/" className="flex items-center">
                        <img
                            src={Logo}
                            className="h-10"
                            alt="Umah Buku Logo"
                        />
                    </Link>
                    <div className="flex md:hidden">
                        <Hamburger color={"#3A2E26"} size={32} toggled={isOpen} toggle={setOpen} />
                    </div>
                    <div
                        className={isOpen ? `items-center justify-between w-full md:flex md:w-auto shadow` : "hidden items-center justify-between w-full md:flex md:w-auto"}
                        id="navbar-sticky"
                    >
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row gap-4 md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <Link
                                    to="/"
                                    className="nav-item"
                                >
                                    Beranda
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/daftar-buku"
                                    className="nav-item"
                                >
                                    Daftar Buku
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/tulis-ai"
                                    className="nav-item"
                                >
                                    Tulis.AI
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/tentang-kami"
                                    className="nav-item"
                                >
                                    Tentang Kami
                                </Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header