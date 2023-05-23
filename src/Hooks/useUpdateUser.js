import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const useUpdateUser = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  const updateUser = async (user, id) => {
    setIsLoading(true)
    try {
      const res = await axios.put(
        process.env.REACT_APP_API_URL + `/users/${id}`,
        user
      )
      console.log(res)
      setData(res.data)
      toast.success('updated')
    } catch (error) {
      toast.error('Something went wrong')
      console.log(error)
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  return { data, isLoading, error, updateUser }
}

export default useUpdateUser
