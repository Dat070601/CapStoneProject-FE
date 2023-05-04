import axios from 'axios';

const login = async (url, { email, password }) => {
	const response = await axios.post(`${url}/api/user/login`, {
		email,
		password
	});
	return response.data;
};

const register = async (url, { username, email, password }) => {
	const response = await axios.post(`${url}/register/customer`, {
		username,
		email,
		password
	});
	return response.data;
};

const getUserLogged = async (url, token) => {
	const response = await axios({
		url: `${url}/user`,
		method: 'GET',
		headers: {
			'Authorization': `Bearer ${token}`
		}
	});
	return response.data;
};

const verifyAccount = async (url, { email }) => {
	const response = await axios.post(`${url}/send-mail`, {
		email
	});
	return response.data;
};

const refreshTokenAsync = async (url, { email, accessToken, refreshToken }) => {
	const response = await axios.post(`${url}?email=${email}`, {
		accessToken,
		refreshToken
	});
	return response.data;
};

export { login, register, getUserLogged, verifyAccount, refreshTokenAsync };
