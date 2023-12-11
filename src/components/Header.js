import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO_URL } from '../utils/constants';
import { getGptSearchToogle } from '../utils/gptSlice';

const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector(store => store.user)
      const navigate = useNavigate();

    const handleSignOut = () => {
      signOut(auth).then(() => {
        navigate("/");
      }).catch((error) => {
        navigate("/error");
      });
      
    }

    const handleToogleGpt =() => {
      dispatch(getGptSearchToogle())
    }

    
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            
            const {uid, email, displayName, photoURL} = user;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
            navigate("/browse")
            
          } else {
            dispatch(removeUser());
            navigate("/")
          }
        });

        return () => unsubscribe();
   }, [])


  return (
    <div className='absolute bg-gradient-to-b from-black px-8 py-2 z-10 flex w-full justify-between'>
        <img className='w-44' src={LOGO_URL}
        alt='logo'/>
      {user && 
        (<div className='flex flex-wrap p-4'>
          <button onClick={handleToogleGpt} className='bg-violet-800 font-semibold text-white rounded-lg px-4 mx-6'>GPT Search</button>
      <img 
      className='w-10 h-10 rounded-lg'
      src={user.photoURL}
      alt='usericon'/>
      <button onClick={handleSignOut} className='font-bold text-white m-2 h-6 hover:underline'>(Sign Out)</button>
    </div>
    )}
    </div>
    
  )
}

export default Header;