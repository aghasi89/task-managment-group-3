import { useCallback, useState } from "react";
import "./style.css";
import actions from "../../redux/actions";
import { useDispatch } from "react-redux";
import StatusList from "../StatusList";
import TaskCommentBlock from "../TaskCommentBlock";
import TaskDetails from "../TaskDetails";

export default (props) => {

  const dispatch=useDispatch()

  const [ststusList,setStstuslis]=useState(false)
  const [comentBlock,setComentBlock]=useState(false)
  const [taskDetails,steTaskDetails]=useState(false)

  const ststusListHendeler = useCallback(() => {
    setStstuslis(!ststusList)
  }, [ststusList])
 
  

  const commentHendeler=useCallback(()=>{
    setComentBlock(!comentBlock)
  },[comentBlock])

  const delettaskHendeler = useCallback(() => {
    const payLoad=props.task
    const newAction=actions.tasksActions.deleteTask(payLoad)
    dispatch(newAction)
  }, [])

  const detailskHendeler=useCallback(()=>{
    steTaskDetails(!taskDetails)
    console.log('DETALS')
  },[taskDetails])
  

  return <div className="TaskMenuCom">
    <div  className="menuElement" onClick={ststusListHendeler}>chenge status
    {ststusList?<StatusList  task={props.task} status={setStstuslis} />:null}
    </div>
    <div className="menuElement" onClick={commentHendeler}>add comment</div>
    <div className="menuElement" onClick={detailskHendeler}>details of task</div>
    <div className="menuElement" onClick={delettaskHendeler}>delet task</div>
    {taskDetails? <TaskDetails task={props.task}/>:null}
    {comentBlock? <TaskCommentBlock hendeler={commentHendeler} task={props.task}/>:null}
  </div>
}