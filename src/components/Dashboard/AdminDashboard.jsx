import React from 'react'
import Header from '../../other/Header'
import CreateTask from '../../other/CreateTask'
import AllTask from '../../other/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className=''>
        <Header changeUser={props.changeUser} data={props.data}/>
        <CreateTask data={props.data}/>
        <AllTask data={props.data}/>
    </div>
  )
}

export default AdminDashboard   