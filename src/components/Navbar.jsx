import React from 'react'
import './components.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/'>
        <img
          src='https://goldstonetech.com/wp-content/uploads/GTL-logo.svg'
          alt='logo'
        />
      </Link>
    </div>
  )
}

export default Navbar
