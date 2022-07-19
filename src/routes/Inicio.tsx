import React, { useContext } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

const Inicio = () => {
  
 const {user,signIn,signOut}:any = useContext(UserContext)

  return (
    <>
    <div className="container">
    <h1>Inicio</h1>
     <h2>{user?'conectado':'desconectado'}</h2>
     {
      user ? 
           ( <>
            
           <button className='btn btn-warning'
                    onClick  ={ signOut}
            >
                          Desconectar
            </button>
            <Link to='/protected' className='btn btn-outline-success'>Ruta Protegida</Link>
            </>
            )
            
            :
           
            ( <button className='btn btn-warning'
                     onClick  ={ signIn}
              >
                           Acceder
             </button>)
     }
    
    </div>
    </>
  )
}

export default Inicio