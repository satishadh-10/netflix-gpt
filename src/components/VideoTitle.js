import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[17%] px-14 w-full aspect-video absolute bg-gradient-to-r from-black text-white'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='text-sm py-6 w-1/4'>{overview}</p>
        <div>
            <button className='bg-white text-black text-lg rounded-lg w-18 font-semibold  py-2 px-6 hover:bg-opacity-70'>Play</button>
            <button className='bg-gray-600 text-white text-lg bg-opacity-50 rounded-lg w-18 py-2 px-7 mx-4 hover:bg-opacity-70'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle