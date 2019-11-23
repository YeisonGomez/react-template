import * as React from 'react';

import { Login } from './Login/Login'
import { Signup } from './Signup/Signup'

export const Auth = () => {
  return (
    <div>
      <h1>Autenticación</h1>
      <Login/>
      <Signup/>
    </div>
  )
}