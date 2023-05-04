import { createSlice } from "@reduxjs/toolkit";
import { paymentState } from "../initialState/PaymentState";
import { createPaymentAsyncThunk } from "../thunks/PaymentThunk";

const paymentSlice = createSlice({
  name: "payment",
  initialState: paymentState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createPaymentAsyncThunk.fulfilled, (state, action) => {
      state.isSuccess = action.payload.isSuccess
      state.redirectUrl = action.payload.redirectUrl
    })
  }
})

const paymentReducer = paymentSlice.reducer
const paymentSelector = state => state.paymentReducer

export {
  paymentReducer,
  paymentSelector
}