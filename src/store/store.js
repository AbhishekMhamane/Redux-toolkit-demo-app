import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import dataSlice from './slices/dataSlice';
import notificationSlice from './slices/notificationSlice.js'

const rootReducer = combineReducers({
    apiData : dataSlice.reducer,
    notification : notificationSlice.reducer,
    
});

const persistConfig = {
    key: 'root',
    version: 1,
    storage:storage,
  };

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

const persistor = persistStore(store);

export {store,persistor};