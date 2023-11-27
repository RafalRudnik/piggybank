import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import tasksReducer from "./features/tasklist/tasksSlice";
import accountReducer from "./features/account/accountSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    tasks: tasksReducer,
    account: accountReducer,
  },
});

export default store;
