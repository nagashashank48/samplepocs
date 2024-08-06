import React, { useState } from 'react'
import { useMsal } from '@azure/msal-react'
const Login = () => {
    const {instance}=useMsal();
    const handleLogin= ()=>{
        instance.loginPopup()
    }
  return (
<button onClick={()=>handleLogin()}>Login</button>
)
}

export default Login