import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid}=useParams()
  return (
    <div>
      <h1 className=' w-full bg-orange-500 py-10'>User ID : {userid} </h1>
    </div>
  )
}

export default User
