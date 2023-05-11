import { createSlice } from "@reduxjs/toolkit";
import { categpryState } from "../initialState/CategoryState";
import { fetchCategoryAsyncThunk, fetchGetBookByCategoryAsyncThunk } from "../thunks/CategoryThunk";

const categorySlice = createSlice({
    name : 'category',
    initialState : categpryState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategoryAsyncThunk.fulfilled, (state, action) => {
            state.cates = action.payload
        })

        builder.addCase(fetchGetBookByCategoryAsyncThunk.pending, () => {
            console.log("getting books...")
        })

        builder.addCase(fetchGetBookByCategoryAsyncThunk.fulfilled, (state, action) => {
            state.cate = action.payload
        })
    }
})

const categoryReducer = categorySlice.reducer
const categorySelector = (state) => state.categoryReducer

export { categorySelector , categoryReducer }