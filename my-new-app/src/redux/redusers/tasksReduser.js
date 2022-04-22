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
    
  case "@TasksTypes.js/GET_TASKS":
      return {
        ...state,
        tasks: action.payload
      };
    default:
      return state;
  }
}
