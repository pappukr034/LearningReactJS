import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data=useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then((res)=> res.json())
    //     .then((data)=> setData(data))
    // },[])

  return (
    <div className=' w-full h-[50vh] flex justify-center items-center flex-col'>
        <img className=' rounded-lg' src={data.avatar_url} alt="" width="300px" />
        <h2 className=' font-bold text-orange-700'>Githuh Followers : {data.followers}</h2>
        <div className='flex w-full justify-center items-center gap-3 mb-4 py-1'>
        <button className=' bg-orange-500 text-yellow-50'>Follow</button>
        <button className=' bg-orange-500 text-yellow-50'>Subscrive YouTube Channel</button>
        </div>
    </div>
  )
}

export default Github

export const gitHubLoader=async ()=>{
    const res=await fetch("https://api.github.com/users/hiteshchoudhary")
    return res.json()
}
