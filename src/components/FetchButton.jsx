import React from 'react'
import useFetchUsers from '../Hooks/useFetchUsers'
import axios from 'axios'
import useUploadUser from '../Hooks/useUploadUser'

const FetchButton = ({ toggleData }) => {
  const { data } = useFetchUsers()
  const { uploadUsers } = useUploadUser()
  const { getUsers } = useFetchUsers()

  const handleClick = async () => {
    console.log(data)
    if (data) {
      // toggleData(data)
      data.map((user) => uploadUsers(user))
    }
    window.location.reload()
    // getUsers()
  }

  return (
    <div>
      <button onClick={handleClick}> Fetch</button>
    </div>
  )
}

export default FetchButton
