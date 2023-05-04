import { createAsyncThunk } from '@reduxjs/toolkit';
import { URL } from '../../constant';
import { login, getUserLogged, register, verifyAccount, refreshTokenAsync } from '../../api/auth';

export const loginAsyncThunk = createAsyncThunk('auth/login', async (payload) => {
	try {
		const response = await login(URL, {
			email: payload.email,
			password: payload.password
		});
		console.log(response);
		return response;
	} catch (error) {
		console.log(error);
	}
});

export const registerAsyncThunk = createAsyncThunk('auth/register', async (payload) => {
	try {
		const response = await register(URL, {
			username: payload.username,
			email: payload.email,
			password: payload.password
		});
		return response;
	} catch (error) {
		console.log(error);
	}
});

export const getUserLoggedAsyncThunk = createAsyncThunk('auth/user-logged', async (payload) => {
	try {
		const response = await getUserLogged(URL, payload.accessToken);
		return response;
	} catch (error) {
		console.log(error); 
	}
});

export const sendVerificationMailAsyncThunk = createAsyncThunk('auth/send-mail', async (payload) => {
	try {
		const response = await verifyAccount(URL, {
			email: payload.email
		});
		return response;
	} catch (error) {
		console.log(error);
	}
});

export const refreshTokenAsyncThunk = createAsyncThunk('auth/refresh-token', async (payload) => {
	try {
		const response = await refreshTokenAsync(URL, {
			email: payload.email,
			accessToken: payload.accessToken,
			refreshToken: payload.refreshToken
		});
		return response;
	} catch (error) {
		console.log(error);
	}
});