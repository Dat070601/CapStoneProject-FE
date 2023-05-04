import { createAsyncThunk } from '@reduxjs/toolkit';
import { createCustomerProfileAsync, fetchCustomerProfileAsync } from '../../api/profile';
import { URL } from '../../constant';

const customerThunk = createAsyncThunk('customer/get-profile', async (payload) => {
	try {
		const response = await fetchCustomerProfileAsync(URL, {
			token: payload.accessToken
		});
		return response;
	} catch (error) {
		console.log(error);
	}
});

const createCustomerProfileAsyncThunk = createAsyncThunk('customer/create-customer-profile', async (payload) => {
	try {
		const response = await createCustomerProfileAsync(
			URL,
			payload.token, 
			{
				fullName: payload.fullName,
			}
		)
		return response
	} catch (error) {
		console.log(error)
	}
})

export { customerThunk, createCustomerProfileAsyncThunk };