import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const CreateTask = () => {

  const [userData,setUserData] = useContext(AuthContext);


  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    });

    const data = userData
    
    data.forEach(function (elem) {
      if (asignTo == elem.firstName) {
          elem.tasks.push(newTask)
          elem.taskNumber.newTask++
      }
    });
    setUserData(data)
    console.log(data)
    setTaskTitle("");
    setAsignTo("");
    setCategory("");
    setTaskDate("");
    setTaskDescription("");
  };

  return (
    <div className="w-full h-[400px]  p-10 pt-1">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="w-full flex p-5 justify-between h-[370px] bg-[#1c1c1c] rounded-sm"
      >
        <div className="flex flex-col gap-6">
          <div>
            <h3>Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              className="mt-1 border-1 border-amber-50 rounded-sm h-7 w-120 p-2"
              type="text"
              placeholder="Make a UI Design"
            />
          </div>
          <div>
            <h3>Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              id="date"
              className="mt-1 border-1 border-amber-50 rounded-sm h-7 w-120 p-2"
              type="date"
            />
          </div>
          <div>
            <h3>Assign to</h3>
            <input
              value={asignTo}
              onChange={(e) => {
                setAsignTo(e.target.value);
              }}
              className="mt-1 border-1 border-amber-50 rounded-sm h-7 w-120 p-2"
              type="text"
              placeholder="employee name"
            />
          </div>
          <div>
            <h3>category</h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="mt-1 border-1 border-amber-50 rounded-sm h-7 w-120 p-2"
              type="text"
              placeholder="design, dev, etc."
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <div>
            <h3>Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => {
                setTaskDescription(e.target.value);
              }}
              className="mt-1 border-1 border-amber-50 rounded-sm  p-2"
              name=""
              id=""
              cols="70"
              rows="8"
            ></textarea>
          </div>
          <button className="bg-green-400 h-12 w-137 rounded-sm">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
