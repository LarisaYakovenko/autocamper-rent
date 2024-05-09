import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = "https://657e1dcb3e3f5b18946387a8.mockapi.io"

export const getAllAdverts = createAsyncThunk(
  "advert/getAllAdverts",
  async ( _,  thunkAPI) => {
    try {
      const { data } = await axios.get(`/advert`);
      console.log({data});
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)
