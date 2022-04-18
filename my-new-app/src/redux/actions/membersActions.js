import membersTypes from "../actionsTypes/membersTypes";

export const askForMembers = () => {
  return {
    type: membersTypes.ASK_FOR_MEMBERS
  };
};

export const getMembers = (members) => {
  return {
    type: membersTypes.GET_MEMBERS,
    payload: members
  };
};

export const addNewMember = (member) => {
  return {
    type: membersTypes.ADD_NEW_MEMBER,
    payload: member
  };
};

export const addNewMemberFailuer = (errorMessage) => {
  return {
    type: membersTypes.ADD_NEW_MEMBER_FAILUER,
    payload: errorMessage
  };
};

export const setmemberFaluerDelet = () => {
  return {
    type: membersTypes.SET_MEMBER_FAILUER_DELET
  };
};

export const getmemberFaluerDelet = () => {
  return {
    type: membersTypes.GET_MEMBER_FAILUER_DELET
  };
};
