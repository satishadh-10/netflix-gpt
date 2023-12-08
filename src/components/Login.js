import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true)
    const toogleSignInform = () => {
        setIsSignIn(!isSignIn);
    };
  return (
    <div>
        <Header/>
        <div className='absolute scale-110'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/fe56ae28-562a-4ce1-9ad6-f86b4fd1911e/NP-en-20231204-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
            alt='bodyImage'/>
        </div>
        <form className='text-white absolute bg-black px-16 py-14 w-4/12 my-24 mx-auto right-0 left-0 bg-opacity-80 rounded-lg'>
            <h1 className='text-4xl font-semibold py-4 my-2'>{ isSignIn ? "Sign In" : "Sign Up" }</h1>
            {!isSignIn && <input type='text' placeholder='Name' className='p-3 my-2 w-full bg-zinc-700 rounded-md'/>}
            <input type='text' placeholder='Email or Phone Number' className='p-3 my-2 w-full bg-zinc-700 rounded-md'/>
            <input type='text' placeholder='Password' className='p-3 my-2 w-full bg-zinc-700 rounded-md'/>
            <button className='p-3 my-8 font-semi-bold bg-red-700 w-full rounded-md'>Sign In</button>
            <p className='cursor-pointer hover:underline' onClick={toogleSignInform}>{ isSignIn ? "New to Netflix? Sign up now." : "Alreadey registered. Please Sign In" }</p>
        </form>
    </div>
  )
}

export default Login;