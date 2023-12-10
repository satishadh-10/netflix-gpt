import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO_URL } from '../utils/constants';

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
        <img className='w-52' src={LOGO_URL}
        alt='logo'/>
      {user && 
        (<div className='flex flex-wrap p-6'>
      <img 
      className='w-12 h-12 rounded-lg'
      src={user.photoURL}
      alt='usericon'/>
      <button onClick={handleSignOut} className='font-bold text-white m-2 h-6 hover:underline'>(Sign Out)</button>
    </div>
    )}
    </div>
    
  )
}

export default Header;