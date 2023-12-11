import React from 'react'
import MovieLists from './MovieLists';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies)

  return (
    movies.nowPlayingMovies && (
    <div className='bg-black pb-4'>
      <div className='-mt-60  pl-6 relative z-10'>
        <MovieLists title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieLists title={"Top Rated"} movies={movies.topRatedMovies}/>
        <MovieLists title={"What's Popular"} movies={movies.popularMovies}/>
        <MovieLists title={"Top Rated"} movies={movies.nowPlayingMovies}/>
        <MovieLists title={"Comedy"} movies={movies.nowPlayingMovies}/>
        </div>
    </div>
    )
  )
}

export default SecondaryContainer;