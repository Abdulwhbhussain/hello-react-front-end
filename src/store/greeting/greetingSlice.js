// slices/greetingSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://127.0.0.1:3000/api/v1/greetings/random_greeting'; // http://localhost:3000/api/v1/greetings/random_greeting

export const getGreeting = createAsyncThunk('greeting/fetchGreeting', async (_, thunkAPI) => {
  try {
    const response = await axios.get(url);
    return response.data.greeting;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const initialState = {
  greeting: '',
  isLoading: true,
  error: undefined,
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGreeting.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGreeting.fulfilled, (state, action) => {
        state.isLoading = false;
        state.greeting = action.payload;
      })
      .addCase(getGreeting.rejected, (state, action) => {
        state.errorMsg = action.payload;
        state.isLoading = action.payload.message;
      });
  },
});

export default greetingSlice.reducer;
