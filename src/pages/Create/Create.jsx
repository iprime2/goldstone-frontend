import './create.scss'

import React, { useState } from 'react'
import useUploadUser from '../../Hooks/useUploadUser'
import { toast } from 'react-hot-toast'

const Create = () => {
  const { isLoading, uploadUsers } = useUploadUser()
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    gender: '',
    status: '',
  })

  const handleInput = (e) => {
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleClick = () => {
    try {
      uploadUsers(user)
      toast.success('Success')
    } catch (error) {
      toast.error('Error')
    }
  }

  console.log(user)

  return (
    <div className='create'>
      <div className='formItem'>
        <label>Id</label>
        <input
          name='id'
          disabled={isLoading}
          onChange={handleInput}
          type='text'
          placeholder='Id'
        />
      </div>
      <div className='formItem'>
        <label>Name</label>
        <input
          name='name'
          disabled={isLoading}
          onChange={handleInput}
          type='text'
          placeholder='Name'
        />
      </div>
      <div className='formItem'>
        <label>E-mail</label>
        <input
          name='email'
          disabled={isLoading}
          onChange={handleInput}
          type='text'
          placeholder='E-mail'
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
            selected={user.gender === 'male' ? 'selected' : ''}
            value='male'
          >
            Male
          </option>
          <option
            selected={user.gender === 'female' ? 'selected' : ''}
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
            selected={user.status === 'active' ? 'selected' : ''}
          >
            Active
          </option>
          <option
            selected={user.status === 'inactive' ? 'selected' : ''}
            value='inactive'
          >
            Inactive
          </option>
        </select>
        <button disabled={isLoading} onClick={handleClick}>
          Create
        </button>
      </div>
    </div>
  )
}

export default Create
