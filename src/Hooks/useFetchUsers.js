import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useFetchUsers = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  const getUsers = async () => {
    setIsLoading(true)
    try {
      const res = await axios.get('https://gorest.co.in/public-api/users')
      console.log(res)
      setData(res.data.data)
    } catch (error) {
      console.log(error)
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return { data, isLoading, error, getUsers }
}

export default useFetchUsers
