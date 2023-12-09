import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validation'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [errorMessage, setErrorMessage] = useState(null)
    const [isSignIn, setIsSignIn] = useState(true)

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    
       const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message);
        if(message) return;

        if(!isSignIn) {
              //sign up logic
   createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    
    const user = userCredential.user;
    updateProfile(auth.currentUser, {
        displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/126259184?v=4"
      }).then(() => {
        const {uid, email, displayName, photoURL} = auth.currentUser;
                  dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse")
      }).catch((error) => {
        setErrorMessage(error.message)
      });
    console.log(user);
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
  });
        }
        else{
               //sign in logic
               signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
  });

        }
    }

    const toogleSignInform = () => {
        setIsSignIn(!isSignIn);
    };
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/fe56ae28-562a-4ce1-9ad6-f86b4fd1911e/NP-en-20231204-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
            alt='bodyImage'/>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='text-white absolute bg-black px-16 py-14 w-4/12 my-24 mx-auto right-0 left-0 bg-opacity-80 rounded-lg'>
            
            <h1
             className='text-4xl font-semibold py-4 my-2'>{ isSignIn ? "Sign In" : "Sign Up" }
             </h1>

            {!isSignIn && <input ref={name} type='text' placeholder='Name' className='p-3 my-2 w-full bg-zinc-700 rounded-md'/>}

            <input
             ref={email}
              type='text'
               placeholder='Email or Phone Number'
                className='p-3 my-2 w-full bg-zinc-700 rounded-md'/>

            <input
             ref={password}
              type='password'
               placeholder='Password'
                className='p-3 my-2 w-full bg-zinc-700 rounded-md'/>

            <p className='text-red-600  font-bold text-sm'>
                {errorMessage}
            </p>

            <button
              className='p-3 my-8 font-semi-bold bg-red-700 w-full rounded-md'
               onClick={handleButtonClick}>{ isSignIn ? "Sign In" : "Sign Up" }
            </button>
            
            <p
             className='cursor-pointer hover:underline'
              onClick={toogleSignInform}>{ isSignIn ? "New to Netflix? Sign up now." : "Alreadey registered. Please Sign In" }
              </p>

        </form>
    </div>
  )
}

export default Login;