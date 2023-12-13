import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO_URL, SUPPORTED_LANGUAGES } from '../utils/constants';
import { getGptSearchToogle } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

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

    const handleLanguageChange = (e) => {
      dispatch(changeLanguage(e.target.value))
    }

    const gptSearchToogle = useSelector((store) => store.gpt.gptSearchToogle)

    
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
    <div className='absolute bg-gradient-to-b from-black px-4 py-0 md:py-2 z-10 flex flex-col md:flex-row w-full justify-between'>
        <img className='w-32 md:w-44 mx-auto md:mx-0' src={LOGO_URL}
        alt='logo'/>
      {user && 
        (<div className='flex justify-between md:justify-normal  p-0 md:p-4'>
          {gptSearchToogle && (<select className='p-2 bg-gray-700 rounded-lg text-white hover:cursor-pointer hover:opacity-90' onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>)}
          
          <button onClick={handleToogleGpt} className='bg-violet-800 font-semibold text-white rounded-lg px-2 h-9 md:h-10 mx-0 md:mx-14'>{gptSearchToogle? "HOME" : "GPT Search"}</button>
          <div className='w-30 flex '>
      <img 
      className='w-8 md:w-10 h-8 md:h-10 rounded-lg'
      src={user.photoURL}
      alt='usericon'/>
      <button onClick={handleSignOut} className='font-bold text-white m-2 h-4 md:h-6 hover:underline'>(Sign Out)</button>
      </div>
    </div>
    )}
    </div>
    
  )
}

export default Header;