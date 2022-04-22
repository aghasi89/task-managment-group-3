import { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import actions  from '../../redux/actions';
import './style.css';
import { membersSelector } from '../../redux/selectors/membersSelectors';
import { currentProjectIDSelector } from '../../redux/selectors/projectsSelector';


export default () => {
  const dispatch=useDispatch()
  const members=useSelector(membersSelector)
  const taskName=useRef(null)
  const taskdedline=useRef(null)
  const TaskExecutor=useRef(null)
  const currentProject=useSelector(currentProjectIDSelector)
  const addNewTaskHendeler=useCallback(()=>{
    const payload={
      name:taskName.current.value,
      dedline:taskdedline.current.value,
      taskExecutor:TaskExecutor.current.value,
      projectID:currentProject
    }
    const newAction=actions.tasksActions.addNewtask(payload)
    dispatch(newAction)
  },[])

  return <div className='addNewTaskContener'>
    <form className='addTaskForm'>
      ADD NEW TASK
      <label htmlFor="taskName" className='taskNameLable'>Task name</label>
      <input ref={taskName} type="text" name='taskName' id='taskName' className='taskNameInput' />
      <label htmlFor="taskDedline" className='taskNameLable'>Task dedline</label>
      <input ref={taskdedline} type="date" name='taskName' id='taskDedline' className='taskNameInput' />
      <label htmlFor="TaskExecutor" className='taskNameLable'>Task executor</label>
      <select ref={TaskExecutor} className='taskNameInput'   name='TaskExecuter' id='TaskExecutor' >
 {members.map((item,index)=>{return <option  key={index} value={item.name}>{item.name}</option>})}
      </select>
      <Link to="/tasksBord/tasksBlock" className='addTaskSubmit' onClick={addNewTaskHendeler}>ADD TASK</Link>
     
    </form>
  </div>;
};
