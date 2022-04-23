const initial_state = {
  logedMember: {
    name: 'X'
  },
 login:false,
 logIsFailuerMesage:null
};

export default function logReducer(state = initial_state, action) {
  switch (action.type) {
    case "@loginTypes/SET_LOGIN_STATUS":
      return {
        ...state,
        login: action.payload
      };
    case "@loginTypes/LOGIN_FAILURE":
      return {
        ...state,
        logIsFailuerMesage: action.payload
      };
    case "@loginTypes/SET_LOGEDMEMBER":
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
