import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BODY_IMG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
        <div className='fixed -z-10 '>
            <img className='h-screen object-cover md:h-full' src = {BODY_IMG_URL}
            alt='bodyImage'/>
        </div>
        <div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
        </div>
    
    </>
  )
}

export default GptSearch