import './style.css';
import Task from '../Task';
import { useEffect, useState} from 'react';
import { useSelector } from 'react-redux';

export default (props)=>{

  return<div className='tasksBarr'>
    <div className='barrTitle'>{props.barrName}</div>
    {props.tasks.map((item,index)=>{return <Task  key={index} task={item}></Task>})}
    </div>
}