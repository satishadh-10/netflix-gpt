import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideos } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (movieId) => {
    const trailerVideos = useSelector((store) => store.movies.trailerVideos)
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"
        +movieId+
        "/videos?language=en-US", API_OPTIONS)
        const json = await data.json();
        

        const filterData = json.results.filter((video) => video?.type == "trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0]
        
        dispatch(addTrailerVideos(trailer))

    }


    useEffect(() => {
       !trailerVideos &&  getMovieVideos();
    }, [])
}

export default useMovieTrailer;