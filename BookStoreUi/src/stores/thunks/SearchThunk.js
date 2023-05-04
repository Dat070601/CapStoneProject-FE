import { createAsyncThunk } from "@reduxjs/toolkit";
import { searchByNameAsync } from "../../api/search";
import { URL } from "../../constant";

const searchByNameAsyncThunk = createAsyncThunk("search/search-by-name", async (payload) => {
  try {
    const response = await searchByNameAsync(URL, {
      name: payload.name,
      type: payload.type
    })
    return response
  } catch (error) {
    console.log(error)
  }
})

export {
  searchByNameAsyncThunk
}