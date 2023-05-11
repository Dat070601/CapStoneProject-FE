import axios from 'axios';

const fetchCartAsync = async (url, token) => {
	try {
		const response = await axios.get(`${url}/api/cart`, {
			headers: {
				Authorization: `bearer ${token}`
			}
		});
		return response.data;
	} catch (error) {
		console.log(error);
	}
}

const addProductToCartAsync = async (url, token, { bookId, quantity }) => {
	try {
		const response = await axios({
			url: `${url}/api/cart`,
			headers: {
				"Authorization": `bearer ${token}`
			},
			data: {
				bookId,
				quantity
			},
			method: "POST"
		})
		return response.data
	} catch (error) {
		console.log(error)
	}
}

const deleteProductInCartAsync = async (url, { token, data }) => {
	try {
		const response = await axios({
			url: `${url}/api/cart`,
			headers: {
				"Authorization": `bearer ${token}`
			},
			data,
			method: "DELETE"
		})
		return response.data
	} catch (error) {
		console.log(error)
	}
}

export {
	fetchCartAsync,
	addProductToCartAsync,
	deleteProductInCartAsync
};