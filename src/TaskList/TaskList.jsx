import React from "react";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";
import AcceptTask from "./AcceptTask";

const TaskList = ({data}) => {
  return (
    <div className=" mt-10 mx-10">
      <div id="tasklist" className="flex overflow-x-auto  justify-start gap-3 flex-nowrap">
        {
          data.tasks.map((elem, idx)=>{
            if(elem.active)
            {
              return <AcceptTask key={idx} data={elem}/>
            }
            if(elem.newTask){
              return <NewTask key={idx} data={elem}/>
            }
            if(elem.completed){
              return <CompleteTask key={idx} data={elem}/>
            }
            if(elem.failed){
              return <FailedTask key={idx} data={elem}/>
            }
          })
        }
        
       
      </div>
    </div>
  );
};

export default TaskList;
