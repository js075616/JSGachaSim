import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import summonService from "./summonService";

const initialState = {
  cardsFromAPI: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get a new set of cards from the server
export const getNewSummon = createAsyncThunk("summon", async (_, thunkAPI) => {
  try {
    return await summonService.getNewSummon();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const summonSlice = createSlice({
  name: "summon",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNewSummon.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNewSummon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cardsFromAPI = action.payload;
      })
      .addCase(getNewSummon.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = summonSlice.actions;
export default summonSlice.reducer;
