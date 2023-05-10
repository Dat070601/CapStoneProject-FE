import { createSlice } from "@reduxjs/toolkit";
import { getNumberOfPageAsyncThunk, fetchProductAsyncThunk, fetchProductBestSellerAsyncThunk, fetchTopNewProductsAsyncThunk, getProductByIdAsyncThunk, fetchBookSameCateAsyncThunk } from "../thunks/ProductThunk";
import { productState } from "../initialState/ProductState";

const productSlice = createSlice({
  name: "product",
  initialState: productState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductAsyncThunk.fulfilled, (state, action) => {
      state.books = action.payload
    }),
    builder.addCase(getNumberOfPageAsyncThunk.fulfilled, (state, action) => {
      state.page = action.payload
    }),
    builder.addCase(getProductByIdAsyncThunk.fulfilled, (state, action) => {
      state.book = action.payload
    }),
    builder.addCase(fetchProductBestSellerAsyncThunk.fulfilled, (state, action) => {
      state.booksBestSeller = action.payload
    }),
    builder.addCase(fetchTopNewProductsAsyncThunk.fulfilled, (state, action) => {
      state.booksTopNew = action.payload
    }),
    builder.addCase(fetchBookSameCateAsyncThunk.fulfilled, (state, action) => {
      state.books = action.payload
    })
  }
})

export default productSlice.reducer
const productSelector = (state) => state.ProductReducer

export { 
      productSelector, 
}