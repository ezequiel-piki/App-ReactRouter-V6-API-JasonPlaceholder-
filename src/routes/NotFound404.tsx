import React from 'react'
import { Link } from 'react-router-dom'

const NotFound404 = () => {
  return (
    <>
    <h1>404</h1>
    <Link to='/' className='btn btn-outline-success'>volver al inicio</Link>
    </>
  )
}

export default NotFound404