import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGetParentCategoryAsync, fetchGetBookByCateAsync } from "../../api/category";
import { URL } from "../../constant";

const fetchCategoryAsyncThunk = createAsyncThunk("category/fetch-category", async (payload) => {
    try {
        const response = await fetchGetParentCategoryAsync(URL)
        return response
    } catch (error) {
        console.log(error)
    }
})

const fetchGetBookByCategoryAsyncThunk = createAsyncThunk("category/fetch-get-book", async (payload) => {
    try {
        const { categoryId } = payload
        const response = await fetchGetBookByCateAsync(URL, categoryId)
        console.log({ response })
        return response
    } catch (error) {
        console.log(error)
    }
}) 
export {fetchCategoryAsyncThunk, fetchGetBookByCategoryAsyncThunk}