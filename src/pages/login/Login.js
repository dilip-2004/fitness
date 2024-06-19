import React from 'react'
import { auth,provider } from '../../config/firebase'
import { signInWithPopup } from 'firebase/auth'
import {useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {getDocs,collection} from 'firebase/firestore'
import { db } from '../../config/firebase'
import { setItem } from '../../data/localStorage'

function Login(props) {

  const navigate=useNavigate();

  const loginRef=collection(db,'createdAccount');

  const getAccDetails=async(data)=>{
    const result=await getDocs(loginRef);
    const test=result.docs.some((doc)=>doc.data().userName===data.userName && doc.data().password===data.password);
    
    if(test){
      setItem(data);
      props.setLocal(data);
      navigate('/');
    }else{
      document.querySelector('.login-userName').focus();
      document.querySelector('.login-userName-error-message').innerHTML='enter correct user name';
    }
  }

  const schema=yup.object().shape({
    userName:yup.string().required('you must unique user name'),
    password:yup.string().min(8).max(20).required('enter correct password')
  });

  const {register,handleSubmit,formState:{errors}}=useForm({
    resolver:yupResolver(schema)
  });

  const signInWithGoogle= async ()=>{
    const result= await signInWithPopup(auth,provider);
    console.log(result);
    navigate('/');
  }
  return (
    <div className='login-form'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(getAccDetails)}>
        <input type='text' placeholder='userName' className='login-userName' {...register('userName')} /><br />
        <p className='login-userName-error-message'>{errors.userName?.message}</p>
        <input type='password' placeholder='password' {...register('password')} /><br />
        <p className='login-password-error-message'>{errors.password?.message}</p>
        <input type='submit' />
      </form>
      <p>or</p>
      <button onClick={signInWithGoogle} className='google-btn'>sign in with google</button>
    </div>
  )
}

export default Login