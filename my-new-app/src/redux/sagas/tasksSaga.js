import { takeLatest, put,call } from "redux-saga/effects";
import tasksTaypes from "../actionsTypes/tasksTaypes"
import actions from "../actions";

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

export function* tasksSaga() {
  yield takeLatest(tasksTaypes.ADD_NEW_TASK, warkerAddNewtask);
  yield takeLatest(tasksTaypes.ASK_FOR_TASKS, warkerGetTasks);
  yield takeLatest(tasksTaypes.CHENGE_TASK_STATUS, warkerChengeStatus);
  yield takeLatest(tasksTaypes.DELETE_TASK, warkerDeletTask);
  yield takeLatest(tasksTaypes.ADD_COMMENT, warkerAddcomment);
  yield takeLatest(tasksTaypes.DELETE_ALL_TASKS_OF_PROJECT, warkerDeleteTasksOfProject);
}