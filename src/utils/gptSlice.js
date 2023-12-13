import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptSearchToogle: false,
        movieNames: null,
        movieResults: null,
    },
    reducers: {
     getGptSearchToogle : (state) => {
           state.gptSearchToogle = !state.gptSearchToogle
        },
     addGptMovieResults : (state, actions) => {
        const {movieNames, movieResults} = actions.payload;
           state.movieNames = movieNames;
           state.movieResults = movieResults;
        },
        removeMovie : (state, actions) => {
            return null;
        }
    }
})

export const { getGptSearchToogle, addGptMovieResults, removeMovie } = gptSlice.actions;
export default gptSlice.reducer;