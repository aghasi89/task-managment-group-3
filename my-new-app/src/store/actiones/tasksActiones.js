import { tasksTypes } from "../types";

export const addNewTask = (newTask) => {
  return {
    type: tasksTypes.ADD_NEW_TASK,
    payload: newTask
  };
};

export const addTaskComment = (comment) => {
  return {
    type: tasksTypes.AAD_TASK_COMMENT,
    payload: comment
  };
};

export const addNewTaskFailuer = (errorMessage) => {
  return {
    type: tasksTypes.ADD_NEW_TASK_FAILUER,
    payload: errorMessage
  };
};

export const getTasksByProject = (projectID, tasks) => {
  return {
    type: tasksTypes.GET_TASKS_BY_PROJECT,
    payload: {
      projectID: projectID,
      tasks: tasks
    }
  };
};

export const getTaskByID = (task) => {
  return {
    type: tasksTypes.GET_TASK_BY_ID,
    payload: task
  };
};

export const deletTask = (task) => {
  return {
    type: tasksTypes.DELET_TASK,
    payload: task
  };
};

export const deletTaskError = () => {
  return {
    type: tasksTypes.DELET_TASK_ERROR,
    payload: ""
  };
};
