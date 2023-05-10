import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGetParentCategoryAsync } from "../../api/category";
import { URL } from "../../constant";

const fetchCategoryAsyncThunk = createAsyncThunk("category/fetch-category", async (payload) => {
    try {
        const response = await fetchGetParentCategoryAsync(URL)
        return response
    } catch (error) {
        console.log(error)
    }
})

export {fetchCategoryAsyncThunk}