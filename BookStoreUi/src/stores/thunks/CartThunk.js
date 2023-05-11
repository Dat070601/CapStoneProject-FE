import { addProductToCartAsync, deleteProductInCartAsync, fetchCartAsync } from '../../api/cart';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { URL } from '../../constant';

const fetchCartAsyncThunk = createAsyncThunk('cart/fetch-cart', async (payload) => {
	try {
		const response = await fetchCartAsync(
			URL, 
			payload.token,
		);
		return response;
	} catch (error) {
		console.log(error);
	}
});

const addProductToCartAsyncThunk = createAsyncThunk("cart/add-product-to-cart", async (payload) => {
	try {
		const { token, bookId, quantity } = payload
		const response = await addProductToCartAsync(
			URL,
			token,
			{
				bookId,
				quantity	
			}
		)
		return response
	} catch (error) {
		console.log(error)
	}
})

const deleteProductInCartAsyncThunk = createAsyncThunk("cart/delete-product-in-cart", async (payload) => {
	try {
		const { token, data } = payload
		const response = await deleteProductInCartAsync(URL, {
			token,
			data
		}) 
		return response
	} catch (error) {
		console.log(error)
	}
})

export { fetchCartAsyncThunk, addProductToCartAsyncThunk, deleteProductInCartAsyncThunk };