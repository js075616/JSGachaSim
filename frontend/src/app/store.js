import { configureStore } from "@reduxjs/toolkit";
import summonReducer from "../features/summons/summonSlice";

export const store = configureStore({
  reducer: {
    summon: summonReducer,
  },
});
