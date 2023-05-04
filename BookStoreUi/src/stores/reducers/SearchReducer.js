import { createSlice } from "@reduxjs/toolkit";
import { SearchState } from "../initialState/SearchState";
import { searchByNameAsyncThunk } from "../thunks/SearchThunk";

const searchSlice = createSlice({
  name: "search",
  initialState: SearchState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchByNameAsyncThunk.fulfilled, (state, action) => {
      if (action.payload === undefined)
      {
        state.results = []
      }
      else {
        state.results = action.payload
      }
    })
  }
})

const searchReducer = searchSlice.reducer
const searchSelector = state => state.searchReducer

export {
  searchReducer,
  searchSelector
}