import { takeLatest, put, call } from "redux-saga/effects";
import logtypes from "../actionsTypes/logTypes";
import membersTypes from "../actionsTypes/membersTypes";
import projectsTypes from "../actionsTypes/projectsTypes";
import { tasksTaypes } from "../actionsTypes";
import logActiones from "../actions";
import membersActions from "../actions";
import projectsActions from "../actions";
import actions from "../actions";



export function* warkerGetLogin() {
  let login = false;
  if (localStorage.getItem("login") !== null) {
    login = JSON.parse(localStorage.getItem("login"));
  }
  yield put(logActiones.logActiones.reciveLoginStatus(login));
}

export function* warkerLogin(action) {
  let members = JSON.parse(localStorage.getItem("members"));
  let logedMember = members.find((itam) => {
    if (itam.email === action.payload.email) {
      if (itam.password === action.payload.password) {
        return true;
      }
    }
    return false;
  });
  let NewAction;
  if (logedMember) {
    localStorage.setItem("login", JSON.stringify(true));
    localStorage.setItem("logedMember", JSON.stringify(logedMember));
    let login = JSON.parse(localStorage.getItem("login"));
    NewAction = logActiones.logActiones.reciveLoginStatus(login);
  } else {
    NewAction = logActiones.logActiones.loginFailuer("Wrong email or password");
  }
  yield put(NewAction);
}

export function* warkerGetLoger(action) {
  const logedMember = JSON.parse(localStorage.getItem("logedMember"));
  yield put(logActiones.logActiones.getLogedMember(logedMember));
}
export function* warkerGetLogout(action) {
  localStorage.setItem("login", JSON.stringify(false));
  let login = JSON.parse(localStorage.getItem("login"));
  let NewAction = logActiones.logActiones.reciveLoginStatus(login);
  yield put(NewAction);
}

export function* warkerGetMembers(action) {
  let members = JSON.parse(localStorage.getItem("members"));
  let NewAction = membersActions.membersActions.getMembers(members);
  yield put(NewAction);
}

