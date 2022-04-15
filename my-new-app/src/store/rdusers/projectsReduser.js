const INIT_STATE = {
  projects: [],
  addProjectError: null
};

const projectsReduser = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "@projectsTypes/GET_PROJECTS":
      return {
        ...state,
        projects: payload
      };
    case "@projectsTypes/ADD_NEW_PROJECT_FAILUER":
      return {
        ...state,
        addProjectError: payload
      };
    case "@projectsTypes/DELET_PROJECT_ERROR":
      return {
        ...state,
        addProjectError: null
      };

    default:
      return state;
  }
};

export default projectsReduser;
