import { useCallback, useRef } from "react";
import "./style.css";
import actions from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { logedMemberSelector } from "../../redux/selectors/logSelectors";

export default (props)=>{
const logedMember=useSelector(logedMemberSelector)
console.log(logedMember.name)
const dispatch=useDispatch()
const commentText=useRef(null)
const comentHendeler=useCallback(()=>{
  const payLoad={
    commentText:logedMember.name+":"+commentText.current.value,
    task:props.task
  }
  const action=actions.tasksActions.addComment(payLoad)
  dispatch(action)
  props.hendeler()
},[])

  return <div className="taskComentBlock">
    <div className="commentTitle">
    Your Comments About Task
    </div>
    <textarea ref={commentText} name="comment" className="textArea"/>
    <div className="addComentButton" onClick={comentHendeler}>ADD</div>
  </div>
}