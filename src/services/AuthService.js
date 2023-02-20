import axios from "axios";

const DEFAULT_API_URL = "https://auth-api-express.onrender.com/api";
//192.168.1.47:3001
class AuthService {
	setDevURL() {
		return process.env.NODE_ENV === "development" ? "http://192.168.1.9:3001/api" : DEFAULT_API_URL;
	}

	login(credentials) {
		return axios.post(`${this.setDevURL()}/user/login`, credentials);
	}
	google(code) {
		return axios.post(`${this.setDevURL()}/user/auth/google`, code);
	}
	decode(tokenObj) {
		const config = {
			headers: {
				Authorization: `Bearer ${tokenObj.token}`,
			},
		};
		return axios.post(`${this.setDevURL()}/user/decode`, tokenObj, config);
	}
	logout(tokenObj) {
		return axios.post(`${this.setDevURL()}/user/logout`, tokenObj);
	}
	signup(details) {
		return axios.post(`${this.setDevURL()}/user/signup`, details);
	}
}

export default new AuthService();
