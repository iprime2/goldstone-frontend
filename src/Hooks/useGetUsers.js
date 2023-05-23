import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useGetUsers = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  //   const { data, isLoading, error, mutate } = useSWR(
  //     'http://localhost:9000/api/users',
  //     fetcher
  //   )

  const getUsers = async () => {
    setIsLoading(true)
    try {
      const res = await axios.get( '/users')
      console.log(res)
      setData(res.data)
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

  return { data, isLoading, error }
}

export default useGetUsers
