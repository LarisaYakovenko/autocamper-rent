import { createSlice } from "@reduxjs/toolkit";
import { getAllAdverts } from "./operations";

const handlePending = state => {
  state.isLoading = true;
};

const advertSlice = createSlice({
  name: "advert",
  initialState: {
    adverts: [],
    favorites: JSON.parse(localStorage.getItem('persist:favorites'))?.favorites ?? [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        advert => advert._id !== action.payload
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllAdverts.pending, handlePending)
      .addCase(getAllAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.adverts = action.payload;
      })
      .addCase(getAllAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
})

  }

});

export const { addFavorite, removeFavorite } = advertSlice.actions;
export const advertsReduser = advertSlice.reducer;

