const INIT_STATE = {
  login: false,
  logedMembr: null,
  loginErrorMesage: null
};

const logReducer = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "@loginTypes/GET-LOGIN-STATUS":
      if (payload.login === true) {
        return {
          ...state,
          login: payload.login,
          logedMember: payload.logedMember
        };
      }
      return {
        ...state,
        login: false
      };
    case "@loginTypes/LOGIN_FAILURE":
      return {
        ...state,
        login: false,
        loginError: payload
      };
    case "@loginTypes/DELET_LOGIN_ERROR":
      return {
        ...state,
        loginError: null
      };
    default:
      return state;
  }
};

export default logReducer;
