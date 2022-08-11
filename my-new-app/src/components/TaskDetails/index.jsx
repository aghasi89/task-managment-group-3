import './style.css'
export default (props) => {
  return <div className='taskDetails'>
    <div className='detailsTitle'>TASK DETAILS</div>
    <div className='detalTaskName'>Name: {props.task.name}</div>
    <div className='detalTaskName'>Executor: {props.task.excutor}</div>
    <div className='detalTaskName'>Dedline: {props.task.dedline}</div>
    <div className='commentsBox'>
      <div className='commentsBox__title'>Comments Box</div>
      {props.task.comments.map((item)=>{return<div className='CommentElement'>{item}</div>})}
    </div>
  </div>
}