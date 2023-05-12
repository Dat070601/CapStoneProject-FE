import { createSlice } from '@reduxjs/toolkit';
import { authState } from '../initialState/AuthState';
import { loginAsyncThunk, getUserLoggedAsyncThunk, registerAsyncThunk, sendVerificationMailAsyncThunk, refreshTokenAsyncThunk } from '../thunks/AuthThunk';

const AuthSlice = createSlice({
	name: 'auth',
	initialState: authState,
	reducers: {}, 
	extraReducers: (builder) => {
		builder.addCase(loginAsyncThunk.fulfilled, (state, action) => {
			if (action.payload.isSuccess == false)
			{
				state.isSuccess = action.payload.isSuccess;
				state.message = action.payload.message;
			}
			else {
				state.isSuccess = action.payload.isSuccess;
				state.isActive = action.payload.isActive;
				state.message = 'Welcome back';
				state.accessToken = action.payload.accessToken;
				state.refreshToken = action.payload.refreshToken;
			}
		});

		builder.addCase(registerAsyncThunk.fulfilled, (state, action) => {
			if (!action.payload.isSuccess)
			{
				state.isSuccess = action.payload.isSuccess;
				state.message = 'please retype error fields';
			}
			state.isSuccess = action.payload.isSuccess;
			state.message = 'Register successfully';
		});

		builder.addCase(getUserLoggedAsyncThunk.fulfilled, (state, action) => {
			// if (action.payload.isSuccess === false)
			// {
			// 	state.isSuccess = action.payload.isSuccess;
			// 	state.message = 'no user logged';
			// }
			// state.isSuccess = action.payload.isSuccess;
			state.message = 'Logged';
			// state.email = action.payload.userName;
			// state.id = action.payload.userId;
		});

		builder.addCase(sendVerificationMailAsyncThunk.fulfilled, (state, action) => {
			if (!action.payload.isSuccess)
			{
				state.isSuccess = action.payload.isSuccess;
				state.message = 'failed to send mail';
			}
			state.isSuccess = action.payload.isSuccess;
			state.message = 'sent verification mail';
		});

		builder.addCase(refreshTokenAsyncThunk.fulfilled, (state, action) => {
			if (!action.payload.isSuccess)
			{
				state.isSuccess = action.payload.isSuccess;
				state.message = 'failed to refresh';
			}
		});
	}
});

const authReducer = AuthSlice.reducer;
const authSelector = (state) => state.authReducer;

export { authReducer, authSelector };