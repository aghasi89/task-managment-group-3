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

export const askForLogerMember = () => {
  return {
    type: logTypes.ASK_FOR_LOGEDMEMBER
  };
};

export const getLogedMember = (logedMember) => {
  return {
    type: logTypes.GET_LOGEDMEMBER,
    payload: logedMember
  };
};

export const getLoginStatus = () => {
  return {
    type: logTypes.GET_LOGIN_STATUS
  };
};

export const reciveLoginStatus = (loginStatus) => {
  return {
    type: logTypes.RECIVE_LOGIN_STATUS,
    payload: loginStatus
  };
};

export const setLogout = () => {
  return {
    type: logTypes.SET_LOGOUT
  };
};

export const deletLoginError = () => {
  return {
    type: logTypes.DELET_LOGIN_ERROR
  };
};
