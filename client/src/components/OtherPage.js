import React from 'react'
import { Link } from 'react-router-dom'

const OtherPage = () => {
  return (
    <div>
      <p>This is another page.</p>
      <Link to='/'>Go Home</Link>
    </div>
  )
}

export default OtherPage