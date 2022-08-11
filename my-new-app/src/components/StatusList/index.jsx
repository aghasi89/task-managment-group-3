import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import './style.css';
import actions from "../../redux/actions"

export default (props) => {
  
  const dispatch = useDispatch()
  
  const newTaskHendeler = useCallback(() => {
    const payload={
      task:props.task,
      newStatus:'NEW TASK'
    }
    const action=actions.tasksActions.chengeTaskStatus(payload)
  
    dispatch(action)
  }, [])


  const taskInProsesHendeler = useCallback(() => {
    const payload={
      task:props.task,
      newStatus:'TASK IN PROCESS'
    }
    const action=actions.tasksActions.chengeTaskStatus(payload)
    dispatch(action)
  }, [])

  const taskEndHendeler = useCallback(() => {
    const payload={
      task:props.task,
      newStatus:'TASK IS ENDED'
    }
    const action=actions.tasksActions.chengeTaskStatus(payload)
  
    dispatch(action)
  }, [])

  const taskDebuggingHendeler = useCallback(() => {
    const payload={
      task:props.task,
      newStatus:'DEBUGGING'
    }
    const action=actions.tasksActions.chengeTaskStatus(payload)
    dispatch(action)
  }, [])

  const taskDoneHendeler = useCallback(() => {
    const payload={
      task:props.task,
      newStatus:'TASK IS DONE'
    }
    const action=actions.tasksActions.chengeTaskStatus(payload)
    dispatch(action)
  }, [])

  return <div className='statusList'>
    <div className='newStatus' onClick={newTaskHendeler}> New Task</div>
    <div className='newStatus' onClick={taskInProsesHendeler}> Task in process</div>
    <div className='newStatus' onClick={taskEndHendeler}> Task is ended</div>
    <div className='newStatus'onClick={taskDebuggingHendeler}> Debugging</div>
    <div className='newStatus' onClick={taskDoneHendeler}> Task is done</div>
  </div>
}