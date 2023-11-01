import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import authService from "../utils/authService";
import Logo from "../assets/logo/logo-black.png"

const Login = () => {
    const [error, setError] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            user.getIdToken().then((idToken) => {
                authService.storeCredentialsToCookie(idToken);
                return navigate("/dashboard/main");

            }).catch((error) => {
                console.error("Error getting ID token:", error);
            });
            // return navigate("/");
        })
        .catch((error) => {
            setError(true);
        });
    }

  return (
    <>
        <section className="bg-gray-50 ">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                <a
                href="/"
                className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
                >
                <img
                    className=""
                    src={Logo}
                    alt="logo"
                />
                </a>
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-primary md:text-2xl">
                    Login With Admin Account
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                    <div>
                        <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-primary"
                        >
                        Your email
                        </label>
                        <input
                        onChange={e => setEmail(e.target.value)}
                        // value={email}
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="name@company.com"
                        required=""
                        />
                    </div>
                    <div>
                        <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-primary"
                        >
                        Password
                        </label>
                        <input
                        onChange={e => setPassword(e.target.value)}
                        // value={password}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        required=""
                        />
                    </div>
                    {error && <div>
                        <p className="text-sm text-red-500">Wrong Email or Password of Admin Account</p>
                    </div>}
                    <button
                        type="submit"
                        className="w-full text-white bg-primary hover:bg-primary rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Login
                    </button>
                    </form>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Login