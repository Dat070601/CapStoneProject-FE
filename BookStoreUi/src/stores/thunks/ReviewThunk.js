import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAddReviewAsync } from "../../api/review";
import { URL } from "../../constant";

const addReviewAsyncThunk = createAsyncThunk("review/add-review", async(payload) => {
    try {
        const response = await fetchAddReviewAsync(
            URL,
            payload.token,
            payload.data
        )
        return response
    } catch (error) {
        console.log(error);
    }
})

export {addReviewAsyncThunk}