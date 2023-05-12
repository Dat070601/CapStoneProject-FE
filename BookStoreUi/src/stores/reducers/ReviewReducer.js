import { createSlice } from "@reduxjs/toolkit";
import { addReviewAsyncThunk } from "../thunks/ReviewThunk";
import { ReviewState } from "../initialState/ReviewState";

const reviewSlice = createSlice({
    name: "review",
    initialState: ReviewState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addReviewAsyncThunk.fulfilled, (state, action) => {
            state.isSuccess = action.payload.isSuccess
            state.message = action.payload.message
        })
    }
})

const reviewReducer =  reviewSlice.reducer
const reviewSelector = (state) => state.reviewReducer

export {
    reviewReducer,
    reviewSelector
}