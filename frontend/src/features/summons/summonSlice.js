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
export const getDFSummon = createAsyncThunk("summon", async (_, thunkAPI) => {
  try {
    return await summonService.getDFSummon();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const getRDSummon = createAsyncThunk("summon", async (_, thunkAPI) => {
  try {
    return await summonService.getRDSummon();
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
      .addCase(getDFSummon.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDFSummon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cardsFromAPI = action.payload;
      })
      .addCase(getDFSummon.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = summonSlice.actions;
export default summonSlice.reducer;
