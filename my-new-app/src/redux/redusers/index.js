const initial_state = {
  logedMember: {
    name: null
  },
  members: [],
  projects: []
};

export default function reduser(state = initial_state, action) {
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
        logSinFailuerMesage: action.payload
      };
    case "@loginTypes/GET_LOGEDMEMBER":
      return {
        ...state,
        logedMember: action.payload
      };
    case "@loginTypes/DELET_LOGIN_ERROR":
      return {
        ...state,
        logSinFailuerMesage: null
      };
    case "@lmembersType.js/GET_MEMBERS":
      return {
        ...state,
        members: action.payload
      };
    case "@lmembersType.js/ADD_NEW_MEMBER_FAILUER":
      return {
        ...state,
        addNewMemberError: action.payload
      };
    case "@lmembersType.js/GET_MEMBER_FAILUER_DELET":
      return {
        ...state,
        addNewMemberError: null
      };
    case "@projectsTypes.js/GET_PROJECTS":
      return {
        ...state,
        projects: action.payload
      };
    default:
      return state;
  }
}
