import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <p>404</p>
      <p>Page not found!</p>
      <Link to='/'>Return Home</Link>
    </div>
  )
}

export default NotFound