import React from 'react'

const NewTask = ({data}) => {
  return (
    
        <div className="shrink-0 h-[350px] w-[360px] bg-blue-400 rounded-xl">
          <div className="flex justify-between px-4 py-5 items-center">
            <h1 className="bg-red-600 px-3 py-2 font-semibold rounded-sm">
              {data.category}
            </h1>
            <h2>{data.taskDate}</h2>
          </div>
          <h1 className="font-semibold text-2xl m-4.5">{data.taskTitle}</h1>
          <p className="font-medium text-sm m-4.5">
            {data.taskDescription}
          </p>
          <div className='mt-4 px-2 flex justify-evenly'>
            <button className='bg-blue-500 px-2 py-1 rounded-lg '>Accept Task</button>
         
          </div>
        </div>
    
  )
}

export default NewTask