const INIT_STATE = {
  tasksByProject: [],
  TaskErrorMesage: null,
  commentsByTask: null
};

const tasksReduser = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "tasksTypes/ADD_NEW_TASK-FAILUER":
      return {
        ...state,
        TaskErrorMesage: payload
      };
    case "@tasksTypes/GET_TASKS_BY_PROJECT":
      return {
        ...state,
        tasksByProject: payload
      };
    case "@tasksTypes/DELET_TASK_ERROR":
      return {
        ...state,
        TaskErrorMesage: null
      };
    case "@tasksTypes/GET_COMMENTS_BY_TASK":
      return {
        ...state,
        commentsByTask: payload
      };

    default:
      return state;
  }
};

export default tasksReduser;
