import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import summonReducer from "../features/summons/summonSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    summon: summonReducer,
  },
});
