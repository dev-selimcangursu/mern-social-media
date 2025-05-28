import { configureStore } from "@reduxjs/toolkit";
import userFollowReducer from "../features/userFollows/userFollowsSlice";

export const store = configureStore({
  reducer: {
    userFollows: userFollowReducer,
  },
});
