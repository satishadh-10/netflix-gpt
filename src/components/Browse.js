import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks.js/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks.js/usePopularMovies';
import useTopRatedMovies from '../hooks.js/useTopRatedMovies';
import GptSearch from "./GptSearch"
import { useSelector } from 'react-redux';

const Browse = () => {

  const showGptSearch = useSelector((store) => store.gpt.gptSearchToogle)
  
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header/>
      {showGptSearch? (<GptSearch/>) :(<> <MainContainer/> <SecondaryContainer/> </>)}
    </div>
  )
}

export default Browse;