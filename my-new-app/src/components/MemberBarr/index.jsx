import "./style.css";

export default (props) => {
  return (
    <div className="memberbarr">
      <div className="memberInitial">{props.member.name[0]}</div>
      <div className="member">{props.member.name}</div>
    </div>
  );
};
