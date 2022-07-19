import React, { Children } from 'react'
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

const VerificarUsuario = ({children}:any) => {
  const {user}:any = useContext(UserContext)
  
  
  if(!user){
  return <Navigate
          to='/'
        
          />
  }

  return children
    
}

export default VerificarUsuario