import React, { useState } from 'react'



const Header = (props) => {
  // console.log(data)
  // const [username, setUsername] = useState([])

  // if(!data){
  //   setUsername("Admin")
  // }
  // else{
  //   setUsername({data})
  //   console.log(username)
  // }
  const logOutUser = ()=>{
  localStorage.setItem("loggedInUser",'')
  props.changeUser('')
  // window.location.reload()
    
  }

  return (
    <div className='flex justify-between items-end p-10'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>Admin👋</span></h1>
        <button onClick={logOutUser} className='bg-red-600 w-20 h-10 rounded-xs text-l hover:bg-red-700'>Log out</button>
    </div>
  )
}

export default Header   