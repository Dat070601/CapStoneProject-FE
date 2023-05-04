import { addProductToCartAsync, deleteProductInCartAsync, fetchCartAsync } from '../../api/cart';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { URL } from '../../constant';

const fetchCartAsyncThunk = createAsyncThunk('cart/fetch-cart', async (payload) => {
	try {
		const response = await fetchCartAsync(
			URL, 
			payload.token,
			{
				userId: payload.userId
			}
		);
		return response;
	} catch (error) {
		console.log(error);
	}
});

const addProductToCartAsyncThunk = createAsyncThunk("cart/add-product-to-cart", async (payload) => {
	try {
		const { token, productVariantId, quantity } = payload
		const response = await addProductToCartAsync(
			URL,
			token,
			{
				productVariantId,
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