
import './App.css';
import LoginForm from "./components/LoginForm";
import LogOutButton from './components/LogOutButton';
import UserInfoBar from './components/UserInfoBar';
import NewMember from './components/NewMember';
import TaskMenu from './components/TaskMenu';
import NewProject from "./components/NewProject";
import NewTask from "./components/NewTask";
import LoginsButton from "./components/LoginsButton";
import StatusList from "./components/StatusList";
import ProjectBlock from "./components/ProjectBlock";
import Task from "./components/Task";
import TasksBarr from "./components/TasksBarr";
function App() {
  return (
    <div className="App">
     <LoginForm />
      <LoginsButton />
      <LogOutButton />
      <UserInfoBar />
      <NewMember />
    <TaskMenu />
      <NewProject />
      <NewTask />
      <StatusList />
      <TasksBarr/>
     <Task />
     <ProjectBlock />
    </div>
  );
}

export default App;
