import React from 'react'
import { useSelector } from 'react-redux'
import MovieLists from './MovieLists'

const GptMovieSuggestion = () => {
    
  const gpt = useSelector((store) => store.gpt)
  const {movieNames, movieResults} = gpt;
  if(!movieNames) return null;

  return (
    <div className='p-4 mt-[5%] bg-black bg-opacity-90 text-white'>
      <div>
          {movieNames.map((movieName, index) => (<MovieLists 
          key={movieName}  
          title={movieName} 
          movies={movieResults[index]} 
          />))}
         
          
      </div>
    </div>
  )
}

export default GptMovieSuggestion