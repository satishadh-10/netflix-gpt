import React from 'react'
import MovieCards from './MovieCards'

const MovieLists = ({title, movies}) => {
    console.log(movies);
  return (
    <div>
        <div>
            <h1>{title}</h1>
        </div>
        <div>
        <MovieCards/>
        </div>
    </div>
  )
}

export default MovieLists