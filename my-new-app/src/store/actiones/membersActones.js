import { membersTypes } from "../types";

export const addNewMember = (newMember) => {
  return {
    type: membersTypes.ADD_NEW_MEMBER,
    payload: newMember
  };
};

export const addMemberFailuer = (errorMessage) => {
  return {
    type: membersTypes.ADD_MEMBER_FAILURE,
    payload: errorMessage
  };
};

export const getMembers = (members) => {
  return {
    type: membersTypes.GET_MEMBERS,
    payload: members
  };
};

export const deletMember = (member) => {
  return {
    type: membersTypes.DELET_MEMBER,
    payload: member
  };
};

export const deletMemberError = (member) => {
  return {
    type: membersTypes.DELET_MEMBER_ERROR,
    payload: ""
  };
};
