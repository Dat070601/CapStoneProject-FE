import { createSlice } from '@reduxjs/toolkit';
import { cartState } from '../initialState/CartState';
import { addProductToCartAsyncThunk, deleteProductInCartAsyncThunk, fetchCartAsyncThunk } from '../thunks/CartThunk';

const cartSlice = createSlice({
	name: 'cart',
	initialState: cartState,
	reducers: {
		updateCartAmmount: (state, action) => {
			console.log(state.cartAmmount)
			state.cartAmmount = state.cartAmmount + action.payload?.ammount
		},
		fetchQuantityOfProduct: (state, action) => {
			state.cartQuantity = action.payload.quantity
		},
		increaseProductQuantityInCart: (state, action) => {
			state.cartQuantity = action.payload.quantity + 1
		},
		decreaseProductQuantityInCart: (state, action) => {
			state.cartQuantity = action.payload.quantity - 1
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchCartAsyncThunk.fulfilled, (state, action) => {
			if (action.payload === undefined)
			{
				state.carts = []
				state.cartAmmount = 0
			} else {
				state.carts = action.payload
				state.cartAmmount = action.payload?.reduce((prev, current) => prev + current.quantity, 0)
			}
		});

		builder.addCase(addProductToCartAsyncThunk.fulfilled, (state, action) => {
			state.isSuccessInCart = action.payload.isSuccess
			state.message = action.payload.message
		})

		builder.addCase(deleteProductInCartAsyncThunk.fulfilled, (state, action) => {
			state.isSuccessInCart = action.payload.isSuccess
			state.message = action.payload.message
		})
	}
});

const cartReducer = cartSlice.reducer;
const cartSelector = (state) => state.cartReducer;
const { updateCartAmmount, increaseProductQuantityInCart, decreaseProductQuantityInCart, fetchQuantityOfProduct } = cartSlice.actions

export { cartReducer, cartSelector, updateCartAmmount, increaseProductQuantityInCart, decreaseProductQuantityInCart, fetchQuantityOfProduct };