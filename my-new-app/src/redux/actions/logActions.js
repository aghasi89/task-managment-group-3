import logTypes from "../actionsTypes/logTypes";

export const login = (logedMember) => {
  return {
    type: logTypes.LOGIN,
    payload: logedMember
  };
};

export const loginFailuer = (errorMessage) => {
  return {
    type: logTypes.LOGIN_FAILURE,
    payload: errorMessage
  };
};

export const getLogerMember = () => {
  return {
    type: logTypes.GET_LOGEDMEMBER
  };
};

export const setLogedMember = (logedMember) => {
  return {
    type: logTypes.SET_LOGEDMEMBER,
    payload: logedMember
  };
};

export const getLoginStatus = () => {
  return {
    type: logTypes.GET_LOGIN_STATUS
  };
};

export const setLoginStatus = (loginStatus) => {
  return {
    type: logTypes.SET_LOGIN_STATUS,
    payload: loginStatus
  };
};

export const getLogout = () => {
  return {
    type: logTypes.GET_LOGOUT
  };
};

export const deletLoginError = () => {
  return {
    type: logTypes.DELET_LOGIN_ERROR
  };
};
