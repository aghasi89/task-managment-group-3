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
    case "@loginTypes/RECIVE_LOGIN_STATUS":
      return {
        ...state,
        login: action.payload
      };
    case "@loginTypes/LOGIN_FAILURE":
      return {
        ...state,
        logIsFailuerMesage: action.payload
      };
    case "@loginTypes/GET_LOGEDMEMBER":
      return {
        ...state,
        logedMember: action.payload
      };
    case "@loginTypes/DELET_LOGIN_ERROR":
      return {
        ...state,
        logIsFailuerMesage: null
      };
    default:
      return state;
  }
}
