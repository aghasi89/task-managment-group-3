import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TasksBarr from "../../components/TasksBarr"
import actions from "../../redux/actions";
import "./style.css"

export default () => {
  const tasks=useSelector(state=>state.tasks)
  const currentProject=useSelector(state=>state.currentProject)

  const tasksByProject=useMemo(()=>{
    let x=tasks.filter((item)=>{
      if(item.projectID===currentProject.ID){
        return true
      }
      return false
    })
    return x
  },[tasks,currentProject])

  const tasksByNewTask=useMemo(()=>{
    let x=tasksByProject.filter((item)=>{
    return item.status==="NEW TASK"?true:false;
    })
    return x
  },[tasksByProject])
    
  const tasksByTaskInProces=useMemo(()=>{
    let x=tasksByProject.filter((item)=>{
    return item.status==="TASK IN PROCESS"?true:false;
    })
    return x
  },[tasksByProject])

  const tasksByTaskIsEnd=useMemo(()=>{
    let x=tasksByProject.filter((item)=>{
    return item.status==="TASK IS ENDED"?true:false;
    })
    return x
  },[tasksByProject])

  const tasksByDebugging=useMemo(()=>{
    let x=tasksByProject.filter((item)=>{
    return item.status==="DEBUGGING"?true:false;
    })
    return x
  },[tasksByProject])

  const tasksByTaskIsDone=useMemo(()=>{
    let x=tasksByProject.filter((item)=>{
    return item.status==="TASK IS DONE"?true:false;
    })
    return x
  },[tasksByProject])

  return <div className="TasksBlock">
  <TasksBarr barrName="NEW TASKS" tasks={tasksByNewTask}></TasksBarr>
  <TasksBarr barrName="TASK IN PROCESS" tasks={tasksByTaskInProces}></TasksBarr>
  <TasksBarr barrName="TASK IS ENDED" tasks={tasksByTaskIsEnd}></TasksBarr>
  <TasksBarr barrName="DEBUGGING" tasks={tasksByDebugging}></TasksBarr>
  <TasksBarr barrName="TASK IS DONE" tasks={tasksByTaskIsDone}></TasksBarr>
  </div>;
};
