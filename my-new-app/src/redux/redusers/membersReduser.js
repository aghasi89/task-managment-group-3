const initial_state = {
  addmemberError:null,
  members: [{
    name:"",
    password:"",
    email:"",
  }],
};

export default function logReducer(state = initial_state, action) {
  switch (action.type) {
   
    case "@lmembersType.js/SET_MEMBERS":
      return {
        ...state,
        members: action.payload
      };
    case "@lmembersType.js/ADD_NEW_MEMBER_FAILUER":
      return {
        ...state,
        addNewMemberError: action.payload
      };
    case "@lmembersType.js/SET_MEMBER_FAILUER_DELET":
      return {
        ...state,
        addNewMemberError: null
      };
    default:
      return state;
  }
}