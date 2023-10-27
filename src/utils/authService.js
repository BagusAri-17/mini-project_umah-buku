import {auth} from "../config/firebase"
import {signOut} from "firebase/auth"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"

const authService = {
    isAuthenticated() {
		if (this.getToken()) return true;
		return false;
	},

    getToken() {
        const token = Cookies.get("idToken");
        return token;
    },

    // getRefreshToken() {
    //     return Cookies.get("refreshToken");
    // },

    storeCredentialsToCookie(idToken){
        // const expires = new Date();
        // expires.setSeconds(expires.getSeconds() + 10);
		if (idToken) Cookies.set("idToken", idToken);
		// Cookies.set("refreshToken", refreshToken);
    },

    clearCredentialsFromCookie() {
		Cookies.remove("idToken");
		// Cookies.remove("refreshToken");
	},

    async logOut() {
		try {
			await signOut(auth);
			Cookies.remove("idToken");
			useNavigate("/");
		} catch (err) {
			console.error(err);
		}
	}
}

export default authService;