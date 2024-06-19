import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {addDoc,collection,getDocs} from 'firebase/firestore'
import { db } from '../../config/firebase'
import {useNavigate} from 'react-router-dom'

function Signup() {

  const navigate=useNavigate();
  
  const schema=yup.object().shape({
    userName:yup.string().required("fill the name"),
    password:yup.string().min(8).max(20).required("enter password"),
    confirmPassword:yup.string().oneOf([yup.ref('password'),null],"password and confirmpassword should be same").required(),
  })

  const {register,handleSubmit,formState:{errors}}=useForm({
    resolver:yupResolver(schema),
  });

  const createRef=collection(db,'createdAccount');
  const accref=collection(db,'createdAccount');

  const onSubmit=async(data)=>{
    const result=await getDocs(accref);
    const test=result.docs.some((doc)=>doc.data().userName===data.userName && doc.data().password===data.password);
    
    if(test){
      document.querySelector('.create-userName').focus();
      document.querySelector('.create-userName-error-message').innerHTML='USERNAME ALREADY EXISTS';
    }
    else{
      document.querySelector('.create-userName-error-message').innerHTML='';
      await addDoc(createRef,{
        ...data,
      })
      navigate('/');
    }
  }
  return (
    <div className="signup-form">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' placeholder='userName' className='create-userName' {...register('userName')} /><br />
        <p className='create-userName-error-message'>{errors.userName?.message}</p>
        <input type='password' placeholder='password' className='password' {...register('password')} /><br />
        <p className='create-password-error-message'>{errors.password?.message}</p>
        <input type='password' placeholder='confrirmPassword' className='confirmPassword' {...register('confirmPassword')} /><br />
        <p className='create-confirmpassword-error-message'>{errors.confirmPassword?.message}</p>
        <input type='submit' className="signup-btn" />
      </form>
    </div>
  )
}

export default Signup