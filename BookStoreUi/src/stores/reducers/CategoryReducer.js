import { createSlice } from "@reduxjs/toolkit";
import { categpryState } from "../initialState/CategoryState";
import { fetchCategoryAsyncThunk } from "../thunks/CategoryThunk";

const categorySlice = createSlice({
    name : 'category',
    initialState : categpryState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategoryAsyncThunk.fulfilled, (state,action) => {
            state.cates = action.payload
            console.log(state.cates)
        })
    }
})

export default categorySlice.reducer
const categorySelector = (state) => state.CategoryReducer

export {categorySelector}