export const membersSelector = (state) => {
  return state.membersReduser.members
};

export const addmemberErrorSelector = (state) => {
  return state.membersReduser.addNewMemberError
};