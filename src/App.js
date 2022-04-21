
import './App.css';
import LoginForm from "./components/LoginForm";
import LogOutButton from './components/LogOutButton';
import UserInfoBar from './components/UserInfoBar';
import NewMember from './components/NewMember';

import NewProject from "./components/NewProject";
import NewTask from "./components/NewTask";
import LoginsButton from "./components/LoginsButton";
function App() {
  return (
    <div className="App">
     <LoginForm />
      <LoginsButton />
      <LogOutButton />
      <UserInfoBar />
      <NewMember />
    
      <NewProject />
      <NewTask />
    </div>
  );
}

export default App;
