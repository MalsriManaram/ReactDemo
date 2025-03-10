import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: { name: "Malsri" },
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {

            state.user = action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
// just a demo
// The userSlice.js file is used to create a slice of the Redux store using the createSlice function from Redux Toolkit. It defines the initial state of the user object with a default name value. It also defines a setUser reducer function that updates the user object with the payload value. The setUser action is exported for use in the application, and the userSlice reducer is exported as the default export.