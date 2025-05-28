import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchStories } from "../../services/storiesService";

export const storiesGet = createAsyncThunk("/get/stories", async (id) => {
  try {
    let data = await fetchStories(id);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const initialState = {
  story: [],
};

export const storieSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(storiesGet.fulfilled, (state, action) => {
      state.story = action.payload;
    });
  },
});

export default storieSlice.reducer;
