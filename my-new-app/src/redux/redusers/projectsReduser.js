const initial_state = {
  projects: [],
  currentProject: {
    name:"",
    id:""
  }
};

export default function logReducer(state = initial_state, action) {
  switch (action.type) {
    case "@projectsTypes.js/SET_PROJECTS":
      return {
        ...state,
        projects: action.payload
      };
    case "@projectsTypes.js/SET_CURRENT_PROJECT":
      return {
        ...state,
        currentProject: action.payload
      };
 
    default:
      return state;
  }
}
