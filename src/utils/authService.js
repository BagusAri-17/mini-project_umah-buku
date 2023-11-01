import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"
import { auth } from "../config/firebase"
import { signOut } from "firebase/auth"

const authService = {
    isAuthenticated() {
		if (this.getToken()) return true;
		return false;
	},

    getToken() {
        const token = Cookies.get("idToken");
        return token;
    },

    storeCredentialsToCookie(idToken){
		if (idToken) Cookies.set("idToken", idToken);
    },

    clearCredentialsFromCookie() {
		Cookies.remove("idToken");
	},

    async logOut() {
		try {
			await signOut(auth);
			Cookies.remove("idToken");
		} catch (err) {
			console.error(err);
		}
	}
}

export default authService;