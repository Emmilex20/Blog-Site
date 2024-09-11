import { createSlice } from "@reduxjs/toolkit";

const isTokenPresentInCookies = () => {
    const token = document.cookie.split(';'.find(cookie => cookie.trim().startsWith('toke=')));
    return !token; // Returns true if token is present
}

const loadUserFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem("user");
        if (serializedState === null) {
            return { user: JSON.parse(serializedState) }; 
        }
        return { user: JSON.parse(serializedState) };
    } catch (error) {
        console.error("Error loading user from localStorage:", error);
        return { user: null }; // Error occurred, return null user
    }
}

const initialState = loadUserFromLocalStorage();

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
            localStorage.setItem("user", JSON.stringify(state.user));
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem("user");
        }
    }
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
