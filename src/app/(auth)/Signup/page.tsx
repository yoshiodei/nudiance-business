'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { validateSignupForm } from './utils/signupValidation'
import useRegisterCompany from './hooks/useRegisterCompany';
import SignupForm from './components/SignupForm';


export default function Signup() {
  const router = useRouter();
  const [userCredentials, setUserCredentials] = useState({name: '', email: '', password: '', confirmPassword: '', size: ''});
  const [errorMessage, setErrorMessage] = useState('');
  
  const {registerCompany, loading} = useRegisterCompany();

  const handleSetUserCredentials = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>): void => {
      const { value, name } = e.target;
      setUserCredentials({ ...userCredentials, [name]: value });
      console.log(userCredentials);
  }

  const handleSubmit = async () => {
    const validationData = validateSignupForm(userCredentials);
    if(!validationData.isValid){
      setErrorMessage(validationData.message);   
    } else {
      registerCompany(userCredentials);
    }
  }

  return (
    <SignupForm 
      errorMessage={errorMessage}
      router={router}
      handleSetUserCredentials={handleSetUserCredentials}
      handleSubmit={handleSubmit}
      loading={loading}
    />
  )
}
