const initial_state = {
  logedMember: {
    name: 'X'
  },
  tasks:[],
  members: [{
    name:"",
    password:"",
    email:"",
  }],
  projects: [],
  currentProject: {
    name:"",
    id:""
  }
};

export default function logReducer(state = initial_state, action) {
  console.log("reduser", action);
  switch (action.type) {
   
    case "@projectsTypes.js/GET_PROJECTS":
      return {
        ...state,
        projects: action.payload
      };
    case "@projectsTypes.js/GET_CURRENT_PROJECT":
      return {
        ...state,
        currentProject: action.payload
      };
 
    default:
      return state;
  }
}
