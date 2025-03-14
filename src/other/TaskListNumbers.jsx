import React from "react";

const TaskListNumbers = ({data}) => {
  return (
    <div className="flex mt-5 justify-around items-center mx-10 gap-3">
      <div className="w-[30%] bg-blue-500 px-5 py-6 rounded-xl">
        <h1 className="text-4xl font-semibold">{data.taskNumber.newTask}</h1>
        <h2 className="text-xl font-medium">New Task</h2>
      </div>
      <div className="w-[30%] bg-green-500 px-5 py-6 rounded-xl">
      <h1 className="text-4xl font-semibold">{data.taskNumber.completed}</h1>

        <h2 className="text-xl font-medium">Completed</h2>
      </div>
      <div className="w-[30%] bg-yellow-500 px-5 py-6 rounded-xl">
      <h1 className="text-4xl font-semibold">{data.taskNumber.active}</h1>

        <h2 className="text-xl font-medium">Accepted</h2>
      </div>
      <div className="w-[30%] bg-red-500 px-5 py-6 rounded-xl">
      <h1 className="text-4xl font-semibold">{data.taskNumber.failed}</h1>

        <h2 className="text-xl font-medium">Failed</h2>
      </div>
     
    </div>
  );
};

export default TaskListNumbers;
