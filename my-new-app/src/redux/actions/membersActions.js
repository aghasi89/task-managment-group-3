import membersTypes from "../actionsTypes/membersTypes";

export const getMembers = () => {
  return {
    type: membersTypes.GET_MEMBERS
  };
};

export const setMembers = (members) => {
  return {
    type: membersTypes.SET_MEMBERS,
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


export const deleteMember = (memberPassword) => {
  return {
    type: membersTypes. DELETE_MEMBER,
    payload:memberPassword
  };
};