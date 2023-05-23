import { useLocation } from 'react-router-dom/dist'
import './user.scss'

import React, { useEffect, useState } from 'react'
import useUpdateUser from '../../Hooks/useUpdateUser'

const User = () => {
  const location = useLocation()
  const user = location.state.user
  const [userData, setUserData] = useState(null)
  const { data, isLoading, updateUser } = useUpdateUser()

  useEffect(() => {
    setUserData(user)
  }, [])

  const handleInput = (e) => {
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value

    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleClick = () => {
    updateUser(userData, user._id)
  }

  console.log(userData)

  return (
    <div className='user'>
      <div className='formItem'>
        <label>Id</label>
        <input
          name='id'
          disabled={isLoading}
          onChange={handleInput}
          type='text'
          value={userData?.id}
        />
      </div>
      <div className='formItem'>
        <label>Name</label>
        <input
          name='name'
          disabled={isLoading}
          onChange={handleInput}
          type='text'
          value={userData?.name}
        />
      </div>
      <div className='formItem'>
        <label>E-mail</label>
        <input
          name='email'
          disabled={isLoading}
          onChange={handleInput}
          type='text'
          value={userData?.email}
        />
      </div>
      <div className='formItem'>
        <label>Gender</label>
        <select
          disabled={isLoading}
          onChange={handleInput}
          name='gender'
          id='gender'
        >
          <option>Select</option>
          <option
            selected={userData?.gender === 'male' ? 'selected' : ''}
            value='male'
          >
            Male
          </option>
          <option
            selected={userData?.gender === 'female' ? 'selected' : ''}
            value='female'
          >
            Female
          </option>
        </select>
      </div>
      <div className='formItem'>
        <label>Status</label>
        <select
          disabled={isLoading}
          onChange={handleInput}
          name='status'
          id='status'
        >
          <option>Select</option>
          <option
            value='active'
            selected={userData?.status === 'active' ? 'selected' : ''}
          >
            Active
          </option>
          <option
            selected={userData?.status === 'inactive' ? 'selected' : ''}
            value='inactive'
          >
            Inactive
          </option>
        </select>
      </div>
      <button disabled={isLoading} onClick={handleClick}>
        Update
      </button>
    </div>
  )
}

export default User
