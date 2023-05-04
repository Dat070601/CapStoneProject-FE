import axios from 'axios';

const fetchCustomerProfileAsync = async (url, { token }) => {
	try {
		const response = await axios.get(`${url}/get-customer`, {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		});
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

const createCustomerProfileAsync = async (url, token, { fullName, phoneNumber }) => {
	try {
		const response = await axios({
			url: `${url}/create/customer`,
			headers: {
				Authorization: `bearer ${token}`
			},
			method: "POST",
			data: {
				fullName,
				phoneNumber
			}
		})
		return response.data
	} catch (error) {
		console.log(error)
	}
}

export { fetchCustomerProfileAsync, createCustomerProfileAsync };