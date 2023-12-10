import React from 'react'
import MovieLists from './MovieLists';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies)

  return (
    <div>
        <MovieLists title={"Now Playing"} movies={movies.nowPlayingMovies}/>
    </div>
  )
}

export default SecondaryContainer;