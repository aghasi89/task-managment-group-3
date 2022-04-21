import { useCallback, useState } from 'react'
import TaskMenu from '../TaskMenu'
import './style.css'

export default (props)=>{
   const [showMenu,setShowMenu]=useState(false)
   const showHendeler=useCallback(()=>{
     setShowMenu(!showMenu)
   },[showMenu])
   
console.log(props.task.excutor,"sadfsafsaef")
  return <div className='TaskToDrow'>
    <div className='taskName'> {props.task.name}</div>
    <div>{props.task.excutor}</div>
    <div className='taskMenu' onClick={showHendeler}>Menu</div>
    {showMenu? <TaskMenu task={props.task}/>:null}
  </div>
}