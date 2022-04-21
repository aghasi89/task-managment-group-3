import tasksTaypes from "../actionsTypes/tasksTaypes";

export const addNewtask = (task) => {
  return {
    type: tasksTaypes.ADD_NEW_TASK,
    payload: task
  };
};

export const setNewProject = (task) => {
  return {
    type: tasksTaypes.ADD_NEW_TASK,
    payload: task
  };
};



export const getTasks = (tasks) => {
  return {
    type: tasksTaypes.GET_TASKS,
    payload: tasks
  };
};

export const askForTasks = () => {
  return {
    type: tasksTaypes.ASK_FOR_TASKS,
  };
};

export const chengeTaskStatus = (taskID) => {
  return {
    type: tasksTaypes.CHENGE_TASK_STATUS,
    payload:taskID
  };
};

export const deleteTask = (task) => {
  return {
    type: tasksTaypes.DELETE_TASK,
    payload:task
  };
};

export const addComment = (payload) => {
  return {
    type: tasksTaypes.ADD_COMMENT,
    payload:payload
  };
};

export const deleteAllTasksOfProject = (projectID) => {
  return {
    type: tasksTaypes.DELETE_ALL_TASKS_OF_PROJECT,
    payload:projectID
  };
};