export function* warkerSetMembers(action) {
  const members = JSON.parse(localStorage.getItem("members"));
  const checkMember = members.find((item) => {
    if (
      item.email === action.payload.email ||
      item.password === action.payload.password
    ) {
      return true;
    }
    return false;
  });
  if (!checkMember) {
    members.push(action.payload);
    localStorage.setItem("members", JSON.stringify(members));
    let NewAction = membersActions.membersActions.getMembers(members);
    yield put(NewAction);
  } else {
    let NewAction = membersActions.membersActions.addNewMemberFailuer(
      "Adding member is failed"
    );
    yield put(NewAction);
  }
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function* warkerGetMemberFaluerDelet(action) {
  let NewAction = membersActions.membersActions.getmemberFaluerDelet();
  yield call(wait, 3000);
  yield put(NewAction);
}

export function* warkerSetProjects(action) {
  console.log("SAGA RECIVE", action);

  let projects = [];
  if (localStorage.getItem("projects") !== null) {
    projects = JSON.parse(localStorage.getItem("projects"));
  }
  let projectID;
  let isIDExist = true;
  while (isIDExist) {
    projectID = Math.floor(Math.random() * 100000);
    isIDExist = projects.find((item) => {
      if (item.ID === projectID) {
        return true;
      }
      return false;
    });
  }
  let newProject = {
    name: action.payload.name,
    dedline: action.payload.dedline,
    ID: projectID
  };

  projects.push(newProject);
  console.log(projects, "saga end");
  yield localStorage.setItem("projects", JSON.stringify(projects));
}
export function* warkerGiveProjects(action) {
  let projects = [];
  if (localStorage.getItem("projects") !== null) {
    projects = JSON.parse(localStorage.getItem("projects"));
  }
  let NewAction = projectsActions.projectsActiones.getProjects(projects)
  yield put(NewAction)
}
export function* warkerAddNewtask(action) {
  console.log("SAGA RECIVE", action)
  let tasks = [];
  if (localStorage.getItem("tasks") !== null) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  let taskID;
  let isIDExist = true;
  while (isIDExist) {
    taskID = Math.floor(Math.random() * 100000);
    isIDExist = tasks.find((item) => {
      if (item.ID === taskID) {
        return true;
      }
      return false;
    });
  }
  const newTask = {
    ID: taskID,
    projectID: action.payload.projectID,
    name: action.payload.name,
    dedline: action.payload.dedline,
    excutor: action.payload.taskExecutor,
    status: "NEW TASK",
    comments: [],
  }
  tasks.push(newTask)
  yield localStorage.setItem("tasks", JSON.stringify(tasks));
  const newAction = actions.tasksActions.getTasks(tasks);
  console.log("SAGA SEND", tasks, newAction)
  yield put(newAction)
}

export function* warkerGetTasks(action) {
  let tasks = [];
  if (localStorage.getItem("tasks") !== null) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  const newAction = actions.tasksActions.getTasks(tasks)
  yield put(newAction);
}

export function* warkerChengeStatus(action) {
  let tasks = [];
  if (localStorage.getItem("tasks") !== null) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  let payloadID = action.payload.task.ID
  let index = tasks.findIndex((item) => {
    return item.ID === payloadID
  })
  let task = tasks[index];
  task = {
    ...task,
    status: action.payload.newStatus
  }
  tasks.splice(index, 1, task)
  yield localStorage.setItem("tasks", JSON.stringify(tasks));
  const newAction = actions.tasksActions.getTasks(tasks)
  yield put(newAction);
}

export function* warkerDeletTask(action) {
  let tasks = [];
  if (localStorage.getItem("tasks") !== null) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  let index = tasks.findIndex((item) => {
    return item.ID === action.payload.ID
  })
  tasks.splice(index, 1)
  yield localStorage.setItem("tasks", JSON.stringify(tasks));
  const newAction = actions.tasksActions.getTasks(tasks)
  console.log("SAGA SEND", newAction)
  yield put(newAction);
}

export function* warkerSetCurrentProject(action) {

  console.log("SAGA RECIVE", action)

  let tasks = [];
  if (localStorage.getItem("tasks") !== null) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  let newAction = actions.tasksActions.getTasks(tasks)

  yield put(newAction)
  newAction = actions.projectsActiones.getCuuentProject(action.payload)

  yield put(newAction)
}

export function* warkerAddcomment(action) {
  let tasks = [];
  if (localStorage.getItem("tasks") !== null) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  let index = tasks.findIndex((item) => {
    return item.ID === action.payload.task.ID
  })
  tasks[index].comments.push(action.payload.commentText)
  yield localStorage.setItem("tasks", JSON.stringify(tasks));
  let newAction = actions.tasksActions.getTasks(tasks)
  yield put(newAction)

}

export function* warkerDeletProject(action) {
  let projects = [];
  if (localStorage.getItem("projects") !== null) {
    projects = JSON.parse(localStorage.getItem("projects"));
  }

  let index = projects.findIndex((item) => {
    return item.ID === action.payload.ID
  })

  projects.splice(index, 1)
  yield localStorage.setItem("projects", JSON.stringify(projects));
}

export function* warkerDeleteTasksOfProject(action) {
  let tasks = [];
  if (localStorage.getItem("tasks") !== null) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  for (let i = 0; i < tasks.length; i++) {
    let index = tasks.findIndex((item) => {
      return item.projectID === action.payload
    })
    console.log(index, "INDEX")
    if (index === -1) {
      break
    }
    tasks.splice(index, 1)
    i = index - 1
  }
  yield localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function* warkerDeleteMember(action) {
  let members = [];
  if (localStorage.getItem("members") !== null) {
    members = JSON.parse(localStorage.getItem("members"));
  }
const index=members.findIndex((item)=>{
 return item.password===action.payload
})
members.splice(index,1)
yield localStorage.setItem("members", JSON.stringify(members));
let NewAction = actions.membersActions.getMembers(members);
yield put(NewAction);
}

export function* LoginSaga() {
  console.log("hkuhkuhkuhkuhkuh SAGA1");
  yield takeLatest(logtypes.GET_LOGIN_STATUS, warkerGetLogin);
  yield takeLatest(logtypes.LOGIN, warkerLogin);
  yield takeLatest(logtypes.ASK_FOR_LOGEDMEMBER, warkerGetLoger);
  yield takeLatest(logtypes.SET_LOGOUT, warkerGetLogout);
  yield takeLatest(membersTypes.ASK_FOR_MEMBERS, warkerGetMembers);
  yield takeLatest(membersTypes.ADD_NEW_MEMBER, warkerSetMembers);
  yield takeLatest(
    membersTypes.SET_MEMBER_FAILUER_DELET,
    warkerGetMemberFaluerDelet
  );
  yield takeLatest(projectsTypes.SET_NEW_PROJECT, warkerSetProjects);
  yield takeLatest(projectsTypes.SET_CURRENT_PROJECT, warkerSetCurrentProject);
  yield takeLatest(projectsTypes.ASK_FOR_PROJECTS, warkerGiveProjects);
  yield takeLatest(tasksTaypes.ADD_NEW_TASK, warkerAddNewtask);
  yield takeLatest(tasksTaypes.ASK_FOR_TASKS, warkerGetTasks);
  yield takeLatest(tasksTaypes.CHENGE_TASK_STATUS, warkerChengeStatus);
  yield takeLatest(tasksTaypes.DELETE_TASK, warkerDeletTask);
  yield takeLatest(tasksTaypes.ADD_COMMENT, warkerAddcomment);
  yield takeLatest(projectsTypes.DELETE_PROJECT, warkerDeletProject);
  yield takeLatest(tasksTaypes.DELETE_ALL_TASKS_OF_PROJECT, warkerDeleteTasksOfProject);
  yield takeLatest(membersTypes.DELETE_MEMBER, warkerDeleteMember);
}
