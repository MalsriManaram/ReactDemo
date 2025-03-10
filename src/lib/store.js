import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import  userReducer  from "./features/userSlice";

import { api } from "./api";


export const store = configureStore({
// reducer does is combine all the reducers (slices) into one creating a store 
  reducer: {
    user: userReducer, // Add the userSlice reducer 
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});


setupListeners(store.dispatch);
// The store.js file is used to create the Redux store using the configureStore function from Redux Toolkit. It combines the userSlice reducer and the API reducer into one store. The store is then exported for use in the application. The setupListeners function is used to set up the listeners for the API endpoints. The store.js file also exports the store for use in the application.
