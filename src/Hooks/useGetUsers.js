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

  const uploadUsers = async (user) => {
    setIsLoading(true)
    try {
      const res = await axios.get(
        process.env.REACT_APP_API_URL + '/users',
        user
      )
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
    uploadUsers()
  }, [])

  return { data, isLoading, error }
}

export default useGetUsers
