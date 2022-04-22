import './style.css';
import Task from '../Task';

export default (props)=>{

  return<div className='tasksBarr'>
    <div className='barrTitle'>{props.barrName}</div>
    {props.tasks.map((item,index)=>{return <Task  key={index} task={item}></Task>})}
    </div>
}