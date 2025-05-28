import { configureStore } from "@reduxjs/toolkit";
import userFollowReducer from "../features/userFollows/userFollowsSlice";
import storiesReducer from "../features/stories/storieSlice";

export const store = configureStore({
  reducer: {
    userFollows: userFollowReducer,
    stories:storiesReducer
  },
});
