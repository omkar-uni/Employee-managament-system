import React, { useContext } from "react";
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext);

  return (
    <div className="w-full h-[220px] p-10 pt-1">
      <div
        id="tasklist"
        className="w-full flex flex-col gap-2  p-5  bg-[#1c1c1c] rounded-sm"
      >
        <div className="w-full bg-red-500 flex justify-between rounded-sm h-10 items-center py-2 ">
          <h2 className="w-1/5 text-center">Employee Name</h2>
          <h2 className="w-1/5 text-center">New Task</h2>
          <h2 className="w-1/5 text-center">Active Task</h2>
          <h2 className="w-1/5 text-center">Completed</h2>
          <h2 className="w-1/5 text-center">Failed</h2>
        </div>
        {userData.map(function(elem,idx) {
          return (
            <div key={idx} className="w-full border-1 flex justify-between rounded-sm h-10 items-center py-2 ">
              <h2  className="w-1/5 text-center">{elem.firstName}</h2>
              <h2 className="w-1/5 text-center">{elem.taskNumber.newTask}</h2>
              <h2 className="w-1/5 text-center">{elem.taskNumber.active}</h2>
              <h2 className="w-1/5 text-center">{elem.taskNumber.completed}</h2>
              <h2 className="w-1/5 text-center">{elem.taskNumber.failed}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
