import React from 'react'
import MovieCards from './MovieCards'
import { hover } from '@testing-library/user-event/dist/hover';

const MovieLists = ({title, movies}) => {
    console.log(movies);
  return (
    <div className='px-8'>
      <h1 className='text-2xl text-white py-4'>{title}</h1>
        <div className=' flex overflow-x-scroll scrollbar hover:scrollbar-track-slate-800 scrollbar-h-2  scrollbar-thumb-orange-700 scrollbar-thumb-rounded-lg scrollbar-track-rounded-lg  scroll-smooth'>
            <div className='flex'>
          {movies?.map(movie => <MovieCards key={movie.id} posterPath={movie.poster_path}/> )}
        </div>
        </div>
    </div>
  )
}

export default MovieLists; 