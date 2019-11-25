import * as React from 'react';
import { useDispatch } from 'react-redux'

import { auth } from '../../../services/Auth/AuthActions'

export const Login = () => {

  const dispatch = useDispatch()
  const { login } = auth;
  
  const handleLogin = () => {
    dispatch(login('yeisom40@gmail.com', '12345'))
  }

  return (
    <div className="component-login">
      <h1>Login</h1>
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  )
}