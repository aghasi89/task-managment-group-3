import { logTypes } from "../types";

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

export const changeData = () => {
  return {
    type: logTypes.LOGOUT,
    payload: ""
  };
};

export const getLoginStatus = (login, logedMember) => {
  return {
    type: logTypes.GET_LOGIN_STATUS,
    payload: {
      login: login,
      logedMember: logedMember
    }
  };
};

export const deletLoginError = () => {
  return {
    type: logTypes.DELET_LOGIN_ERROR,
    payload: null
  };
};
