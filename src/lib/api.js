import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const BACKEND_URL = process.env.BACKEND_URL;

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: `${BACKEND_URL}/api/`}),
    endpoints: (builder) => ({
       // Add the endpoints here
    }),
});

export const { } = api; // Export the hooks for usage in components.

// api.js file is used for Redux Toolkit Query setup. It is used to create an API object that can be used to create endpoints for fetching data from the backend. The API object is then used to create a store with the configureStore function from Redux Toolkit. The store is then exported for use in the application. The api.js file also exports the hooks for usage in components.