import React from 'react'
import MovieCards from './MovieCards'


const MovieLists = ({title, movies}) => {
    
  return (
    <div className='px-8'>
      <h1 className='text-lg md:text-2xl text-white py-2 md:py-4'>{title}</h1>
        <div className=' flex overflow-x-scroll scrollbar hover:scrollbar-track-slate-800 scrollbar-h-2  scrollbar-thumb-orange-700 scrollbar-thumb-rounded-lg scrollbar-track-rounded-lg  scroll-smooth'>
            <div className='flex'>
          {movies?.map(movie => <MovieCards key={movie.id} posterPath={movie.poster_path}/> )}
        </div>
        </div>
    </div>
  )
}

export default MovieLists; 