import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCards = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-32 md:w-44 pr-4'>
      <img className='rounded-lg' alt='movieCard' 
      src={IMG_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCards