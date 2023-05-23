import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import {
  getUsersFailure,
  getUsersStart,
  getUsersSuccess,
} from '../context/userContext/UserActions'

const useUploadUser = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  const uploadUsers = async (user) => {
    setIsLoading(true)
    getUsersStart()
    try {
      const res = await axios.post(
        process.env.REACT_APP_API_URL + '/users',
        user
      )
      console.log(res)
      setData(res.data)
      getUsersSuccess()
      toast.success('Created')
    } catch (error) {
      toast.error('Unable to create')
      console.log(error)
      setError(error)
      getUsersFailure()
    } finally {
      setIsLoading(false)
    }
  }

  return { data, isLoading, error, uploadUsers }
}

export default useUploadUser
