import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptSearchToogle: false
    },
    reducers: {
     getGptSearchToogle : (state) => {
           state.gptSearchToogle = !state.gptSearchToogle
        }
    }
})

export const { getGptSearchToogle } = gptSlice.actions;
export default gptSlice.reducer;