import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {advertsReduser} from "./adverts/advertsSlise";
import { filterReducer } from "./filter/filterSlise";

const persistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'],
}

export const store = configureStore({
  reducer: persistReducer(persistConfig, advertsReduser),
  filter: filterReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);

// export const store = configureStore({
//   reducer: advertsReduser,
// })
