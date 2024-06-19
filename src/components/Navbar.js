import React from 'react'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
import { auth } from '../config/firebase'
import {useAuthState} from 'react-firebase-hooks/auth';
import {signOut} from 'firebase/auth'
import { clearLocalStorage } from '../data/localStorage';

function Navbar(props) {
  
  const [suwg]=useAuthState(auth);

  const currentUserSignOut= async ()=>{
    await signOut(auth);
  }

  const logout=()=>{
    clearLocalStorage();
    props.setLocal(null);
  }

  return (
    <nav className='navbar'>
      <div className='navbar-item-logo'>
        <img src={logo} className='navbar-logo' alt='ddd'/>
      </div>
      <div className='navbar-item-btn'>
        <Link className='home-btn' to='/'>Home</Link>
        <Link className='create-btn' to='/signup'>Create</Link>

        {
          suwg && !props.local ? (suwg.emailVerified ? 
            <div className='profile-part' style={{marginLeft:suwg.emailVerified ? '100px' : '0px'}}>
              <p className='profile-name'>{suwg.displayName.toUpperCase()}</p>
              <img className='profile-image' src={suwg?.photoURL || ''} alt='poor network' />
              <button onClick={currentUserSignOut} className='logout-btn'>LOGOUT</button></div> : 
              <Link className='login-btn' to='/login' >Login</Link>)
             : (props.local ? 
              <div className='profile-part' style={{marginLeft:props.local ? '100px' : '0px'}}>
                <p className='profile-name'>{props.local.userName.toUpperCase()}</p>
                <button onClick={logout} className='logout-btn'>LOGOUT</button></div> : 
                <Link className='login-btn' to='/login' >Login</Link>)
              
        }
      </div>
    </nav>
  )
}

export default Navbar