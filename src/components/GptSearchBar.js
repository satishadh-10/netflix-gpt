import React from 'react'
import { BODY_IMG_URL } from '../utils/constants'

const GptSearchBar = () => {
  return (
    
    <div className='pt-[10%] flex justify-center'>
        
        <form className='w-1/2 bg-black grid grid-cols-12 rounded-lg bg-opacity-90'>
            <input type='text' className='col-span-9 rounded-lg p-2 m-4 text-black  hover:cursor-pointer'  placeholder='Text and Explore The Desire.'/>
            <button className='bg-red-700 col-span-3 py-2 px-4 m-4 text-white rounded-lg hover:bg-opacity-80'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar