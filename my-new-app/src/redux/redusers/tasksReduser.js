const initial_state = [

];

export default function logReducer(state = initial_state, action) {
  switch (action.type) {
  case "@TasksTypes.js/SET_TASKS":
      return action.payload;
    default:
      return state;
  }
}
