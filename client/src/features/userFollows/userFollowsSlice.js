import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchFollowCount } from "../../services/userFollowService";

export const userFollowCount = createAsyncThunk("/fetch/follow", async (id) => {
  try {
    let data = await fetchFollowCount(id);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const initialState = {
  count: [],
};

export const userFollowsSlice = createSlice({
  name: "userFollows",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userFollowCount.fulfilled, (state, action) => {
      state.count = action.payload;
    });
  },
});

export default userFollowsSlice.reducer;
