import './home.scss'

import React, { useState } from 'react'
import UserTable from '../../components/UserTable'
import FetchButton from '../../components/FetchButton'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const gotoCreate = () => {
    navigate('/user/create')
  }
  return (
    <div className='home'>
      <div className='homeTop'>
        <FetchButton />
        <button onClick={gotoCreate} className='createBtn'>
          Create User
        </button>
      </div>
      <UserTable />
    </div>
  )
}

export default Home
