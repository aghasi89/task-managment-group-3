const INIT_STATE = {
  members: [],
  addMemberError: null
};

const membersReducer = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "@membersType/GET_MEMBERS":
      return {
        ...state,
        members: payload
      };
    case "@membersTypes/ADD_MEMBER_FAILURE":
      return {
        ...state,
        addMemberError: payload
      };
    case "@membersTypes/DELET_MEMBER_ERROR":
      return {
        ...state,
        addMemberError: null
      };

    default:
      return state;
  }
};

export default membersReducer;
