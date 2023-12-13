import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import { API_OPTIONS } from '../utils/constants'
import { addGptMovieResults } from '../utils/gptSlice'

const GptSearchBar = () => {

  const langKey = useSelector((store) => store.config.lang)
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const handleGptSearchClick = async () => {
              console.log(searchText.current.value);

  const searchMovieTMDB = async (movie) => {
            const data = await fetch("https://api.themoviedb.org/3/search/movie?query="
            +movie+
            "&include_adult=false&language=en-US&page=1", API_OPTIONS)

            const json = await data.json()
            return json.results;
  }            

    const gptQuery = "Act as a Movie Recomendation system and suggest some movies for the query : "
     + searchText.current.value + 
     ".only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gaddar, Sholey, Don, Golmaal, Koi Mil Gaya"          

              const gptResults = await openai.chat.completions.create({
                messages: [{ role: 'user', content: gptQuery }],
                model: 'gpt-3.5-turbo',});

                //if(!gptResults.choices) {todo error handling}
                console.log(gptResults?.choices[0]?.message.content);

                const gptMovies = gptResults?.choices[0]?.message.content.split(",")

                const  promiseArray = gptMovies.map((movie)=> searchMovieTMDB(movie));

                const tmdbResults = await Promise.all(promiseArray);
                console.log(tmdbResults);
                dispatch(addGptMovieResults({movieNames: gptMovies, movieResults: tmdbResults}));
                

                
  };
  return (
    
    <div className=' pt-[40%] md:pt-[10%]  flex justify-center'>
        
        <form className='w-full m-1 md:m-0 md:w-1/2 bg-black grid grid-cols-12 rounded-lg bg-opacity-90' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type='text' 
            className='col-span-8 md:col-span-9 rounded-lg p-2 m-4 text-black  hover:cursor-pointer' 
            placeholder={lang[langKey].gptSearchPlaceHolder}/>
            <button className='bg-red-700 col-span-4 md:col-span-3 py-2 px-4 m-4 text-white rounded-lg hover:bg-opacity-80' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar